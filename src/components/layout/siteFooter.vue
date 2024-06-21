<template>
  <div class="footer">
    <div class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-4">
            <div class="footer-colomn-me">
              <div class="flex-group-me foot-lo mb-4">
                <router-link to="/">
                  <img
                    :src="require('@/assets/imgs/logo (2).png')"
                    alt=""
                  />
                </router-link>
              </div>

              <p class="font15 main-p">
                ابقى متصل للحصول على التحديثات. تابعنا على وسائل التواصل
                الاجتماعي
              </p>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-12 mb-4">
            <div class="footer-colomn-me">
              <h6>عنا</h6>
              <ul>
                <li>
                  <router-link to="/termsCondition">
                    <div class="my-l">الشروط والاحكام</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/privacy">
                    <div class="my-l"> الخصوصية</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4">
            <div class="footer-colomn-me">
              <h6>لينكات مهمة</h6>
              <ul>
                <li>
                  <router-link to="/allMonthes">
                    <div class="my-l">دروس اونلاين</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/login">
                    <div class="my-l">انضم الينا</div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/profile">
                    <div class="my-l">طلباتك</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12 mb-4">
            <div class="footer-colomn-me">
              <h6>تابعنا</h6>
              <ul>
                <div class="flex-socials">
                  <a
                    v-for="social in socials"
                    :key="social"
                    :href="social.link"
                    target="_blank"
                  >
                    <img :src="social.icon" :alt="social.name" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="down-footer">
      <div class="container down-footer1">
        <div class="down-footer-r font14">جميع الحقوق محفوظة © 2024</div>
        <div class="down-footer-l font14">
          <a
            href="https://www.facebook.com/profile.php?id=100009373168874"
            target="_blank"
            style="color: inherit"
          >
            تنفيذ بواسطة Ahmed Samir
          </a>
          <!-- <img class="awamerLogo" :src="require('@/assets/imgs/awamrtlogo.jpeg')" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters , mapActions } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
      socials: [],
    };
  },
  methods: {
    async getSocials() {
      await axios.get('socials')
        .then((res) => {
          this.socials = res.data.data.socials;
        } )
      }
  },
  mounted() {
    this.getSocials();
  }
};
</script>

<style>
.down-footer1 {
  border-top: 1px solid #909090;
  padding-top: 15px;
}
p {
  font-weight: 600;
}
a {
  text-decoration: none !important;
  font-weight: 600;
}
.main-footer {
  padding-top: 50px;
  background-color: #15364d;
  color: var(--color-white);
}
.footer-colomn-me > img {
  width: 160px;
  margin-bottom: 12px;
}
.footer-colomn-me > h6 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
}
.footer-colomn-me li {
  margin-bottom: 26px;
}
.footer-colomn-me li a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-white);
}
.dot-foot {
  width: 6px;
  height: 6px;
  background-color: var(--color-white);
  margin-top: 4px;
}
.dot-foot-icon {
  color: var(--main-solid);
}
.flex-socials {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.flex-socials img {
  width: 24px;
  height: 24px;
}
.sm-img {
  width: 40px;
}
.down-footer {
  background-color: #15364d;
  color: var(--color-white);
  padding: 10px 0;
}
.down-footer .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.down-footer-m {
  display: flex;
  align-items: center;
  gap: 25px;
}
.down-footer-m img {
  width: 45px;
}
@media (max-width: 1024px) {
  .down-footer .container {
    flex-direction: column;
  }
  .down-footer {
    padding: 8px 0;
    margin-bottom: 65px;
  }
}
.foot-lo img {
  width: 120px;
}
.awamerLogo {
  width: 25px;
  height: 25px;
  margin: 0 10px;
}
</style>
