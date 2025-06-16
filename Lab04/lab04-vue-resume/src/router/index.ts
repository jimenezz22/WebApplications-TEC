import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/Education.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/interests',
      name: 'interests',
      component: () => import('../views/Interests.vue')
    },
    {
      path: '/awards',
      name: 'awards',
      component: () => import('../views/Awards.vue')
    }
  ]
})

export default router