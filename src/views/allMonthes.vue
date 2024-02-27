<template>
  <!-- header  -->
  <siteHeaderVue />
  <allmonthesComponentVue data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import allmonthesComponentVue from "@/components/lectures/allmonthesComponent.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
    siteFooterVue,
    allmonthesComponentVue,
  },
  mounted() {
    AOS.init();
  },
};
</script>
