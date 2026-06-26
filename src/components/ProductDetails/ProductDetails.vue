<template>
  <div class="min-h-screen bg-slate-50 flex flex-col justify-between">
    <!-- Main Content Grid -->
    <main class="flex-grow pt-12 pb-20 px-4 max-w-7xl mx-auto w-full">
      <div v-if="product" class="space-y-8">
        
        <!-- Breadcrumb / Back Navigation -->
        <nav class="flex items-center justify-between py-2">
          <router-link 
            to="/" 
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Catalog
          </router-link>
          
          <div class="hidden sm:flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <router-link to="/" class="hover:text-indigo-600">Home</router-link>
            <span>/</span>
            <span class="text-gray-600">Product details</span>
          </div>
        </nav>

        <!-- Product Card Details Container -->
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <!-- Image Column (Left) -->
          <div class="relative rounded-2xl overflow-hidden bg-gray-50 aspect-square shadow-inner flex items-center justify-center">
            <img
              :src="product.image"
              alt="Product Image"
              class="w-full h-full object-cover"
            />
            <span v-if="product.discount" class="absolute top-6 left-6 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-sm">
              -{{ product.discount }}%
            </span>
          </div>

          <!-- Description / Controls Column (Right) -->
          <div class="flex flex-col justify-between space-y-6">
            
            <div class="space-y-4">
              <!-- Title -->
              <h1 class="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                {{ product.title }}
              </h1>

              <!-- Ratings -->
              <div class="flex items-center gap-1.5">
                <div class="flex items-center text-yellow-400">
                  <svg 
                    v-for="n in 5" 
                    :key="n"
                    class="w-4.5 h-4.5 fill-current"
                    :class="n <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="text-xs text-gray-500 font-bold ml-1">
                  {{ product.rating }} / 5 rating
                </span>
              </div>

              <!-- Price -->
              <div class="flex items-baseline gap-2 pt-2">
                <span class="text-3xl font-black text-gray-900">${{ product.price }}</span>
                <span v-if="product.oldPrice" class="text-base line-through text-gray-400 font-medium">${{ product.oldPrice }}</span>
              </div>

              <!-- Description -->
              <div class="space-y-2 pt-4 border-t border-gray-50">
                <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Description</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ product.description || 'This premium item is hand-selected and carefully evaluated to fit our strict aesthetic and craftsmanship criteria.' }}
                </p>
              </div>

              <!-- Choose Size -->
              <div class="space-y-2 pt-4">
                <h3 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Select Size</h3>
                <div class="flex flex-wrap gap-2.5">
                  <button
                    v-for="size in sizes"
                    :key="size"
                    @click="selectedSize = size"
                    :class="[
                      'px-4 py-2 rounded-xl text-xs font-bold border transition-all duration-200',
                      selectedSize === size
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100'
                        : 'border-gray-200 text-gray-600 hover:bg-gray-50 bg-white',
                    ]"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Quantity & Cart CTA -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-gray-150">
              
              <!-- Quantity Selector -->
              <div class="flex items-center border border-gray-200 rounded-xl bg-gray-50 overflow-hidden self-start sm:self-auto">
                <button class="px-4 py-2.5 text-gray-600 hover:bg-gray-100 font-bold text-lg" @click="decreaseQty">-</button>
                <span class="px-5 text-sm font-black text-gray-800">{{ quantity }}</span>
                <button class="px-4 py-2.5 text-gray-600 hover:bg-gray-100 font-bold text-lg" @click="increaseQty">+</button>
              </div>

              <!-- Add to Cart CTA -->
              <button
                @click="addToCart"
                class="flex-grow flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-indigo-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>

            </div>

          </div>

        </div>

        <!-- Reviews list section -->
        <ReviewSection />

      </div>

      <div v-else class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-md mx-auto space-y-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
        <p class="text-gray-500 font-medium">Fetching details...</p>
      </div>
    </main>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import axios from "@/services/mockApi";
import ReviewSection from "./ReviewSection.vue";
import Footer from '../Footer/Footer.vue';

export default {
  name: "ProductDetailCard",
  components: {
    ReviewSection,
    Footer
  },
  props: {
    id: {} 
  },
  data() {
    return {
      sizes: ["Small", "Medium", "Large", "X-Large"],
      selectedColor: "#4B4B4B",
      selectedSize: "Large",
      quantity: 1,
      product: null,
    };
  },
  created() {
    const productId = this.$route.params.id; // get id from URL
    axios.get(`http://localhost:3333/products/${productId}`).then((res) => {
      this.product = res.data;
    });
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        ...this.product,
        quantity: this.quantity,
        size: this.selectedSize,
      });
      alert(`Successfully added "${this.product.title}" (${this.selectedSize}) to your cart!`);
    },
    increaseQty() {
      this.quantity++;
    },
    decreaseQty() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
  },
};
</script>
