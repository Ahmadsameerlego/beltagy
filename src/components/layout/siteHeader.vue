<template>
  <header id="header" class="pt-1 pb-1">
    <div class="container">
      <!-- full header  -->
      <div class="d-flex justify-content-between align-items-center">
        <!-- logo  -->
        <div class="logo">
          <router-link to="/">
            <img :src="require('@/assets/imgs/logo (2).png')" alt="site logo" />
          </router-link>
        </div>

        <!-- nav bar  -->
        <nav class="navbar navbar-expand-lg" ref="toggle_nv">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/">
                الرئيسية
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/allMonthes"
                >دروس اونلاين</router-link
              >
            </li>

            <!-- <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/topStudents">
                الاوائل
              </router-link>
            </li> -->

            <li class="nav-item">
              <router-link class="nav-link fw-bold" to="/termsCondition">
                الشروط والاحكام
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- toggle icon  -->
        <span class="toggle_bar" @click="toggle_bar" ref="toggleICon">
          <i class="fa-solid fa-bars"></i>
          <!-- <i class="fa-solid fa-x" v-else-if="open==false"></i> -->
        </span>

        <!-- user interaction  -->
        <div
          class="user_interaction d-flex justify-content-between align-items-center"
        >
          <!-- search  -->
          <router-link to="/exploreJobs" class="search flex_center mb-0 mx-2">
            <img :src="require('@/assets/imgs/Vector.png')" alt="" />
          </router-link>
          <!-- alert  -->
          <router-link
            to="/notificationPage"
            class="alert flex_center mb-0 mx-2 position-relative"
            v-if="isLoggedIn"
          >
            <i class="fa-regular fa-bell"></i>
            <span class="not_count"> 2 </span>
          </router-link>

          <!-- messages  -->
          <router-link
            to="/rooms"
            class="message flex_center mb-0 mx-2"
            v-if="isLoggedIn"
          >
            <img :src="require('@/assets/imgs/messages.png')" alt="" />
          </router-link>

          <!-- lang  -->
          <!-- <button class="lang flex_center mx-2" @click="switchLang"> 
                    <span v-if="$i18n.locale=='en'" >AR</span>
                    <span v-else-if="$i18n.locale=='ar'" >EN</span> 
                </button> -->

          <!-- login  -->
          <router-link class="bordered_btn mx-2" to="/login">
            تسجيل الدخول
          </router-link>
          <!-- register  -->
          <!-- <router-link class="main_btn mx-2" to="/register" v-if="!isLoggedIn"> {{ $t('nav.register') }} </router-link> -->

          <!-- profile dropdown  -->
          <div class="dropdown profile br-5">
            <button
              class="btn dropdown-toggle px-4 br-5 pt-2 pb-2"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="
                  require('@/assets/imgs/113472-happy-eye-emoji-animation.png')
                "
                class="mx-2 imoji"
                width="30"
                height="30"
                alt=""
              />
              <span class="name">ازيك يا Ahmed</span>

              <i class="fa-regular fa-user user_profile"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li class="mb-3">
                <router-link
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  to="/profile"
                >
                  <span class="profile_icon flex_center">
                    <i class="fa-solid fa-user-pen"></i>
                  </span>
                  <span class="mx-2 fw-6"> الملف الشخصي </span>
                </router-link>
              </li>

              <li class="mb-3">
                <router-link
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  to="/orders"
                >
                  <span class="profile_icon flex_center">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </span>
                  <span class="mx-2 fw-6"> طلباتك </span>
                </router-link>
              </li>

              <li class="mb-3">
                <button
                  class="dropdown-item d-flex justify-content-start align-items-center"
                  @click.prevent="signOut"
                >
                  <span class="profile_icon logout flex_center">
                    <i class="fa-solid fa-right-from-bracket"></i>
                  </span>
                  <span class="mx-2 fw-6"> تسجيل الخروج </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  <Toast />
</template>

<script>
// import { mapState } from "vuex" ;
// import axios from 'axios';
// import Toast from 'primevue/toast';

// export default {
//     data(){
//         return{
//             open : true,
//             isLoggedIn : false,
//             username : '',
//             count : 0
//         }
//     },
//     computed:{
//         ...mapState(["auth"])
//     },
//     components:{
//         Toast
//     },
//     methods:{
//         // switch lang
//         switchLang(){
//             let lang = 'ar';
//             if(this.$i18n.locale == 'ar'){
//                 lang = 'en';
//                 this.arabic = false;
//             }

//             if(localStorage.getItem('locale')){
//                 localStorage.removeItem('locale');
//             }

//             localStorage.setItem('locale' ,lang);
//             this.arabic = true;

//             location.reload()
//         },

//         // toggle bar
//         toggle_bar(){
//             this.$refs.toggle_nv.classList.toggle('active');

//             let icon = this.$refs.toggleICon.children[0] ;
//             if( !icon.classList.contains('fa-x') ){
//                 icon.classList.add('fa-x');
//             }else{
//                 icon.classList.add('fa-bars');
//             }
//         },

//         // get notfication counter
//         async getNotCounter(){
//             const token = localStorage.getItem('token');
//             const headers = {
//                 Authorization: `Bearer ${token}`,
//             };
//             await axios.get('user/notifications/count', {headers})
//             .then( (res)=>{
//                 if( res.data.key === 'success' ){
//                     this.count = res.data.data.count ;
//                 }
//             })
//         },

//         // close nav bar outside
//         // closeNavbarOnClickOutside(event) {
//         //     const navBar = this.$refs.toggle_nv;
//         //     const bar = this.$refs.toggleICon.children[0];

//         //     if (!navBar.contains(event.target) && !bar.contains(event.target)) {
//         //         this.$refs.toggle_nv.classList.remove('active');
//         //         this.$refs.toggleICon.children[0].classList.add('fa-bars');
//         //     }
//         // },
//         // sign out
//         async signOut(){
//             const token = localStorage.getItem('token');
//             // const token = JSON.parse(localStorage.getItem('user'))[0].token;
//             const headers = {
//                 Authorization: `Bearer ${token}`,
//             };
//             await axios.delete('user/logout', {headers})
//             .then( (res)=>{
//                 if( res.data.key == 'success' ){
//                     this.$toast.add({ severity: 'success', summary: res.data.msg, life: 3000 });
//                     setTimeout(() => {
//                         this.$router.push('/')
//                     }, 1000);
//                     location.reload();
//                     localStorage.removeItem('token');
//                     localStorage.removeItem('isAuth');
//                     localStorage.removeItem('user');
//                     localStorage.removeItem('isCompleted');
//                     localStorage.removeItem('isActived');
//                 }else{
//                     this.$toast.add({ severity: 'error', summary: res.data.msg, life: 3000 });
//                 }
//             } )
//         }
//     },

//     mounted(){
//         // window.addEventListener('click', this.closeNavbarOnClickOutside);
//         if( localStorage.getItem('token') ){
//             this.isLoggedIn = true ;
//         }
//         if( localStorage.getItem('user') ){
//             this.username = JSON.parse(localStorage.getItem('user')).name ;
//         }
//         this.getNotCounter();
//     },
//     beforeUnmount(){
//         // window.addEventListener('click', this.closeNavbarOnClickOutside);
//     }
// }
</script>

<style lang="scss">
.not_count {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(193, 70, 70);
  color: #fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  left: -8px;
}
.user_profile,
.toggle_bar {
  display: none;
}
.toggle_bar {
  cursor: pointer;
  svg {
    font-size: 25px;
  }
}
.profile_icon {
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 5px;
  width: 25px;
  height: 25px;
  svg {
    color: #333;
    font-size: 12px;
  }
  &.logout {
    background-color: red;
    border: 1px solid red;
    svg {
      color: #fff;
      transform: rotate(180deg);
    }
  }
}
.dropdown-menu {
  border: none !important;
  box-shadow: 0px 0px 10px #33333346;
}
.dropdown {
  &.profile {
    background-color: #15364d !important;
    button.dropdown-toggle {
      background-color: #15364d !important;
      color: #fff;
    }
  }
}
#header {
  box-shadow: 0px 0px 10px #3333336b;
  width: 100%;
  background-color: #15364d;
  .logo {
    width: 99px;
    height: 90px;
    img { 
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .user_interaction {
    .lang,
    .alert,
    .search,
    .message {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .alert {
      background-color: #c5ccda7d;
      color: #414e67;
      border: 1px solid #94a3c0;
      font-size: 18px;
    }
    .lang {
      background-color: #fff;
      color: #e57d61;
      border: 1px solid #e57d61;
      font-size: 13px;
      font-weight: 600;
      width: 34px;
      height: 34px;
    }
    .search {
      background-color: #e983852e;
      border: 1px solid #e98385;
      width: 34px;
      height: 34px;
      img {
        width: 16px;
        height: 16px;
      }
    }
    .message {
      background-color: #f1a3ff35;
      border: 1px solid #f1a3ff;
      width: 34px;
      height: 34px;
      img {
        width: 19px;
        height: 19px;
      }
    }
  }
  .navbar {
    a {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      margin: 0 12px;
      &.router-link-active {
        color: #a79483;
      }
    }
  }
}
</style>
