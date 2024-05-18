<template>
  <div class="container mt-5 mb-4">
    <h4 class="mainColor text-center fw-bold">الطلاب الأوائل</h4>
    <p class="text-center mb-5 fw-bold">دائمًا ما نفتخر بالطلاب المتفوقين</p>

    <swiper
      :slides-per-view="4"
      :space-between="50"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :loop="true"
      :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      }"
    >
      <swiper-slide v-for="student in students" :key="student.id">
        <div class="single-top">
          <div class="image">
            <img :src="student.image" alt="" />
          </div>
          <div class="name"> {{ student.name }} </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import axios from 'axios';
import { Autoplay } from "swiper/modules";

export default {
  data() {
    return {
      students: []
    };
  },
  methods: {
    async getStudents() { 
      try {
        const res = await axios.get('top-students');
        this.students = res.data.data;
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    }
  },
  mounted() {
    this.getStudents();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>

<style lang="scss">
.single-top {
  .image {
    width: 100%;
    height: 200px;
    margin: auto;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .name {
    color: #fff;
    font-size: 18px;
    margin-top: 12px;
    text-align: center;
    font-weight: 500;
    margin-top: -40px;
    background-color: #181515ab;
    position: relative;
    z-index: 999;
    padding: 0 10px;
  }
}
</style>
