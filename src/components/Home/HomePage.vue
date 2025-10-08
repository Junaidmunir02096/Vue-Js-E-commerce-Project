<template>
  <div>
    <div
      class="bg-[url('https://www.hurix.com/wp-content/uploads/2023/02/Everything-You-Need-to-Know-About-E-commerce-Solutions-1-1.jpg')] h-64 md:h-[70vh] shadow-lg bg-center bg-cover"
    ></div>
    <div class="bg-gray-300 min-h-screen p-4">
      <h1 class="text-4xl text-center font-bold mb-8">NEW ARRIVALS</h1>
      <div
        class="w-full grid mx-auto justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-md rounded-lg p-4 w-full md:w-[22vw]"
        >
          <router-link :to="`/productsDetails/${product.id}`">
            <img
              :src="product.image"
              alt="Product"
              class="w-full h-40 object-cover rounded-md"
            />
          </router-link>
          <h3 class="mt-3 font-semibold text-gray-800">
            {{ product.title }}
          </h3>
          <div class="flex items-center gap-1 text-yellow-500 text-sm">
            <span v-for="n in 5" :key="n">
              <i
                class="fa"
                :class="
                  n <= Math.round(product.rating) ? 'fa-star' : 'fa-star-o'
                "
              ></i>
            </span>
            <span class="text-gray-600 text-xs">
              ⭐⭐⭐⭐ {{ product.rating }}/5
            </span>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="text-lg font-bold text-gray-900"
              >${{ product.price }}</span
            >
            <span
              v-if="product.oldPrice"
              class="line-through text-gray-500 text-sm"
            >
              ${{ product.oldPrice }}
            </span>
            <span
              v-if="product.discount"
              class="bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded"
            >
              -{{ product.discount }}%
            </span>
          </div>
          <div class="text-end">
            <button
              @click="handleAddToCart(product)"
              class="bg-red-400 px-[10px] text-xl font-bold py-[6px] rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
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
        quantity:1
      });
      alert("Add To Cart Successfully");
    },
    ProductDetails(product){
      this.$store.dispatch("addToCart", product);
    }
  },
};
</script>
