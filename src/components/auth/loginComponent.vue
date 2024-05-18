<template>
  <section id="login" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية</router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">تسجيل الدخول</p>
      </div>

      <!-- start login section  -->
      <section class="loginSection" style="width: 93%; margin: auto">
        <h3 class="fw-bold mb-3">سجل الان</h3>
        <p class="loginParagraph fw-bold">
           يلا اعمل تسجيل دخول
        </p>
        <div class="row" style="width: 93%; margin: auto">
          <!-- right side  -->
          <div class="col-md-6 mb-2">

           
            <div class="chooseLogin mt-5 w-100" v-if="typedChoosen">
              <div class="whatsApp mb-3 w-100">
                <button class="btn w-100" @click="chooseType('whatsapp')">
                  <span>
                  سجل عن طريق الواتساب ودي اسهل
                </span>
                <span>
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
                </button>
              </div>
              <div class="phone mb-3 w-100">
               <button class="btn w-100"  @click="chooseType('sms')">
                 <span>
                  سجل عن طريق رقم الموبايل
                </span>
                <span>
                    <i class="fa-solid fa-mobile"></i>
                </span>
               </button>
              </div>
            </div>
            <form
            v-else
              ref="loginForm"
              class="flex flex-wrap gap-3 p-fluid"
              @submit.prevent="login"
            >
              <!-- phone  -->
              <div class="position-relative flex-auto defaultInput">
                <label for="integeronly" class="label fw-bold block mb-2">
                  رقم الهاتف</label
                >

                <input
                  type="number"
                  class="form-control defaultInput"
                  placeholder="الرجاء ادخال رقم الهاتف"
                  v-model="phone"
                />

                <!-- icon  -->
                <div class="inputIcon">
                  <img :src="require('@/assets/imgs/phone.svg')" alt="" />
                </div>

               
              </div>

              <!-- submit  -->
              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5" @click.prevent="login">
                  
                  <span v-if="!spinner"> دخول </span>
                  <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>

              <!-- new account  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6">
                  انشاء حساب جديد ؟
                  <router-link to="/register" class="mainColor fw-bold">
                    سجل الان</router-link
                  >
                </p>
              </div>

            </form>
          </div>

          <!-- left side  -->
          <div class="col-md-6 mb-2">
            <div class="">
              <img
                class="loginImage w-100 h-100 lazy"
                :src="require('@/assets/imgs/login-removebg-preview.png')"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <!-- forget password modal
      <forgetPass  :visible="visible"/>

       

      contact problem 
      <contactProblem :openContactModal="openContactModal" /> -->
    </div>
  </section>
  <sendOtp :openOtp="openOtp" :phone="phone" :type="type" :whatsCode="whatsCode" />
  <Toast />
</template>

<script>
import Toast from 'primevue/toast';
import sendOtp from './loginOtp.vue';
import axios from 'axios';
export default {
  data() {
    return {
        phone : '',
      password: "",
      openOtp : false,

      //   disabled : true,
      spinner: false,
      typedChoosen: true,
      type: '',
        whatsCode : ''
      
    };
  },


  components: {
    // Password,
    // forgetPass,
    // contactProblem,
    // Dropdown,
    Toast,
    sendOtp
  },
  methods: {
       chooseType(type) {
      this.type = type;
      this.typedChoosen = false
      },
      
      // login
      async login() {
        this.spinner = true;
      try {
        await axios
          .get(`resend-code?phone=${this.phone}&type=${this.type}`)
          .then((res) => {
            if (res.data.key == "success") {
              this.$toast.add({
                severity: "success",
                summary: res.data.msg,
                life: 3000,
              });
              // this.startTimer();
              // this.timer = 60;
              // this.isCodeSent = true;
              // this.resendTime = true;
              if (this.type === 'whatsapp') {
                this.whatsCode = res.data.data.Code;
                setTimeout(() => {
                  window.open(res.data.data.Clickable, '_blank');
                }, 2000);
                setTimeout(() => {
                  this.openOtp = true;
                }, 4000);
              } else {
                 setTimeout(() => {
                  this.openOtp = true;
                }, 2000);
              }
            } else {
              this.$toast.add({
                severity: "error",
                summary: res.data.msg,
                life: 3000,
              });
            }
            this.spinner = false;
          });
      } catch (err) {
        console.error(err);
      }
    },


    },
    // mounted(){
    //   // this.getCountries();
    //   document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;

    //   fetch('https://api.ipify.org?format=json')
    //   .then(response => response.json())
    //   .then(data => localStorage.setItem('device_id', data.ip))
    //   .catch(error => console.error(error));

    // },

    created(){
      // this.getCountries();
    }
};
</script>

<style  lang="scss">
.chooseLogin{
  button{
    svg{
      font-size: 25px;
    }
    width: 100%;
    margin: auto;
    display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
  }
    .phone , .whatsApp{
      width: 50%;
      margin: auto;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
    }
    .whatsApp{
      background-color: #4EB727;
    }
    .phone{
      background-color: #419897;
    }
}
.p-dropdown {
  width: 25%;
  top: 32px !important;
}
.p-dropdown {
  position: absolute !important;
  top: 32px !important;
  /* width: 17%; */
}
</style>
<style lang="scss">
.p-dropdown .p-dropdown-trigger {
  width: 7px !important;
}
.p-input-icon-right > svg:last-of-type {
  left: 0.75rem !important;
  right: auto !important;
}
.p-dropdown {
  background-color: #f8f8f8 !important;
  left: 0px;
}
.main_btn {
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
.form-control {
  height: 50px;
}
.otp-input {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  border: 1px solid #ddd;
  background: #fafafa;
  margin: 0 15px;
  padding: 20px;
  font-size: 23px;
  &.is-complete {
    border: 2px solid #15364d !important;
    color: #15364d !important;
  }
  &:focus {
    border: 2px solid #15364d !important;
    color: #15364d !important;
  }
}
.p-component {
  font-family: inherit !important;
}
.logo {
  img {
    width: 150px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-bottom: 12px;
  }
}
.p-dialog-header {
  display: flex !important;
  justify-content: end !important;
  .p-dialog-header-icon {
    border: 1px solid #ccc !important;
  }
}
.contactUs {
  padding: 0 !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  border-bottom: 1px solid #15364d !important;
  border-radius: 0 !important;
}
.loginImage {
  transform: translateY(-28%);
}
.newAcc {
  p {
    color: #fff !important;
  }
}
.forgetPass {
  color: #9b9b9b !important;
}
.breadcrumb {
  .inActive {
    color: #9b9b9b;
  }
  a,
  p {
    font-size: 14px;
    font-weight: 600;
  }
}
.loginParagraph {
  font-size: 16px;
}
.label {
  font-size: 16px;
}
.defaultInput input {
  background-color: #f8f8f8;
  padding-left: 40px;
  padding-right: 40px;
}
.defaultInput2 {
  background-color: #f8f8f8 !important;
  padding-left: 40px !important;
  padding-right: 40px !important;
}
.inputIcon {
  position: absolute;
  top: 57%;
  right: 10px;
}
</style>
