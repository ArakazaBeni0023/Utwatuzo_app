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
      name: 'Kwătura',
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
  // insiguro
  {
    path: '/insiguro',
    meta: {
      name: 'Insígūro ',
    },
    component: () => import('../views/InsiguroView.vue')
  },
  //utwatuzo n'iki
  {
    path: '/utwatuzo_n_iki',
    meta: {
      name: 'Utwâtuzo ní ikí',
    },
    component: () => import('../views/UtwatuzoNikiView.vue')
  },
  //insiguro y utwatuzo
  {
    path: '/insiguro_y_utwatuzo',
    meta: {
      name: "Insígūro y'ûtwâtuzo",
    },
    component: () => import('../views/InsiguroYutwatuzoView.vue')
  },
  //iga kwatura
  {
    path: '/iga_kwatura',
    meta: {
      name: "Ígá kwătura",
    },
    component: () => import('../views/IgaKwaturaView.vue')
  },
  // uko ikora
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
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  document.title = to.meta?.name ?? 'Utwâtuzo'
})

export default router