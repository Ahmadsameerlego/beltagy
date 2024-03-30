<template>
  <!-- header  -->
  <siteHeaderVue />
  <homeIntroVue data-aos="fade-up" data-aos-duration="2000" />

  <topStudentComponent data-aos="fade-up" data-aos-duration="2000" />

  <bestCoursesVue data-aos="fade-right" data-aos-duration="2000" />
  <aboutOwnerVue data-aos="fade-left" data-aos-duration="2000" />
  <!-- about  -->
  <homeAboutVue data-aos="fade-right" data-aos-duration="2000" />
  <!-- vision -->
  <homeVisionVue data-aos="fade-left" data-aos-duration="2000" />

  <!-- download app   -->
  <downloadAppVue data-aos="fade-right" data-aos-duration="2000" />
  <!-- partners  -->
  <!-- <homePartenersVue /> -->

  <!-- footer  -->
  <siteFooterVue data-aos="fade-left" data-aos-duration="2000" />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import homeIntroVue from "@/components/home/homeIntro.vue";
import homeAboutVue from "@/components/home/homeAbout.vue";
import homeVisionVue from "@/components/home/homeVision.vue";
import downloadAppVue from "@/components/home/downloadApp.vue";
// import homePartenersVue from "@/components/home/homeParteners.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import topStudentComponent from "@/components/lectures/topStudentComponent.vue";

import AOS from "aos";
import bestCoursesVue from "@/components/home/bestCourses.vue";
import aboutOwnerVue from "@/components/home/aboutOwner.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    homeIntroVue,
    homeAboutVue,
    homeVisionVue,
    downloadAppVue,
    // homePartenersVue,
    siteFooterVue,
    bestCoursesVue,
    aboutOwnerVue,
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
