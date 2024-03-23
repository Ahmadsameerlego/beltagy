<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">الملف الشخصي</p>

        <section class="loginSection" style="width: 93%; margin: auto">
          <h3 class="fw-bold mb-3">الملف الشخصي</h3>
          <p class="registerParagraph fw-bold d-flex align-items-center">
            <span class="step flex_center">1</span>
            يمكنك تعديل بياناتك من هنا
          </p>

          <form
            class="flex flex-wrap gap-3 p-fluid mt-4"
            ref="registerForm"
            @submit.prevent="register"
          >
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    الرقم السري القديم
                  </label>
                  <Password
                    v-model="password"
                    toggleMask
                    class="defaultInput"
                    placeholder="الرجاء ادخال الرقم السري"
                    name="password"
                  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- password  -->
                <div class="position-relative flex-auto mt-3">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    الرقم السري الجديد
                  </label>
                  <Password
                    v-model="password"
                    toggleMask
                    class="defaultInput"
                    placeholder="الرجاء ادخال الرقم السري"
                    name="password"
                  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- confirm password  -->
                <div class="position-relative flex-auto mt-3">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    تاكيد الرقم السري الجديد
                  </label>
                  <Password
                    v-model="confirm_password"
                    :feedback="false"
                    toggleMask
                    class="defaultInput"
                    name="password_confirmation"
                    placeholder="الرجاء تاكيد الرقم السري"
                  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="" />
                  </div>
                </div>

                <div v-if="showValid">
                  <p
                    v-if="passwordMatch"
                    class="passwordConfirmed d-flex align-items-center text-success"
                  >
                    <i class="fa-regular fa-circle-check"></i>
                    <span>الرقم متطابق</span>
                  </p>
                  <p
                    v-else
                    class="passwordWrong d-flex align-items-center text-danger"
                  >
                    <i class="fa-regular fa-circle-xmark"></i>
                    <span>غير متطابق</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <button class="main_btn w-50 mx-auto flex_center pt-3 pb-3 fs-5">
                <span v-if="!spinner">حفظ البيانات</span>
                <div class="spinner-border mx-2" role="status" v-if="spinner">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>

            <!-- new account  -->
          </form>
        </section>
      </div>
    </div>
  </section>

  <!-- <Toast />
  <sendOtp :openOtp="openOtp"/> -->
</template>

<script>
import InputText from "primevue/inputtext";
// import InputNumber from 'primevue/inputnumber';
import Dropdown from "primevue/dropdown";
import Password from "primevue/password";

// import Toast from 'primevue/toast';

// import sendOtp from './sendOtp.vue';
// import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
      username: "",
      phone: "",
      selectedCity: {
        id: 1,
        name: "السعودية",
        key: "+966",
      },

      countries: [],
      password: "",
      confirm_password: "",
      disabled: true,
      spinner: false,
      phoneValid: false,
      conditions: false,
      openOtp: false,
      is_conditions: null,
      years: [
        {
          id: 1,
          name: "الاول الثانوي",
        },
        {
          id: 2,
          name: "الثاني الثانوي",
        },
        {
          id: 3,
          name: "الثالث الثانوي",
        },
      ],
    };
  },
  watch: {
    confirm_password() {
      this.showValid = true;
    },
    passwordMatch() {
      if (this.passwordMatch == true) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    phone() {
      if (this.phoneMatch === true) {
        this.phoneValid = true;
      } else {
        this.phoneValid = false;
      }
      this.phone = this.phone.replace(/[^0-9]/g, "");
    },
  },
  computed: {
    passwordMatch() {
      return this.password === this.confirm_password;
    },
    phoneMatch() {
      return this.phone.length < 9;
    },
    passwordLength() {
      return this.password.length < 6;
    },
    // ...mapState(["common"])
  },
  //   methods:{
  //     // get countries
  //     ...mapActions('common',['getCountries']),
  //     // register function
  //      async register(){
  //       this.disabled = true ;
  //       this.spinner = true ;
  //       const fd = new FormData(this.$refs.registerForm);
  //       fd.append('country_code', this.selectedCity.key);
  //       fd.append( 'password', this.password );
  //       fd.append( 'password_confirmation', this.confirm_password );
  //       if( this.conditions ){
  //         fd.append( 'is_conditions', 1 );
  //       }

  //       try{
  //         const res = await this.$store.dispatch('auth/register', fd);
  //         if( res.success == true ){
  //           this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
  //           this.disabled = false ;
  //           this.spinner = false ;
  //           // open otp modal
  //           setTimeout(() => {
  //             if( this.openOtp == true || this.openOtp == false ){
  //               this.openOtp = !this.openOtp
  //             }
  //           }, 3000);
  //           localStorage.setItem('phone', this.phone)
  //           localStorage.setItem('country_code', this.selectedCity.key);
  //           localStorage.setItem('otpType', 'active');

  //           // check if user active the phone
  //           localStorage.setItem('isActived', res.data[0].active)
  //           // check if the user completed his info ( completeRegister )
  //           localStorage.setItem('isCompleted', res.data[0].is_completed)
  //           console.log(res.data[0])
  //           console.log(res.data[0].active)
  //         }else{
  //           this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
  //           this.disabled = false ;
  //           this.spinner = false ;
  //         }
  //       }catch(err){
  //         console.error(err)
  //       }

  //     },
  //     checkValid(){
  //       if( this.username === '' || this.phone === '' || this.password === '' || this.confirm_password === '' || this.passwordMatch === false || this.phoneMatch === true  ){
  //         this.disabled = true;
  //       }else if(this.username !== '' && this.phone !== '' && this.password !== '' && this.confirm_password !== ''&& this.passwordMatch === true && this.phoneMatch === false ){
  //         this.disabled = false ;
  //       }
  //     },
  //     chooseCountry(){
  //       console.log(this.selectedCity)
  //       document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
  //     },

  //   },
  components: {
    InputText,
    // InputNumber,
    Dropdown,
    Password,
    // Toast,
    // sendOtp
  },
  //   mounted(){
  //     // this.getCountries();
  //     document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;

  //     if( localStorage.getItem('isActived') == 'false' ){
  //       this.openOtp = true ;
  //     }
  //   },
  //   created(){
  //     this.getCountries();
  //   }
};
</script>

<style scoped>
.p-dropdown {
  position: absolute !important;
  width: 25%;
  top: 32px !important;
}
.checkCondition {
  accent-color: #2a3255;
  width: 16px;
  height: 16px;
}
</style>

<style lang="scss">
.registerParagraph {
  position: relative;
  font-size: 17px !important;
  .step {
    width: 35px;
    height: 35px;
    margin-left: 9px;
    background-color: #feede7;
    border-radius: 50%;
    border: 1px solid #e57d61;
    color: #e57d61;
    font-size: 21px !important;
  }
}
</style>
