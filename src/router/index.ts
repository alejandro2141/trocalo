import { createRouter, createWebHistory } from 'vue-router'
import ViewSearch from '../views/ViewSearch.vue'
import Welcome from '../views/Welcome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainView',
      component: Welcome
    },

    {
      path: '/Welcome',
      name: 'Welcome',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      props: true,
      component: () => import('../views/Welcome.vue')
    },

    {
      path: '/ViewObjectFromSocial',
      name: 'ViewObjectFromSocial',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //props: true,
      component: () => import('../views/Welcome.vue')
    },

    {
      path: '/RegisterFormWithInvitation',
      name: 'RegisterFormWithInvitation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterFormWithInvitation.vue')
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
      props: true,
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
      path: '/Monitoring_Admin',
      name: 'Monitoring_Admin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Monitoring_Admin.vue')
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
