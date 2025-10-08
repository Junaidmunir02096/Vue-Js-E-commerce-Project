<template>
  <header
    class="bg-white text-black px-6 py-4 border-b flex justify-between items-center"
  >
    <router-link to="/"><h1 class="text-2xl cursor-pointer font-bold">Ecommerce App</h1></router-link>

    <div class="flex items-center gap-4 text-md font-bold text-gray-600">
      <router-link to="/" class="text-md hover:text-blue-400">Home</router-link>
      <router-link to="/about" class="hover:text-blue-400">About</router-link>
      <router-link to="/services" class="hover:text-blue-400"
        >Services</router-link
      >
      <router-link to="/cart" class="hover:text-blue-400"
        >Add to Cart</router-link
      >

      <router-link v-if="isLoggedIn" to="/admin" class="hover:text-blue-400">
        Admin Dashboard
      </router-link>
      <router-link v-if="isLoggedIn" to="/orders" class="hover:text-blue-400">
        Orders
      </router-link>

      <div v-if="isLoggedIn" class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold"
        >
          {{ getFirstWord(currentUser.email) }}
        </div>
        <button
          @click="logout"
          class="bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded text-sm font-semibold"
        >
          Logout
        </button>
      </div>

      <div v-else class="flex gap-3">
        <button
          @click="showLogin = true"
          class="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 rounded text-sm font-semibold"
        >
          Login
        </button>
        <button
          @click="showSignup = true"
          class="bg-green-600 text-black hover:bg-green-700 px-3 py-1 rounded text-sm font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>

    <!-- LOGIN MODAL -->

    <div
      v-if="showLogin"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <div class="flex items-center justify-between py-5 border-b">
          <h3 class="text-2xl font-bold text-gray-800">Login</h3>
          <button
            @click="closeLoginModal"
            class="text-white flex items-center justify-center hover:text-gray-300 text-3xl text-center bg-gray-500 h-[30px] w-[30px] rounded-full font-bold"
          >
            ×
          </button>
        </div>

        <input
          v-model="loginForm.email"
          type="email"
          placeholder="Email"
          class="w-full text-black focus:outline-none mb-3 p-2 border rounded"
        />
        <input
          v-model="loginForm.password"
          type="password"
          placeholder="Password"
          class="w-full text-black focus:outline-none mb-3 p-2 border rounded"
        />

        <div
          v-if="loginError"
          class="text-white bg-red-400 p-3 rounded-md text-sm mb-3"
        >
          {{ loginError }}
        </div>
        <button
          @click="handleLogin"
          class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>

        <p class="mt-3 text-right text-sm">
          Don’t have an account?
          <span
            @click="openSignup"
            class="text-blue-700 font-semibold cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
    <!-- SIGNUP MODAL -->
    <div
      v-if="showSignup"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        <div class="flex items-center justify-between py-5 border-b">
          <h3 class="text-2xl font-bold text-gray-800">SingUp</h3>
          <button
            @click="closeSignUpModal"
            class="text-white flex items-center justify-center hover:text-gray-300 text-3xl text-center bg-gray-500 h-[30px] w-[30px] rounded-full font-bold"
          >
            ×
          </button>
        </div>
        <input
          v-model="signupForm.name"
          type="text"
          placeholder="Full Name"
          class="w-full text-black mb-3 p-2 border rounded"
        />
        <input
          v-model="signupForm.email"
          type="email"
          placeholder="Email"
          class="w-full text-black mb-3 p-2 border rounded"
        />
        <input
          v-model="signupForm.password"
          type="password"
          placeholder="Password"
          class="w-full text-black mb-3 p-2 border rounded"
        />

        <div
          v-if="signupError"
          class="text-white bg-red-400 p-3 rounded-md text-sm mb-3"
        >
          {{ signupError }}
        </div>

        <button
          @click="handleSignup"
          class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>

        <p class="mt-3 text-right text-sm">
          Already have an account?
          <span
            @click="openLogin"
            class="text-blue-700 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "AppHeader",
  data() {
    return {
      isLoggedIn: false,
      currentUser: {},
      showLogin: false,
      showSignup: false,
      loginError: "",
      signupError: "",
      loginForm: { email: "", password: "" },
      signupForm: { name: "", email: "", password: "" },
    };
  },
  mounted() {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      this.currentUser = savedUser;
      this.isLoggedIn = true;
    }
  },
  methods: {
    async handleLogin() {
      this.loginError = "";
      if (!this.loginForm.email.trim() || !this.loginForm.password.trim()) {
        this.loginError = "Please fill in all fields";
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:3333/users?email=${this.loginForm.email}&password=${this.loginForm.password}`
        );
        if (res.data.length > 0) {
          this.currentUser = res.data[0];
          this.isLoggedIn = true;
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          localStorage.setItem("isLoggedIn", true);
          this.showLogin = false;
          alert("Login successful!");
          this.loginForm.email = "";
          this.loginForm.password = "";
        } else {
          this.loginError = "Invalid email or password.";
        }
      } catch (err) {
        this.loginError = "Login failed. Try again.";
      }
    },

    async handleSignup() {
      if (
        !this.signupForm.name ||
        !this.signupForm.email ||
        !this.signupForm.password
      ) {
        this.signupError = "All fields are required.";
        return;
      }
      try {
        const existing = await axios.get(
          `http://localhost:3333/users?email=${this.signupForm.email}`
        );
        if (existing.data.length > 0) {
          this.signupError = "User already exists with this email.";
          return;
        }

        await axios.post("http://localhost:3333/users", this.signupForm);
        alert("Signup successful! Please log in.");
        this.signupForm.name = "";
        this.signupForm.email = "";
        this.signupForm.password = "";
        this.openLogin();
      } catch (err) {
        this.signupError = "Signup failed. Try again.";
      }
    },

    closeLoginModal() {
      this.showLogin = false;
      this.loginForm.email = "";
      this.loginForm.password = "";
    },
    closeSignUpModal() {
      this.showSignup = false;
      this.signupForm.name = "";
      this.signupForm.email = "";
      this.signupForm.password = "";
    },

    logout() {
      this.isLoggedIn = false;
      this.currentUser = {};
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
      alert("Logged out successfully!");
    },

    openSignup() {
      this.showSignup = true;
      this.showLogin = false;
    },
    openLogin() {
      this.showLogin = true;
      this.showSignup = false;
    },
    getFirstWord(email) {
      if (!email) return "??";
      const name = email.split("@")[0];
      const parts = name.split(".");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return name.substring(0, 1).toUpperCase();
    },
  },
};
</script>
