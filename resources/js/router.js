import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./Pages/index.vue'),
    meta: {
        layout: 'home'
      }
  },
   {
    path: '/inspire',
    name: 'Inspire',
    component: () => import('./Pages/inspire.vue'),
    meta: {
        layout: 'home'
      }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: "",
 // base: process.env.MIX_APP_URL,
  routes
})



export default router