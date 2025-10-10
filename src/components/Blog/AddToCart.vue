<template>
  <div class="w-full flex">
    <div class="p-6 w-[60%] h-[90vh] overflow-y-auto">
      <h1 class="text-2xl font-bold mb-4">Your Cart : {{ cartCount }}</h1>
      <div v-if="cartItems.length">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between items-center border-1 border-gray-800 p-4 rounded shadow mb-[3vw]"
        >
          <img
            :src="item.image"
            alt="Product"
            class="w-20 h-20 object-cover rounded"
          />
          <div class="flex-1 ml-7">
            <h3 class="font-semibold">{{ item.title }}</h3>
            <p class="text-gray-500">${{ item.price }} each</p>
            <div class="flex items-center gap-3 mt-2">
              <button
                @click="$store.dispatch('decrementQty', item.id)"
                class="px-2 py-1 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span class="font-semibold">{{ item.quantity }}</span>
              <button
                @click="$store.dispatch('incrementQty', item.id)"
                class="px-2 py-1 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <div class="text-right">
            <p class="font-bold">${{ item.price * item.quantity }}</p>
            <button
              @click="$store.dispatch('removeFromCart', item.id)"
              class="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        </div>

        <h2 class="text-xl font-bold mt-4">Total: ${{ cartTotal }}</h2>
      </div>

      <p v-else class="text-gray-600">Your cart is empty.</p>
    </div>
    <div class="flex items-center justify-between mx-auto">
      <div
        class="relative border border-black rounded-md overflow-hidden h-[45vh] flex flex-col text-center bg-gray-200 w-[25vw]"
        >
        <h1 class="text-2xl font-bold p-3">Cart Totals</h1>
        <div class="flex justify-around p-3 text-2xl font-bold">
          <h2>Total Items :</h2>
          <h2>{{ cartCount}}</h2>
        </div>
        <div class="flex justify-around p-3 text-2xl font-bold">
          <h2>Total Price :</h2>
          <h2>$ {{ cartItems }}</h2>
        </div>
        <div class="w-full absolute bottom-10">
          <router-link to="/checkout">
            <button class="px-4 text-xl font-bold py-2 rounded-md bg-red-500">
              Checkout
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  Vuex: {
    getters: {
      // cartItems() {
      //   return this.$store.getters.cartItems;
      // },
      // cartTotal() {
      //   return this.$store.getters.cartTotal;
      // },
      // cartCount() {
      //   return this.cartItems.length;
      // },
    },
  },

  name: "CartPage",
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartCount() {
      return this.cartItems.length;
    },
  },
};
</script>
