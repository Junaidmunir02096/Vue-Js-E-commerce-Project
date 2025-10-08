<template>
  <div class="p-6">
    <div v-if="order">
      <h1 class="text-2xl font-bold mb-4">Order #{{ order.id }}</h1>
      <div class="mb-6">
        <p><strong>Name:</strong> {{ order.customer.name }}</p>
        <p><strong>Email:</strong> {{ order.customer.email }}</p>
        <p><strong>Phone:</strong> {{ order.customer.phone }}</p>
        <p>
          <strong>Address:</strong>
          {{ order.customer.address }}, {{ order.customer.city }} - {{ order.customer.zip }}
        </p>
      </div>    

      <!-- Items List -->
      <h2 class="text-xl font-bold mb-3">Items</h2>
      <div
        v-for="item in order.items"
        :key="item.id"
        class="flex items-center gap-4 border-b py-3"
      >
        <img
          :src="item.image"
          alt="Product"
          class="w-20 h-20 object-cover rounded shadow"
        />
        <div class="flex-1">
          <h3 class="font-semibold">{{ item.title }}</h3>
          <p>${{ item.price }} × {{ item.quantity }}</p>
        </div>
        <p class="font-bold">
          ${{ item.price * item.quantity }}
        </p>
      </div>
      <p class="mt-6 text-xl font-bold">Total: ${{ order.total }}</p>
    </div>

    <p v-else>Order not found.</p>
  </div>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.getters.getOrderById(parseInt(this.$route.params.id));
    }
  }
};
</script>
