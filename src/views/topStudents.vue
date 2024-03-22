<template>
  <!-- header  -->
  <siteHeaderVue />
  <topStudentComponent data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import topStudentComponent from "@/components/lectures/topStudentComponent.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
    siteFooterVue,
    topStudentComponent,
  },
  mounted() {
    AOS.init();
  },
};
</script>
