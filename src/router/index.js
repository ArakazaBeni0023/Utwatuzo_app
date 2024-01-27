import { createRouter, createWebHistory } from 'vue-router'
import KwakiraView from '../views/KwakiraView.vue'

const routes = [
  // kwakira
  {
    path: '/',
    component: KwakiraView
  },
  // kwatura
  {
    path: '/kwatura',
    meta: {
      name: 'Kwătura',
    },
    component: () => import('../views/KwaturaView.vue')
  },
  // ububiko
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
  //imyimenyerezo
  {
    path: '/imyimenyerezo',
    meta: {
      name: "Imyîmenyerezo y'ûtwâtuzo",
    },
    component: () => import('../views/ImyimenyerezoView.vue')
  },
  // uko ikora
  {
    path: '/uko_ikora',
    meta: {
      name: 'Ukó Ikora',
    },
    component: () => import('../views/Uko_ikoraView.vue')
  },
  //twandikire
  {
    path: '/twandikire',
    meta: {
      name: 'Twāndikire',
    },
    component: () => import('../views/TwandikireView.vue')
  },
  // abo turibo
  {
    path: '/aboturibo',
    meta: {
      name: 'Turi Bande',
    },
    component: () => import('../views/AboTuribo.vue')
  },
  // igenamero
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