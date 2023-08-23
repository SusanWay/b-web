import {createRouter, createWebHashHistory} from 'vue-router'

import bCatalog from '../components/home/b-catalog.vue'
import bAccount from '../components/account/b-account.vue'
import bTrade from '../components/trade/b-trade.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: bCatalog
    },
    {
        path: '/accaunts/:id/:id_inventory',
        name: 'account',
        component: bAccount
    },
    {
        path: '/trade',
        name: 'trade',
        component: bTrade
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
