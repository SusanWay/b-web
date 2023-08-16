import { createRouter, createWebHashHistory } from 'vue-router'

import bCatalog from '../components/home/b-catalog.vue'
import bAccount from '../components/account/b-account.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: bCatalog
  },
  {
    path: '/accaunts/:id',
    name: 'account',
    component: bAccount
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
