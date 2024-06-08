import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashBoardView from "../views/UserDashBoardView.vue";
import NotFoundView from "../views/404.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import BlogEditView from "@/views/BlogEditView.vue";
import BlogView from "@/views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: UserDashBoardView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/blog/edit",
      name: "Blog Edit",
      component: BlogEditView,
    },
    {
      path: "/blog/new",
      name: "New Blog",
      component: BlogEditView,
    },
    {
      path: "/blog/:id",
      name: "Blog",
      component: BlogView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
