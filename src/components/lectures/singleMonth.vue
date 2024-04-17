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
        <span class="" style="color:#a79483"> الشهر </span>
      </h4>

      <div class="row">
        <div class="col-md-8">
             <div class="card">
        <Accordion>
          <AccordionTab>
            <template #header>
              <div
                class="d-flex align-item-center justify-content-between w-100"
              >
                <div class="d-flex align-items-center">
                  <div class="lesson-image">
                    <img :src="require('@/assets/imgs/logo.jpeg')" alt="" />
                  </div>
                  <span class="mx-3"> عنوان الحصة </span>
                </div>
                <div class="d-flex flex-column">
                  <span class="lesson-price mx-4 mb-2"> 100 جنية </span>
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
                        :days="3"
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
        <div class="col-md-4">
            <!-- price  -->
            <div
              class="course-price d-flex flex-column justify-content-center align-items-center"
            >
              <div class="image">
                <img
                  :src="require('@/assets/imgs/logo.jpeg')"
                  style="mix-blend-mode: darken"
                  alt=""
                />
              </div>

              <div class="single-summary d-flex mx-2 mt-4 mb-4">
                <div class="summary-num">
                  160
                  <i class="fa-solid fa-money-bill mx-2"></i>
                </div>
                <div class="summary-text" style="background-color: #eab308">
                  جنيها
                </div>
              </div>

              <div class="w-100">
                <button class="w-100 main_btn pt-2 pb-2">اشترك الان</button>
              </div>

              <!-- total  -->
              <div class="mt-3 w-100">
                <div class="flex_between mb-3 border-bottom pb-2">
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-clock mainColor"></i>
                    <span class="mx-2 mainColor fw-6 fs-14">المحتوى</span>
                  </div>

                  <div>
                    <span class="mainColor fw-6 fs-14">+ 70 ساعة</span>
                  </div>
                </div>
                <div class="flex_between mb-3 pb-2">
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-circle-question mainColor"></i>
                    <span class="mx-2 mainColor fw-6 fs-14"
                      >اجمالي الاسئلة</span
                    >
                  </div>

                  <div>
                    <span class="mainColor fw-6 fs-14">+ 70 سؤال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>


      <section class="month-course position-relative d-flex">
        <div class="row">
          <div class="col-md-12">
            <div>
              <!-- month details  -->
              <div class="month-details mb-3">
                <div class="summary d-flex flex-wrap">
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-video mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #f43f5e">
                      فيديوهات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-file mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #22d3ee">
                      امتحانات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-paste mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #f43f5e">
                      واجبات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-dice-five mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #3b82f6">
                      ملفات
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="mt-5 mb-5">
                <h4 class="mainColor fw-bold">فبراير 2024</h4>
              </div> -->

              <!-- <div class="d-flex">
                <div class="d-flex align-items-center">
                  <p class="course-date mx-2">الاثنين , 12 فبراير 2024</p>
                </div>
                <div class="d-flex align-items-center mx-4">
                  <p>اخر تحديث للكورس :</p>
                  <p class="course-date course-date2 mx-2">
                    الاثنين , 12 فبراير 2024
                  </p>
                </div>
              </div> -->
            </div>
          </div>
          
        </div>
      </section>
   
    </div>
  </div>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import quiz from "@/components/quiz/quizComponent.vue";
import countDownTimerVue from "./countDownTimer.vue";
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

  mounted() {},

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
