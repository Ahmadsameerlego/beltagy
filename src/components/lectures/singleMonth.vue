<template>
  <div class="all-lectures mt-5 mb-5">
    <!-- <h6 class="fw-bold text-center mb-4 mainColor">محاضرات شهر مارس</h6> -->
    <div class="container">
      <section class="month-course position-relative d-flex">
        <div class="row">
          <div class="col-md-8">
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

              <div class="mt-5 mb-5">
                <h4 class="mainColor fw-bold">فبراير 2024</h4>
              </div>

              <div class="d-flex">
                <div class="d-flex align-items-center">
                  <p>تاريخ انشاء الكورس :</p>
                  <p class="course-date mx-2">الاثنين , 12 فبراير 2024</p>
                </div>
                <div class="d-flex align-items-center mx-4">
                  <p>اخر تحديث للكورس :</p>
                  <p class="course-date course-date2 mx-2">
                    الاثنين , 12 فبراير 2024
                  </p>
                </div>
              </div>
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
      </section>

      <h4 class="fw-bold text-center mb-3">
        محتوى
        <span class="mainColor"> الشهر </span>
      </h4>

      <div class="card">
        <Accordion :activeIndex="0">
          <AccordionTab header="عنوان الحصة1">
            <div class="card">
              <Accordion :activeIndex="0">
                <AccordionTab>
                  <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                      <span> شيت </span>
                    </span>
                  </template>

                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
                <AccordionTab header="فيديو">
                  <div class="video-conatiner w-100">
                    <video controls height="300" class="w-100">
                      <source
                        :src="require('@/assets/imgs/video.mp4')"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </AccordionTab>
                <!-- quiz  -->
                <AccordionTab header="كويز">
                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
                <AccordionTab header="فيديو">
                  <div class="video-conatiner w-100">
                    <video controls height="300" class="w-100">
                      <source
                        :src="require('@/assets/imgs/video.mp4')"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> الواجب </span>
                      <span>
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
                <AccordionTab header="امتحان على اخر باب">
                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
              </Accordion>
            </div>
          </AccordionTab>
        </Accordion>

        <Accordion :disabled="true">
          <AccordionTab header="عنوان الحصة 2">
            <div class="card">
              <Accordion>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> شيت </span>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>

                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> فيديو </span>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>
                  <div class="video-conatiner w-100">
                    <video controls height="300" class="w-100">
                      <source
                        :src="require('@/assets/imgs/video.mp4')"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </AccordionTab>
                <!-- quiz  -->
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> كويز </span>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>
                  <div class="quiz-container">
                    <quiz />
                  </div>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> فيديو </span>
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>
                    </div>
                  </template>
                  <div class="video-conatiner w-100">
                    <video controls height="300" class="w-100">
                      <source
                        :src="require('@/assets/imgs/video.mp4')"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </AccordionTab>
                <AccordionTab :disabled="true">
                  <template #header>
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> الواجب </span>
                      <span>
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
                    <div class="d-flex flex-row-reverse">
                      <span class="mx-3"> امتحان على اخر الباب </span>
                      <span>
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
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import quiz from "@/components/quiz/quizComponent.vue";
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
  },
  components: {
    Accordion,
    AccordionTab,
    quiz,
  },
};
</script>

<style>
.p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
<style lang="scss" scoped>
.month-course {
  height: 80vh;
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
    background-color: #293255;
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
