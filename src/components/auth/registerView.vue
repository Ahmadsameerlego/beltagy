<template>
  <section id="register" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية </router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">تسجيل جديد</p>

        <section class="loginSection" style="width: 93%; margin: auto">
          <h3 class="fw-bold mb-3">سجل حسابك الان</h3>
          <p class="registerParagraph fw-bold d-flex align-items-center">
            <span class="step flex_center">1</span>
            املئ هذا البيانات لانشاء حساب جديد
          </p>
           <div class="chooseLogin mt-5" v-if="typeChoosed">
              <div class="whatsApp mb-3">
                <button class="btn" @click="chooseType('whatsapp')">
                  <span>
                  سجل عن طريق الواتساب ودي اسهل
                </span>
                <span>
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
                </button>
              </div>
              <div class="phone mb-3">
               <button class="btn"  @click="chooseType('sms')">
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
            class="flex flex-wrap gap-3 p-fluid mt-4"
            ref="registerForm"
            v-else
            @submit.prevent="register"
          >
            <div class="row">
              <div class="col-md-6 mb-2">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    اسم الطالب
                  </label>
                  <InputText
                    type="text"
                    class="defaultInput2"
                    v-model="name"
                    name="name"
                    placeholder="الرجاء ادخال اسم الطالب"
                  />
                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/user.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >رقم الجوال
                  </label>
                  <input
                    type="text"
                    class="form-control defaultInput"
                    name="phone"
                    placeholder="الرجاء ادخال رقم الجوال"
                    v-model="phone"
                  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="" />
                  </div>

                  <!-- select phone  -->
                  
                </div>
                <div>
                  <span v-if="phoneValid" class="text-danger">
                    يجب ان يكون رقم الهاتف بين ٩ او ١٠ ارقام
                  </span>
                </div>
              </div>

              <div class="col-md-6 mb-5">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >المحافظة
                  </label>
                  <!-- select phone  -->
                  <Dropdown
                    v-model="selectedRegion"
                    :options="regions"
                    optionLabel="name"
                    class="w-100 md:w-14rem"
                    @change="getRegionId"
                  />
                </div>
              </div>
              <div class="col-md-6 mb-5 ">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >المدينة
                  </label>
                  <!-- select phone  -->
                  <Dropdown
                    v-model="selectedCity"
                    :options="cities"
                    optionLabel="name"
                    class="w-100 md:w-14rem"
                  />
                </div>
              </div>

              <div class="col-md-6 mb-2 mt-3">
                <!-- user name  -->
                <div class="position-relative flex-auto">
                  <label for="integeronly" class="label fw-bold block mb-2">
                    العنوان
                  </label>
                  <InputText
                    type="text"
                    class="defaultInput2"
                    v-model="address"
                    name="address"
                    placeholder="الرجاء ادخال العنوان"
                  />
                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/user.svg')" alt="" />
                  </div>
                </div>
              </div>

              <div class="col-md-6  mb-2 mt-3">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >تاريخ الميلاد
                  </label>
                  <!-- select phone  -->
                 <Calendar v-model="date" />

                </div>
              </div>

              <div class="col-md-6 mb-2">
                <!-- phone  -->
                <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"
                    >يرجى تحديد النوع
                  </label>
                  <!-- select phone  -->
                 <div class="flex flex-wrap gap-3 d-flex justify-content-between">
                    <div class="flex align-items-center">
                        <RadioButton v-model="gender" inputId="birth_date1" name="pizza" value="male" />
                        <label for="ingredient1" class="mx-2">ذكر</label>
                    </div>
                    <div class="flex align-items-center">
                        <RadioButton v-model="gender" inputId="birth_date2" name="pizza" value="female" />
                        <label for="ingredient2" class="mx-2">انثي</label>
                    </div>

                </div>

                </div>
              </div>

             

             
            </div>

            <!-- terms & conditions  -->
            <!-- <div class="d-flex align-items-center">
              <input
                type="checkbox"
                class="checkCondition"
                v-model="conditions"
              />
              <span class="mx-2">
                الموافقة على
                <router-link to="/termsCondition" class="terms">
                  الشروط والأحكام
                </router-link>
              </span>
            </div> -->

            <div class="mt-5">
              <button class="main_btn w-50 mx-auto flex_center pt-3 pb-3 fs-5" @click.prevent="register">
                <span v-if="!spinner">انشاء الحساب</span>
                <div class="spinner-border mx-2" role="status" v-if="spinner">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>

            <!-- new account  -->
            <div class="flex_center newAcc">
              <p class="fs-6 mt-4 fw-6">
                هل لديك حساب
                <router-link to="/login" class="mainColor fw-bold"
                  >سجل دخول</router-link
                >
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>



  <Toast />
   <sendOtp  :openOtp="openOtp"/>
</template>

<script>
import InputText from "primevue/inputtext";
// import InputNumber from 'primevue/inputnumber';
import Dropdown from "primevue/dropdown";
// import Password from "primevue/password";
// import Message from 'primevue/message';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';

import Toast from 'primevue/toast';
import axios from "axios";
import sendOtp from './senOtp.vue';
// import {mapState, mapActions} from 'vuex';
export default {
  data() {
    return {
      name: "",
      phone: "",
      address : "",
      // selectedCity: {
      //   id: 1,
      //   name: "السعودية",
      //   key: "+966",
      // },
      typeChoosed: true,
        type : '',
      countries: [],
      ingredient : "",
      password: "",
      confirm_password: "",
      disabled: true,
      spinner: false,
      phoneValid: false,
      conditions: false,
      openOtp: false,
            parentPhone : false ,
      is_conditions: null,
      date : null,
      years: [
        {
          id: 1,
          name: "الغربية",
        },
        {
          id: 2,
          name: "الدقهلية",
        },
        {
          id: 3,
          name: "القاهرة",
        },
      ],
      regions: [],
      selectedRegion: null,
      regionID: null,
      cities: [],
      selectedCity: null,
      gender : null
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
  methods: {
    chooseType(type) {
      this.type = type;
      this.typeChoosed = false
      },
      async getRegion() {
        await axios.get('regions')
          .then((res) => {
            this.regions = res.data.data.regions; 
        } )
      },
      getRegionId() {
        this.regionID = this.selectedRegion.id;
        this.getCities();
      },
     async getCities() {
        await axios.get(`region/${this.regionID}/cities`)
          .then((res) => {
            this.cities = res.data.data.cities; 
        } )
      },
      async register() {
        this.spinner = true;
        const fd = new FormData();
        fd.append('name', this.name)
        fd.append('phone', this.phone)
        fd.append('address', this.address)
        fd.append('birth_date', this.date)
        if (this.selectedRegion !== null) {
          fd.append('region_id', this.selectedRegion.id)
        }
        if (this.selectedCity != null) {
          fd.append('city_id', this.selectedCity.id)
        }
        fd.append('gender', this.gender)
        fd.append('type', this.type)


        await axios.post('sign-up', fd)
          .then((res) => {
            if (res.data.key == 'success') {
              this.$toast.add({ severity: 'success', summary: res.data.msg, life: 4000 });
            setTimeout(() => {
              this.openOtp = true;
            }, 2000);
              sessionStorage.setItem('phone', this.phone);
            } else {
            this.$toast.add({ severity: 'error', summary: res.data.msg, life: 4000 });
            }
          this.spinner = false;
        } )
      },
      chooseCountry(){
        console.log(this.selectedCity)
        document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
      },

    },
  components: {
    InputText,
    // InputNumber,
    Dropdown,
    // Message,
    Calendar,
    RadioButton,
    // Password,
    Toast,
    sendOtp
  },
    mounted(){
          // this.startTimer();
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => sessionStorage.setItem('device_id', data.ip))
        .catch(error => console.error(error));
      this.getRegion();
    },
    created(){
      // this.getCountries();
    }
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
