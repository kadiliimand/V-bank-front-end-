import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewCustomer from '../views/NewCustomer.vue'
import allCustomers from '../views/allCustomers.vue'
import Balance from "../views/Balance";
import Deposit from "../views/Deposit";
import Withdraw from "../views/Withdraw";
import Transfer from "../views/Transfer";
import NewAccount from "../views/NewAccount";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/newCustomer',
    name: 'NewCustomer',
    component: NewCustomer
  },
  {
    path: '/Balance',
    name: 'Balance',
    component: Balance
  },
  {
    path: '/Deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/Withdraw',
    name: 'Withdraw',
    component: Withdraw
  },
  {
    path: '/Transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/NewAccount',
    name: 'NewAccount',
    component: NewAccount
  },
  {
    path: '/table',
    name: 'allCustomers',
    component: allCustomers
  }
]

const router = new VueRouter({
  routes
})

export default router
