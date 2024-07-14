<template>
  <!-- header  -->
  <siteHeaderVue />
  <homeIntroVue  />


  <bestCoursesVue />
    <topStudentComponent  />

  <!-- <aboutOwnerVue /> -->
  <!-- about  -->
  <!-- <homeAboutVue /> -->
  <!-- vision -->
  <!-- <homeVisionVue /> -->

  <!-- download app   -->
  <downloadAppVue />
  <!-- partners  -->
  <!-- <homePartenersVue /> -->

  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import homeIntroVue from "@/components/home/homeIntro.vue";
// import homeAboutVue from "@/components/home/homeAbout.vue";
// import homeVisionVue from "@/components/home/homeVision.vue";
import downloadAppVue from "@/components/home/downloadApp.vue";
// import homePartenersVue from "@/components/home/homeParteners.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import topStudentComponent from "@/components/lectures/topStudentComponent.vue";

import AOS from "aos";
import bestCoursesVue from "@/components/home/bestCourses.vue";
// import aboutOwnerVue from "@/components/home/aboutOwner.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    homeIntroVue,
    // homeAboutVue,
    // homeVisionVue,
    downloadAppVue,
    // homePartenersVue,
    siteFooterVue,
    bestCoursesVue,
    // aboutOwnerVue,
    topStudentComponent,
  },
  mounted() {
    AOS.init();
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  },
};
</script>
