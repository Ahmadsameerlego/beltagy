<template>
  <!-- header  -->
  <siteHeaderVue />
  <register data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import register from "@/components/auth/registerView.vue";
import AOS from "aos";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    register,
    // homePartenersVue,
    siteFooterVue,
  },
  mounted() {
    AOS.init();
  },
};
</script>
