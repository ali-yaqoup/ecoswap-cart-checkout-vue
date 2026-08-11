<template>
  <footer class="ecoswap-footer bg-white mt-12 py-8 border-t">
    <v-container class="max-width-1200 px-4 px-md-8">
      <v-row align="start" justify="space-between" class="gy-6">
        <!-- Left Section: Logo & Copyright -->
        <v-col cols="12" md="4">
          <div class="footer-brand font-weight-bold text-h6 text-green-darken-2 mb-2">
            EcoSwap
          </div>
          <div class="text-body-2 text-grey-darken-1">
            © 2024 EcoSwap Marketplace. All rights reserved.
          </div>
        </v-col>

        <!-- Right Section: Navigation Links -->
        <v-col cols="12" md="7" class="d-flex flex-wrap justify-md-end gap-x-8 gap-y-4">
          <div class="footer-link-group d-flex flex-column gap-3">
            <a href="#" class="footer-link">About Us</a>
            <a href="#" class="footer-link">Sell an Item</a>
          </div>

          <div class="footer-link-group d-flex flex-column gap-3">
            <a href="#" class="footer-link">Sustainability</a>
            <a href="#" class="footer-link">Help Center</a>
          </div>

          <div class="footer-link-group d-flex flex-column gap-3">
            <a href="#" class="footer-link">Privacy Policy</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.ecoswap-footer {
  border-top: 1px solid #e5e7eb;
}

.max-width-1200 {
  max-width: 1200px;
}

.footer-brand {
  color: #1b7a3e !important;
}

.footer-link {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #1b7a3e;
}

.gap-x-8 {
  column-gap: 48px;
}

.gap-y-4 {
  row-gap: 16px;
}

.gap-3 {
  gap: 12px;
}
</style>
