<template>
  <div class="all-lectures mt-5 mb-5">
    <!-- <h6 class="fw-bold text-center mb-4 mainColor">محاضرات شهر مارس</h6> -->
    <div class="container">
      <section class="month-course position-relative d-flex">
        <div class="row">
          <div class="col-md-8">
            <div>
              <!-- month details  -->
              <div class="month-details mb-3">
                <div class="summary d-flex flex-wrap">
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-video mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #f43f5e">
                      فيديوهات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-file mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #22d3ee">
                      امتحانات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-paste mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #f43f5e">
                      واجبات
                    </div>
                  </div>
                  <!-- single  -->
                  <div class="single-summary d-flex mx-2">
                    <div class="summary-num">
                      +11
                      <i class="fa-solid fa-dice-five mx-2"></i>
                    </div>
                    <div class="summary-text" style="background-color: #3b82f6">
                      ملفات
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-5 mb-5">
                <h4 class="mainColor fw-bold">فبراير 2024</h4>
              </div>

              <div class="d-flex">
                <div class="d-flex align-items-center">
                  <p>تاريخ انشاء الكورس :</p>
                  <p class="course-date mx-2">الاثنين , 12 فبراير 2024</p>
                </div>
                <div class="d-flex align-items-center mx-4">
                  <p>اخر تحديث للكورس :</p>
                  <p class="course-date course-date2 mx-2">
                    الاثنين , 12 فبراير 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- price  -->
            <div
              class="course-price d-flex flex-column justify-content-center align-items-center"
            >
              <div class="image">
                <img
                  :src="require('@/assets/imgs/logo.jpeg')"
                  style="mix-blend-mode: darken"
                  alt=""
                />
              </div>

              <div class="single-summary d-flex mx-2 mt-4 mb-4">
                <div class="summary-num">
                  160
                  <i class="fa-solid fa-money-bill mx-2"></i>
                </div>
                <div class="summary-text" style="background-color: #eab308">
                  جنيها
                </div>
              </div>

              <div class="w-100">
                <button class="w-100 main_btn pt-2 pb-2">اشترك الان</button>
              </div>

              <!-- total  -->
              <div class="mt-3 w-100">
                <div class="flex_between mb-3 border-bottom pb-2">
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-clock mainColor"></i>
                    <span class="mx-2 mainColor fw-6 fs-14">المحتوى</span>
                  </div>

                  <div>
                    <span class="mainColor fw-6 fs-14">+ 70 ساعة</span>
                  </div>
                </div>
                <div class="flex_between mb-3 pb-2">
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-circle-question mainColor"></i>
                    <span class="mx-2 mainColor fw-6 fs-14"
                      >اجمالي الاسئلة</span
                    >
                  </div>

                  <div>
                    <span class="mainColor fw-6 fs-14">+ 70 سؤال</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- single lecture  -->
      <div class="single-lecture flex_between mb-3">
        <div class="d-flex align-items-center">
          <!-- lect image  -->
          <div class="lect-image">
            <img :src="require('@/assets/imgs/education.jpeg')" alt="" />
          </div>

          <div class="mx-4">
            <h6 class="fw-bold">Lecture Name</h6>
            <p>Professor name here</p>
          </div>
        </div>

        <!-- actions  -->
        <div>
          <router-link to="/">انضم الان</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesSingleMonth",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.month-course {
  height: 80vh;
  position: relative;
}
.course-price {
  position: relative;
  left: 0px;
  bottom: 0;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #33333334;
  padding: 10px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  .image {
    width: 190px;
    height: 190px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.course-date {
  border-radius: 4px;
  background-color: #f43f5e;
  padding: 4px 6px;
  color: #fff;
  &.course-date2 {
    background-color: #3b82f6;
  }
}
.single-summary {
  margin-bottom: 19px;
  svg {
    color: rgb(194, 194, 65);
  }
  box-shadow: 0px 0px 10px #33333373;
  border-radius: 15px;
  .summary-num {
    border-radius: 15px;
    padding: 6px 8px;
    background-color: #293255;
    color: #fff;
    margin-left: -30px;
    z-index: 1;
    width: 120px;
    text-align: center;
    font-weight: 600;
  }
  .summary-text {
    border-radius: 15px;
    padding: 6px 45px;
    color: #fff;
    width: 120px;
    text-align: center;
    font-weight: 600;
  }
}
.single-lecture {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 20px;
  .lect-image {
    width: 200px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}
</style>
