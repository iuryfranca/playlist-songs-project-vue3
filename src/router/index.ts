import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/auth/Signup.vue'),
  },
  {
    path: '/playlists/create',
    name: 'CreatePlaylist',
    component: () => import('@/views/playlists/CreatePlaylist.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
