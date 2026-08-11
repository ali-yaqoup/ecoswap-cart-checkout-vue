<template>
  <v-card flat class="ecoswap-card pa-4 mb-4">
    <div class="d-flex align-center justify-space-between flex-wrap gap-4">
      <!-- Left: Thumbnail & Details -->
      <div class="d-flex align-center gap-4 flex-grow-1">
        <v-img
          :src="item.image"
          :alt="item.title"
          width="88"
          height="88"
          cover
          class="rounded-lg product-thumb flex-shrink-0"
        ></v-img>

        <div class="d-flex flex-column justify-space-between py-1">
          <div>
            <h3 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-1">
              {{ item.title }}
            </h3>
            <p class="text-body-2 text-grey-darken-1 mb-2">
              {{ item.description }}
            </p>
          </div>
          <div class="text-subtitle-1 font-weight-bold price-text">
            ${{ item.price.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- Right: Quantity Selector & Remove Icon -->
      <div class="d-flex align-center gap-4">
        <div class="ecoswap-qty-box">
          <v-btn
            icon="mdi-minus"
            variant="text"
            density="compact"
            size="small"
            class="ecoswap-qty-btn"
            :disabled="item.quantity <= 1"
            @click="cartStore.decrementQuantity(item.id)"
          ></v-btn>

          <span class="ecoswap-qty-val px-2">{{ item.quantity }}</span>

          <v-btn
            icon="mdi-plus"
            variant="text"
            density="compact"
            size="small"
            class="ecoswap-qty-btn"
            @click="cartStore.incrementQuantity(item.id)"
          ></v-btn>
        </div>

        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          color="grey-darken-1"
          density="comfortable"
          class="delete-btn"
          @click="cartStore.removeItem(item.id)"
        ></v-btn>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const cartStore = useCartStore()
</script>

<style scoped>
.price-text {
  color: #1b7a3e !important;
}

.product-thumb {
  border-radius: 10px;
  background-color: #f3f4f6;
}

.ecoswap-card {
  border: 1px solid #e5e7eb !important;
  border-radius: 16px !important;
  background-color: #ffffff;
}

.ecoswap-qty-box {
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
  padding: 2px 4px;
}

.ecoswap-qty-btn {
  color: #4b5563 !important;
}

.ecoswap-qty-val {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: #111827;
}

.delete-btn {
  opacity: 0.75;
  transition: opacity 0.2s;
}

.delete-btn:hover {
  opacity: 1;
  color: #ef4444 !important;
}

.gap-4 {
  gap: 16px;
}
</style>
