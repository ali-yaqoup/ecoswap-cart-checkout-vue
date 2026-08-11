import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartView from '@/views/ShoppingCartView.vue'

const routes = [
  {
    path: '/',
    redirect: '/cart',
  },
  {
    path: '/checkout',
    redirect: '/checkout/shipping',
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCartView,
  },
  {
    path: '/checkout/shipping',
    name: 'ShippingAddress',
    component: () => import('@/views/ShippingAddressView.vue'),
  },
  {
    path: '/checkout/payment',
    name: 'Payment',
    component: () => import('@/views/PaymentView.vue'),
  },
  {
    path: '/checkout/confirmation',
    name: 'OrderConfirmation',
    component: () => import('@/views/OrderConfirmationView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
