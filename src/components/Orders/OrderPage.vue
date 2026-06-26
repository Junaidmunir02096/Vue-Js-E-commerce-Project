<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Content Container -->
    <main class="flex-grow pt-12 pb-20 px-4 max-w-4xl mx-auto w-full">
      <div class="space-y-8">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4 pb-6 border-b border-gray-200">
          <h1 class="text-3xl font-black text-gray-900">Your Orders</h1>
          <p class="text-xs text-gray-400 font-bold uppercase tracking-wider">Tracking Portal</p>
        </div>

        <!-- Orders List -->
        <div v-if="orders.length" class="space-y-6">
          <div
            v-for="order in orders"
            :key="order.id"
            class="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:shadow-md transition-shadow duration-300"
          >
            <!-- Order Meta details (Left) -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="bg-indigo-50 text-indigo-700 text-xs font-black px-3 py-1 rounded-full uppercase">
                  Order #{{ order.id }}
                </span>
                <span class="text-xs text-green-600 font-bold bg-green-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span class="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                  Processing
                </span>
              </div>
              <div class="space-y-1">
                <h3 class="text-base font-bold text-gray-800">Customer: {{ order.customer.name }}</h3>
                <p class="text-xs text-gray-400">Total Items: <span class="font-bold text-gray-600">{{ order.items.length }}</span></p>
              </div>
              
              <div class="pt-2">
                <router-link
                  :to="'/orders/' + order.id"
                  class="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  View Invoice Details
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </router-link>
              </div>
            </div>

            <!-- Date and Price details (Right) -->
            <div class="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50 gap-2">
              <div class="text-left sm:text-right space-y-0.5">
                <p class="text-xs text-gray-400 font-medium">Placed on: {{ getFormattedDate() }}</p>
                <p class="text-xs text-gray-400 font-medium">Time: {{ getCurrentTime() }}</p>
              </div>
              <div class="text-right">
                <span class="text-xs text-gray-400 font-medium block">Total Paid</span>
                <span class="text-xl font-black text-gray-900">${{ order.total }}</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Empty Orders State -->
        <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-md mx-auto space-y-6">
          <div class="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full mx-auto flex items-center justify-center">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <div class="space-y-2">
            <h2 class="text-2xl font-black text-gray-900">No Orders Found</h2>
            <p class="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">You haven't placed any purchases yet. Add some items to your cart to begin!</p>
          </div>
          <div class="pt-2">
            <router-link to="/" class="inline-block bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md">
              Browse Store
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
  name: "OrderPage",
  components: {
    Footer
  },
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
