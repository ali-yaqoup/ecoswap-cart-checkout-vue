<template>
  <div class="d-flex flex-column min-vh-100 ecoswap-bg">
    <!-- Header -->
    <header class="bg-white border-b px-md-8 px-4 py-4 w-100">
      <v-container class="d-flex align-center justify-space-between max-width-1200 pa-0">
        <div class="d-flex align-center cursor-pointer" @click="$router.push('/cart')">
          <span class="text-h5 font-weight-bold logo-text">EcoSwap</span>
        </div>
      </v-container>
    </header>

    <!-- Main Content -->
    <v-main class="flex-grow-1 py-10 py-md-16 px-4">
      <v-container class="max-width-1000 pa-0">
        <!-- Main Card containing 2 columns -->
        <v-card flat class="payment-card overflow-hidden">
          <v-row no-gutters class="align-stretch">
            <!-- Left Column: Order Summary Box -->
            <v-col cols="12" md="5" class="summary-panel pa-8 d-flex flex-column justify-space-between">
              <div>
                <h2 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-6">
                  Order Summary
                </h2>

                <div class="d-flex justify-space-between align-center mb-3 text-body-2">
                  <span class="text-grey-darken-2">Subtotal</span>
                  <span class="font-weight-medium text-grey-darken-4">
                    ${{ cartStore.subtotal.toFixed(2) }}
                  </span>
                </div>

                <div class="d-flex justify-space-between align-center mb-6 text-body-2">
                  <span class="text-grey-darken-2">Shipping</span>
                  <span class="font-weight-medium text-grey-darken-4">$5.00</span>
                </div>

                <v-divider class="mb-6"></v-divider>

                <div class="d-flex justify-space-between align-center">
                  <span class="text-body-1 font-weight-bold text-grey-darken-4">Total</span>
                  <span class="text-h6 font-weight-bold total-green-text">
                    ${{ (cartStore.subtotal + 5.00).toFixed(2) }}
                  </span>
                </div>
              </div>

              <!-- Bottom SSL Badge -->
              <div class="d-flex align-center pt-8 mt-auto">
                <v-icon icon="mdi-lock-outline" size="18" color="#374151" class="me-2"></v-icon>
                <span class="text-caption font-weight-medium text-grey-darken-3">
                  Secure SSL Checkout
                </span>
              </div>
            </v-col>

            <!-- Right Column: Payment Form -->
            <v-col cols="12" md="7" class="pa-8 bg-white">
              <!-- Back Link -->
              <div
                class="d-flex align-center cursor-pointer mb-6 back-link"
                @click="$router.push('/checkout/shipping')"
              >
                <v-icon icon="mdi-arrow-left" size="18" class="me-1" color="#374151"></v-icon>
                <span class="text-body-2 font-weight-medium text-grey-darken-3">Back</span>
              </div>

              <h2 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-6">
                Payment Method
              </h2>

              <!-- Payment Method Selector Toggle Buttons -->
              <div class="d-flex gap-4 mb-8">
                <v-btn
                  flat
                  height="44"
                  :class="[
                    'flex-grow-1 text-none font-weight-medium method-btn',
                    checkoutStore.paymentMethod === 'credit_card' ? 'active-method' : 'inactive-method'
                  ]"
                  @click="checkoutStore.setPaymentMethod('credit_card')"
                >
                  <v-icon icon="mdi-credit-card-outline" class="me-2" size="20"></v-icon>
                  Credit Card
                </v-btn>

                <v-btn
                  flat
                  height="44"
                  :class="[
                    'flex-grow-1 text-none font-weight-medium method-btn',
                    checkoutStore.paymentMethod === 'cod' ? 'active-method' : 'inactive-method'
                  ]"
                  @click="checkoutStore.setPaymentMethod('cod')"
                >
                  <v-icon icon="mdi-truck-outline" class="me-2" size="20"></v-icon>
                  Cash on Delivery
                </v-btn>
              </div>

              <!-- Credit Card Fields Form -->
              <v-form v-if="checkoutStore.paymentMethod === 'credit_card'" @submit.prevent="handlePayment">
                <!-- Card Number -->
                <div class="mb-4">
                  <label class="text-caption font-weight-medium text-grey-darken-3 mb-1 d-block">
                    Card Number
                  </label>
                  <v-text-field
                    v-model="cardForm.cardNumber"
                    placeholder="0000 0000 0000 0000"
                    prepend-inner-icon="mdi-credit-card-outline"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="ecoswap-input"
                  ></v-text-field>
                </div>

                <!-- Name on Card -->
                <div class="mb-4">
                  <label class="text-caption font-weight-medium text-grey-darken-3 mb-1 d-block">
                    Name on Card
                  </label>
                  <v-text-field
                    v-model="cardForm.cardName"
                    placeholder="Name on Card"
                    variant="outlined"
                    density="comfortable"
                    hide-details="auto"
                    class="ecoswap-input"
                  ></v-text-field>
                </div>

                <!-- Expiry Date & CVV -->
                <v-row class="mb-8 gy-4">
                  <v-col cols="12" sm="6" class="py-0">
                    <label class="text-caption font-weight-medium text-grey-darken-3 mb-1 d-block">
                      Expiry Date
                    </label>
                    <v-text-field
                      v-model="cardForm.expiryDate"
                      placeholder="MM/YY"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="ecoswap-input"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" class="py-0">
                    <label class="text-caption font-weight-medium text-grey-darken-3 mb-1 d-block">
                      CVV
                    </label>
                    <v-text-field
                      v-model="cardForm.cvv"
                      placeholder="CVV"
                      type="password"
                      variant="outlined"
                      density="comfortable"
                      hide-details="auto"
                      class="ecoswap-input"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <!-- Pay Now Button -->
                <v-btn
                  block
                  size="large"
                  type="submit"
                  class="ecoswap-btn-primary font-weight-bold text-none"
                  height="52"
                >
                  Pay Now
                  <v-icon end icon="mdi-arrow-right" class="ms-2"></v-icon>
                </v-btn>
              </v-form>

              <!-- Cash on Delivery Notice -->
              <div v-else class="text-center py-8">
                <v-icon size="48" color="#1b7a3e" class="mb-3">mdi-cash-fast</v-icon>
                <h3 class="text-subtitle-1 font-weight-bold mb-2">Cash on Delivery</h3>
                <p class="text-body-2 text-grey-darken-1 mb-6">
                  You will pay in cash directly to the delivery agent upon receiving your items.
                </p>
                <v-btn
                  block
                  size="large"
                  class="ecoswap-btn-primary font-weight-bold text-none"
                  height="52"
                  @click="handlePayment"
                >
                  Place Order
                  <v-icon end icon="mdi-arrow-right" class="ms-2"></v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-main>

    <!-- Footer -->
    <CheckoutFooter />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useCheckoutStore } from '@/stores/checkout'
import CheckoutFooter from '@/components/common/CheckoutFooter.vue'

const router = useRouter()
const cartStore = useCartStore()
const checkoutStore = useCheckoutStore()

const cardForm = reactive({
  cardNumber: checkoutStore.paymentDetails.cardNumber || '',
  cardName: checkoutStore.paymentDetails.cardName || '',
  expiryDate: checkoutStore.paymentDetails.expiryDate || '',
  cvv: checkoutStore.paymentDetails.cvv || '',
})

const handlePayment = () => {
  checkoutStore.setPaymentDetails(cardForm)
  // Mock Payment Success -> Navigate to Order Confirmation
  router.push('/checkout/confirmation')
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.max-width-1200 {
  max-width: 1200px;
}

.max-width-1000 {
  max-width: 960px;
}

.logo-text {
  color: #1b7a3e !important;
  letter-spacing: -0.5px;
}

.ecoswap-bg {
  background-color: #f8f9fa;
}

.payment-card {
  border: 1px solid #e5e7eb !important;
  border-radius: 24px !important;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03) !important;
}

.summary-panel {
  background-color: #f3f4f6;
  border-right: 1px solid #e5e7eb;
}

.total-green-text {
  color: #1b7a3e !important;
}

.back-link {
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.75;
}

.method-btn {
  border-radius: 9999px !important;
  border: 1px solid #d1d5db !important;
  box-shadow: none !important;
}

.active-method {
  background-color: #48ad52 !important;
  color: #ffffff !important;
  border-color: #48ad52 !important;
}

.inactive-method {
  background-color: #ffffff !important;
  color: #374151 !important;
}

.ecoswap-input :deep(.v-field) {
  border-radius: 10px !important;
  border-color: #9ca3af !important;
  background-color: #ffffff;
}

.ecoswap-btn-primary {
  background-color: #156532 !important;
  color: #ffffff !important;
  border-radius: 9999px !important;
  font-size: 16px;
  box-shadow: none !important;
}

.ecoswap-btn-primary:hover {
  background-color: #115228 !important;
}

.gap-4 {
  gap: 16px;
}
</style>
