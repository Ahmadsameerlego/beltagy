<template>
  <div class="container mt-5 mb-4">
    <h4 class="mainColor text-center fw-bold">الاوائل</h4>
    <p class="text-center mb-5 fw-bold">دائما ما نفتخر بالطلاب المتفوقين</p>

    <swiper
      :slides-per-view="4"
      :space-between="50"
      :modules="modules"
      :navigation="true"
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
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style lang="scss">
.single-top {
  .image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .name {
    color: #000;
    font-size: 18px;
    margin-top: 12px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
