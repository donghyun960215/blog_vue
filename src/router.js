import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import List from './components/List.vue'
import Details from './components/Details.vue'

const routes = [
  {
    path: "/Home",
    component: Home,
  },
  {
    path: "/List",
    component: List,
  },
  {
    path: "/Details",
    component: Details,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 