<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Content Container -->
    <main class="flex-grow pt-12 pb-20 px-4 max-w-4xl mx-auto w-full">
      <div v-if="order" class="space-y-8">
        
        <!-- Navigation -->
        <nav class="flex items-center justify-between py-2">
          <router-link 
            to="/orders" 
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Orders
          </router-link>
          
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Invoice Details</span>
        </nav>

        <!-- Main Invoice Card -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          
          <!-- Header Banner -->
          <div class="bg-gradient-to-r from-indigo-900 to-indigo-950 p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div class="space-y-1">
              <h2 class="text-2xl font-black">Order Invoice</h2>
              <p class="text-xs text-indigo-300">ID reference: #{{ order.id }}</p>
            </div>
            <div class="bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 uppercase tracking-wide">
              Processing Delivery
            </div>
          </div>

          <!-- Customer & Shipping Summary Grid -->
          <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-100">
            <div class="space-y-3">
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Customer Details</h3>
              <div class="space-y-1.5 text-sm">
                <p class="text-gray-900 font-bold">{{ order.customer.name }}</p>
                <p class="text-gray-500">Email: <span class="font-medium text-gray-700">{{ order.customer.email }}</span></p>
                <p class="text-gray-500">Phone: <span class="font-medium text-gray-700">{{ order.customer.phone }}</span></p>
              </div>
            </div>

            <div class="space-y-3">
              <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Shipping Destination</h3>
              <div class="space-y-1.5 text-sm">
                <p class="text-gray-900 font-bold">Standard Delivery Address</p>
                <p class="text-gray-600 leading-relaxed">
                  {{ order.customer.address }}, {{ order.customer.city }} - {{ order.customer.zip }}
                </p>
              </div>
            </div>
          </div>

          <!-- Items Table -->
          <div class="p-8 space-y-4">
            <h3 class="text-xs font-bold text-gray-400 uppercase tracking-wider">Purchased Items</h3>
            
            <div class="space-y-4">
              <div
                v-for="item in order.items"
                :key="item.id"
                class="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-b-0 last:pb-0"
              >
                <!-- Thumbnail -->
                <img
                  :src="item.image"
                  alt="Product Image"
                  class="w-16 h-16 object-cover rounded-xl border flex-shrink-0"
                />
                
                <!-- Title & Price breakdown -->
                <div class="flex-grow">
                  <h4 class="font-bold text-gray-900 text-sm line-clamp-1">{{ item.title }}</h4>
                  <p class="text-xs text-gray-400">${{ item.price }} &times; {{ item.quantity }}</p>
                </div>
                
                <!-- Subtotal -->
                <span class="text-sm font-black text-gray-900">${{ item.price * item.quantity }}</span>
              </div>
            </div>

          </div>

          <!-- Total pricing bar -->
          <div class="bg-slate-50 p-8 flex justify-between items-center border-t border-gray-100">
            <span class="text-sm font-bold text-gray-500">Total Invoice Amount</span>
            <span class="text-2xl font-black text-indigo-600">${{ order.total }}</span>
          </div>

        </div>

      </div>

      <!-- Loading Empty State -->
      <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-md mx-auto space-y-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
        <p class="text-gray-500 font-medium font-outfit">Loading Invoice...</p>
      </div>
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer/Footer.vue';

export default {
  name: "OrderDetails",
  components: {
    Footer
  },
  computed: {
    order() {
      // Parses dynamic route param
      return this.$store.getters.getOrderById(parseInt(this.$route.params.id));
    }
  }
};
</script>
