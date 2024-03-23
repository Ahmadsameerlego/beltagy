<template>
  <!-- header  -->
  <siteHeaderVue />
  <contact data-aos="fade-up" data-aos-duration="2000" />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import contact from "@/components/general/contacrComponent.vue"
export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
    // homePartenersVue,
    siteFooterVue,
    contact,
  },
  mounted() {
    AOS.init();
  },
};
</script>
