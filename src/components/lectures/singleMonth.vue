<template>
  <div class="all-lectures mt-5 mb-5">
    <!-- <h6 class="fw-bold text-center mb-4 mainColor">محاضرات شهر مارس</h6> -->
    <div class="container">
      
      <div v-if="!isVidoShow" class="mb-5">
        <div class="video-conatiner w-100">
          <video controls height="300" class="w-100">
            <source
              :src="require('@/assets/imgs/video.mp4')"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <h4 class="fw-bold text-center mb-3">
        محتوى
        <span class="" style="color:#a79483"> الكورس </span>
      </h4>

      <div class="row">
        <div class="col-md-12">
             <div class="card mb-3" v-for="(session, index) in sessions" :key="index">
        <Accordion>
          <AccordionTab>
            <template #header>
              <div
                class="d-flex align-item-center justify-content-between w-100 singleMonthCard"
              >
                <div class="d-flex align-items-center">
                  <div class="lesson-image">
                    <img :src="session.image" alt="" />
                  </div>
                 <div class="mx-3">
                   <div>
                    <span class="mx-3"> {{  session.name  }} </span>
                  </div>
                  <p>
                    {{  session.description  }}
                  </p>
                 </div>
                </div>
                <div class="d-flex flex-column">
                  <span class="lesson-price mx-4 mb-2"> {{  session.price  }} جنية </span>
                  <button class="main_btn lesson_btn">اشترك الان</button>
                </div>
              </div>
            </template>
            <div class="card">
              <Accordion>
                <!-- شيت  -->
                <AccordionTab>
                  <template #header>
                    <span class="d-flex align-items-center gap-2 w-full">
                      <span class="lesson-name"> شيت على اللي فات </span>
                      <span class="lesson-finished mx-3">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                    </span>
                  </template>

                  <div class="go-quiz">
                    <router-link to="/quiz/1"> الذهاب لصفحة الشيت </router-link>
                  </div>
                </AccordionTab>
                <!-- فيديو  -->
                <AccordionTab>
                  <template #header>
                    <div class="d-flex">
                      <div class="d-flex align-items-center gap-2 w-full">
                        <span class="lesson-name">محتوى الحصة </span>
                        <span class="lesson-opened mx-3">
                          <i class="fa-solid fa-lock-open"></i>
                        </span>
                      </div>
                      <countDownTimerVue
                        :days="session.num_available_days"
                        :hours="5"
                        :minutes="30"
                        :seconds="10"
                      />
                    </div>
                  </template>
                  <div class="go-quiz">
                    <button class="main_btn" @click="showVideo">
                      مشاهدة الحصة
                    </button>
                  </div>
                </AccordionTab>
                <!-- quiz  -->
                <AccordionTab>
                  <template #header>
                    <div class="d-flex">
                      <div
                        class="d-flex align-items-center gap-2 w-full closed-tab"
                      >
                        <span class="lesson-name">كويز </span>
                        <span class="lesson-closed mx-3">
                          <i class="fa-solid fa-circle-xmark"></i>
                        </span>
                      </div>

                      <div
                        style="margin-right: 50px"
                        class="d-flex align-items-center"
                      >
                        <div>
                          <span class="whiteColor">
                            الحصة بتاعتك اتوقفت عشان انت راكمت
                          </span>
                        </div>
                        <div class="mx-3">
                          <button class="btn call-us">
                            كلمنا ع الدعم
                            <i class="fa-solid fa-phone"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </template>

                  <div class="go-quiz">
                    <router-link to="/quiz/1">
                      الذهاب لصفحة الكويز
                    </router-link>
                  </div>
                </AccordionTab>
                <!-- فدييو  -->
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex align-items-center gap-2 w-full">
                      <span class="lesson-name">كويز </span>
                      <span class="lesson-notOpen mx-3">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>
                  <div class="go-quiz">
                    <button class="main_btn" @click="showVideo">
                      مشاهدة الحصة
                    </button>
                  </div>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex align-items-center gap-2 w-full">
                      <span class="lesson-name">الواجب </span>
                      <span class="lesson-notOpen mx-3">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>
                  <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus.
                  </p>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex align-items-center gap-2 w-full">
                      <span class="lesson-name">امتحان على اخر الباب </span>
                      <span class="lesson-notOpen mx-3">
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>

                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
        </div>
       
      </div>


      
   
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import quiz from "@/components/quiz/quizComponent.vue";
import countDownTimerVue from "./countDownTimer.vue";
import axios from "axios";
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
      sessions : []
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
  },

  mounted() {
    this.getCourses();
    this.getSessions();
  },

  methods: {
    submitQuiz() {
      this.quizCompleted = true;
    },
    showVideo() {
      this.isVidoShow = false;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    async getCourses() { 
      await axios.get(`session-details/${this.$route.params.id}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.course = res.data.data;
          }
      } )
    },
    async getSessions() {
      await axios.get(`sessions`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.sessions = res.data.data.data;
          }
      } )
    }
  },
  components: {
    Accordion,
    AccordionTab,
    quiz,
    countDownTimerVue,
  },
};
</script>

<style lang="scss">
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
