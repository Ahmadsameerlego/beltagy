<template>
  <div class="container mt-5 mb-5">
    <div v-if="!quizCompleted">
      <h3 class="mainColor text-center mb-4 fw-bold">{{ quiz.title }}</h3>

      <div class="navigation flex_center">
        <button
          v-for="(question, index) in quiz.questions"
          :key="index"
          @click="goToQuestion(index)"
          :class="{ active: currentQuestionIndex === index }"
          class="main_btn ques-paginate"
        >
          {{ index + 1 }}
        </button>
      </div>

      <div class="question">
        <div class="question-number fw-6">
          السؤال رقم {{ currentQuestionIndex + 1 }}
        </div>
        <p class="question-text">
          {{ currentQuestion.text }}
        </p>

        <div class="options flex_between">
          <label
            v-for="(option, oIndex) in currentQuestion.options"
            :key="oIndex"
            class="option-container d-flex flex-column justify-content-center align-items-center"
          >
            <input
              type="radio"
              :value="option"
              :name="'question_' + currentQuestionIndex"
              v-model="selectedOption"
              :disabled="submitted"
              class="option-input"
            />

            <div>
              <img
                :src="currentQuestion.images[oIndex]"
                alt="option image"
                v-if="currentQuestion.images && currentQuestion.images[oIndex]"
                class="option-image"
              />
            </div>
            <div class="fw-6 fs-18">
              {{ option }}
            </div>

            <span
              v-if="
                submitted &&
                isCorrect &&
                selectedOption === currentQuestion.answer &&
                selectedOption === option
              "
              class="correct-label"
            >
              <span class="mx-1"> اجابة صحيحة </span>
              <i class="fa-solid fa-square-check"></i>
            </span>
            <span
              v-if="submitted && !isCorrect && selectedOption === option"
              class="wrong-label"
            >
              <span class="mx-1"> اجابة خاطئة </span>
              <i class="fa-solid fa-square-xmark"></i>
            </span>
          </label>
        </div>
      </div>
      <div class="flex_center" v-if="!submitted">
        <button @click="submitAnswer" class="main_btn">ارسال</button>
      </div>
      <div class="navigation flex_between">
        <button
          @click="previousQuestion"
          :disabled="currentQuestionIndex === 0"
          class="main_btn"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
        <button
          @click="nextQuestion"
          :disabled="currentQuestionIndex === quiz.questions.length - 1"
          class="main_btn"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>

      <div class="flex_center" v-if="allQuestionsAnswered && !quizCompleted">
        <button @click="submitQuiz" class="main_btn">ارسال الكويز</button>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center mainColor">اكتمل الكويز</h3>
      <p class="final-score fw-6 text-center">درجتك النهائية: {{ score }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz: {
        title: "تدريبات",
        questions: [
          {
            text: "ماهو مجموع 2 + 2 ؟",
            options: ["3", "4", "5", "6"],
            answer: "4",
            images: [
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
            ], // Add image URLs for each option
          },
          {
            text: "ما هي عاصمة فرنسا ؟",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: "Paris",
            images: [
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
            ], // Add image URLs for each option
          },
          {
            text: "الكوكب الذي يُعرف بالكوكب الأحمر هو؟",
            options: ["Mars", "Venus", "Jupiter", "Mercury"],
            answer: "Mars",
            images: [
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
              require("@/assets/imgs/geo2.jpg"),
            ], // Add image URLs for each option
          },
        ],
      },
      selectedOption: null,
      selectedOptions: [], // Add selectedOptions array
      currentQuestionIndex: 0,
      submitted: false,
      isCorrect: false,
      quizCompleted: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.quiz.questions[this.currentQuestionIndex];
    },
    score() {
      let correct = 0;
      for (let i = 0; i < this.quiz.questions.length; i++) {
        if (this.selectedOptions[i] === this.quiz.questions[i].answer) {
          correct++;
        }
      }
      return correct;
    },
    allQuestionsAnswered() {
      return this.selectedOptions.length === this.quiz.questions.length;
    },
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex < this.quiz.questions.length - 1) {
        this.currentQuestionIndex++;
        this.resetSubmission();
      }
    },
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.resetSubmission();
      }
    },
    goToQuestion(index) {
      this.currentQuestionIndex = index;
      this.resetSubmission();
    },
    submitAnswer() {
      this.submitted = true;
      this.selectedOptions[this.currentQuestionIndex] = this.selectedOption; // Save selected option for current question
      this.isCorrect = this.selectedOption === this.currentQuestion.answer;
    },
    resetSubmission() {
      this.submitted = false;
      this.isCorrect = false;
      this.selectedOption =
        this.selectedOptions[this.currentQuestionIndex] || null; // Restore selected option for current question if available
    },
    submitQuiz() {
      // Perform final submission actions here
      this.quizCompleted = true;
    },
  },
};
</script>

<style scoped lang="scss">
.correct-label {
  color: #fff !important;
  width: 100%;
  background: #009c35;
  border-radius: 3px;
  padding: 4px 7px;
  margin-top: 7px;
  position: absolute;
  bottom: -35px;
  text-align: center;
}
.final-score {
  background: #15364d;
  color: #fff;
  padding: 9px 26px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 4px;
}
.ques-paginate {
  border-radius: 50% !important;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background-color: #afdceb !important;
  }
}
.question-number {
  background-color: #15364d;
  border-radius: 5px;
  padding: 4px 7px;
  color: #fff;
  width: fit-content;
}
.question-text {
  font-weight: bold;
  font-size: 20px;
  color: #15364d;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background-color: #15364d;
  }
}
.option-container {
  position: relative;
  background: #3b5c73;
  color: #fff;
  width: 200px;
  height: 175px;
  border-radius: 10px;
  cursor: pointer;
  .option-input {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    opacity: 0;
    cursor: pointer;
  }
  .option-image {
    width: 120px;
    height: 120px;
    border-radius: 9px;
  }
}
.option-container:has(.option-input:checked) {
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #cccccc60;
  }
}
.quiz-container {
  max-width: 600px;
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

.navigation button {
  margin: 0 5px;
  margin-top: 20px;
}

.navigation button.active {
  font-weight: bold;
}

.correct-label {
  color: green;
}

.wrong-label {
  color: #fff;
  width: 100%;
  background: red;
  margin-top: 6px;
  border-radius: 3px;
  padding: 4px 7px;
  position: absolute;
  bottom: -35px;
  text-align: center;
}
</style>
