<template>
  <!-- header  -->
  <siteHeaderVue />
  <notificationComp />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import notificationComp from "@/components/auth/notificationComp.vue";

import AOS from "aos";
// import aboutOwnerVue from "@/components/home/aboutOwner.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
      siteFooterVue,
    notificationComp
  },
  mounted() {
    AOS.init();
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  },
};
</script>
