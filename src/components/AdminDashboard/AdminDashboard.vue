<template>
  <div class="px-6">
    <h1 class="text-3xl p-4 mt-3 text-center font-bold bg-gray-500">
      Admin Dashboard
    </h1>
    <button
      v-on:click="toggleForm()"
      class="px-2 py-3 mt-2 rounded-md text-white font-bold text-xl bg-green-700"
    >
      Add Product
    </button>
    <AddProductForm v-if="showForm" @closeForm="showForm = false" @refreshProducts="refreshKey++" />
    <AdminProductList :refreshKey="refreshKey" />
  </div>
</template>

<script>
import AddProductForm from "./AddProductForm.vue";
import AdminProductList from "./AdminProductList.vue";

export default {
  components: { AddProductForm, AdminProductList },
  data() {
    return {
      showForm: false,
      refreshKey: 0,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>
