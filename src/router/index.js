import { createRouter, createWebHistory } from 'vue-router'
import Actors from '../views/Actors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Actors',
      component: Actors
    },
    {
      path: '/shows',
      name: 'Shows',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Shows.vue')
    },
    {
      path: '/favourites/:id',
      name: 'Favourites',
      component: () => import('../views/FavouritesView.vue')
    },
    {
    	path: '/actors/:id',
    	name: 'actorsDetails',
    	component: () => import('../views/Details.vue')
    },
    {
    	path: '/shows/:id',
    	name: 'showsDetails',
    	component: () => import('../views/Details.vue')
    },
  ]
})

export default router
