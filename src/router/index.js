import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import login from "../views/loginView.vue";
import register from "../views/registerView.vue";
import allMonthes from "../views/allMonthes.vue";
import month from "../views/singleMonth.vue";
import topStudents from "../views/topStudents.vue";
import profile from "../views/profileView.vue";
import changePassword from "../views/changePassword.vue";
import orders from "../views/ordersView.vue";
import termsCondition from "../views/termsConditions.vue";
import contact from "../views/contactUs.vue";
import quiz from "../views/quizView.vue";
import notification from '../views/notificationsView.vue'
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
  {
    path: "/topStudents",
    component: topStudents,
  },
  {
    path: "/profile",
    component: profile,
  },
  {
    path: "/changePassword",
    component: changePassword,
  },
  {
    path: "/orders",
    component: orders,
  },
  {
    path: "/termsCondition",
    component: termsCondition,
  },
  {
    path: "/contact",
    component: contact,
  },
  {
    path: "/quiz/:id",
    component: quiz,
  },
  {
    path: "/notification",
    component: notification,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
