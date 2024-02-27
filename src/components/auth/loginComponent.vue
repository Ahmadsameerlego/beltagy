<template>
  <section id="login" class="mt-4">
    <div class="container">
      <!-- start breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية</router-link>&nbsp; - &nbsp;
        <p class="active mainColor"> تسجيل الدخول</p>
      </div>

      <!-- start login section  -->
      <section class="loginSection" style="width:93%;margin:auto" >
        <h3 class="fw-bold mb-3"> سجل الان </h3>
        <p class="loginParagraph fw-bold">قم بملئ البيانات التاليه لتسجيل الدخول </p>
        <div class="row" style="width:93%;margin:auto">

          <!-- right side  -->
          <div class="col-md-6 mb-2">

            <form ref="loginForm" class="flex flex-wrap gap-3 p-fluid" @submit.prevent="login">

              <!-- phone  -->
              <div class="position-relative flex-auto defaultInput">
                  <label for="integeronly" class="label fw-bold block mb-2"> رقم الهاتف</label>

                  <input type="number" class="form-control defaultInput" placeholder="الرجاء ادخال رقم الهاتف" v-model="phone" >

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/phone.svg')" alt="">
                  </div>

                  <!-- select phone  -->
                  <Dropdown v-model="selectedCity" :options="countries" optionLabel="key" @change="chooseCountry"  class="w-full md:w-14rem" style="top: 32px !important;" />
              </div>

              <!-- start phone validations  -->
              <!-- phone required  -->
              <!-- <div class="text-danger" v-if="required"> {{ $t('auth.phoneRequired') }} </div> -->
              <!-- phone length  -->
              <!-- <div class="text-danger" v-if="lengthValid"> {{ $t('auth.phoneValid') }} </div> -->
              <!-- end phone validations  -->
      
              <!-- password  -->
              <div class="position-relative flex-auto mt-3">

                  <label for="integeronly" class="label fw-bold block mb-2"> الرقم السري </label>
                  <Password v-model="password" :feedback="false" toggleMask class="defaultInput" placeholder="قم بادخال الرقم السري"  />

                  <!-- icon  -->
                  <div class="inputIcon">
                    <img :src="require('@/assets/imgs/lock.svg')" alt="">
                  </div>

              </div>

              <!-- phone error  -->
              <!-- <div class="error" v-if="passwordRequied">
                <span class="text-danger" > حقل كلمة المرور مطلوب </span>
              </div> -->


              <!-- forget password  -->
              <div class="d-flex justify-content-end mt-2">
                <button class="btn forgetPass" type="button" @click="openForget()"> هل نسيت الرقم السري </button>
              </div>
              
              <!-- submit  -->
              <div class="mt-4">
                <button class="main_btn w-100 pt-3 pb-3 fs-5"> 
                دخول
                  <!-- <span v-if="!spinner">  </span>
                  <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div> -->
                </button>
              </div>

              <!-- new account  -->
              <div class="flex_center newAcc">
                <p class="fs-6 mt-4 fw-6"> انشاء حساب جديد ؟ <router-link to="/register" class="mainColor fw-bold"> سجل الان</router-link> </p>  
              </div>


              <!-- register problem  -->
              <!-- <div class="flex_center newAcc">
                <p class="fs-6 mt-0 fw-6"> {{ $t('auth.p1')  }} <button  class="btn  mainColor contactUs" @click="openContact" type="button"> {{  $t('auth.p2')  }} </button> </p>  
              </div> -->

            </form>
          </div>

          <!-- left side  -->
          <div class="col-md-6 mb-2">
            <div class="">
              <img  class="loginImage w-100 h-100 lazy" :src="require('@/assets/imgs/login.png')" alt="">
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
  <!-- <Toast /> -->
</template>

<script>
import Password from 'primevue/password';

// // import components 
// import forgetPass from './forgetPass.vue';
// import contactProblem from './contactProblem.vue';
import Dropdown from 'primevue/dropdown';
// import Toast from 'primevue/toast';

// import { mapActions, mapState } from 'vuex';
export default {
  data(){
    return{
      
    //   phone : '',
      password : '',

    //   disabled : true,
    //   spinner : false ,
    //   visible : false ,
    //   lengthValid : false,
    //   openContactModal : false ,
    //   required : false,
    //   passwordRequied : false,
    //   selectedCity : {
    //         "id": 1,
    //         "name": "السعودية",
    //         "key": "+966"
    //     },

    }
  },
//   computed:{
//     ...mapState(["common"])  

//   },
//   watch:{
//     phone(){
//       this.disabled = false ;
//     }
//   }, 
   
  components:{
    Password,
    // forgetPass,
    // contactProblem,
    Dropdown,
    // Toast
  },
//   methods:{  
//     ...mapActions('common',['getCountries']),

//     // open forget password modal 
//     openForget(){
//       if(this.visible == true || this.visible == false){
//         this.visible = !this.visible ;
//       }
//     },
//     // open contact problem modal 
//     openContact(){
//       if( this.openContactModal == true || this.openContactModal == false ){
//         this.openContactModal = !this.openContactModal ;
//       }
//     },
//     // login 
//     async login(){
//       this.disabled = true ;
//       this.spinner = true ;
//       const fd = new FormData();
//       fd.append('country_code', this.selectedCity.key);
//       fd.append( 'password', this.password );
//       fd.append( 'phone', this.phone );
//       fd.append('device_id', localStorage.getItem('FCMToken'));
//       fd.append( 'device_type', 'web');

//       try{
//         const res = await this.$store.dispatch('auth/login', fd)
//           if( res.success == true ){
//               this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
//               this.disabled = false ;
//               this.spinner = false ;
//               setTimeout(() => {
//                 this.$router.push('/');
//               }, 3000);
//           }else{
//               this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
//               this.disabled = false ;
//               this.spinner = false ;
//           }
//       }catch(err){
//         console.error(`login error is ${err}`)
//       }
//     },

//     // valid phone 
//     showValid(){
//       let phoneToString = this.phone.toString();
//       // submit button check 
//       if( this.phone == '' || phoneToString.length < 9  || this.password == ''){
//         this.disabled = true ;
//       }else{
//         this.disabled = false ;
//       }
//       // phone length check 
//       if(phoneToString.length < 9){
//         this.lengthValid = true;
//       }else{
//         this.lengthValid = false;
//       }
//       // phone required check 
//       if(this.phone == ''){
//         this.required = true ;
//       }else{
//         this.required = false ;
//       }
//       // password required check 
//       if( this.password == '' ){
//         this.passwordRequied = true ;
//       }else{
//         this.passwordRequied = false ;
//       }
//     },
//     chooseCountry(){
//       document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;
//     },


//   },
//   mounted(){
//     // this.getCountries();
//     document.querySelector('.p-dropdown-label').innerHTML = this.selectedCity.key ;

//     fetch('https://api.ipify.org?format=json')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('device_id', data.ip))
//     .catch(error => console.error(error));

//   },

//   created(){
//     this.getCountries();
//   }
}
</script>

<style scoped>
.p-dropdown{
  width:25%;
  top: 32px !important;
}
.p-dropdown {
    position: absolute !important;
    top: 32px !important;
    /* width: 17%; */
  }
  
 
</style>
<style lang="scss">
.p-dropdown .p-dropdown-trigger{
    width: 7px !important;
  }
 .p-input-icon-right > svg:last-of-type {
    left: 0.75rem !important;
    right: auto !important;
}
  .p-dropdown{
    background-color: #f8f8f8 !important;
    left: 0px;

  }
  .main_btn{
    &:disabled{
      opacity: .6;
      cursor: not-allowed;
    }
  }
  .form-control{
    height: 50px;
  }
  .otp-input{
    width: 60px;
    height: 60px;
    border-radius: 3px;
    border: 1px solid #ddd;
    background: #fafafa;
    margin: 0 15px;
    padding: 20px;
    font-size: 23px;
    &.is-complete{
      border: 2px solid #293255 !important;
      color: #293255 !important;
    }
    &:focus{
      border: 2px solid #293255 !important;
      color: #293255 !important;
    }
  }
  .p-component{
    font-family: inherit !important;
  }
  .logo{
    img{
      width: 150px;
      display: flex;
      justify-content: center;
      margin:auto;
      margin-bottom: 12px;
    }
  }
  .p-dialog-header{
    display: flex !important;
    justify-content: end !important;
    .p-dialog-header-icon{
      border: 1px solid #ccc !important;
    }
  }
  .contactUs{
    padding: 0 !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    border-bottom: 1px solid #293255  !important;
    border-radius: 0 !important;
  }
  .loginImage{
    transform: translateY(-28%);
  }
  .newAcc{
    p{
      color:#4F4F4F !important
    }
  }
  .forgetPass{
          color: #9B9B9B !important;
  }
  .breadcrumb{
    .inActive{
      color: #9B9B9B;
    }
    a,p{
      font-size: 14px;
      font-weight: 600;
    }
  }
  .loginParagraph{
    font-size: 16px;
  }
  .label{
    font-size: 16px;
  }
  .defaultInput input{
    background-color: #f8f8f8 ;
    padding-left:  40px ;
    padding-right:  40px ;
  }
  .defaultInput2{
    background-color: #f8f8f8 !important;
    padding-left:  40px !important;
    padding-right:  40px !important;

  }
  .inputIcon{
    position: absolute;
    top: 57%;
    right: 10px;
  }



</style>