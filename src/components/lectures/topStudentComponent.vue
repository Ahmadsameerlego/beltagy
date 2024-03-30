<template>
  <div class="container mt-5 mb-4">
    
    <h4 class="mainColor text-center fw-bold">الطلاب الاوئل</h4>
    <p class="text-center mb-5 fw-bold">دائما ما نفتخر بالطلاب المتفوقين</p>

    <swiper
      :slides-per-view="4"
      :space-between="50"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :loop="true"
    >
      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
        </div> </swiper-slide
      ><swiper-slide>
        <div class="single-top">
          <div class="image">
            <img :src="require('@/assets/imgs/person.jpeg')" alt="" />
          </div>
          <div class="name">Ahmed Sameer</div>
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
import { Autoplay } from "swiper/modules";

export default {
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
    background-color: #ccccccab;
    position: relative;
    z-index: 999;
    padding: 0 10px;
  }
}
</style>
