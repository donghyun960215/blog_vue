import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import List from './components/List.vue'
import Details from './components/Details.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/details/:id",
    component: Details,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 