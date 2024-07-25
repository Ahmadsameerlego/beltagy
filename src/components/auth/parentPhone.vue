<template>
  <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
    <h5 class="fw-bold text-center">اكتب رقم ولي الامر</h5>
    <!-- <p class="text-center">على الرقم ده هيوصلك رسالة SMS اكتبه</p> -->
    <div class="logo">
      <img :src="require('@/assets/imgs/forget2.svg')" alt="" />
    </div>

    <form
      ref="loginForm"
      @submit.prevent="sendOtp"
      class="flex flex-wrap gap-3 p-fluid"
    >
      <!-- otp  -->
      <div class="position-relative flex-auto">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          "
        >
         <div class="w-100">
            <input
                    type="text"
                    class="form-control defaultInput"
                    name="phone"
                    placeholder="الرجاء ادخال رقم الجوال"
                    v-model="phone"
                  />
         </div>
       
        </div>
         <div class="mt-3">
            <Message severity="warn">
                يرجي العلم انه سيتم الاتصال بولي الامر للتاكد من البيانات
            </Message>

        </div>
      </div>

      <!-- submit  -->
      <div class="mt-4">
        <button
          class="main_btn pt-3 pb-3 fs-5 w-75 mx-auto flex_center"
          :disabled="disabled"
        >
          <span v-if="!spinner">تاكيد </span>
          <div class="spinner-border mx-2" role="status" v-if="spinner">
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </div>

     
    </form>
  </Dialog>

  <!-- reset password  -->

  <Toast />
</template>

<script>
import axios from "axios";
import Message from 'primevue/message';

import Dialog from "primevue/dialog";
// reset passwrod component
// import resetPass from './resetPassword.vue';
import Toast from "primevue/toast";
// import { mapState } from 'vuex';
export default {
  data() {
    return {
      otp: false,
      timer: 60,
      intervalId: null,
      openReset: false,
      disabled: false,
      spinner: false,
      code: "",
      isCodeSent: false,
      resendTime: false,
      methodName: "",
        otpType: "",
      phone : ''
    };
  },
  components: {
    Dialog,
    // resetPass ,
      Toast,
    Message
  },
  watch: {
    parentPhone() {
      this.otp = true;
    },
    code() {
      if (this.code.length ==6) {
        this.disabled = false;
      }
    },
  },
  // computed:{
  //     ...mapState(["auth"])
  // },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        } else {
          clearInterval(this.intervalId);
          this.isCodeSent = false;
        }
      }, 1000);
    },
    // submit otp form
    async sendOtp() {
      this.disabled = true;
      this.spinner = true;
      const fd = new FormData()
      try {
        await axios.patch(`set-parent-phone?id=15&parent_phone=${this.phone}`, fd ,{
           headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
        }).then((res) => {
          if (res.data.key == "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.disabled = false;
            this.spinner = false;
            
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
            this.disabled = false;
            this.spinner = false;
          }
        });
      } catch (err) {
        console.error(err);
      }
    },
    // resend code
    async resendCode() {
      try {
        await axios
          .get(`resend-code?phone=${sessionStorage.getItem("phone")}`)
          .then((res) => {
            if (res.data.key == "success") {
              this.$toast.add({
                severity: "success",
                summary: res.data.msg,
                life: 3000,
              });
              this.startTimer();
              this.timer = 60;
              this.isCodeSent = true;
              this.resendTime = true;
            } else {
              this.$toast.add({
                severity: "error",
                summary: res.data.msg,
                life: 3000,
              });
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
  },
  props: {
    parentPhone: Boolean,
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    // this.startTimer();
    // fetch('https://api.ipify.org?format=json')
    // .then(response => response.json())
    // .then(data => localStorage.setItem('device_id', data.ip))
    // .catch(error => console.error(error));
  },
};
</script>

<style></style>
