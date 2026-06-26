<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Home Page Content -->
    <div class="flex-grow">
      
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-tr from-gray-900 via-indigo-950 to-indigo-900 text-white overflow-hidden py-24 px-6 md:px-16 lg:px-24">
        <!-- Abstract glowing orbs in background -->
        <div class="absolute top-12 left-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-10"></div>
        <div class="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

        <div class="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span class="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 border border-indigo-400/25 text-indigo-300">
            Exclusive Collection 2026
          </span>
          <h1 class="text-4xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-indigo-50 to-indigo-100 bg-clip-text text-transparent">
            Elevate Your Everyday Style
          </h1>
          <p class="text-lg md:text-xl text-indigo-200/90 font-light max-w-2xl mx-auto leading-relaxed">
            Discover a handpicked selection of premium items designed to complement your lifestyle, from custom tailoring to smart tech gear.
          </p>
          <div class="pt-4">
            <a 
              href="#products" 
              class="inline-block bg-white text-indigo-900 font-bold px-8 py-3.5 rounded-full hover:bg-indigo-50 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </section>

      <!-- New Arrivals / Products Section -->
      <section id="products" class="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div class="text-center space-y-3">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">New Arrivals</h2>
          <div class="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p class="text-sm text-gray-500 max-w-md mx-auto">Explore our latest arrivals, crafted with precision and premium quality standards.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <!-- Image Container -->
            <div class="relative overflow-hidden bg-gray-50 pt-[100%]">
              <router-link :to="`/productsDetails/${product.id}`" class="absolute inset-0">
                <img
                  :src="product.image"
                  alt="Product Image"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </router-link>
              <span v-if="product.discount" class="absolute top-4 left-4 bg-red-500 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                -{{ product.discount }}%
              </span>
            </div>

            <!-- Content Container -->
            <div class="p-6 flex-grow flex flex-col justify-between space-y-4">
              <div class="space-y-2">
                <h3 class="font-bold text-gray-900 text-base line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
                  {{ product.title }}
                </h3>
                
                <!-- Ratings Block -->
                <div class="flex items-center gap-1">
                  <!-- Render custom SVG stars based on product.rating -->
                  <div class="flex items-center text-yellow-400">
                    <svg 
                      v-for="n in 5" 
                      :key="n"
                      class="w-4 h-4 fill-current"
                      :class="n <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="text-xs text-gray-500 font-medium ml-1">
                    ({{ product.rating }})
                  </span>
                </div>
              </div>

              <!-- Price & Add-to-Cart Action -->
              <div class="flex items-center justify-between pt-2 border-t border-gray-50">
                <div class="flex items-baseline gap-1.5">
                  <span class="text-lg font-black text-gray-900">${{ product.price }}</span>
                  <span v-if="product.oldPrice" class="line-through text-gray-400 text-xs">${{ product.oldPrice }}</span>
                </div>
                
                <button
                  @click="handleAddToCart(product)"
                  class="bg-indigo-600 text-white hover:bg-indigo-700 w-9 h-9 flex items-center justify-center rounded-full shadow-md shadow-indigo-100 hover:shadow-lg transition-all"
                  aria-label="Add to Cart"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

    <!-- Footer Component -->
    <Footer/>
  </div>
</template>

<script>
import axios from "@/services/mockApi";
import Footer from "../Footer/Footer.vue";

export default {
  components: { Footer },
  name: "HomePage",

  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3333/products").then((res) => {
      this.products = res.data;
    });
  },
  methods: {
    handleAddToCart(product) {
      this.$store.dispatch("addToCart", {
        ...product,
        quantity: 1,
      });
      alert(`Added "${product.title}" to cart successfully!`);
    },
  },
};
</script>

<style scoped>
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
}
</style>
