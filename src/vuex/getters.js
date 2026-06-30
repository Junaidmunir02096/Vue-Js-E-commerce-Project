export default {
  // ── Cart getters ──────────────────────────────────────────────────────────
  cartItems: (state) => state.cart,
  cartTotal: (state) =>
    state.cart.reduce((total, item) => total + item.price * item.quantity, 0),

  // ── Order getters ─────────────────────────────────────────────────────────
  allOrders: (state) => state.orders,
  getOrderById: (state) => (id) => state.orders.find((o) => o.id === id),

  // ── Auth getters — single reactive source of truth ────────────────────────
  isLoggedIn: (state) => state.isLoggedIn,
  currentUser: (state) => state.currentUser,

  // ── Modal getters ─────────────────────────────────────────────────────────
  showLoginModal: (state) => state.showLoginModal,
  showSignupModal: (state) => state.showSignupModal,
};
