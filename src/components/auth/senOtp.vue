<template>
    <Dialog v-model:visible="otp" modal :style="{ width: '50vw' }">
        <h5 class="fw-bold text-center"> التاكد من رقم الموبايل </h5>
        <p class=" text-center"> على الرقم ده هيوصلك رسالة SMS اكتبه </p>
        <div class="logo">
        <img :src="require('@/assets/imgs/forget2.svg')" alt="">
        </div>

        <form ref="loginForm" @submit.prevent="sendOtp" class="flex flex-wrap gap-3 p-fluid">

            <!-- otp  -->
            <div class="position-relative flex-auto">
                <div
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
                        :num-inputs="4"
                        :should-auto-focus="true"
                        autofocus
                        input-type="letter-numeric"
                        style="flex-direction: row-reverse;"
                    />
                </div>

                
            </div>



            <!-- submit  -->
            <div class="mt-4">
                <button class="main_btn  pt-3 pb-3 fs-5 w-75 mx-auto flex_center" :disabled="disabled"> 

                    <span v-if="!spinner">تاكيد </span>
                  <div class="spinner-border mx-2" role="status" v-if="spinner">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
            </div>


            <div class="flex_between w-75 mx-auto d-flex">
                <div class="flex_center newAcc">
                    <p class="fs-6 mt-4 fw-6"> لم يتم الارسال ؟
                        <button type="button" class="mainColor fw-bold btn p-0" @click.prevent="resendCode" :disabled="isCodeSent"> اعادة ارسال</button> 
                    </p>  
                </div>
                
                <div v-if="resendTime">
                    <p v-if="timer > 0" class="text-center mt-3">متبقي<span class="mainColor">{{ timer }}ثانية</span> </p>
                </div>

            </div>

        </form>
    </Dialog>

    <!-- reset password  -->

    <Toast/>

</template>

<script>
import Dialog from 'primevue/dialog';
// reset passwrod component 
// import resetPass from './resetPassword.vue';
import Toast from 'primevue/toast';
// import { mapState } from 'vuex';
export default {
    data(){
        return{
            otp : false,
            timer: 60,
            intervalId: null,
            openReset : false,
            disabled : true,
            spinner : false,
            code : "",
            isCodeSent : false,
            resendTime : false,
            methodName : '',
            otpType : ''
        }
    },
    components:{
        Dialog,
        // resetPass ,
        Toast
    },
    watch:{
        openOtp(){
            this.otp = true ;
        },
        code(){
            if( this.code.length == 4 ){
                this.disabled = false ;
            }
        }
    },  
    // computed:{
    //     ...mapState(["auth"])
    // },
    methods:{
        startTimer() {
            this.intervalId = setInterval(() => {
                if (this.timer > 0) {
                this.timer--;
                } else {
                clearInterval(this.intervalId);
                    this.isCodeSent = false

                }
            }, 1000);
        },
        // submit otp form 
        async sendOtp(){
            

            this.disabled = true;
            this.spinner = true;
            const fd = new FormData();
            fd.append('phone', localStorage.getItem('phone'));
            fd.append('country_code', localStorage.getItem('country_code'));
            fd.append('device_id', localStorage.getItem('device_id'));
            fd.append('device_type', "web");
            fd.append('code', this.code);

            // check if the function for the active code or check forget password code 
            if(localStorage.getItem('otpType') == 'active'){
                this.methodName = 'auth/active'
            }else if( localStorage.getItem('otpType') == 'forget' ){
                this.methodName = 'auth/forgetCode'
            }
            
            try{
                const res = await this.$store.dispatch(this.methodName, fd);
                if( res.success == true ){
                    this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                    this.disabled = false ;
                    this.spinner = false;

                    
                    // check if the function for the active code or check forget password code 
                    if(localStorage.getItem('otpType') == 'active'){
                        localStorage.setItem('token', res.data.token);
                        setTimeout(() => {
                            this.otp = false ;
                            this.$router.push('/compeleteRegister');
                        }, 3000);

                    }else if( localStorage.getItem('otpType') == 'forget' ){
                        setTimeout(() => {
                            if( this.openReset == true || this.openReset == false ){
                                this.openReset = !this.openReset ;
                                this.otp = false ;
                            }
                            localStorage.setItem('code', this.code);
                        }, 3000);
                    }

                    
                }else{
                    this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                    this.disabled = false ;
                    this.spinner = false ;
                    }
            }catch(err){
                console.error(err)
            }
        },
        // resend code 
        async resendCode(){
            const fd = new FormData ;
            fd.append('phone', localStorage.getItem('phone'));
            fd.append('country_code', localStorage.getItem('country_code'));

            try{
                const res = await this.$store.dispatch('auth/resend', fd)
                if( res.success == true ){
                    this.$toast.add({ severity: 'success', summary: res.message, life: 3000 });
                    this.startTimer()
                    this.timer = 60 ;
                    this.isCodeSent = true ;
                    this.resendTime = true ;
                }else{
                    this.$toast.add({ severity: 'error', summary: res.message, life: 3000 });
                    
                    }
            }catch(err){
                console.error(err)
            }
        }
    },
    props:{
        openOtp : Boolean
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
}
</script>

<style>

</style>