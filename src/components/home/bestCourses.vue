<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="site_title fw-bold text-center" style="color:#fff">كورسات الموقع</h5>
      <section >
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
                      <button @click="checkAuth(course.id)" class="border-btn d-block">
                        الدخول للكورس
                      </button>
                    </div>
                    <div v-if="course.is_paid==false">
                      <button @click="openCopoun(course.id, course.price)" class="main_btn d-block px-4">
                        اشترك الان</button
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
    

    </div>
  </div>
  <Toast />


   <Dialog v-model:visible="copoun" modal :style="{ width: '50vw' }">
    <h5 class="fw-bold text-center">ادخل كوبون الخصم ان وجد</h5>
    <!-- <p class="text-center">على الرقم ده هيوصلك رسالة SMS اكتبه</p> -->
    <!-- <div class="logo">
      <img :src="require('@/assets/imgs/forget2.svg')" alt="" />
    </div> -->

    <form
      ref="loginForm"
      @submit.prevent="payCourse()"
      class="flex flex-wrap gap-3 p-fluid"
    >
      <!-- otp  -->
      <div class="position-relative flex-auto">
        
        <div>
          <input type="text" class="form-control" placeholder="ادخل الكوبون ان وجد" v-model="copounCode" @input="check_coupon">

         <div v-if="enter">
           <div v-if="isRight==true" class="text-danger"> الكوبون غير صحيح </div>
          <div v-else class="text-success"> الكوبون  صحيح </div>
         </div>
        </div>
      </div>
      <section >
           <div class="mt-4">
            <button
              class="main_btn pt-3 pb-3 fs-5 w-75 mx-auto flex_center"
              :disabled="WhatsDisabled"
            >
              <span v-if="!spinner">ادفغ الان </span>
              <div class="spinner-border mx-2" role="status" v-if="spinner">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
      </div>
      </section>
    </form>
  </Dialog>
</template>

<script>
import axios from 'axios';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';


export default {
  name: "CoursesBestCourses",

  data() {
    return {
      courses: [],
      isActived: false,
      isAuthed: false,
      isLoggedIn: false,
            copoun: false,
      course_id: '',
      course_price : '',
      WhatsDisabled: false,
      copounCode: '',
      isRight: null,
            enter : false

    };
  },

  mounted() {
    // if (localStorage.getItem('token')) {
      this.getCourses();
    //   this.isAuthed = true;
    // } else {
    //   this.isAuthed = false;
    // }

      // window.addEventListener('click', this.closeNavbarOnClickOutside);
        if( localStorage.getItem('token') ){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
        
  },

  methods: {
    async getCourses() { 
      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      try {
        const res = await axios.get('courses', { headers });

        if (res.data.key === 'success') {
          this.courses = res.data.data.results;
        } else if (res.data.key === 'needApprove') {
          this.isActived = true;
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
      // pay course 
        // pay course 
    async payCourse() {
      this.WhatsDisabled = true;
      if (this.isLoggedIn == true) {
        const fd = new FormData();
        fd.append('coupon_num', this.copounCode)
  await axios.post(`pay-course/${this.course_id}`, fd, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  })
  .then((res) => {
    if (res.data.key === 'success') {
      this.visible = true;
      setTimeout(() => {
        this.url = res.data.data.url;
        window.open(this.url, '_blank'); // Opens the URL in a new tab
      }, 1000);
    } 
    this.WhatsDisabled = false;
  })
  .catch((error) => {
    console.error("Error paying for the course:", error);
  });
      } else {
        this.$router.push('/login')
                this.$toast.add({ severity: 'info', summary: 'يجب تسجيل الدخول اولا', life: 3000 });

      }
    },


    async check_coupon() {
      
      const fd = new FormData();
      await axios.post(`check-coupon?coupon_num=${this.copounCode}&total_price=${this.course_price}`, fd)
        .then((res) => {
          this.enter = true;
          if (res.data.key == 'fail') {
            this.isRight = true;
          } else {
            this.isRight = false;
        }
      } )
    },

    checkAuth(id) {
      if (this.isLoggedIn == true) {
        this.$router.push(`/month/${id}`)
      } else {
        this.$router.push('/login')

        this.$toast.add({ severity: 'info', summary: 'يجب تسجيل الدخول اولا', life: 3000 });

      }
    },
    openCopoun(id, price) {
      this.course_id = id;
      this.course_price = price;
      this.copoun = true;
    }

  },

  components: {
    Message,
    Toast,
    Dialog
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
