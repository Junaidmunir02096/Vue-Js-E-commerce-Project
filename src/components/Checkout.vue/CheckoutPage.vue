<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Content Container -->
    <main class="flex-grow pt-12 pb-20 px-4 max-w-7xl mx-auto w-full">
      <div class="space-y-8">
        
        <!-- Page Title & Progress Steps -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-6 border-b border-gray-200">
          <h1 class="text-3xl font-black text-gray-900">Secure Checkout</h1>
          <!-- Progress Indicator -->
          <div class="flex items-center gap-2 text-sm font-semibold">
            <span class="text-gray-400">Cart</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span class="text-indigo-600">Checkout</span>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span class="text-gray-400">Order Complete</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <!-- Checkout Forms (2/3 width) -->
          <div class="lg:col-span-2 space-y-8 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            
            <!-- Billing Info -->
            <div class="space-y-4">
              <h2 class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Billing Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col space-y-1">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    v-model="name"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    v-model="phone"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
                <div class="flex flex-col space-y-1 md:col-span-2">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    v-model="email"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
              </div>
            </div>

            <!-- Shipping Info -->
            <div class="space-y-4">
              <h2 class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Shipping Information</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="flex flex-col space-y-1 md:col-span-3">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Delivery Address</label>
                  <input
                    type="text"
                    placeholder="Street Address, Apartment, Suite"
                    v-model="address"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
                <div class="flex flex-col space-y-1 md:col-span-2">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    v-model="city"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Zip Code</label>
                  <input
                    type="text"
                    placeholder="Zip / Postal Code"
                    v-model="zip"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
                  />
                </div>
              </div>
            </div>

            <!-- Payment Method -->
            <div class="space-y-4">
              <h2 class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Payment Method</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <!-- COD Option -->
                <label 
                  :class="['flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all', 
                    paymentMethod === 'Cash On Delivery' ? 'border-indigo-600 bg-indigo-50/20' : 'border-gray-200 hover:bg-gray-50']"
                >
                  <input
                    type="radio"
                    value="Cash On Delivery"
                    v-model="paymentMethod"
                    class="text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-gray-900">Cash On Delivery</span>
                    <span class="text-xs text-gray-500">Pay when your package arrives</span>
                  </div>
                </label>

                <!-- Card Option -->
                <label 
                  :class="['flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all', 
                    paymentMethod === 'Debit Card' ? 'border-indigo-600 bg-indigo-50/20' : 'border-gray-200 hover:bg-gray-50']"
                >
                  <input
                    type="radio"
                    value="Debit Card"
                    v-model="paymentMethod"
                    class="text-indigo-600 focus:ring-indigo-500 w-4 h-4 cursor-pointer"
                  />
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-gray-900">Debit / Credit Card</span>
                    <span class="text-xs text-gray-500">Instant, fully-encrypted payment</span>
                  </div>
                </label>

              </div>

              <!-- Debit Card Form fields (visual mockup) -->
              <div
                v-if="paymentMethod === 'Debit Card'"
                class="mt-4 p-6 rounded-2xl border border-gray-100 bg-slate-50/50 space-y-4 shadow-inner"
              >
                <div class="flex flex-col space-y-1">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Card Number</label>
                  <input
                    type="text"
                    placeholder="4000 1234 5678 9010"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 bg-white rounded-xl transition-all"
                  />
                </div>
                <div class="flex flex-col space-y-1">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Card Holder Name</label>
                  <input
                    type="text"
                    placeholder="JOHN DOE"
                    class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 bg-white rounded-xl transition-all"
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="flex flex-col space-y-1">
                    <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 bg-white rounded-xl transition-all"
                    />
                  </div>
                  <div class="flex flex-col space-y-1">
                    <label class="text-xs font-bold text-gray-500 uppercase tracking-wider pl-1">CVV</label>
                    <input
                      type="password"
                      placeholder="•••"
                      class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 bg-white rounded-xl transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Order Summary sidebar (1/3 width) -->
          <div class="space-y-6 lg:sticky lg:top-24">
            
            <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h2 class="text-xl font-black text-gray-900 pb-3 border-b border-gray-100">Order Summary</h2>
              
              <!-- Item list inside summary -->
              <div class="max-h-60 overflow-y-auto pr-1 space-y-4">
                <div 
                  v-for="item in cartItems" 
                  :key="item.id"
                  class="flex items-center gap-3 pb-3 border-b border-gray-50 last:border-b-0"
                >
                  <img :src="item.image" alt="Product image" class="h-12 w-12 object-cover rounded-lg border flex-shrink-0" />
                  <div class="flex-grow space-y-0.5">
                    <h4 class="text-sm font-bold text-gray-900 line-clamp-1">{{ item.title }}</h4>
                    <p class="text-xs text-gray-400">${{ item.price }} &times; {{ item.quantity }}</p>
                  </div>
                  <span class="text-sm font-extrabold text-gray-900">${{ item.price * item.quantity }}</span>
                </div>
              </div>

              <!-- Price breakdown -->
              <div class="space-y-3 text-xs font-medium border-t border-gray-100 pt-4">
                <div class="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span class="text-green-600 font-bold">Free</span>
                </div>
                <div class="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span class="text-gray-900 font-bold">$0.00</span>
                </div>
                <div class="h-px bg-gray-100 my-1"></div>
                <div class="flex justify-between text-base font-black text-gray-900">
                  <span>Grand Total</span>
                  <span class="text-indigo-600 text-lg">${{ cartTotal }}</span>
                </div>
              </div>

              <!-- Checkout action -->
              <div class="pt-2">
                <button
                  @click="Order"
                  class="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Place Order
                </button>
              </div>
            </div>

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
  name: "CheckoutPage",
  components: {
    Footer
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      paymentMethod: "Cash On Delivery",
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    cartCount() {
      return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    },
  },
  methods: {
    Order() {
      if (!this.name || !this.phone || !this.email || !this.address || !this.city || !this.zip) {
        alert("Please fill in all checkout fields.");
        return;
      }

      // Check auth via Vuex — single source of truth
      if (!this.$store.getters.isLoggedIn) {
        // Open the unified login modal right here — user stays on checkout page
        this.$store.dispatch("openLoginModal");
        return;
      }

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
      alert("Thanks for your order! Redirecting to orders listing.");
      this.$router.push("/orders");
    }
  },
};
</script>
