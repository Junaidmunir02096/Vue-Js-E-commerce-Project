<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-between">
    <!-- Main Content Container -->
    <main class="flex-grow pt-24 pb-16 px-4 max-w-7xl mx-auto w-full">
      
      <!-- Hero Section -->
      <section class="relative mb-20 rounded-3xl overflow-hidden bg-gradient-to-tr from-gray-900 via-indigo-950 to-gray-800 text-white shadow-2xl py-20 px-8 text-center md:px-16">
        <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <span class="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/25 border border-indigo-400/30 text-indigo-300">
            Our Premium Services
          </span>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
            A Customer-First Approach
          </h1>
          <p class="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            We offer premium, secure, and rapid client-focused services to elevate your shopping journey from selection to delivery.
          </p>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="mb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Service 1: Secure Checkout -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Secure Checkout</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Fully encrypted SSL transactions protecting your credit cards, wallets, and credentials during purchases.
            </p>
          </div>

          <!-- Service 2: Global Express Delivery -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Global Express</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Fast, tracked shipping options to over 150 countries worldwide, with local delivery updates.
            </p>
          </div>

          <!-- Service 3: 24/7 Live Support -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">24/7 Premium Support</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Our support team is always available to handle shipping queries, order issues, or feedback.
            </p>
          </div>

          <!-- Service 4: Easy Return & Refunds -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6H16" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">30-Day Returns</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              No-questions-asked 30-day refund policy with prepaid return shipping labels generated instantly.
            </p>
          </div>

          <!-- Service 5: Gift Customization -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4l-2.293 2.293M12 8H8l2.293 2.293" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Gift Packaging</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Add premium boxes, custom greeting cards, and personalization to your purchases at checkout.
            </p>
          </div>

          <!-- Service 6: Exclusive Loyalty Club -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Loyalty Rewards</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Earn reward points on every transaction and redeem them for free shipping, discounts, or exclusive gifts.
            </p>
          </div>

        </div>
      </section>

      <!-- FAQ Section -->
      <section class="max-w-4xl mx-auto mb-24">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
          <p class="text-gray-600 leading-relaxed">Common queries regarding our shipping, order support, and accounts.</p>
        </div>
        <div class="space-y-4">
          
          <!-- FAQ 1 -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(0)" 
              class="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50/50 transition-colors"
            >
              <span class="text-lg font-bold text-gray-900">How long does shipping take?</span>
              <span class="text-xl font-medium text-gray-400">
                <svg :class="{'rotate-180': openFaq === 0}" class="w-6 h-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div v-show="openFaq === 0" class="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-sm">
              Standard local delivery takes 2–4 business days. International shipping varies by location but typically arrives within 5–10 business days. Priority and overnight express options are available at checkout.
            </div>
          </div>

          <!-- FAQ 2 -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(1)" 
              class="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50/50 transition-colors"
            >
              <span class="text-lg font-bold text-gray-900">How do I request a return?</span>
              <span class="text-xl font-medium text-gray-400">
                <svg :class="{'rotate-180': openFaq === 1}" class="w-6 h-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div v-show="openFaq === 1" class="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-sm">
              You can initiate a return directly through your orders portal. Simply log in, navigate to "Orders", and click "Request Return" on the items you wish to return. We will generate a pre-paid printable shipping label for you.
            </div>
          </div>

          <!-- FAQ 3 -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(2)" 
              class="w-full text-left px-8 py-6 flex justify-between items-center hover:bg-gray-50/50 transition-colors"
            >
              <span class="text-lg font-bold text-gray-900">Is my payment details secure?</span>
              <span class="text-xl font-medium text-gray-400">
                <svg :class="{'rotate-180': openFaq === 2}" class="w-6 h-6 transform transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div v-show="openFaq === 2" class="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 text-sm">
              Yes, absolutely. We use industry-standard encryption algorithms and direct gateway integrations. We never store raw credit card details on our local mock servers or database schemas.
            </div>
          </div>

        </div>
      </section>

      <!-- CTA Banner -->
      <section class="bg-gradient-to-r from-indigo-900 to-indigo-950 text-white rounded-3xl p-12 text-center relative overflow-hidden shadow-xl mb-8">
        <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div class="relative z-10 space-y-6 max-w-2xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">Ready to Elevate Your Shopping Experience?</h2>
          <p class="text-indigo-200 text-lg font-light leading-relaxed">
            Register an account today, explore our curated collections, and enjoy immediate access to member-only rewards.
          </p>
          <div>
            <router-link 
              to="/" 
              class="inline-block bg-white text-indigo-900 font-bold px-8 py-3.5 rounded-full hover:bg-indigo-50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start Shopping
            </router-link>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Footer from '../Footer/Footer.vue';

export default {
  name: 'ServicePage',
  components: {
    Footer
  },
  data() {
    return {
      openFaq: null
    };
  },
  methods: {
    toggleFaq(index) {
      if (this.openFaq === index) {
        this.openFaq = null;
      } else {
        this.openFaq = index;
      }
    }
  }
};
</script>