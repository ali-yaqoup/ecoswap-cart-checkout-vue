<template>
  <footer class="ecoswap-footer bg-white mt-12 py-10 border-t">
    <v-container class="max-width-1200 px-4 px-md-8">
      <v-row align="start" justify="space-between" class="gy-8">
        <!-- Brand Column -->
        <v-col cols="12" md="4">
          <div class="footer-brand font-weight-bold text-h6 text-green-darken-2 mb-3">
            EcoSwap
          </div>
          <p class="text-body-2 text-grey-darken-1 mb-4 tagline-text">
            A trustworthy, eco-conscious second-hand marketplace. Sell, buy, and sustain.
          </p>
          <div class="text-body-2 text-grey-darken-1">
            © 2024 EcoSwap Marketplace. All rights reserved.
          </div>
        </v-col>

        <!-- Company Column -->
        <v-col cols="6" sm="4" md="2">
          <h4 class="text-subtitle-2 font-weight-bold text-grey-darken-4 mb-4">
            Company
          </h4>
          <ul class="footer-links-list pa-0">
            <li class="mb-2"><a href="#" class="footer-link">About Us</a></li>
            <li><a href="#" class="footer-link">Sustainability</a></li>
          </ul>
        </v-col>

        <!-- Sell Column -->
        <v-col cols="6" sm="4" md="2">
          <h4 class="text-subtitle-2 font-weight-bold text-grey-darken-4 mb-4">
            Sell
          </h4>
          <ul class="footer-links-list pa-0">
            <li><a href="#" class="footer-link">Sell an Item</a></li>
          </ul>
        </v-col>

        <!-- Support Column -->
        <v-col cols="12" sm="4" md="3">
          <h4 class="text-subtitle-2 font-weight-bold text-grey-darken-4 mb-4">
            Support
          </h4>
          <ul class="footer-links-list pa-0">
            <li class="mb-2"><a href="#" class="footer-link">Help Center</a></li>
            <li><a href="#" class="footer-link">Privacy Policy</a></li>
          </ul>
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

.tagline-text {
  max-width: 300px;
  line-height: 1.5;
}

.footer-links-list {
  list-style: none;
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
</style>
