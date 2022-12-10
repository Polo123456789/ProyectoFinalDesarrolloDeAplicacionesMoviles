import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import RegisterTravelPage from '@/views/RegisterTravelPage.vue';
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  }, 
  {
    path: '/registerTravel',
    name: 'Register Travel',
    component: RegisterTravelPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }, 
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})

export default router
