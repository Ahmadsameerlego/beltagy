import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/loginView.vue";
import register from "../views/registerView.vue";
import allMonthes from "../views/allMonthes.vue";
import month from "../views/singleMonth.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    component: login,
  },
  {
    path: "/register",
    component: register,
  },
  {
    path: "/allMonthes",
    component: allMonthes,
  },
  {
    path: "/month/:id",
    component: month,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
