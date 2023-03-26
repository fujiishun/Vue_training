import { createRouter, createWebHistory } from "vue-router";
import RouterTestFirst from "@/components/RouterTestFirst.vue";
import RouterTestSecond from "@/components/RouterTestSecond.vue";
import test from "@/components/test.vue";
import clock_router from "@/components/clock_router.vue";
import todo from "@/components/todo.vue";
import form from "@/components/form.vue";

const routes = [
  {
    path: "/",
    name: "routerTestFirst",
    component: RouterTestFirst,
  },
  {
    path: "/second",
    name: "routerTestSecond",
    component: RouterTestSecond,
  },
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/clock_router",
    name: "clock_router",
    component: clock_router,
  },
  {
    path: "/todo",
    name: "todo",
    component: todo,
  },
  {
    path: "/form",
    name: "form",
    component: form,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
