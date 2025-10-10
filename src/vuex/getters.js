export default {
  
    cartItems: (state) => state.cart,

    cartTotal: (state) =>
      state.cart.reduce((total, item) => total + item.price * item.quantity, 0),

    allOrders: (state) => state.orders,

    getOrderById: (state) => (id) => state.orders.find((o) => o.id === id),
  
};
