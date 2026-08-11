<template>
  <div class="d-flex flex-column min-vh-100 ecoswap-bg">
    <!-- Top Header -->
    <EcoHeader />

    <!-- Main Content -->
    <v-main class="flex-grow-1 py-8">
      <v-container class="max-width-1200 px-4 px-md-8">
        <!-- Page Section Title -->
        <h1 class="text-subtitle-1 font-weight-medium text-grey-darken-3 mb-6">
          Your Cart
        </h1>

        <!-- Cart Content Layout -->
        <v-row class="align-start gy-6">
          <!-- Left Column: Cart Items -->
          <v-col cols="12" md="8">
            <template v-if="cartStore.items.length > 0">
              <CartItemCard
                v-for="item in cartStore.items"
                :key="item.id"
                :item="item"
              />
            </template>

            <!-- Empty Cart State -->
            <v-card v-else flat class="ecoswap-card pa-8 text-center">
              <v-icon size="64" color="grey-lighten-1" class="mb-4">mdi-cart-off</v-icon>
              <h2 class="text-h6 font-weight-bold text-grey-darken-3 mb-2">
                Your cart is empty
              </h2>
              <p class="text-body-2 text-grey-darken-1 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <v-btn
                class="ecoswap-btn-primary px-8"
                height="44"
                @click="resetDemoCart"
              >
                Restore Demo Cart Items
              </v-btn>
            </v-card>
          </v-col>

          <!-- Right Column: Order Summary -->
          <v-col cols="12" md="4">
            <OrderSummaryCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Footer -->
    <EcoFooter />
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import EcoHeader from '@/components/common/EcoHeader.vue'
import EcoFooter from '@/components/common/EcoFooter.vue'
import CartItemCard from '@/components/cart/CartItemCard.vue'
import OrderSummaryCard from '@/components/cart/OrderSummaryCard.vue'
import cameraImg from '@/assets/images/vintage_camera.jpg'
import caseImg from '@/assets/images/leather_case.jpg'
import filmImg from '@/assets/images/kodak_film.jpg'

const cartStore = useCartStore()

const resetDemoCart = () => {
  cartStore.items = [
    {
      id: 1,
      title: 'Vintage Film Camera',
      description: 'Classic 35mm manual',
      price: 145.00,
      quantity: 1,
      image: cameraImg,
    },
    {
      id: 2,
      title: 'Leather Camera Case',
      description: 'Hand-stitched, tan',
      price: 45.00,
      quantity: 1,
      image: caseImg,
    },
    {
      id: 3,
      title: 'Kodak Portra 400',
      description: '3-Pack, 35mm color negative',
      price: 42.00,
      quantity: 2,
      image: filmImg,
    },
  ]
}
</script>

<style scoped>
.min-vh-100 {
  min-height: 100vh;
}

.max-width-1200 {
  max-width: 1200px;
}

.ecoswap-bg {
  background-color: #f8f9fa;
}

.ecoswap-card {
  border: 1px solid #e5e7eb !important;
  border-radius: 16px !important;
  background-color: #ffffff;
}

.ecoswap-btn-primary {
  background-color: #1b7a3e !important;
  color: #ffffff !important;
  border-radius: 9999px !important;
  text-transform: none !important;
  font-weight: 600 !important;
  box-shadow: none !important;
}
</style>
