<template>
  <section id="orders" class="mt-4">
    <div class="container">
      <!-- breadcrumb  -->
      <div class="breadcrumb d-flex">
        <router-link to="/" class="inActive"> الرئيسية</router-link>&nbsp; -
        &nbsp;
        <p class="active mainColor">الطلبات</p>
      </div>

      <!-- content  -->
      <section>
        <h5 class="fw-bold red mb-3">الطلبات</h5>

        <!-- <div v-if="load" class="row">
                    <div class="col-md-6 mb-3" v-for="skeleton in 2" :key="skeleton">
                        <Skeleton style="width:100%" height="4rem"></Skeleton>
                    </div>
                </div> -->

        <div class="row">
          <div class="col-md-6">
            <router-link :to="'month/' + 1">
              <!-- single card  -->
              <div class="single_card d-flex">
                <!-- card image  -->
                <div class="card_image">
                  <img :src="require('@/assets/imgs/edu2.jpg')" alt="" />
                </div>

                <!-- card details  -->
                <div class="card_details mx-3">
                  <h6 class="mainColor fw-bold mb-3">اسم المحاضرة</h6>

                  <p class="fw-bold">عنوان المحاضرة</p>

                  <div class="d-flex align-items-baseline">
                    <img :src="require('@/assets/imgs/bag.svg')" alt="" />
                    <p class="fw-bold mx-2">سعر المحاضرة : 100 جنية</p>
                  </div>

                  <!-- <div class="d-flex mb-3">
                    <img :src="require('@/assets/imgs/dot.svg')" alt="" />
                    <span class="mainColor2 fw-6 mx-2">
                      الرياض - تبعد 2 كم
                    </span>
                  </div> -->
                </div>

                <!-- absolute places  -->

                <!-- time  -->
                <div class="abs_details">
                  <img :src="require('@/assets/imgs/clock.svg')" alt="" />
                  <span class="grayColor mx-2">التاريخ: </span>
                  <span> 20 / 10 / 2024 </span>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- <div v-if="LenghtZero" class="text-center text-danger">
                    {{ $t('common.noOrders') }}
                </div> -->
      </section>

      <!-- <paginationComponentVue /> -->
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
<style lang="scss">
.single_card {
  position: relative;
  background-color: #f8f8f8f7;
  padding: 20px;
  border-radius: 10px;
  border-top: 3px solid #bacced;
  height: auto;
  // overflow-y: auto;
  .abs_time {
    position: absolute;
    top: 29px;
    left: 10px;
  }

  .abs_details {
    position: absolute;
    bottom: 10px;
    left: 19px;
  }

  .card_image {
    height: 100px;
    border-radius: 5px;

    img {
      width: 100px;
      height: 100%;
      object-fit: cover;
    }
  }
}

.card_para {
  color: #4f4f4f;
  line-height: 20px;
}

.jobInput {
  background-color: #fff;
  top: 0;
}

.externalBreadcrumb {
  margin: 0 122px;
}

.red {
  color: #eb5648;
}

#searchJob {
  background-color: rgba(240, 244, 255, 0.35);

  .p-dropdown .p-dropdown-label,
  .p-dropdown .p-dropdown-trigger {
    background-color: #fff !important;
  }

  .p-dropdown-trigger {
    svg {
      transform: translateX(10px);
    }
  }

  .search {
    width: 175px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 20px;
    margin-top: 28px;
    font-weight: 600;
  }
}

.p-dropdown {
  overflow: auto;
}
</style>
