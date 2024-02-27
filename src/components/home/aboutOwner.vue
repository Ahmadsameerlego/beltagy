<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center">عن الاستاذ البلتاجي</h5>
      <div class="row align-items-center mt-4">
        <div class="col-md-6 mb-2">
          <div class="owner-image mx-auto d-flex justify-content-center">
            <img :src="require('@/assets/imgs/user.svg')" alt="" />
          </div>
          <h6 class="text-center fw-bold mainColor">الاستاذ البلتاجي</h6>
          <p class="fw-bold text-center">استاذ اول جيولوجيا</p>
        </div>

        <div class="col-md-6">
          <p class="fs-18">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            quas veniam dolorem illum rem vitae voluptatum distinctio inventore
            eius. Voluptates.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesAboutOwner",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.owner-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 10px;
  border: 2px solid #ccc;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
