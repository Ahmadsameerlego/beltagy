<template>
  <!-- header  -->
  <siteHeaderVue />
  <allOrdersComponentVue />
  <!-- footer  -->
  <siteFooterVue />
</template>

<script>
import siteHeaderVue from "@/components/layout/siteHeader.vue";
import siteFooterVue from "@/components/layout/siteFooter.vue";
import AOS from "aos";
import allOrdersComponentVue from '@/components/orders/allOrdersComponent.vue';

export default {
  name: "HomeView",
  components: {
    siteHeaderVue,
      siteFooterVue,
    allOrdersComponentVue
  },
  mounted() {
    AOS.init();
  },
};
</script>
