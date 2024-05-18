<template>
  <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
    <h5 class="fw-bold text-center">التاكد من رقم الموبايل</h5>
    <p class="text-center">على الرقم ده هيوصلك رسالة SMS اكتبه</p>
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
        v-if="type==='sms'"
          style="
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          "
        >
          <v-otp-input
          
            ref="otpInput"
            v-model:value="code"
            name="code"
            input-classes="otp-input"
            separator=""
            :num-inputs="6"
            :should-auto-focus="true"
            autofocus
            input-type="letter-numeric"
            style="flex-direction: row-reverse"
          />
        </div>
        <div v-else>
          <input type="text" class="form-control" placeholder="ادخل الرقم الرقم المرسل في واتساب" v-model="whatsAppCode">
        </div>
      </div>

      <section v-if="type==='sms'">
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

      <div class="flex_between w-75 mx-auto d-flex">
        <div class="flex_center newAcc">
          <p class="fs-6 mt-4 fw-6" style="color: #15364d !important">
            لم يتم الارسال ؟
            <button
              type="button"
              class="fw-bold btn p-0"
              @click.prevent="resendCode"
              :disabled="isCodeSent"
            >
              اعادة ارسال
            </button>
          </p>
        </div>

        <div v-if="resendTime">
          <p v-if="timer > 0" class="text-center mt-3">
            متبقي<span class="" style="color: #15364d !important"
              >{{ timer }}ثانية</span
            >
          </p>
        </div>
      </div>
      </section>
      <section v-else>
           <div class="mt-4">
            <button
              class="main_btn pt-3 pb-3 fs-5 w-75 mx-auto flex_center"
              :disabled="WhatsDisabled"
            >
              <span v-if="!spinner">تاكيد </span>
              <div class="spinner-border mx-2" role="status" v-if="spinner">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
      </div>
      </section>
    </form>
  </Dialog>

  <!-- reset password  -->

  <Toast />
</template>

<script>
import axios from "axios";
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
      disabled: true,
      spinner: false,
      code: "",
      isCodeSent: false,
      resendTime: false,
      methodName: "",
      otpType: "",
      whatsAppCode: '',
      WhatsDisabled : false
    };
  },
  components: {
    Dialog,
    // resetPass ,
    Toast,
  },
  watch: {
    openOtp() {
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
      this.spinner = true;
      if (this.type == 'sms') {
        this.disabled = true;
      const fd = new FormData();
      fd.append("phone", this.phone);
      fd.append("device_id", sessionStorage.getItem("device_id"));
      fd.append("device_type", "web");
      fd.append("type", "sms");
      fd.append("password", this.code);

      // check if the function for the active code or check forget password code
      if (localStorage.getItem("otpType") == "active") {
        this.methodName = "auth/active";
      } else if (localStorage.getItem("otpType") == "forget") {
        this.methodName = "auth/forgetCode";
      }

      try {
        await axios.post("sign-in?count_notifications", fd).then((res) => {
          if (res.data.key == "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
            this.disabled = false;
            this.spinner = false;
            localStorage.setItem('user' , JSON.stringify(res.data.data.user))
              localStorage.setItem('token', res.data.data.user.token)
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
      } else {
        this.WhatsDisabled = true;
      const fd = new FormData();
      fd.append("phone", this.phone);
      fd.append("device_id", sessionStorage.getItem("device_id"));
      fd.append("device_type", "web");
      fd.append("type", "sms");
      fd.append("password", this.code);

      // check if the function for the active code or check forget password code
      if (localStorage.getItem("otpType") == "active") {
        this.methodName = "auth/active";
      } else if (localStorage.getItem("otpType") == "forget") {
        this.methodName = "auth/forgetCode";
      }

      try {
        await axios.get(`whatsapp-verify?OTP=${this.whatsAppCode}&Mobile=${this.phone}`, fd).then((res) => {
          if (res.data.key == "success") {
            this.$toast.add({
              severity: "success",
              summary: res.data.msg,
              life: 3000,
            });
        
            localStorage.setItem('user' , JSON.stringify(res.data.data.user))
              localStorage.setItem('token', res.data.data.user.token)
            setTimeout(() => {
                this.$router.push('/')
            }, 2000);
           
          } else {
            this.$toast.add({
              severity: "error",
              summary: res.data.msg,
              life: 3000,
            });
           
          }
           this.WhatsDisabled = false;
            this.spinner = false;
        });
      } catch (err) {
        console.error(err);
      }
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
      openOtp: Boolean,
    phone: Number,
    whatsCode: String,
    type : String
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
