<template>
  <div class="all-lectures mt-5 mb-5">
    <div v-if="is_course_paid==false" class="w-50 mx-auto d-flex justify-content-center">
       <Message severity="warn">
                يرجى شراء الكورس لمشاهدة المزيد من التفاصيل
            </Message>
    </div>
    <!-- <h6 class="fw-bold text-center mb-4 mainColor">محاضرات شهر مارس</h6> -->
    <div class="container">
      
      <div v-if="!isVidoShow" class="mb-5">
        <div class="video-conatiner w-100">
         <iframe
          :src="embeddedVideoSrc"
          height="300"
          class="w-100"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        </div>
      </div>

      <h4 class="fw-bold text-center mb-3">
        محتوى
        <span class="" style="color:#a79483"> {{  course.name  }} </span>
      </h4>

      <div class="row">
        <div class="col-md-12">
             <div class=" mb-3" >
        <section >
          <div >
            
            <div class="">
              <section>
                <!-- شيت  -->
                <div class="single-detail" :class="{notAvilable : is_course_paid==false}">
                     <router-link :to="'/quiz/'+course.id" class="d-flex justify-content-between" style="color:#fff" @click="storeType('sheet')"> 
                    <span class="d-flex align-items-center gap-2 w-full">
                      <i class="fa-solid fa-file-pen session-icon"></i>

                      <span class="lesson-name  mx-3"> شيت على اللي فات </span>
                     
                    </span>

                     <span class="lesson-finished mx-3" v-if="is_course_paid==true&&(sheet.user_result == parseInt(sheet.sheet_success_degree))">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                    </router-link>

                  <!-- <div class="go-quiz">
                   الذهاب لصفحة الشيت 
                  </div> -->
                </div>
                <!-- فيديو  -->
                <div class="single-detail d-flex align-items-center justify-content-between" :class="{notAvilable : is_course_paid==false}">
                  <!-- <template #header> -->
                    <div class="d-flex sessionConent " style="cursor:pointer" @click="showVideo(course.video1.url, 1)">
                                        <i class="fa-solid fa-video session-icon mx-3"></i>

                      <div class="d-flex align-items-center gap-2 w-full">
                        <span class="lesson-name">محتوى الحصة (الفيديو الاول) </span>
                       
                      </div>
                     <div >
                      
                     <div v-if="is_course_paid==true">
                       <div
                      v-if="course.num_available_days==0"
                        style="margin-right: 50px"
                        class=" d-flex align-items-center"
                      >
                        <div class="Closed-Session">
                          <span class="whiteColor">
                            الحصة بتاعتك اتوقفت عشان انت راكمت
                          </span>
                        </div>
                        <div class="mx-3">
                          <button class="btn call-us">
                            كلمنا ع الدعم
                            <i class="fa-solid fa-phone"></i>
                          </button>
                        </div>
                      </div>

                       <countDownTimerVue
                       v-else
                        :days="course.num_available_days"
                        :hours="5"
                        :minutes="30"
                        :seconds="10"
                      />
                     </div>
                     </div>
                    </div>

                    <span class="lesson-finished mx-3" v-if="(is_course_paid==true&&video1.watched==true) || videoWatched1">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                  <!-- </template> -->
                  <!-- <div class="go-quiz">
                    <button class="main_btn" >
                      مشاهدة الحصة
                    </button>
                  </div> -->
                </div>
                <!-- quiz  -->
                <div class="single-detail" :class="{notAvilable : is_course_paid==false}">
                     <router-link :to="'/quiz/'+course.id" class="d-flex justify-content-between" style="color:#fff" @click="storeType('quiz')"> 
                    <span class="d-flex align-items-center gap-2 w-full">
                                            <i class="fa-solid fa-file-pen session-icon"></i>

                      <span class="lesson-name  mx-3"> كويز  </span>
                     
                    </span>

                     <span class="lesson-finished mx-3" v-if="is_course_paid==true&&(quiz.user_result == parseInt(quiz.quiz_success_degree))">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                    </router-link>

                  <!-- <div class="go-quiz">
                   الذهاب لصفحة الشيت 
                  </div> -->
                </div>
                <!-- فيديو  -->
                <div class="single-detail d-flex align-items-center justify-content-between" :class="{notAvilable : is_course_paid==false}">
                  <!-- <template #header> -->
                    <div class="d-flex sessionConent " style="cursor:pointer" @click="showVideo(course.video2.url, 2)">
                                        <i class="fa-solid fa-video session-icon mx-3"></i>

                      <div class="d-flex align-items-center gap-2 w-full">
                        <span class="lesson-name">محتوى الحصة (الفيديو الثاني) </span>
                       
                      </div>
                     <div >
                      
                     <div v-if="is_course_paid==true">
                       <div
                      v-if="course.num_available_days==0"
                        style="margin-right: 50px"
                        class=" d-flex align-items-center"
                      >
                        <div class="Closed-Session">
                          <span class="whiteColor">
                            الحصة بتاعتك اتوقفت عشان انت راكمت
                          </span>
                        </div>
                        <div class="mx-3">
                          <button class="btn call-us">
                            كلمنا ع الدعم
                            <i class="fa-solid fa-phone"></i>
                          </button>
                        </div>
                      </div>

                       <countDownTimerVue
                       v-else
                        :days="course.num_available_days"
                        :hours="5"
                        :minutes="30"
                        :seconds="10"
                      />
                     </div>
                     </div>
                    </div>

                    <span class="lesson-finished mx-3" v-if="(is_course_paid==true&&video2.watched==false)||videoWatched2">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                  <!-- </template> -->
                  <!-- <div class="go-quiz">
                    <button class="main_btn" >
                      مشاهدة الحصة
                    </button>
                  </div> -->
                </div>
                  <div class="single-detail" :class="{notAvilable : is_course_paid==false}">
                     <router-link :to="'/quiz/'+course.id" class="d-flex justify-content-between" style="color:#fff" @click="storeType('home_work')"> 
                    <span class="d-flex align-items-center gap-2 w-full">
                                            <i class="fa-solid fa-file-pen session-icon"></i>

                      <span class="lesson-name  mx-3"> الواجب  </span>
                     
                    </span>

                     <span class="lesson-finished mx-3" v-if="is_course_paid==true&&(home_work.user_result == parseInt(home_work.home_work_success_degree))">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                    </router-link>

                  <!-- <div class="go-quiz">
                   الذهاب لصفحة الشيت 
                  </div> -->
                </div>


                <div class="single-detail" :class="{notAvilable : is_course_paid==false}">
                     <router-link :to="'/quiz/'+course.id" class="d-flex justify-content-between" style="color:#fff" @click="storeType('exam')"> 
                    <span class="d-flex align-items-center gap-2 w-full">
                                            <i class="fa-solid fa-file-pen session-icon"></i>

                      <span class="lesson-name  mx-3"> امتحان على اخر الباب  </span>
                     
                    </span>

                     <span class="lesson-finished mx-3" v-if="is_course_paid==true&&(exam.user_result == parseInt(exam.exam_success_degree))">
                        <i class="fa-solid fa-circle-check"></i>
                      </span>
                       <span class="mx-3" style="color:#E0B732;font-size:20px" v-if="is_course_paid==false">
                        <i class="fa-solid fa-lock" ></i>
                      </span>
                       <span style="color:#67D475;font-size:20px" >
                        <i class="fa-solid fa-lock-open" v-if="is_course_paid==true"></i>
                      </span>
                    </router-link>

                  <!-- <div class="go-quiz">
                   الذهاب لصفحة الشيت 
                  </div> -->
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
        </div>
       
      </div>


      
   
    </div>
  </div>



   <Dialog v-model:visible="visible"  :style="{ width: '50rem' }" style="z-index:99999">
       <iframe :src="url" class="w-100" height="600" frameborder="0" allowfullscreen></iframe>


</Dialog>
</template>

<script>
// import Accordion from "primevue/accordion";
// import AccordionTab from "primevue/accordiontab";
// import quiz from "@/components/quiz/quizComponent.vue";
import countDownTimerVue from "./countDownTimer.vue";
import axios from "axios";
import Dialog from 'primevue/dialog';
import Message from 'primevue/message';

export default {
  name: "CoursesSingleMonth",

  data() {
    return {
      // start quiz
      quiz: {
      },
      sheet : {},
      home_work : {},
      exam : {},
      selectedOptions: [],
      quizCompleted: false,
      isVidoShow: true,
      course: {},
      courses: [],
      videoSrc: '',
        url: '',
            visible : false,
            video1 : {},
      video2: {},
      videoWatched1: false,
      videoWatched2: false,
            is_course_paid : null
      // end quiz

      // start video
      // end vide
    };
  },
  computed: {
    score() {
      let correct = 0;
      for (let i = 0; i < this.quiz.questions.length; i++) {
        if (this.selectedOptions[i] === this.quiz.questions[i].answer) {
          correct++;
        }
      }
      return correct;
    },
    embeddedVideoSrc() {
      const videoId = this.videoSrc.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  },

  mounted() {
    // this.getCourses();
    this.getSessionDetails();
     setTimeout(() => {
      let course = localStorage.getItem('course') || {};
    if (course) {
      this.is_course_paid = JSON.parse(course).is_paid;
    }
    }, 1000);
  },

    methods: {
        storeType(type) {
            sessionStorage.setItem('type', type)    
        },
    submitQuiz() {
      this.quizCompleted = true;
    },
    async showVideo(videoSrc, id) {
      
      const fd = new FormData();
      fd.append('video', id)
      await axios.post(`watch-video/${this.$route.params.id}`, fd, {
         headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
          this.isVidoShow = false;
      this.videoSrc = videoSrc
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
            if (id == 1) {
                          this.videoWatched1 = true;

            } else if (id == 2) {
                          this.videoWatched2 = true;
          
        }
        }
      } )
    },
    async getSessionDetails() { 
      await axios.get(`session-details/${this.$route.params.id}`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.course = res.data.data;
            this.quiz = res.data.data.quiz;
            this.exam = res.data.data.exam;
            this.sheet = res.data.data.sheet;
            this.home_work = res.data.data.home_work;
            this.home = res.data.data.video1;
            this.video2 = res.data.data.video2;
          }
      } )
    },
    async getSessions() {
      await axios.get(`sessions`, {
        headers: {
          Authorization :  `Bearer ${localStorage.getItem('token')}` ,
        }
      })
        .then((res) => {
          if (res.data.key === 'success') {
            this.sessions = res.data.data.data;
          }
      } )
    },
     // pay course 
    async payCourse(id) {
      const fd = new FormData();
      await axios.post(`pay-session/${id}`, fd ,{
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
    // Accordion,
    // AccordionTab,
    // quiz,
    countDownTimerVue,
    Dialog,
    Message
  },
};
</script>

<style lang="scss">
.session-icon{
      color: #ffc936;
    font-size: 23px;
}
.Closed-Session{
    background-color: rgb(172, 43, 43);
    border-radius: 4px;
    padding: 8px 12px;
}
.single-detail{
        border: 1px solid #fff;
    border-radius: 10px;
    padding: 18px;
    margin-bottom: 10px;
    background-color: #3B5C73;
}
.acc-content{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;

}
.go-quiz {
  display: flex;
  justify-content: center;
  align-items: center;
}
.call-us {
  background-color: #348688 !important;
  color: #fff !important ;
}
.lesson-finished {
  svg {
    color: #1298ca !important;
    font-size: 20px;
  }
}
.lesson-opened {
  svg {
    color: #67d475 !important;
    font-size: 20px;
  }
}
.lesson-closed {
  svg {
    color: #fff !important;
    font-size: 20px;
  }
}
.lesson-notOpen {
  svg {
    color: #e0b732 !important;
    font-size: 20px;
  }
}
.lesson-name {
  width: 200px !important;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
}
.lesson-image {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
.lesson_btn {
  background-color: #ffc936 !important;
}
.p-accordion .p-accordion-header .p-accordion-header-link {
  background-color: #3b5c73 !important;
  color: #fff !important;
  border: none !important;
  &:has(.closed-tab) {
    background-color: #f00425 !important;
  }
}
.p-accordion .p-accordion-content {
  border: none;
  .card {
    border: none !important;
  }
}
.p-accordion-header-link {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
<style lang="scss" scoped>
.notAvilable{
  pointer-events: none;
  opacity: .4;
}
.month-course {
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
    background-color: #a79483;
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

.quiz-container {
  max-width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.question {
  margin-bottom: 20px;
}

.options {
  margin-top: 10px;
}

</style>
