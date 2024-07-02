import { createRouter, createWebHistory } from 'vue-router'
import ViewSearch from '../views/ViewSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: ViewSearch
    },
   
    {
      path: '/ViewLogin',
      name: 'ViewLogin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewLogin.vue')
    },
    {
      path: '/ViewSearch',
      name: 'ViewSearch',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewSearch.vue')
    },
    {
      path: '/ViewMyInventory',
      name: 'ViewMyInventory',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewMyInventory.vue')
    },
    {
      path: '/ViewProposalsReceived',
      name: 'ViewProposalsReceived',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewProposalsReceived.vue')
    },
    {
      path: '/ViewProposalsSent',
      name: 'ViewProposalsSent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ViewProposalsSent.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin.vue')
    },
    {
      path: '/ErrorSession',
      name: 'ErrorSession',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ErrorSession.vue')
    }


  ]
})

export default router
