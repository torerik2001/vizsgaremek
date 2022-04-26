import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import belepokView from "../views/belepokView.vue"
import registerView from "../views/registerView.vue"
import loginView from "../views/loginView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
    {
      path: '/belepok',
      name: 'belepo',
      component: belepokView
    },
    {
      path: '/register',
      name: '',
      component: registerView
    },
    {
      path: '/login',
      name: '',
      component: loginView
    },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
