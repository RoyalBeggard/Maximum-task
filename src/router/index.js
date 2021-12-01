import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/success-page",
    name: "SuccessPage",
    component: () => import("@/views/SuccessPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
