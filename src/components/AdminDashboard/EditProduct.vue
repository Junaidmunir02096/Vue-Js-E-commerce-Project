<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10"
  >
    <div class="bg-white shadow-md rounded-lg p-6 max-w-[50vw]">
      <h2 class="text-xl font-bold mb-4">Update Product</h2>
      <form @submit.prevent="updateProduct" class="space-y-3">
        <input
          v-model="product.title"
          type="text"
          placeholder="Product Title"
          class="w-full border rounded px-3 py-2"
        />
        <input
          v-model="product.price"
          type="number"
          placeholder="Price"
          class="w-full border rounded px-3 py-2"
        />
        <input
          v-model="product.oldPrice"
          type="number"
          placeholder="Old Price"
          class="w-full border rounded px-3 py-2"
        />
        <input
          v-model.number="product.discount"
          type="number"
          placeholder="Discount (%)"
          class="w-full border rounded px-3 py-2"
        />
        <input
          v-model.number="product.rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          class="w-full border rounded px-3 py-2"
        />
        <input
          v-model="product.image"
          type="text"
          placeholder="Image URL"
          class="w-full border rounded px-3 py-2"
        />
        <div class="w-full flex justify-between">
          <button
            type="button"
            @click="$emit('close')"
            class="border-2 border-green-800 text-black  px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="text-white border-2 bg-green-800 px-4 py-2 rounded-md "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // props: ["visible", "productData"],

  // another syntex of props 

  props: {
    visible:{},
    productData: {}
  },
  data() {
    return {
      product: { ...this.productData }, 
    };
  },
  watch: {
    productData(newVal) {
      this.product = { ...newVal };
    },
  },
  methods: {
    async updateProduct() {
        if (
        this.product.title === "" ||
        this.product.price === null ||
        this.product.oldPrice === null ||
        this.product.discount === null ||
        this.product.rating === null ||
        this.product.image === ""
      ) {
        alert(" Please fill all fields before adding a product.");
        return;
      }
      try {
        await axios.put(
          `http://localhost:3333/products/${this.product.id}`,
          this.product
        );
        alert("Product updated successfully!");
        this.$emit("updated"); 
        this.$emit("close"); 
      } catch (error) {
        console.error(error);
        alert("Error updating product");
      }
    },
  },
};
</script>
