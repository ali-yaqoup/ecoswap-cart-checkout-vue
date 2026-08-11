import { defineStore } from 'pinia'
import cameraImg from '@/assets/images/vintage_camera.jpg'
import caseImg from '@/assets/images/leather_case.jpg'
import filmImg from '@/assets/images/kodak_film.jpg'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [
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
    ],
    taxRate: 0.085, // ~$23.29 tax on $274 subtotal
  }),
  getters: {
    totalItems: (state) => {
      return state.items.reduce((acc, item) => acc + item.quantity, 0)
    },
    subtotal: (state) => {
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    estimatedTax: (state) => {
      // If items exist, tax matches Figma design baseline $23.29 when subtotal is $274
      if (state.items.length === 0) return 0
      const calculatedTax = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0) * state.taxRate
      return Math.round(calculatedTax * 100) / 100
    },
    total: (state) => {
      const sub = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
      if (sub === 0) return 0
      const tax = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0) * state.taxRate
      return Math.round((sub + tax) * 100) / 100
    },
  },
  actions: {
    incrementQuantity(id) {
      const item = this.items.find((i) => i.id === id)
      if (item) {
        item.quantity++
      }
    },
    decrementQuantity(id) {
      const item = this.items.find((i) => i.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
      }
    },
    removeItem(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    clearCart() {
      this.items = []
    },
  },
})
