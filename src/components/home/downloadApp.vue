<template>
  <section id="downloadApp" class="mt-5" style="overflow:hidden">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-2">
          <h4 class="whiteColor mt-5">حمل تطبيقنا الان</h4>
          <p class="whiteColor down_desc">حمل التطبيق</p>

          <div class="d-flex mt-5">
            <a href="https://play.google.com/store/apps/details?id=com.edu.beltagy" target="_blank" class="downloadIcon">
              <img :src="require('@/assets/imgs/googlePlay.png')" alt="" />
            </a>

            <a href="https://apps.apple.com/eg/app/3mo-elbeltagy/id6469101660" target="_blank" class="downloadIcon mx-3">
              <img :src="require('@/assets/imgs/appStore.png')" alt="" />
            </a>
          </div>
        </div>

        <div class="col-md-6">
          <div class="downloadImage d-flex justify-content-between">
            <img
              class="w-100 h-100 mx-2 down-image"
              :src="require('@/assets/imgs/down1.png')"
              alt=""
            />
            <img
              class="w-100 h-100 mx-2 down-image"
              :src="require('@/assets/imgs/down3.png')"
              alt=""
            />
            <img
              class="w-100 h-100 mx-2 down-image"
              :src="require('@/assets/imgs/down2.png')"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapGetters , mapActions } from 'vuex';
// export default {
//     computed:{
//         ...mapGetters('setting', ['settings', 'google_play_link', 'app_store_link', 'download_app_ar', 'download_app_image'])
//     },
//     methods:{
//         ...mapActions( 'setting' , ['getSettings'] )
//     },
//     mounted(){
//         this.getSettings();
//     }
// }
</script>

<style lang="scss">
.down-image{
  transform: rotate(-30deg);
  border-radius: 10px;
}
.downloadImage{
  width : 200px ;
}
#downloadApp {
  background: linear-gradient(
    225deg,
    #15364d 0%,
    #475487 21.95%,
    #546099 71.09%,
    #15364d 100%
  );
  .downloadIcon {
    width: 170px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .down_desc {
    line-height: 2;
    font-size: 15px;
    margin-top: 8px;
  }
}
</style>
