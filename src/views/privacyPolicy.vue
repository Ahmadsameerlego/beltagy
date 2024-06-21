<template>
  <!-- header  -->
  <siteHeaderVue />
  <terms data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import terms from "@/components/general/privacyComponent.vue";
export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
    siteFooterVue,
    terms,
  },
  mounted() {
    AOS.init();
  },
};
</script>
