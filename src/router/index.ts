import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { projectAuth } from '@/firebase/config'
import { render } from 'vue'

const requireAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: Function
) => {
  let user = projectAuth.currentUser
  if (!user) next({ name: 'Login' })
  else next()
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: requireAuth,
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
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
