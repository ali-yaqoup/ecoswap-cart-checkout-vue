# EcoSwap — Shopping Cart & Checkout Microfrontend (Group 11)

[![Vue 3](https://img.shields.io/badge/Vue-3.5.41-4fc08d?logo=vuedotjs)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646cff?logo=vite)](https://vitejs.dev/)
[![Vuetify](https://img.shields.io/badge/Vuetify-3.13.0-1867c0?logo=vuetify)](https://vuetifyjs.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2.3.1-ffd859)](https://pinia.vuejs.org/)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00ad9f?logo=netlify)](https://ecoswap-cart-checkout-vue.netlify.app/)

## 📌 Project Overview

**EcoSwap** is a sustainable second-hand marketplace application. This repository contains the **Cart & Checkout Microfrontend** module (developed by **Group 11**), responsible for managing user shopping cart items, address entry, mocked payment processing, and order confirmation.

- **GitHub Repository**: [https://github.com/ali-yaqoup/ecoswap-cart-checkout-vue](https://github.com/ali-yaqoup/ecoswap-cart-checkout-vue)
- **Live Deployment**: [https://ecoswap-cart-checkout-vue.netlify.app/](https://ecoswap-cart-checkout-vue.netlify.app/)

---

## 🛠️ Technology Stack & Installed Versions

*(Verified directly from `node_modules` via `npm list` and `package-lock.json`)*

| Tool / Library | Installed Version | Purpose |
| :--- | :--- | :--- |
| **Vue.js** | `3.5.41` | Core Framework (Composition API `<script setup>`) |
| **Vite** | `5.4.21` | Fast Build Tool & Development Server |
| **Vuetify** | `3.13.0` | UI Component Library & Theme Customization |
| **Pinia** | `2.3.1` | Centralized Reactive State Management |
| **Vue Router** | `4.6.4` | Client-Side SPA Routing |
| **Material Design Icons** (`@mdi/font`) | `7.4.47` | UI Material Design Icons |
| **Vite Plugin Vuetify** (`vite-plugin-vuetify`) | `2.1.3` | Automatic Vuetify component resolution & styling |
| **Vite Plugin Vue** (`@vitejs/plugin-vue`) | `5.2.4` | Official Vue 3 single file component support for Vite |

---

## ✨ Implemented Features

### 🛒 1. Shopping Cart (`/cart`)
* **Item Management**: View item details (title, description, image, unit price).
* **Quantity Adjustment**: Dynamically increase or decrease item quantities (+/-) with automatic price recalculations.
* **Item Removal**: Delete items from cart with real-time subtotal and tax updates.
* **Empty Cart State**: Clear feedback screen when the cart is empty, featuring a demo reset button to restore initial sample items.
* **Order Summary Card**: Displays item count, subtotal, tax calculation (8.5%), shipping estimate, and grand total.

### 📍 2. Shipping Address (`/checkout/shipping`)
* **Form Inputs**: Full Name, Phone Number, Street Address, City, Postal Code.
* **Form Validation**: Vuetify inline validation enforcing required fields prior to proceeding.
* **State Persistence**: Customer details are persisted in the Pinia checkout store across navigation.

### 💳 3. Payment Processing (`/checkout/payment`)
* **Payment Methods**: Toggle between **Credit Card** and **Cash on Delivery (COD)**.
* **Credit Card Form**: Full card details entry (Card Number, Name on Card, Expiry Date, CVV).
* **Order Summary Sidebar**: Dynamic order breakdown including a fixed $5.00 shipping fee.
* **Mocked Transaction**: Submitting the form simulates order placement without calling real payment gateways.

### 🎉 4. Order Confirmation (`/checkout/confirmation`)
* **Success Indicator**: Visual confirmation with order completion message.
* **Order Tracking Details**: Generated order ID (`#ECO-12345`), estimated delivery date, and confirmation email alert.
* **Cart Reset**: Returning to shop automatically clears the processed cart items.

---

## 🗺️ Verified Application Routes

*(Verified directly against `src/router/index.js`)*

| Route Path | Type / Component | Description |
| :--- | :--- | :--- |
| `/` | *Redirect* | Redirects to `/cart` |
| `/cart` | `ShoppingCartView` (`src/views/ShoppingCartView.vue`) | Main Shopping Cart view |
| `/checkout` | *Redirect* | Redirects to `/checkout/shipping` |
| `/checkout/shipping` | `ShippingAddress` (`src/views/ShippingAddressView.vue`) | Shipping address entry form |
| `/checkout/payment` | `Payment` (`src/views/PaymentView.vue`) | Payment method selection & payment form |
| `/checkout/confirmation` | `OrderConfirmation` (`src/views/OrderConfirmationView.vue`) | Final order receipt & confirmation screen |

---

## 📂 Project & Component Architecture

```text
ecoswap-cart-checkout/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── public/
│   └── _redirects               # Netlify SPA client-side routing fallback rule
└── src/
    ├── main.js                   # Application entry point
    ├── App.vue                   # Root Vue component with Vuetify wrapper
    ├── assets/
    │   ├── images/               # Local sample product thumbnails
    │   └── styles/
    │       └── main.css          # Custom global CSS tokens & variables
    ├── components/
    │   ├── cart/
    │   │   ├── CartItemCard.vue        # Single cart item row with quantity & delete
    │   │   └── OrderSummaryCard.vue    # Order pricing summary box & action buttons
    │   └── common/
    │       ├── CheckoutFooter.vue      # Clean checkout footer
    │       ├── CheckoutHeader.vue      # Minimal header with back link & SSL badge
    │       ├── EcoFooter.vue           # Main application footer
    │       └── EcoHeader.vue           # Main application header with cart badge & search
    ├── plugins/
    │   └── vuetify.js            # Vuetify instance configuration & custom theme
    ├── router/
    │   └── index.js              # Vue Router history setup & route definitions
    ├── stores/
    │   ├── cart.js               # Pinia store for cart items, quantities & totals
    │   └── checkout.js           # Pinia store for shipping address & payment info
    └── views/
        ├── OrderConfirmationView.vue # Order success page
        ├── PaymentView.vue          # Payment page
        ├── ShippingAddressView.vue  # Shipping address form page
        └── ShoppingCartView.vue     # Main cart page
```

---

## 🧠 State Management (Pinia)

State is managed cleanly across two dedicated Pinia stores:

1. **`useCartStore` (`src/stores/cart.js`)**:
   - `items`: Reactive array containing product objects (`id`, `title`, `description`, `price`, `quantity`, `image`).
   - `getters`: `totalItems`, `subtotal`, `estimatedTax` (8.5%), `total`.
   - `actions`: `incrementQuantity(id)`, `decrementQuantity(id)`, `removeItem(id)`, `clearCart()`.

2. **`useCheckoutStore` (`src/stores/checkout.js`)**:
   - `shippingAddress`: Object containing `fullName`, `phoneNumber`, `address`, `city`, `postalCode`.
   - `paymentMethod`: Active selection (`'credit_card'` or `'cod'`).
   - `paymentDetails`: Object storing `cardNumber`, `cardName`, `expiryDate`, `cvv`.
   - `orderNumber`: Unique order reference string (`ECO-12345`).

---

## ⚡ Local Setup & Execution

### Prerequisites
- **Node.js**: v18+ recommended
- **npm**: v9+

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ali-yaqoup/ecoswap-cart-checkout-vue.git
   cd ecoswap-cart-checkout-vue
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Microfrontend Integration Status

> [!IMPORTANT]
> **Current Architecture Note**:
> This repository is currently implemented as an **independent, standalone Vue 3 Single Page Application (SPA)** with in-memory state management.

### Implemented vs Planned Integration
- **Current State**: Runs autonomously with mocked catalog data in Pinia. No external APIs, CustomEvents, window messaging, or Module Federation wrappers are active in the codebase yet.
- **Future Integration Plan for Host Shell**:
  - Expose cart actions via window event listeners (e.g. `ECOSWAP_ADD_TO_CART`) or export components via **Vite Module Federation** (`@originjs/vite-plugin-federation`) or **Web Components**.
  - Connect cart items store to the shared backend/product discovery microfrontend API.

---

## ⚠️ Known Limitations & Design Decisions

1. **In-Memory Mock Data**: Cart items and checkout form inputs are stored in Pinia memory. Page refresh re-initializes cart state to default sample items.
2. **Mock Payment**: No real payment processor (Stripe/PayPal) is connected; clicking payment completion simulates instantaneous success.
3. **Fixed Shipping Fee**: Shipping is set to a flat $5.00 during checkout step.
4. **No Backend API**: All actions are executed client-side.
