<template>
  <div
    class="fixed inset-0 flex  justify-center bg-black bg-opacity-70"
  >
    <div
      class="max-w-[50vw] translate-x-[10%] translate-y-[30%] h-max bg-gray-100 shadow-md rounded-lg p-6"
    >
      <h2 class="text-xl font-bold mb-4">Add Product</h2>
      <form @submit.prevent="addProduct" class="space-y-4">
        <input
          v-model="product.title"
          type="text"
          placeholder="Product Title"
          class="w-full focus:outline-none border rounded px-3 py-2"
        />
        <input
          v-model.number="product.price"
          type="number"
          placeholder="Price"
          class="w-full border focus:outline-none rounded px-3 py-2"
        />

        <input
          v-model.number="product.oldPrice"
          type="number"
          placeholder="Old Price"
          class="w-full border focus:outline-none rounded px-3 py-2"
        />

        <input
          v-model.number="product.discount"
          type="number"
          placeholder="Discount (%)"
          class="w-full border focus:outline-none rounded px-3 py-2"
        />

        <input
          v-model.number="product.rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          class="w-full border focus:outline-none rounded px-3 py-2"
        />

        <input
          v-model="product.image"
          type="text"
          placeholder="Image URL"
          class="w-full border focus:outline-none rounded px-3 py-2"
        />
        <div class="w-full flex justify-between">
          <button
            type="submit"
            class="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Add Product
          </button>
          <button
            v-on:click="CloseForm()"
            class="text-black border-2 border-green-800 px-4 py-2 rounded "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      product: {
        title: "",
        price: null,
        oldPrice: null,
        discount: null,
        rating: null,
        image: ""
      }
    };
  },
  methods: {
    async addProduct() {
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
        await axios.post("http://localhost:3333/products", this.product);
        alert("Product added successfully!");
        this.resetForm();
        this.$emit("closeForm")
        this.$emit("refreshProducts");

      } catch (error) {
        console.error(error);
        alert("Error adding product");
      }
    },
   
    resetForm() {
      this.product = {
        title: "",
        price: null,
        oldPrice: null,
        discount: null,
        rating: null,
        image: ""
      };
    },
     CloseForm(){
      this.$emit("closeForm")
    },
  }
};
</script>
