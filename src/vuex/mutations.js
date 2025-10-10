export default {
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
  
};
