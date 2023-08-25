import { createRouter, createWebHistory } from 'vue-router'
import KwakiraView from '../views/KwakiraView.vue'

const routes = [
  {
    path: '/',
    name: 'kwakira',
    component: KwakiraView
  },
  {
    path: '/kwatura',
    name: 'kwatura',
    component: () => import('../views/KwaturaView.vue')
  },
  {
    path: '/ububiko',
    name: 'ububiko',
    component: () => import('../views/UbubikoView.vue')
  },
  {
    path: '/insiguro',
    name: 'insiguro',
    component: () => import('../views/InsiguroView.vue')
  },
  {
    path: '/amabwiriza',
    name: 'Amabwiriza',
    component: () => import('../views/AmabwirizaView.vue')
  },
  {
    path: '/twandikire',
    name: 'Twandikire',
    component: () => import('../views/TwandikireView.vue')
  },
  {
    path: '/igenamero',
    name: 'Igenamero',
    component: () => import('../views/IgenameroView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router