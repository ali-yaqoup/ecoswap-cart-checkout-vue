import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    shippingAddress: {
      fullName: '',
      phoneNumber: '',
      address: '',
      city: '',
      postalCode: '',
    },
    paymentMethod: 'credit_card', // 'credit_card' | 'cod'
    paymentDetails: {
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
    },
    orderNumber: 'ECO-12345',
    estimatedDelivery: 'Friday, Oct 27',
  }),
  actions: {
    setShippingAddress(addressData) {
      this.shippingAddress = { ...this.shippingAddress, ...addressData }
    },
    setPaymentMethod(method) {
      this.paymentMethod = method
    },
    setPaymentDetails(details) {
      this.paymentDetails = { ...this.paymentDetails, ...details }
    },
  },
})
