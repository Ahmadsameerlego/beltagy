<template>
  <!-- header  -->
  <siteHeaderVue />
<loginComponent  data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import loginComponent from "@/components/auth/loginComponent.vue"
import AOS from "aos";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
      siteFooterVue,
    loginComponent
  },
  mounted() {
    AOS.init();
    
  },
};
</script>
