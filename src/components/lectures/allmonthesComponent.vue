<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center">محاضرات الموقع</h5>
      <p class="text-center fw-bold fs-19 mt-3">
        يمكنك الاطلاع على جميع محاضرات الشهور من هنا
      </p>
      <section class="lectures mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="singel-lecture">
              <div class="lec-image">
                <img :src="require('@/assets/imgs/education.jpeg')" alt="" />
              </div>
              <div class="details px-3 pt-3 pb-3">
                <!-- top section  -->
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="fw-bold text-center mt-3 pb-3 course-title">
                    محاضرات شهر يناير
                  </h6>

                  <div class="flex_column">
                    <div class="mb-2">
                      <router-link to="/month/1" class="border-btn d-block">
                        الدخول للكورس</router-link
                      >
                    </div>
                    <div>
                      <router-link to="/month/1" class="main_btn d-block px-4">
                        اشترك الان</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- detail  -->
                <div class="detail-section">
                  <p>وصف الكورس</p>
                </div>

                <!-- price section  -->
                <div
                  class="price-section d-flex justify-content-center align-items-center mt-3"
                >
                  <div class="price-container pt-2 pb-2 px-2">
                    <span class="price-num"> 120.00 </span>
                    <span class="mx-3">جنيها</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="singel-lecture">
              <div class="lec-image">
                <img :src="require('@/assets/imgs/edu2.jpg')" alt="" />
              </div>
              <div class="details px-3 pt-3 pb-3">
                <!-- top section  -->
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="fw-bold text-center mt-3 pb-3 course-title">
                    محاضرات شهر يناير
                  </h6>

                  <div class="flex_column">
                    <div class="mb-2">
                      <router-link to="/month/1" class="border-btn d-block">
                        الدخول للكورس</router-link
                      >
                    </div>
                    <div>
                      <router-link to="/month/1" class="main_btn d-block px-4">
                        اشترك الان</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- detail  -->
                <div class="detail-section">
                  <p>وصف الكورس</p>
                </div>

                <!-- price section  -->
                <div
                  class="price-section d-flex justify-content-center align-items-center mt-3"
                >
                  <div class="price-container pt-2 pb-2 px-2">
                    <span class="price-num"> 120.00 </span>
                    <span class="mx-3">جنيها</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="singel-lecture">
              <div class="lec-image">
                <img :src="require('@/assets/imgs/edu3.jpg')" alt="" />
              </div>
              <div class="details px-3 pt-3 pb-3">
                <!-- top section  -->
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="fw-bold text-center mt-3 pb-3 course-title">
                    محاضرات شهر يناير
                  </h6>

                  <div class="flex_column">
                    <div class="mb-2">
                      <router-link to="/month/1" class="border-btn d-block">
                        الدخول للكورس</router-link
                      >
                    </div>
                    <div>
                      <router-link to="/month/1" class="main_btn d-block px-4">
                        اشترك الان</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- detail  -->
                <div class="detail-section">
                  <p>وصف الكورس</p>
                </div>

                <!-- price section  -->
                <div
                  class="price-section d-flex justify-content-center align-items-center mt-3"
                >
                  <div class="price-container pt-2 pb-2 px-2">
                    <span class="price-num"> 120.00 </span>
                    <span class="mx-3">جنيها</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesBestCourses",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.border-btn {
  border: 1px solid #15364d;
  border-radius: 5px;
  padding: 7px 7px;
  color: #15364d;
}
</style>
<style lang="scss" >
.price-container {
  background-color: #15364d;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  .price-num {
    padding: 3px 7px;
    border-radius: 2px;
    background-color: #fff;
    color: #333;
  }
}
.detail-section {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  padding-top: 10px;
}
.singel-lecture {
  border-radius: 10px;
  transition: 0.3s all;
  &:hover {
    transform: translate(-5px, -5px);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  .details {
    width: 90%;
    margin: auto;
    box-shadow: 0px 0px 10px #32323254;
    border-radius: 10px;
    margin-top: -80px;
    background-color: #fff;
    z-index: 99999;
    position: relative;
  }
}
.course-title {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: 0%;
    bottom: 0px;
    width: 100%;
    height: 2px;
    background-color: #15364d;
  }
}
</style>
