<template>
  <!-- header  -->
  <siteHeaderVue />
    <quiz />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import quiz from "@/components/quiz/quizComponent.vue";
import AOS from "aos";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
      siteFooterVue,
    quiz
  },
  mounted() {
    AOS.init();
  },
};
</script>
