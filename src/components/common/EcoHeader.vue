<template>
  <header class="ecoswap-header bg-white border-b px-md-8 px-4 py-3 w-100">
    <v-container class="d-flex align-center justify-space-between max-width-1200 pa-0">
      <!-- Left: Logo -->
      <div class="d-flex align-center cursor-pointer" @click="goHome">
        <span class="text-h5 font-weight-bold text-green-darken-2 logo-text">EcoSwap</span>
      </div>

      <!-- Center: Search Bar -->
      <div class="header-search flex-grow-1 mx-4 mx-md-12 max-width-500">
        <v-text-field
          v-model="searchQuery"
          placeholder="Search EcoSwap..."
          prepend-inner-icon="mdi-magnify"
          variant="solo"
          flat
          density="compact"
          hide-details
          class="ecoswap-search-input"
        ></v-text-field>
      </div>

      <!-- Right: Navigation Icons -->
      <div class="d-flex align-center gap-4">
        <!-- Cart Icon with Active Green Line Indicator -->
        <div class="cart-icon-wrapper active position-relative pa-2">
          <v-badge
            :content="cartStore.totalItems"
            :model-value="cartStore.totalItems > 0"
            color="#1b7a3e"
            offset-x="4"
            offset-y="4"
          >
            <v-icon color="#1b7a3e" size="24">mdi-cart</v-icon>
          </v-badge>
          <div class="active-indicator"></div>
        </div>

        <!-- User Profile Icon -->
        <div class="pa-2 cursor-pointer" @click="postToShell('cart:go-to-account', {})">
          <v-icon color="#4b5563" size="24">mdi-account-outline</v-icon>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { postToShell } from '@/services/shellBridge'

const router = useRouter()
const cartStore = useCartStore()
const searchQuery = ref('')

const goHome = () => {
  router.push('/cart')
}
</script>

<style scoped>
.logo-text {
  color: #1b7a3e !important;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.max-width-1200 {
  max-width: 1200px;
  width: 100%;
}

.max-width-500 {
  max-width: 500px;
}

.ecoswap-search-input :deep(.v-field) {
  border-radius: 9999px !important;
  background-color: #f3f4f6 !important;
}

.ecoswap-search-input :deep(.v-field__input) {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  font-size: 14px;
}

.cart-icon-wrapper {
  cursor: pointer;
}

.cart-icon-wrapper.active .active-indicator {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 3px;
  background-color: #1b7a3e;
  border-radius: 2px;
}

.gap-4 {
  gap: 16px;
}
</style>
