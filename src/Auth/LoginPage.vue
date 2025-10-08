<template>
  <div class="fixed w-full flex flex-col items-center justify-center h-screen bg-gray-500">
    <div class="bg-gray-300 h-[40vh] justify-between flex flex-col p-8 rounded shadow-md w-[35vw]">
      <h2 class="text-2xl font-bold mb-6 text-center">Login Here</h2>
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full mb-4 p-2 border focus:outline-none rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 p-2 focus:outline-none border rounded"
      />
      <button
        @click="handleLogin"
        @keyup.enter="handleLogin"
        class="w-full bg-green-700 text-xl font-bold text-white py-2 rounded hover:bg-green-800"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      if (!this.email.trim() || !this.password.trim()) {
        alert("Please fill in all fields");
        return;
      }

      try {
        // Fetch user from json-server
        const response = await axios.get(
          `http://localhost:3333/users?email=${this.email}&password=${this.password}`
        );

        if (response.data.length > 0) {
          const user = response.data[0];
          
          
          localStorage.setItem("currentUser", JSON.stringify(user));
          localStorage.setItem("loggedIn", "true");

          alert(`Welcome back, ${user.name}!`);
          this.$router.push("/"); 
        } else {
          alert("Incorrect email or password!");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong during login.");
      }
    },
  },
};
</script>
