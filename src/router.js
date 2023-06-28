import { createWebHistory, createRouter } from "vue-router";
import Home from './components/BlogHome.vue'
import List from './components/ContentList.vue'
import Details from './components/ContentDetails.vue'

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