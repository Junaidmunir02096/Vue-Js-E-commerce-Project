export default {
  // ── Cart actions ──────────────────────────────────────────────────────────
  addToCart({ commit }, product) {
    commit("AddToCart", product);
  },
  removeFromCart({ commit }, productId) {
    commit("RemoveCart", productId);
  },
  incrementQty({ commit }, productId) {
    commit("IncrementQuantity", productId);
  },
  decrementQty({ commit }, productId) {
    commit("DecrementQuantity", productId);
  },

  // ── Order actions ─────────────────────────────────────────────────────────
  placeOrder({ commit, state }, orderData) {
    const newOrder = {
      id: Date.now(),
      customer: orderData.customer,
      items: [...state.cart],
      total: state.cart.reduce((t, i) => t + i.price * i.quantity, 0),
    };
    commit("ADD_ORDER", newOrder);
    commit("CLEAR_CART");
  },

  // ── Auth actions ──────────────────────────────────────────────────────────
  loginUser({ commit }, user) {
    commit("SET_USER", user);
  },
  logoutUser({ commit }) {
    commit("LOGOUT");
  },

  // ── Modal actions ─────────────────────────────────────────────────────────
  openLoginModal({ commit }) {
    commit("OPEN_LOGIN_MODAL");
  },
  closeLoginModal({ commit }) {
    commit("CLOSE_LOGIN_MODAL");
  },
  openSignupModal({ commit }) {
    commit("OPEN_SIGNUP_MODAL");
  },
  closeSignupModal({ commit }) {
    commit("CLOSE_SIGNUP_MODAL");
  },
};
