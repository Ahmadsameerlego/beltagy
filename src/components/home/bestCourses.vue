<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center">محاضرات الموقع</h5>
      <section class="lectures mt-5">
        <div class="row">
          <div class="col-md-4">
            <router-link to="/month/2">
              <div class="singel-lecture">
                <div class="lec-image">
                  <img :src="require('@/assets/imgs/education.jpeg')" alt="" />
                </div>
                <div class="details">
                  <h6 class="fw-bold text-center mt-3 pb-3">
                    محاضرات شهر يناير
                  </h6>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/month/3">
              <div class="singel-lecture">
                <div class="lec-image">
                  <img :src="require('@/assets/imgs/edu2.jpg')" alt="" />
                </div>
                <div class="details">
                  <h6 class="fw-bold text-center mt-3 pb-3">
                    محاضرات شهر فبراير
                  </h6>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/month/1">
              <div class="singel-lecture">
                <div class="lec-image">
                  <img :src="require('@/assets/imgs/edu3.jpg')" alt="" />
                </div>
                <div class="details">
                  <h6 class="fw-bold text-center mt-3 pb-3">
                    محاضرات شهر مارس
                  </h6>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <div class="flex_center mt-4">
        <router-link class="main_btn px-5 pt-2 pb-2" to="/allMonthes">
          عرض كل الشهور
        </router-link>
      </div>
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

<style lang="scss" scoped>
.singel-lecture {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgb(0 0 0 / 30%);
  transition: 0.3s all;
  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.452);
  }
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>
