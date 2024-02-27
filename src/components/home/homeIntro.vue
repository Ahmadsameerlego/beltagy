<template>
  <section id="homeIntro" class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7 mb-3">
          <div class="row">
            <div class="col-md-6" v-for="item in top" :key="item">
              <h6 class="fw-bold mb-3">{{ item.title }}</h6>
              <p class="fw-6">
                {{ item.content }}
              </p>
            </div>

            <div class="intro_btns mt-4 d-flex align-items-center">
              <router-link to="/allMonthes" class="main_btn d-flex">
                <img :src="require('@/assets/imgs/search.png')" alt="" />
                <span> ابحث عن محاضرة </span>
              </router-link>

              <!-- <router-link
                v-if="!isAuth"
                to="/exploreJobs"
                class="bordered_btn"
              >
                {{ $t("home.explore") }}
              </router-link> -->
            </div>
          </div>
        </div>
        <div class="col-md-5 mb-3">
          <div class="job_image">
            <img
              class="w-100 h-100 lazy"
              :src="require('@/assets/imgs/cover1-removebg-preview.png')"
              alt="job canvas"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isAuth: false,
      top: [
        {
          title: "استكشف عالم الصخور والتكوينات الجيولوجية",
          content: "رحلة مثيرة في تاريخ الأرض وتشكيلاتها الطبيعية",
        },
        {
          title: "تحليل الزلازل وتشكيل الجبال: رحلة علمية",
          content: "استكشاف طرق رصد الزلازل وتقييم المخاطر الجيولوجية",
        },
        {
          title: "رحلة في علم الجيولوجيا: تفسيرات الصخور والتضاريس",
          content: "استكشاف عمق تاريخ الأرض من خلال الصخور والطبقات",
        },
      ],
    };
  },
  //   computed: {
  //     ...mapGetters("setting", ["top", "settings", "site_intro_img"]),
  //   },
  //   methods: {
  //     ...mapActions("setting", ["getTopSection", "getSettings"]),
  //   },
  //   mounted() {
  //     this.getTopSection();
  //     this.getSettings();
  //     // window.addEventListener('click', this.closeNavbarOnClickOutside);
  //     if (localStorage.getItem("token")) {
  //       this.isAuth = true;
  //     }
  //   },
};
</script>

<style lang="scss">
#homeIntro {
  p {
    font-size: 15px;
  }
  .intro_btns {
    a {
      border-radius: 20px;
      padding-top: 9px;
      padding-bottom: 9px;
      margin: 0 12px;
      font-size: 14px;
      font-weight: 600;
      img {
        width: 16px;
        height: 16px;
        margin: 0 6px;
      }
    }
  }
  .job_image {
    height: 360px;
    img {
      object-fit: contain;
    }
  }
}

.bordered_btn {
  position: relative;
  transition: 0.3s all;
  // &::before{
  //     content: '';
  //     position: absolute;
  //     width: 0%;
  //     height: 100%;
  //     top: 0;
  //     right: 0;
  //     background-color: #6D98DB;
  //     transition: .3s all;
  //     z-index: -1;
  //     border-radius: 20px;
  // }
  // &:hover{
  //     color:#fff;
  //     z-index:1 ;
  //     &::before{
  //         width: 100%;
  //     }
  // }
}
.main_btn {
  position: relative;
  transition: 0.3s all;
  // &::before{
  //     content: '';
  //     border-radius: 20px !important;
  //     position: absolute;
  //     width: 100%;
  //     height: 0%;
  //     bottom: 0;
  //     right: 0;
  //     background-color: #fff;
  //     transition: .3s all;
  //     z-index: -1;
  // }
  // &:hover{
  //     color:#293255;
  //     z-index:1 ;
  //     &::before{
  //         height: 100%;
  //         border: 1px solid #293255;
  //     }
  // }
}
</style>
