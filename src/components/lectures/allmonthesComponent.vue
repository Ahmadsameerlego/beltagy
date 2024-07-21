<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="fw-bold text-center">محاضرات الموقع</h5>
      <p class="text-center fw-bold fs-19 mt-3">
        يمكنك الاطلاع على جميع محاضرات الشهور من هنا
      </p>
       <Message severity="info" v-if="!needApprove==false">
            <span style="color:#fff">
              هذا الحساب معلق حاليا برجاء التواصل مع الادارة
            </span>
          </Message>
      <section class="lectures mt-5" v-else>
        <div class="row" v-if="courses.length > 0">
           <div class="col-md-4 mb-3" v-for="course in courses" :key="course.id">
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
                    <div class="mb-2"  @click="storeCourse(course)">
                      <button @click="checkAuth(course.id)" class="border-btn d-block">
                        الدخول للكورس
                        </button>
                    </div>
                    <div v-if="course.is_paid==false">
                      <button  @click="payCourse(course.id)" class="main_btn d-block px-4">
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
         <Message v-else severity="error">
            <span style="color:#fff">
              برجاء تسجيل الدخول لمشاهدة الكورسات
            </span>
          </Message>
      </section>
      
    </div>
  </div>

  <!-- <Dialog v-model:visible="visible"  :style="{ width: '50rem' }" style="z-index:99999">
       <iframe :src="url" class="w-100" height="600" frameborder="0" allowfullscreen></iframe>
</Dialog> -->
</template>

<script>
import axios from 'axios';
// import Dialog from 'primevue/dialog';
import Message from 'primevue/message';

export default {
  name: "CoursesBestCourses",

  data() {
    return {
      courses: [],
      url: '',
      visible: false,
      needApprove: false,
            isLoggedIn : false
    };
  },

  mounted() {
    this.getCourses();
     if( localStorage.getItem('token') ){
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
  },

  methods: {
    storeCourse(course) {
      localStorage.setItem('course', JSON.stringify(course))
    },
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
    async payCourse(id) {
      if (this.isLoggedIn == true) {
        const fd = new FormData();
  await axios.post(`pay-course/${id}`, fd, {
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
  })
  .catch((error) => {
    console.error("Error paying for the course:", error);
  });
      } else {
        this.$router.push('/login')
                this.$toast.add({ severity: 'info', summary: 'يجب تسجيل الدخول اولا', life: 3000 });

      }
    },

    checkAuth(id) {
      if (this.isLoggedIn == true) {
        this.$router.push(`/month/${id}`)
      } else {
        this.$router.push('/login')

        this.$toast.add({ severity: 'info', summary: 'يجب تسجيل الدخول اولا', life: 3000 });

      }
    }

  },
  components: {
    // Dialog,
    Message
  }
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
    z-index: 1;
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
