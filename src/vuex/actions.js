export default {
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
        id: Date.now(),
        customer: orderData.customer,
        items: [...state.cart],
        total: state.cart.reduce((t, i) => t + i.price * i.quantity, 0),
      };
      commit("ADD_ORDER", newOrder);
      commit("CLEAR_CART");
    }, 
};
