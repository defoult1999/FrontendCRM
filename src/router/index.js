import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout: 'enter'},
    component: () => import('../views/RegView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'enter'},
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    meta: {layout: 'main'},
    component: () => import('../views/CampaignsView.vue')
  },
  {
    path: '/chats',
    name: 'Chats',
    meta: {layout: 'main'},
    component: () => import('../views/ChatsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
