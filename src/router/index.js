import { createRouter, createWebHistory } from '@ionic/vue-router';
import ProductsPage from '../pages/ProductsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/product'
  },
  {
    path: '/product',
    component: ProductsPage
  },
  {
    path: '/product/:id',
    component: () => import('../pages/ProductDetailsPage.vue')  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
