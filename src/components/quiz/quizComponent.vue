<!-- Quiz.vue -->
<template>
  <div class="">
    <div v-if="!quizCompleted">
      <h3 class="mainColor text-center">{{ quiz.title }}</h3>
      <div
        v-for="(question, index) in quiz.questions"
        :key="index"
        class="question border-bottom"
      >
        <p>{{ question.text }}</p>
        <div class="options flex_between">
          <label v-for="(option, oIndex) in question.options" :key="oIndex">
            <input
              type="radio"
              :value="option"
              :name="'question_' + index"
              v-model="selectedOptions[index]"
            />
            {{ option }}
          </label>
        </div>
      </div>
      <div class="flex_center">
        <button @click="submitQuiz" class="main_btn">ارسال</button>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center mainColor">Quiz Completed!</h3>
      <p>Your score: {{ score }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quiz: {
        title: "Simple Quiz",
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
  methods: {
    submitQuiz() {
      this.quizCompleted = true;
    },
  },
};
</script>

<style scoped>
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
</style>
