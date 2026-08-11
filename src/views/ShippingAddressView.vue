<template>
  <div class="d-flex flex-column min-vh-100 ecoswap-bg">
    <!-- Checkout Header -->
    <CheckoutHeader back-text="Back to Cart" back-to="/cart" />

    <!-- Main Content -->
    <v-main class="flex-grow-1 py-10 py-md-16 px-4">
      <v-container class="max-width-1200 pa-0">
        <!-- Form Card -->
        <v-card flat class="shipping-card mx-auto pa-6 pa-md-10 my-4 my-md-6">
          <h1 class="text-h4 font-weight-bold text-center text-grey-darken-4 mb-2">
            Shipping Address
          </h1>
          <p class="text-body-2 text-center text-grey-darken-1 mb-8">
            Where should we send your sustainable goods?
          </p>

          <v-form ref="shippingForm" v-model="isFormValid" @submit.prevent="handleSubmit">
            <!-- Full Name -->
            <div class="mb-4">
              <v-text-field
                v-model="form.fullName"
                placeholder="Full Name"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="ecoswap-input"
                :rules="[v => !!v || 'Full Name is required']"
              ></v-text-field>
            </div>

            <!-- Phone Number -->
            <div class="mb-4">
              <v-text-field
                v-model="form.phoneNumber"
                placeholder="Phone Number"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="ecoswap-input"
                :rules="[v => !!v || 'Phone Number is required']"
              ></v-text-field>
            </div>

            <!-- Address -->
            <div class="mb-4">
              <v-text-field
                v-model="form.address"
                placeholder="Address"
                variant="outlined"
                density="comfortable"
                hide-details="auto"
                class="ecoswap-input"
                :rules="[v => !!v || 'Address is required']"
              ></v-text-field>
            </div>

            <!-- City & Postal Code -->
            <v-row class="mb-6 gy-4">
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  v-model="form.city"
                  placeholder="City"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  class="ecoswap-input"
                  :rules="[v => !!v || 'City is required']"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-0">
                <v-text-field
                  v-model="form.postalCode"
                  placeholder="Postal Code"
                  variant="outlined"
                  density="comfortable"
                  hide-details="auto"
                  class="ecoswap-input"
                  :rules="[v => !!v || 'Postal Code is required']"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Continue Button -->
            <v-btn
              block
              size="large"
              type="submit"
              class="ecoswap-btn-primary font-weight-bold text-none"
              height="52"
            >
              Continue to Payment
              <v-icon end icon="mdi-arrow-right" class="ms-2"></v-icon>
            </v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-main>

    <!-- Checkout Footer -->
    <CheckoutFooter />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCheckoutStore } from '@/stores/checkout'
import CheckoutHeader from '@/components/common/CheckoutHeader.vue'
import CheckoutFooter from '@/components/common/CheckoutFooter.vue'

const router = useRouter()
const checkoutStore = useCheckoutStore()
const shippingForm = ref(null)
const isFormValid = ref(false)

const form = reactive({
  fullName: checkoutStore.shippingAddress.fullName || '',
  phoneNumber: checkoutStore.shippingAddress.phoneNumber || '',
  address: checkoutStore.shippingAddress.address || '',
  city: checkoutStore.shippingAddress.city || '',
  postalCode: checkoutStore.shippingAddress.postalCode || '',
})

const handleSubmit = async () => {
  if (shippingForm.value) {
    const { valid } = await shippingForm.value.validate()
    if (valid) {
      checkoutStore.setShippingAddress(form)
      router.push('/checkout/payment')
    }
  }
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
  background-color: #ffffff;
}

.shipping-card {
  max-width: 560px;
  border: 1px solid #e5e7eb !important;
  border-radius: 24px !important;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03) !important;
}

.ecoswap-input :deep(.v-field) {
  border-radius: 10px !important;
  border-color: #9ca3af !important;
  background-color: #ffffff;
}

.ecoswap-input :deep(.v-field__outline__start),
.ecoswap-input :deep(.v-field__outline__end) {
  border-color: #9ca3af !important;
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
</style>
