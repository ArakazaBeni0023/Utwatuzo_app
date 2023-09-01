import { createRouter, createWebHistory } from 'vue-router'
import KwakiraView from '../views/KwakiraView.vue'

const routes = [
  {
    path: '/',
    component: KwakiraView
  },
  {
    path: '/kwatura',
    meta: {
      name: 'Kwatura',
    },
    component: () => import('../views/KwaturaView.vue')
  },
  {
    path: '/ububiko',
    meta: {
      name: 'Rōndera',
    },
    component: () => import('../views/UbubikoView.vue')
  },
  {
    path: '/insiguro',
    meta: {
      name: 'Insiguro ',
    },
    component: () => import('../views/InsiguroView.vue')
  },
  {
    path: '/amabwiriza',
    meta: {
      name: 'Amategeko',
    },
    component: () => import('../views/AmabwirizaView.vue')
  },
  {
    path: '/twandikire',
    meta: {
      name: 'Twandikire | Utwâtuzo',
    },
    component: () => import('../views/TwandikireView.vue')
  },
  {
    path: '/aboturibo',
    meta: {
      name: 'Turi Bande',
    },
    component: () => import('../views/AboTuribo.vue')
  },
  {
    path: '/igenamero',
    meta: {
      name: 'Igenamero',
    },
    component: () => import('../views/IgenameroView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.name ?? '| Utwâtuzo'
})

export default router