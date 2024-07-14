import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import primevue
import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

import ToastService from "primevue/toastservice";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

import VOtpInput from "vue3-otp-input";
// import axios
import axios from "axios";
axios.defaults.baseURL = "https://api.3moelbeltagy.com/api/";
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.lang = localStorage.getItem("locale");

// importing AOS css style globally
import "aos/dist/aos.css";

// import scss
import "./assets/css/style.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(FontAwesomeIcon)
  .component("v-otp-input", VOtpInput)
  .use(PrimeVue)
  .use(ToastService)

  .mount("#app");


  //https://3moelbeltagy.com/api/payment-response?id=200339758&pending=false&amount_cents=100&success=false&is_auth=false&is_capture=false&is_standalone_payment=true&is_voided=false&is_refunded=false&is_3d_secure=true&integration_id=4541047&profile_id=966408&has_parent_transaction=false&order=226517074&created_at=2024-07-15T00%3A28%3A34.486831&currency=EGP&merchant_commission=0&discount_details=%5B%5D&is_void=false&is_refund=false&error_occured=false&refunded_amount_cents=0&captured_amount=0&updated_at=2024-07-15T00%3A29%3A00.931085&is_settled=false&bill_balanced=false&is_bill=false&owner=1766987&data.message=Invalid+card+number&source_data.type=card&source_data.pan=2896&source_data.sub_type=MasterCard&acq_response_code=14&txn_response_code=DECLINED&hmac=0a5dda740969ab069a65dffd4a1c1ae0c5a1f0c27b81b5f54cb53cb3a5da36042b43bd60b07d0a26ae7aba63879675777272dc3e5925c76693da17987496a39e
