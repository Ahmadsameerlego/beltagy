<template>
  <section id="orders" class="mt-4">
    <div class="container">
      <!-- breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية</router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">الشروط والاحكام</p>
      </div>

      <!-- content  -->
      <section>
        <h5 class="fw-bold red mb-3">الشروط والاحكام</h5>

        <p class="mainColor fw-6 fs-18">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non
          maxime ipsa vitae repudiandae? Possimus reprehenderit deserunt illo
          quos perspiciatis recusandae quis tempora, maiores quia explicabo
          iusto at consectetur aliquid.
        </p>
      </section>
    </div>
  </section>
</template>

<script>
// import axios from 'axios';
// import Skeleton from 'primevue/skeleton';

// // import paginationComponentVue from '../layout/paginationComponent.vue'
// export default {
//     data(){
//         return{
//             orders : [],
//             load : true,
//             LenghtZero : false
//         }
//     },
//     components:{
//         // paginationComponentVue ,
//         Skeleton
//     },
//     methods:{
//         // get orders
//         async getOrders(){
//             const token = localStorage.getItem('token');
//             const headers = {
//                 Authorization: `Bearer ${token}`,
//             };
//             await axios.get('user/job-applications', {headers})
//             .then( (res)=>{
//                 if( res.data.data.length > 0 ){
//                     this.orders = res.data.data ;
//                     this.load = false ;
//                 }else{
//                     this.LenghtZero = true ;
//                     this.load = false ;
//                 }
//             } )
//         }
//     },
//     mounted(){
//         this.getOrders()
//     }
// }
</script>
<style lang="scss"></style>
