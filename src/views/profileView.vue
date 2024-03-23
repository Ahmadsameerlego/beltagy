<template>
  <!-- header  -->
  <siteHeaderVue />
    <profilComponent />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import profilComponent from "../components/auth/profilComponent.vue";
import AOS from "aos";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
      profilComponent ,
    siteFooterVue,
  },
  mounted() {
    AOS.init();
  },
};
</script>
