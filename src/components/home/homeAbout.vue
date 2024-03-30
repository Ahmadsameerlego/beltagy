<template>
  <section id="about" class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center">خدماتنا</h5>
      <div class="row mt-5" v-if="services">
        <div class="col-md-4 mb-2" v-for="service in services" :key="service">
          <div class="single_about flex_column">
            <img
              :src="service.image"
              class="about_img"
              width="40"
              height="40"
              style="object-fit: cover"
              alt="svg"
            />
            <p class="text-center">{{ service.title }}</p>
            <span class="text-center">
              {{ service.description }}
            </span>
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
      services: [
        {
          title: "تدريس مبتكر: رحلة تعلم فريدة",
          description:
            "نقدم تجربة تعليمية مبتكرة تجمع بين التفاعل والابتكار. انضم إلينا في رحلة تعلم فريدة",
          image: require("@/assets/imgs/geo1.jpg"),
        },
        {
          title: "خدمات الدعم التعليمي: تمكين الطلاب للتفوق",
          description:
            "قدم خدمات الدعم التعليمي دعمًا قويًا للمعلمين وتمكينًا للطلاب لتحقيق التفوق الأكاديمي",
          image: require("@/assets/imgs/geo2.jpg"),
        },
        {
          title: "ورش عمل تعليمية: تفعيل التفاعل والاكتشاف",
          description:
            "اكتشف ورش العمل التعليمية التي تعزز التفاعل وتشجع على الاكتشاف",
          image: require("@/assets/imgs/geo3.jpg"),
        },
      ],
    };
  },
  //   computed: {
  //     ...mapGetters("setting", ["services"]),
  //   },
  //   methods: {
  //     ...mapActions("setting", ["getServices"]),
  //   },
  //   mounted() {
  //     this.getServices();
  //   },
};
</script>

<style lang="scss">
.single_about {
  position: relative;
  transition: 0.3s all;
  border: 1px solid #15364d;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 12px;
  padding-right: 12px;
  height: 250px;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    right: 50%;
    background: linear-gradient(
      252.28deg,
      #15364d 3.57%,
      #475487 23.7%,
      #546099 68.8%,
      #15364d 95.33%
    );

    transition: 0.3s;
    border-radius: 10px;
    z-index: -1;
  }
  p,
  span,
  img {
    transition: 0.3s;
  }
  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
    }
    p,
    span {
      color: #fff;
    }
    // img{
    //     filter: brightness(0) invert(1);
    // }
  }
  .about_img {
    width: 100px;
    height: 80px;
    object-fit: contain;
    margin-bottom: 15px;
  }
  p {
    color: #343333;
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 6px;
  }
  span {
    color: #86888a;
  }
}
</style>
