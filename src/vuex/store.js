import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    orders: [],
  },
  mutations: {
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
    ADD_ORDER(state, order) {
      state.orders.push(order);
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    // ProductDetail(state, product){
    //   const itemDetails = state.cart.find((p) => p.id === product.id)
    // }
  },
  getters: {
    cartItems: (state) => state.cart,
    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
     allOrders: (state) => state.orders,
    getOrderById: (state) => (id) => state.orders.find(o => o.id === id),
  },
  actions: {
    addToCart({ commit }, product) {
      commit("AddToCart", product);
    },
    removeFromCart({ commit }, productId) {
      commit("RemoveCart", productId);
    },
    incrementQty({ commit }, productIde) {
      commit("IncrementQuantity", productIde);
    },
    decrementQty({ commit }, productId) {
      commit("DecrementQuantity", productId);
    },
    placeOrder({ commit, state }, orderData) {
      const newOrder = {
        id: Date.now(), // unique order number
        customer: orderData.customer,
        items: [...state.cart],
        total: state.cart.reduce((t, i) => t + i.price * i.quantity, 0),
      };
      commit("ADD_ORDER", newOrder);
      commit("CLEAR_CART");
    },
  },
});
