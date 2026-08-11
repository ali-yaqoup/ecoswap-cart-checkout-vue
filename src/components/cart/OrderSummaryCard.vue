<template>
  <v-card flat class="ecoswap-summary-card pa-6">
    <h2 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-6">
      Order Summary
    </h2>

    <!-- Subtotal -->
    <div class="d-flex justify-space-between align-center mb-4 text-body-2">
      <span class="text-grey-darken-2">Subtotal ({{ cartStore.totalItems }} items)</span>
      <span class="font-weight-bold text-grey-darken-4">${{ cartStore.subtotal.toFixed(2) }}</span>
    </div>

    <!-- Shipping -->
    <div class="d-flex justify-space-between align-center mb-4 text-body-2">
      <span class="text-grey-darken-2">Shipping</span>
      <span class="shipping-text font-weight-medium">Calculated at checkout</span>
    </div>

    <!-- Estimated Tax -->
    <div class="d-flex justify-space-between align-center mb-6 text-body-2">
      <span class="text-grey-darken-2">Estimated Tax</span>
      <span class="font-weight-bold text-grey-darken-4">${{ cartStore.estimatedTax.toFixed(2) }}</span>
    </div>

    <v-divider class="mb-6"></v-divider>

    <!-- Total -->
    <div class="d-flex justify-space-between align-center mb-8">
      <span class="text-body-1 font-weight-bold text-grey-darken-4">Total</span>
      <span class="text-h6 font-weight-bold text-grey-darken-4">${{ cartStore.total.toFixed(2) }}</span>
    </div>

    <!-- Checkout Button -->
    <v-btn
      block
      size="large"
      class="ecoswap-btn-primary mb-4 text-none font-weight-bold py-3"
      height="48"
      :disabled="cartStore.items.length === 0"
      @click="goToShipping"
    >
      Checkout
      <v-icon end icon="mdi-arrow-right" class="ms-2"></v-icon>
    </v-btn>

    <!-- Continue Shopping Button -->
    <v-btn
      block
      size="large"
      variant="outlined"
      class="ecoswap-btn-secondary text-none font-weight-bold py-3"
      height="48"
      @click="continueShopping"
    >
      Continue Shopping
    </v-btn>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const goToShipping = () => {
  router.push('/checkout/shipping')
}

const continueShopping = () => {
  // Stay on cart or navigate to product listing if integrated
  router.push('/cart')
}
</script>

<style scoped>
.ecoswap-summary-card {
  border: 1px solid #e5e7eb !important;
  border-radius: 16px !important;
  background-color: #ffffff;
}

.shipping-text {
  color: #1b7a3e !important;
}

.ecoswap-btn-primary {
  background-color: #156532 !important;
  color: #ffffff !important;
  border-radius: 9999px !important;
  box-shadow: none !important;
}

.ecoswap-btn-primary:hover {
  background-color: #115228 !important;
}

.ecoswap-btn-secondary {
  background-color: #ffffff !important;
  color: #1b7a3e !important;
  border: 1px solid #e5e7eb !important;
  border-radius: 9999px !important;
  box-shadow: none !important;
}

.ecoswap-btn-secondary:hover {
  background-color: #f9fafb !important;
  border-color: #d1d5db !important;
}
</style>
