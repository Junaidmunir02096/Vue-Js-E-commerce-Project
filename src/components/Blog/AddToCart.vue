<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Content Grid -->
    <main class="flex-grow pt-12 pb-20 px-4 max-w-7xl mx-auto w-full">
      <div class="space-y-8">
        
        <!-- Page Title & Progress Steps -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-6 border-b border-gray-200">
          <h1 class="text-3xl font-black text-gray-900">Your Shopping Cart</h1>
          <!-- Progress Indicator -->
          <div class="flex items-center gap-2 text-sm font-semibold">
            <span class="text-indigo-600">Cart</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span class="text-gray-400">Checkout</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span class="text-gray-400">Order Complete</span>
          </div>
        </div>

        <div v-if="cartItems.length" class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <!-- Cart Items List (2/3 width) -->
          <div class="lg:col-span-2 space-y-6">
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <!-- Thumbnail -->
              <img
                :src="item.image"
                alt="Product image"
                class="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border border-gray-100 flex-shrink-0"
              />
              
              <!-- Details -->
              <div class="flex-grow space-y-2">
                <div>
                  <h3 class="font-bold text-gray-900 text-lg line-clamp-2">{{ item.title }}</h3>
                  <p class="text-sm text-gray-400" v-if="item.size">Size: <span class="font-semibold text-gray-700">{{ item.size }}</span></p>
                </div>
                <div class="flex items-baseline gap-2">
                  <span class="text-base font-extrabold text-gray-900">${{ item.price }}</span>
                  <span class="text-xs text-gray-400 font-medium">each</span>
                </div>
              </div>

              <!-- Quantity & Subtotal Controls -->
              <div class="flex sm:flex-col items-end justify-between w-full sm:w-auto gap-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                <div class="flex items-center gap-3">
                  <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      @click="$store.dispatch('decrementQty', item.id)"
                      class="px-3 py-1 text-gray-600 hover:bg-gray-100 font-semibold"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span class="px-3 text-sm font-bold text-gray-800">{{ item.quantity }}</span>
                    <button
                      @click="$store.dispatch('incrementQty', item.id)"
                      class="px-3 py-1 text-gray-600 hover:bg-gray-100 font-semibold"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div class="text-right space-y-1">
                  <p class="text-lg font-black text-gray-900">${{ item.price * item.quantity }}</p>
                  <button
                    @click="$store.dispatch('removeFromCart', item.id)"
                    class="text-xs text-red-500 hover:text-red-700 font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          </div>

          <!-- Cart Totals Card (1/3 width) -->
          <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6 lg:sticky lg:top-24">
            <h2 class="text-xl font-black text-gray-900 pb-3 border-b border-gray-100">Order Summary</h2>
            
            <div class="space-y-4 text-sm font-medium">
              <div class="flex justify-between text-gray-500">
                <span>Total Items</span>
                <span class="text-gray-900 font-bold">{{ cartCount }}</span>
              </div>
              <div class="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span class="text-green-600 font-bold">Free</span>
              </div>
              <div class="flex justify-between text-gray-500">
                <span>Tax</span>
                <span class="text-gray-900 font-bold">$0.00</span>
              </div>
              <div class="h-px bg-gray-100 my-2"></div>
              <div class="flex justify-between text-lg font-black">
                <span>Total Price</span>
                <span class="text-indigo-600">${{ cartTotal }}</span>
              </div>
            </div>

            <div class="pt-2">
              <router-link to="/checkout">
                <button class="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                  Proceed to Checkout
                </button>
              </router-link>
            </div>
          </div>

        </div>

        <!-- Empty Cart State -->
        <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto space-y-6">
          <div class="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full mx-auto flex items-center justify-center">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <div class="space-y-2">
            <h2 class="text-2xl font-black text-gray-900">Your Cart is Empty</h2>
            <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">Looks like you haven't added anything to your cart yet. Explore our arrivals!</p>
          </div>
          <div class="pt-2">
            <router-link to="/" class="inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
              Start Shopping
            </router-link>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer/Footer.vue';

export default {
  name: "CartPage",
  components: {
    Footer
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartCount() {
      // Dynamic count sum of item quantities
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
};
</script>
