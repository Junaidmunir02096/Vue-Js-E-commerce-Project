<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Your Orders</h1>
    <div v-if="orders.length">
      <div
        v-for="order in orders"
        :key="order.id"
        class="border flex justify-between p-4 mb-4 rounded shadow"
      >
        <div>
          <h2 class="font-bold">Order #{{ order.id }}</h2>
          <p>Customer: {{ order.customer.name }}</p>
          <p>Total: ${{ order.total }}</p>
          <router-link
            :to="'/orders/' + order.id"
            class="text-blue-600 underline"
          >
            View Details
          </router-link>
        </div>
        <p>Order Date : {{ getFormattedDate() }}</p>
        <p>Order Time : {{ getCurrentTime() }}</p>
      </div>
    </div>
    <p v-else>No orders yet.</p>
  </div>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      getFormattedDate() {
        const dateObj = new Date();
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, "0"); 
        const day = dateObj.getDate().toString().padStart(2, "0");
        return `${day}-${month}-${year}`;
      },
      getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
      
        hours = hours % 12;
        hours = hours ? hours : 12;

        return `${hours}:${minutes}:${seconds} ${ampm}`;
      },
    };
  },
  computed: {
    orders() {
      return this.$store.getters.allOrders;
    },
  },
};
</script>
