export default {
  // ── Cart mutations ────────────────────────────────────────────────────────
  AddToCart(state, product) {
    const item = state.cart.find((p) => p.id === product.id);
    if (item) {
      item.quantity += product.quantity;
    } else {
      state.cart.push({ ...product, quantity: product.quantity });
    }
  },
  RemoveCart(state, productId) {
    state.cart = state.cart.filter((p) => p.id !== productId);
  },
  IncrementQuantity(state, productId) {
    const item = state.cart.find((p) => p.id === productId);
    if (item) {
      item.quantity++;
    }
  },
  DecrementQuantity(state, productId) {
    const itemIndex = state.cart.findIndex((p) => p.id === productId);
    if (itemIndex !== -1) {
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity--;
      } else {
        state.cart.splice(itemIndex, 1);
      }
    }
  },

  // ── Order mutations ───────────────────────────────────────────────────────
  ADD_ORDER(state, order) {
    state.orders.push(order);
  },
  CLEAR_CART(state) {
    state.cart = [];
  },

  // ── Auth mutations ────────────────────────────────────────────────────────
  SET_USER(state, user) {
    state.currentUser = user;
    state.isLoggedIn = true;
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
  },
  LOGOUT(state) {
    state.currentUser = {};
    state.isLoggedIn = false;
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
  },

  // ── Modal mutations ───────────────────────────────────────────────────────
  OPEN_LOGIN_MODAL(state) {
    state.showLoginModal = true;
    state.showSignupModal = false;
  },
  CLOSE_LOGIN_MODAL(state) {
    state.showLoginModal = false;
  },
  OPEN_SIGNUP_MODAL(state) {
    state.showSignupModal = true;
    state.showLoginModal = false;
  },
  CLOSE_SIGNUP_MODAL(state) {
    state.showSignupModal = false;
  },
};
