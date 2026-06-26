<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-between">
    <!-- Main Content Container -->
    <main class="flex-grow pt-24 pb-16 px-4 max-w-7xl mx-auto w-full">
      
      <!-- Hero Section -->
      <section class="relative mb-20 rounded-3xl overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-indigo-950 text-white shadow-2xl py-20 px-8 text-center md:px-16">
        <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl mx-auto space-y-6">
          <span class="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/25 border border-indigo-400/30 text-indigo-300">
            About Our Company
          </span>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
            Redefining Modern Shopping
          </h1>
          <p class="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            We build state-of-the-art experiences that combine beautiful, premium craftsmanship with curated quality products. Your ultimate online luxury shopping destination.
          </p>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Story & Vision
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Founded with a passion for excellence, our mission is to eliminate the friction in e-commerce. We curate only premium, verified products from jackets and activewear to elite tech gadgets and home additions. 
          </p>
          <p class="text-gray-600 leading-relaxed">
            We believe that every interaction should feel premium, seamless, and memorable. From our custom-designed web experience to our customer support networks, we strive to exceed all your expectations.
          </p>
          <div class="flex gap-4">
            <div class="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 text-center w-32">
              <p class="text-3xl font-bold text-indigo-600">10k+</p>
              <p class="text-xs text-gray-500 font-medium uppercase mt-1">Happy Clients</p>
            </div>
            <div class="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 text-center w-32">
              <p class="text-3xl font-bold text-indigo-600">99.8%</p>
              <p class="text-xs text-gray-500 font-medium uppercase mt-1">Satisfaction</p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 transform -rotate-3 scale-95"></div>
          <div class="relative bg-gradient-to-br from-indigo-900 to-indigo-950 p-8 rounded-3xl shadow-xl text-white space-y-6">
            <h3 class="text-xl font-bold text-indigo-300">Why shop with us?</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <svg class="h-6 w-6 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-gray-300"><strong class="text-white">Curated Collections</strong> — Handpicked premium quality products.</p>
              </li>
              <li class="flex items-start gap-3">
                <svg class="h-6 w-6 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-gray-300"><strong class="text-white">Secured Shopping</strong> — 128-bit SSL encrypted transactions.</p>
              </li>
              <li class="flex items-start gap-3">
                <svg class="h-6 w-6 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-gray-300"><strong class="text-white">Rapid Fulfilment</strong> — Fast global shipping with local tracking.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Core Values Section -->
      <section class="mb-24">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Core Values
          </h2>
          <p class="text-gray-600 leading-relaxed">
            The principles that guide everything we do, from engineering our platform to fulfilling your orders.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Value 1 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Premium Quality</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We source and inspect all products to ensure they meet our strict design and durability standards.
            </p>
          </div>

          <!-- Value 2 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Absolute Trust</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Transparent transactions, verified buyer reviews, and guaranteed safe client-data management.
            </p>
          </div>

          <!-- Value 3 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Innovation First</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              We continually iterate on our user experience to provide super-fast loads and modern shopping flows.
            </p>
          </div>

          <!-- Value 4 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Eco-Conscious</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Supporting sustainable suppliers, carbon-neutral shipping methods, and paperless billing solutions.
            </p>
          </div>

        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-8">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
            Meet Our Leadership
          </h2>
          <p class="text-gray-600 leading-relaxed">
            The dedicated builders behind our premium shopping platform.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Team Member 1 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-tr from-indigo-500 to-indigo-700 rounded-full mx-auto flex items-center justify-center shadow-inner">
              <span class="text-2xl font-bold text-white uppercase">JM</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Junaid Munir</h3>
              <p class="text-xs text-indigo-600 font-semibold tracking-wider uppercase mt-1">Founder & Lead Engineer</p>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">
              Junaid oversees the system architecture, component creation, and user experience paradigms.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
              <span class="text-2xl font-bold text-white uppercase">SK</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Sarah Khan</h3>
              <p class="text-xs text-indigo-600 font-semibold tracking-wider uppercase mt-1">Head of Curation</p>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">
              Sarah negotiates relationships with global suppliers to fetch the highest quality products.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center space-y-4 hover:shadow-md transition-all duration-300">
            <div class="w-24 h-24 bg-gradient-to-tr from-indigo-400 to-indigo-600 rounded-full mx-auto flex items-center justify-center shadow-inner">
              <span class="text-2xl font-bold text-white uppercase">AR</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900">Ali Rehman</h3>
              <p class="text-xs text-indigo-600 font-semibold tracking-wider uppercase mt-1">Logistics Director</p>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed">
              Ali manages secure shipping, global logistics tracking, and immediate return handling networks.
            </p>
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
  name: 'AboutPage',
  components: {
    Footer
  }
};
</script>
