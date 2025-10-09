<template>
  <div class="w-full flex">
    <div class="p-3 w-[60%] border border-gray-600 h-[90vh] overflow-y-auto">
      <h1 class="text-2xl font-bold mb-4">Checkout Page</h1>
      <div class="border border-gray-700">
        <div class="space-y-4 p-3">
          <h1 class="text-xl font-bold">Billing Information</h1>
          <div class="flex flex-col space-y-1">
            <label for="name" class="px-1">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              v-model="name"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="phone" class="px-1">Phone</label>
            <input
              type="tel"
              placeholder="Enter your Number"
              v-model="phone"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="name" class="px-1">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              v-model="email"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
        </div>
        <div class="space-y-4 p-3">
          <h1 class="text-xl font-bold">Shippping Information</h1>
          <div class="flex flex-col space-y-1">
            <label for="Address" class="px-1">Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              v-model="address"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="City" class="px-1">City</label>
            <input
              type="city"
              placeholder="Enter your City"
              v-model="city"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="name" class="px-1">Zip Code</label>
            <input
              type="email"
              placeholder="67xyz"
              v-model="zip"
              class="border focus:outline-none border-gray-500 rounded-md p-3"
            />
          </div>
        </div>
        <!-- Payment Method  -->
         
        <div class="space-y-4 p-3">
          <h1 class="text-xl font-bold">Payment Method</h1>
          <div class="flex gap-x-3 items-center">
            <input
              type="radio"
              id="cash"
              value="Cash On Delivery"
              v-model="paymentMethod"
              class="cursor-pointer"
            />
            <label for="cash" class="cursor-pointer">Cash On Delivery</label>
          </div>

          <div class="flex gap-x-3 items-center">
            <input
              type="radio"
              id="debit"
              value="Debit Card"
              v-model="paymentMethod"
              class="cursor-pointer"
            />
            <label for="debit" class="cursor-pointer">Debit Card</label>
          </div>
          <div
            v-if="paymentMethod === 'Debit Card'"
            class="mt-4 space-y-3 border p-4 rounded-md bg-gray-50"
          >
            <div class="flex flex-col space-y-1">
              <label for="Address" class="px-1">Card Number</label>
              <input
                type="text"
                placeholder="Enter your Card Number"
                class="border focus:outline-none border-gray-500 rounded-md p-3"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="City" class="px-1">Card Holder Name</label>
              <input
                type="city"
                placeholder="Enter Holder Name"
                class="border focus:outline-none border-gray-500 rounded-md p-3"
              />
            </div>
            <div class="grid grid-cols-2 gap-x-3">
              <div class="flex flex-col space-y-1">
                <label for="name" class="px-1">Expire Date</label>
                <input
                  type="email"
                  placeholder="DD/MM/YY"
                  class="border focus:outline-none border-gray-500 rounded-md p-2"
                />
              </div>
              <div class="flex flex-col space-y-1">
                <label for="name" class="px-1">CVV</label>
                <input
                  type="email"
                  placeholder="CVV"
                  class="border focus:outline-none border-gray-500 rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mx-auto">
      <div
        class="relative border border-black rounded-md overflow-hidden h-[59vh] flex flex-col text-center bg-gray-200 w-[25vw]"
      >
        <h1 class="text-2xl font-bold p-3 text-start">Order Summary</h1>
        <div class="h-[33vh] p-2 bg-white overflow-y-scroll">
          <div v-for="item in cartItems" :key="item.id">
            <div
              class="w-full bg-white border-b-2 border-black flex space-y-3 mb-3 rounded-md shadow-lg justify-between"
            >
              <div class="flex gap-3">
                <img :src="item.image" alt="" class="h-13 w-20" />
                <div class="space-y-1 ml-4">
                  <h2 class="text-xl font-bold">{{ item.title }}</h2>
                  <p>${{ item.price }} x {{ item.quantity }}</p>
                </div>
              </div>
              <p class="p-3">$ {{ item.price }}</p>
            </div>
          </div>
        </div>
        <p class="border border-black mt-3"></p>
        <p class="text-start p-2 font-bold">Total Price: $ {{ cartTotal }}</p>

        <div class="w-full absolute bottom-6">
          <router-link to="/orders">
            <button
              @click="Order"
              class="px-4 text-xl text-white font-bold py-2 rounded-md bg-red-500"
            >
              Place Order
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutPage",
  data() {
    return {
      paymentMethod: "",
    };
  },
  method :{

  },
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
  methods: {
    Order() {
    this.$store.dispatch("placeOrder", {
      customer: {
        name: this.name,
        phone: this.phone,
        email: this.email,
        address: this.address,
        city: this.city,
        zip: this.zip
      }
    });
    alert("Thanks for Ordering!");
  }
  },
};
</script>
