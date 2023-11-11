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
      name: 'Kwâtura',
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
    path: '/uko_ikora',
    meta: {
      name: 'Ukó Ikora',
    },
    component: () => import('../views/Uko_ikoraView.vue')
  },
  {
    path: '/twandikire',
    meta: {
      name: 'Twāndikire',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.name ?? 'Utwâtuzo'
})

export default router