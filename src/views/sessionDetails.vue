<template>
  <!-- header  -->
  <siteHeaderVue />
  <singleMonth data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import singleMonth from "@/components/lectures/sessionDetail.vue";

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
    siteFooterVue,
    singleMonth,
  },
  mounted() {
    AOS.init();
  },
};
</script>
