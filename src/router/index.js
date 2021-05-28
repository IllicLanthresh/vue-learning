import Vue from 'vue'
import VueRouter from 'vue-router'
import Cards from '../views/Cards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Cards
  },
  {
    path: '/card_qty/:card_qty/width/:width?',
    name: 'Cards',
    component: Cards
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
