<template>
  <header class="ecoswap-checkout-header bg-white border-b px-md-8 px-4 py-4 w-100">
    <v-container class="d-flex align-center justify-space-between max-width-1200 pa-0">
      <!-- Left: Back Button -->
      <div class="d-flex align-center cursor-pointer back-link" @click="handleBack">
        <v-icon icon="mdi-arrow-left" size="20" class="me-1" color="#374151"></v-icon>
        <span class="text-body-2 font-weight-medium text-grey-darken-3">{{ backText }}</span>
      </div>

      <!-- Center: Logo -->
      <div class="d-flex align-center cursor-pointer" @click="goHome">
        <span class="text-h5 font-weight-bold text-green-darken-2 logo-text">EcoSwap</span>
      </div>

      <!-- Right: Secure Checkout Badge -->
      <div class="d-flex align-center gap-1 secure-badge">
        <v-icon icon="mdi-lock" size="18" color="#1b7a3e" class="me-1"></v-icon>
        <span class="text-caption font-weight-bold secure-text">Secure Checkout</span>
      </div>
    </v-container>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  backText: {
    type: String,
    default: 'Back to Cart',
  },
  backTo: {
    type: String,
    default: '/cart',
  },
})

const router = useRouter()

const handleBack = () => {
  router.push(props.backTo)
}

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

.back-link {
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.8;
}

.secure-text {
  color: #1b7a3e !important;
}

.secure-badge {
  color: #1b7a3e;
}
</style>
