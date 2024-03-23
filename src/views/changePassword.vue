<template>
  <!-- header  -->
  <siteHeaderVue />
  <changePassword />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import changePassword from "@/components/auth/changePassword.vue";
import AOS from "aos";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
      changePassword ,
    siteFooterVue,
  },
  mounted() {
    AOS.init();
  },
};
</script>
