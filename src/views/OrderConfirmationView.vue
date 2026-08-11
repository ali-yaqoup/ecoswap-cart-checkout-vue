<template>
  <div class="d-flex flex-column min-vh-100 bg-white">
    <!-- Main Content Centered -->
    <v-main class="flex-grow-1 d-flex align-center justify-center py-12 px-4">
      <v-container class="max-width-600 text-center pa-0">
        <!-- Success Badge Circle -->
        <div class="success-icon-badge mx-auto mb-6 d-flex align-center justify-center">
          <v-icon icon="mdi-check" color="#228b45" size="36"></v-icon>
        </div>

        <!-- Success Message -->
        <h1 class="text-h4 font-weight-bold text-grey-darken-4 mb-2">
          Thank you for your order!
        </h1>
        <p class="text-body-1 text-grey-darken-1 mb-8">
          Your payment has been successfully processed.
        </p>

        <!-- Order Summary Details Card -->
        <v-card flat class="confirmation-card text-start pa-6 mx-auto mb-8">
          <!-- Order Number Row -->
          <div class="d-flex justify-space-between align-center mb-4">
            <span class="text-body-2 font-weight-medium text-grey-darken-2">
              Order Number
            </span>
            <span class="text-subtitle-1 font-weight-bold order-number-green">
              #{{ checkoutStore.orderNumber }}
            </span>
          </div>

          <v-divider class="mb-4"></v-divider>

          <!-- Estimated Delivery Row -->
          <div class="d-flex align-start gap-4 mb-4">
            <v-icon icon="mdi-truck-outline" color="#228b45" size="22" class="mt-1 flex-shrink-0"></v-icon>
            <div>
              <div class="text-caption font-weight-medium text-grey-darken-2">
                Estimated Delivery
              </div>
              <div class="text-body-2 font-weight-bold text-grey-darken-4">
                Arriving by {{ checkoutStore.estimatedDelivery }}
              </div>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <!-- Email Confirmation Notice -->
          <div class="d-flex align-start gap-4">
            <v-icon icon="mdi-email-outline" color="#228b45" size="20" class="mt-1 flex-shrink-0"></v-icon>
            <div class="text-caption text-grey-darken-2 leading-relaxed">
              We've sent a confirmation email with order details to your registered email address.
            </div>
          </div>
        </v-card>

        <!-- Continue Shopping Button -->
        <v-btn
          size="large"
          class="ecoswap-btn-primary px-8 text-none font-weight-bold"
          height="48"
          @click="handleContinueShopping"
        >
          Continue Shopping
        </v-btn>
      </v-container>
    </v-main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useCheckoutStore } from '@/stores/checkout'

const router = useRouter()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()

const handleContinueShopping = () => {
  // Clear cart after successful order placement
  cartStore.clearCart()
  router.push('/cart')
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.max-width-600 {
  max-width: 580px;
}

.success-icon-badge {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #eef7f0;
}

.confirmation-card {
  max-width: 480px;
  border: 1px solid #e5e7eb !important;
  border-radius: 20px !important;
  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02) !important;
}

.order-number-green {
  color: #228b45 !important;
}

.ecoswap-btn-primary {
  background-color: #48ad52 !important;
  color: #ffffff !important;
  border-radius: 9999px !important;
  font-size: 15px;
  box-shadow: none !important;
  min-width: 220px;
}

.ecoswap-btn-primary:hover {
  background-color: #3b9744 !important;
}

.gap-4 {
  gap: 16px;
}

.leading-relaxed {
  line-height: 1.5;
}
</style>
