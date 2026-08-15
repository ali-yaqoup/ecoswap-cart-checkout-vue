import { useCartStore } from "@/stores/cart";

export function postToShell(type, detail = {}) {
  if (window.parent !== window) {
    window.parent.postMessage({ source: "ecoswap-cart", type, detail }, "*");
  }
}

export function initShellBridge() {
  window.addEventListener("message", (event) => {
    const data = event.data;
    if (!data || typeof data !== "object" || data.source !== "ecoswap-shell") return;

    if (data.type === "shell:add-to-cart") {
      const product = data.detail?.product;
      if (!product) return;
      const cartStore = useCartStore();
      cartStore.addItem({
        id: product.id,
        title: product.name || product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        quantity: Number(data.detail?.quantity) || 1,
      });
    }
  });
}
