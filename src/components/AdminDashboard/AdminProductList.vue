<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
    <div
      v-for="p in products"
      :key="p.id"
      class="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <!-- <button
        v-on:click="DeleteProduct(p.id)"
        class="bg-green-700 text-white px-1 py-1 rounded hover:bg-green-800"
      >
        Del
      </button> -->

      <img
        :src="p.image"
        alt="product_Image"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-lg font-bold">{{ p.title }}</h3>
        <p class="text-gray-500">Price: ${{ p.price }}</p>
        <p class="text-gray-500 line-through">Old Price: ${{ p.oldPrice }}</p>
        <p class="text-gray-500">Discount: {{ p.discount }}%</p>
        <p class="text-yellow-500">⭐ {{ p.rating }}</p>
      </div>
      <div class="text-center flex justify-start px-3 py-1 space-x-3">
        <button
          v-on:click="DeleteProduct(p.id)"
          class="bg-red-700 text-white px-3 py-1 rounded hover:bg-red-800"
        >
          Delete
        </button>
        <button
          v-on:click="openUpdateForm(p)"
          class="bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800"
        >
          Update
        </button>
      </div>
      <EditProduct
        :visible="isUpdateVisible"
        :productData="selectedProduct"
        @close="isUpdateVisible = false"
        @updated="fetchProducts"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EditProduct from "./EditProduct.vue";

export default {
  components: { EditProduct },
  props: ["refreshKey"],
  data() {
    return {
      products: [],
      isUpdateVisible: false,
      selectedProduct: null,
    };
  },
  watch: {
    refreshKey: "fetchProducts",
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const res = await axios.get("http://localhost:3333/products");
      this.products = res.data;
    },
    async DeleteProduct(id) {
      try {
        await axios.delete(`http://localhost:3333/products/${id}`);
        this.products = this.products.filter((p) => p.id !== id);
        alert("Product deleted successfully!");
      } catch (error) {
        console.error(error);
        alert("Error deleting product");
      }
    },
    openUpdateForm(product) {
      this.selectedProduct = product;
      this.isUpdateVisible = true;
    },
  },
};
</script>
