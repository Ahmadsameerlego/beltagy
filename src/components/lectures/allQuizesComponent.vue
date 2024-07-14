<template>
  <div class="mt-5">
    <div class="container">
      <h5 class="fw-bold text-center">المسابقات</h5>
      <p class="text-center fw-bold fs-19 mt-3">
        يمكنك الاطلاع على جميع المسابقات من هنا
      </p>


       <Message severity="info" v-if="!needApprove==false">
            <span style="color:#fff">
              هذا الحساب معلق حاليا برجاء التواصل مع الادارة
            </span>
          </Message>


      <section class="lectures mt-5" v-else>

        <h5 class="fw-bold mb-3">
          ترتيبك : {{ your_order }}
        </h5>
        <div class="row" v-if="courses.length > 0">
           <div class="col-md-4 mb-3" v-for="course in courses" :key="course.id">
            <div class="singel-lecture">
             
              <div class="details px-3 pt-3 pb-3">
                <!-- top section  -->
                <div class="d-flex justify-content-between align-items-center">
                  <h6 class="fw-bold text-center mt-3 pb-3 course-title">
                    {{  course.name  }}
                  </h6>

                  <div class="flex_column" v-if="course.student_points.quiz_state=='pending'">
                    <div class="mb-2">
                      <router-link :to="'/questions/'+course.id" class="border-btn d-block">
                        الدخول للمسابقة</router-link
                      >
                    </div>
                  
                  </div>
                  <div class="flex_column" v-if="course.student_points.quiz_state=='finished'">
                    <div class="mb-2">
                     <p class="mb-3 fw-bold">
                      ترتيبك : {{  course.student_points.student_order  }}
                     </p>
                     <p class="fw-bold">
                      درجتك : {{  course.student_points.student_degree  }}
                     </p>
                    </div>
                  
                  </div>
                </div>
                <!-- detail  -->
                <div class="detail-section">
                  <p>{{  course.description  }}</p>
                </div>

                <!-- price section  -->
                <div
                  class="price-section d-flex justify-content-between align-items-center mt-3"
                >
                  <div class="price-container pt-2 pb-2 px-1">
                    <span class="price-num"> {{ course.num_questions }} </span>
                    <span class="mx-1">عدد الاسئلة</span>
                  </div>
                  <div class="price-container pt-2 pb-2 px-1">
                    <span class="price-num"> {{ course.period }} </span>
                    <span class="mx-1">المدة</span>
                  </div>
                  <div class="price-container pt-2 pb-2 px-1">
                    <span class="price-num"> {{ course.final_degree }} </span>
                    <span class="mx-1">الدرجة </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <Message v-else severity="error">
            <span style="color:#fff">
              برجاء تسجيل الدخول لمشاهدة المسابقات
            </span>
          </Message>
      </section>
      
    </div>
  </div>

  <Dialog v-model:visible="visible"  :style="{ width: '50rem' }" style="z-index:99999">
       <iframe :src="url" class="w-100" height="600" frameborder="0" allowfullscreen></iframe>
</Dialog>
</template>

<script>
import axios from 'axios';
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';

export default {
  name: "CoursesBestCourses",

  data() {
    return {
      courses: [],
      your_order : '',
      url: '',
      visible: false,
            needApprove  : false
    };
  },

  mounted() {
    this.getCourses();
  },

  methods: {
    async getCourses() { 
      await axios.get('quizzes', {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.courses = res.data.data.quizzes.results;
            this.your_order = res.data.data.user.your_order;
          } else if (res.data.key === 'needApprove') {
            this.needApprove = true;
          }
      } )
    },

    // pay course 
    async payCourse(id) {
      const fd = new FormData();
      await axios.post(`pay-course/${id}`, fd ,{
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.visible = true;
            setTimeout(() => {
              this.url = res.data.data.url;
            }, 1000);
          } 
      } )
    }
  },
  components: {
    Dialog,
    Message
  }
};
</script>

<style scoped>
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
