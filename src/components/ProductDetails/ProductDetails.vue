<template>
  <div>
    <div v-if="product">
      <h1 class="text-2xl font-bold text-center p-4 bg-gray-500">
        Product Details
      </h1>
      <div>
        <router-link to="/" class="text-xl font-bold p-5"> Back</router-link>
      </div>
      <div
        class="w-[90%] md:flex md:gap-x-9 block mx-auto bg-white rounded-xl mt-6 border-gray-500 border-2 shadow-md p-6"
      >
        <div>
          <img
            :src="product.image"
            alt="Product"
            class="w-[40%] h-full object-cover"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold mt-4">{{ product.title }}</h2>

          <div class="flex items-center mt-2">
            <span class="text-yellow-400 text-lg">★★★★★</span>
            <span class="ml-2 text-gray-600 text-sm"
              >{{ product.rating }}/5</span
            >
          </div>
          <div class="flex items-center mt-3 space-x-3">
            <span class="text-2xl font-bold text-gray-900"
              >${{ product.price }}</span
            >
            <span class="text-lg line-through text-gray-500"
              >${{ product.oldPrice }}</span
            >
            <span class="text-red-500 text-sm font-semibold"
              >-{{ product.discount }}%</span
            >
          </div>
          <h2 class="text-2xl font-bold mt-5">Description</h2>
          <p class="text-gray-600 text-sm mt-3">
            {{ product.description }}
          </p>
          <div class="mt-4">
            <p class="font-semibold">Choose Size</p>
            <div class="flex space-x-3 mt-2">
              <button
                v-for="size in sizes"
                :key="size"
                @click="selectedSize = size"
                :class="[
                  'px-4 py-1 rounded-full border',
                  selectedSize === size
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-600',
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <div class="flex justify-between items-center mt-6 space-x-4">
            <div class="flex items-center border rounded-lg">
              <button class="px-3 py-1 text-lg" @click="decreaseQty">-</button>
              <span class="px-4">{{ quantity }}</span>
              <button class="px-3 py-1 text-lg" @click="increaseQty">+</button>
            </div>

            <button
              @click="addToCart"
              class="w-[20vw] bg-black text-white rounded-full py-2 font-semibold hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <ReviewSection />
  </div>
</template>

<script>
import axios from "axios";
import ReviewSection from "./ReviewSection.vue";

export default {
  name: "ProductDetailCard",

  components:{ReviewSection},

  // props: ["id"],
   
  props :{
    id :{} 
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
      alert("Add to Cart Successfully");
      this.$store.dispatch("addToCart", {
        ...this.product,
        quantity: this.quantity,
        size: this.selectedSize,
      });
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
