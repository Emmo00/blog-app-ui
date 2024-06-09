import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserDashBoardView from "../views/UserDashBoardView.vue";
import NotFoundView from "../views/404.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import BlogEditView from "@/views/BlogEditView.vue";
import BlogView from "@/views/BlogView.vue";
import { loggedIn } from "@/utils/requests";
import auth from "@/utils/auth";

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
      path: "/blogs/new",
      name: "New Blog",
      component: BlogEditView,
    },
    -{
      path: "/blogs/edit/:id",
      name: "Edit Blog",
      component: BlogEditView,
    },
    {
      path: "/blogs/:id",
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

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await loggedIn();
  if (isLoggedIn) auth.login();
  else auth.logout();
  next();
});

export default router;
