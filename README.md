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
