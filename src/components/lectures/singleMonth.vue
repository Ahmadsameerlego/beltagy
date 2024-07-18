<template>
  <div class="all-lectures mt-5 mb-5">
    <!-- <h6 class="fw-bold text-center mb-4 mainColor">محاضرات شهر مارس</h6> -->
    <div class="container">
      <div v-if="!isVidoShow" class="mb-5">
        <div class="video-conatiner w-100">
          <iframe
            :src="embeddedVideoSrc"
            height="300"
            class="w-100"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>

      <h4 class="fw-bold text-center mb-3">
        محتوى
        <span class="" style="color: #a79483"> الكورس </span>
      </h4>

      <div class="row">
        <div class="col-md-12">
          <div class="card mb-3">
            <Accordion>
              <AccordionTab v-for="(session, index) in sessions" :key="index">
                <template #header>
                  
                    <div
                      class="d-flex align-item-center justify-content-between w-100 singleMonthCard"
                    >
                      <router-link
                    :to="'/details/'+session.id"
                    class="w-100"
                    style="color: #fff"
                  >
                      <div class="d-flex align-items-center">
                        <div class="lesson-image">
                          <img :src="session.image" alt="" />
                        </div>
                        <div class="mx-3">
                          <div>
                            <span class="mx-3"> {{ session.name }} </span>
                          </div>
                          <p>
                            {{ session.description }}
                          </p>
                        </div>
                      </div>
                      </router-link>
                      <div v-if="is_course_paid==false" class="d-flex flex-column justify-content-center align-items-center">
                        <span class="lesson-price mx-4 mb-2">
                          {{ session.price }} جنية
                        </span>
                        <button
                          class="main_btn lesson_btn"
                          style="width:200px"
                          @click.stop="payCourse(session.id)"
                        >
                          اشترك الان
                        </button>
                      </div>
                    </div>
                  <!-- </router-link> -->
                </template>
             
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog
    v-model:visible="visible"
    :style="{ width: '50rem' }"
    style="z-index: 99999"
  >
    <iframe
      :src="url"
      class="w-100"
      height="600"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </Dialog>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
// import quiz from "@/components/quiz/quizComponent.vue";
// import countDownTimerVue from "./countDownTimer.vue";
import axios from "axios";
import Dialog from "primevue/dialog";

export default {
  name: "CoursesSingleMonth",

  data() {
    return {
      // start quiz
      quiz: {
        title: "simple quiz",
        questions: [
          {
            text: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4",
          },
          {
            text: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris",
          },
          {
            text: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            answer: "Mars",
          },
        ],
      },
      selectedOptions: [],
      quizCompleted: false,
      isVidoShow: true,
      course: {},
      sessions: [],
      videoSrc: "",
      url: "",
      visible: false,
      is_course_paid : null
      // end quiz

      // start video
      // end vide
    };
  },
  computed: {
    score() {
      let correct = 0;
      for (let i = 0; i < this.quiz.questions.length; i++) {
        if (this.selectedOptions[i] === this.quiz.questions[i].answer) {
          correct++;
        }
      }
      return correct;
    },
    embeddedVideoSrc() {
      const videoId = this.videoSrc.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },

  mounted() {
    // this.getCourses();
    this.getSessions();
    setTimeout(() => {
      let course = localStorage.getItem('course') || {};
    if (course) {
      this.is_course_paid = JSON.parse(course).is_paid;
    }
    }, 1000);
  },

  methods: {
    
    submitQuiz() {
      this.quizCompleted = true;
    },
    showVideo(videoSrc) {
      this.isVidoShow = false;
      this.videoSrc = videoSrc;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    async getSessionDetails(id) {
      console.log("fffffffffffffffffff");
      await axios
        .get(`session-details/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.course = res.data.data;
          }
        });
    },
    async getSessions() {
      await axios
        .get(`sessions?course_id=${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.sessions = res.data.data.data;
          }
        });
    },
    // pay course
    async payCourse(id) {
      const fd = new FormData();
      await axios
        .post(`pay-session/${id}`, fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          if (res.data.key === "success") {
            this.visible = true;
            setTimeout(() => {
              this.url = res.data.data.url;
            }, 1000);
          }
        });
    },
  },
  components: {
    Accordion,
    AccordionTab,
    // quiz,
    // countDownTimerVue,
    Dialog,
  },
};
</script>

<style lang="scss">
.acc-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}
.go-quiz {
  display: flex;
  justify-content: center;
  align-items: center;
}
.call-us {
  background-color: #348688 !important;
  color: #fff !important ;
}
.lesson-finished {
  svg {
    color: #1298ca !important;
    font-size: 20px;
  }
}
.lesson-opened {
  svg {
    color: #67d475 !important;
    font-size: 20px;
  }
}
.lesson-closed {
  svg {
    color: #fff !important;
    font-size: 20px;
  }
}
.lesson-notOpen {
  svg {
    color: #e0b732 !important;
    font-size: 20px;
  }
}
.lesson-name {
  width: 150px !important;
  display: inline-block;
}
.lesson-image {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
.lesson_btn {
  background-color: #ffc936 !important;
}
.p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: #3b5c73 !important;
  color: #fff !important;
  border: none !important;
  &:has(.closed-tab) {
    background-color: #f00425 !important;
  }
}
.p-accordion .p-accordion-content {
  border: none;
  .card {
    border: none !important;
  }
}
.p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
<style lang="scss" scoped>
.month-course {
  position: relative;
}
.course-price {
  position: relative;
  left: 0px;
  bottom: 0;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #33333334;
  padding: 10px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  .image {
    width: 190px;
    height: 190px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.course-date {
  border-radius: 4px;
  background-color: #f43f5e;
  padding: 4px 6px;
  color: #fff;
  &.course-date2 {
    background-color: #3b82f6;
  }
}
.single-summary {
  margin-bottom: 19px;
  svg {
    color: rgb(194, 194, 65);
  }
  box-shadow: 0px 0px 10px #33333373;
  border-radius: 15px;
  .summary-num {
    border-radius: 15px;
    padding: 6px 8px;
    background-color: #a79483;
    color: #fff;
    margin-left: -30px;
    z-index: 1;
    width: 120px;
    text-align: center;
    font-weight: 600;
  }
  .summary-text {
    border-radius: 15px;
    padding: 6px 45px;
    color: #fff;
    width: 120px;
    text-align: center;
    font-weight: 600;
  }
}
.single-lecture {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 20px;
  .lect-image {
    width: 200px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}

.quiz-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.question {
  margin-bottom: 20px;
}

.options {
  margin-top: 10px;
}
</style>
