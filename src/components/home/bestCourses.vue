<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center" style="color:#fff">كورسات الموقع</h5>
      <section v-if="isAuthed">
              <div v-if="isActived == false">
        <section class="lectures mt-5">
        <div class="row">
          <div class="col-md-4" v-for="course in courses" :key="course.id">
            <div class="singel-lecture">
              <div class="lec-image">
                <img :src="course.image" alt="" />
              </div>
              <div class="details px-3 pt-3 pb-3">
                <!-- top section  -->
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="fw-bold text-center mt-3 pb-3 course-title">
                    {{  course.name  }}
                  </h6>

                  <div class="flex_column">
                    <div class="mb-2">
                      <router-link to="/month/1" class="border-btn d-block">
                        الدخول للكورس</router-link
                      >
                    </div>
                    <div>
                      <router-link :to="'/month/'+course.id" class="main_btn d-block px-4">
                        اشترك الان</router-link
                      >
                    </div>
                  </div>
                </div>
                <!-- detail  -->
                <div class="detail-section">
                  <p>{{  course.description  }}</p>
                </div>

                <!-- price section  -->
                <div
                  class="price-section d-flex justify-content-center align-items-center mt-3"
                >
                  <div class="price-container pt-2 pb-2 px-2">
                    <span class="price-num"> {{ course.price }} </span>
                    <span class="mx-3">جنيها</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="flex_center mt-4">
        <router-link class="border-btn px-5 pt-2 pb-2" style="background-color:#fff" to="/allMonthes">
          عرض كل الكورسات
        </router-link>
      </div>
      </div>

      <div v-else-if="isActived==true">
          <Message severity="info">
            <span style="color:#fff">
              هذا الحساب معلق حاليا برجاء التواصل مع الادارة
            </span>
          </Message>

      </div>
      </section>
      <div v-else>
          <Message severity="error">
            <span style="color:#fff">
              برجاء تسجيل الدخول لمشاهدة الكورسات
            </span>
          </Message>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Message from 'primevue/message';

export default {
  name: "CoursesBestCourses",

  data() {
    return {
      courses: [],
      isActived: false,
      isAuthed : false
    };
  },

  mounted() {
    if (localStorage.getItem('token')) {
      this.getCourses();
      this.isAuthed = true;
    } else {
      this.isAuthed = false;
    }
  },

  methods: {
    async getCourses() { 
      await axios.get('courses', {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.courses = res.data.data.results;
          } else if (res.data.key === 'needApprove') {
            this.isActived = true;
          }
      } )
    }
  },
  components: {
    Message
  }
};
</script>

<style lang="scss" scoped>
:deep(.p-message-wrapper){
  display: flex;
  justify-content: space-between;
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
}
</style>
