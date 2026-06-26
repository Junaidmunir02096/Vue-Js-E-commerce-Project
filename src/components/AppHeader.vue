<template>
  <div>
    <header
      class="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300"
    >
    <router-link to="/" class="flex items-center gap-2">
      <span class="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent font-black text-2xl tracking-wider">AURA MART</span>
    </router-link>

    <div class="flex items-center gap-6 text-sm font-semibold text-gray-600">
      <router-link to="/" class="hover:text-indigo-600 transition-colors duration-200" exact-active-class="text-indigo-600 font-bold">Home</router-link>
      <router-link to="/about" class="hover:text-indigo-600 transition-colors duration-200" exact-active-class="text-indigo-600 font-bold">About</router-link>
      <router-link to="/services" class="hover:text-indigo-600 transition-colors duration-200" exact-active-class="text-indigo-600 font-bold">Services</router-link>
      
      <!-- Cart Link with Dynamic Badge -->
      <router-link to="/cart" class="relative hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1.5" exact-active-class="text-indigo-600 font-bold">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span>Cart</span>
        <span v-if="cartCount > 0" class="absolute -top-2.5 -right-3.5 bg-indigo-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
          {{ cartCount }}
        </span>
      </router-link>

      <router-link
        v-if="isLoggedIn && currentUser.role === 'admin'"
        to="/admin"
        class="hover:text-indigo-600 transition-colors duration-200"
        exact-active-class="text-indigo-600 font-bold"
      >
        Admin
      </router-link>
      
      <router-link v-if="isLoggedIn" to="/orders" class="hover:text-indigo-600 transition-colors duration-200" exact-active-class="text-indigo-600 font-bold">
        Orders
      </router-link>

      <!-- Auth Buttons / User Avatar -->
      <div v-if="isLoggedIn" class="flex items-center gap-4 pl-2 border-l border-gray-200">
        <div class="flex items-center gap-2">
          <div
            class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-indigo-100"
          >
            {{ getFirstWord(currentUser.email) }}
          </div>
          <span class="text-xs text-gray-500 hidden md:inline font-medium">{{ currentUser.name }}</span>
        </div>
        <button
          @click="logout()"
          class="bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
        >
          Logout
        </button>
      </div>

      <div v-else class="flex gap-2 pl-2 border-l border-gray-200">
        <button
          @click="showLogin = true"
          class="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
        >
          Login
        </button>
        <button
          @click="showSignup = true"
          class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-1.5 rounded-lg text-xs font-bold shadow-md shadow-indigo-100 transition-all"
        >
          Sign Up
        </button>
      </div>
    </div>
    </header>

    <!-- LOGIN MODAL -->
    <div
      v-if="showLogin"
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
    >
      <div class="bg-white rounded-3xl border border-gray-100 shadow-2xl w-full max-w-md p-8 relative space-y-6">
        <button
          @click="closeLoginModal"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors"
        >
          &times;
        </button>

        <div class="space-y-2 text-center">
          <h3 class="text-2xl font-black text-gray-900">Welcome Back</h3>
          <p class="text-sm text-gray-500">Sign in to manage your premium orders</p>
        </div>

        <div class="space-y-4">
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider pl-1">Email</label>
            <input
              v-model="loginForm.email"
              type="email"
              placeholder="name@example.com"
              class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider pl-1">Password</label>
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="••••••••"
              class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
            />
          </div>
        </div>

        <div
          v-if="loginError"
          class="text-red-700 bg-red-50 border border-red-100 p-3.5 rounded-xl text-xs font-medium"
        >
          {{ loginError }}
        </div>

        <button
          @click="handleLogin"
          class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-xl transition-all"
        >
          Login
        </button>

        <p class="text-center text-xs text-gray-500">
          Don’t have an account?
          <span
            @click="openSignup"
            class="text-indigo-600 font-bold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>

    <!-- SIGNUP MODAL -->
    <div
      v-if="showSignup"
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
    >
      <div class="bg-white rounded-3xl border border-gray-100 shadow-2xl w-full max-w-md p-8 relative space-y-6">
        <button
          @click="closeSignUpModal"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg transition-colors"
        >
          &times;
        </button>

        <div class="space-y-2 text-center">
          <h3 class="text-2xl font-black text-gray-900">Create Account</h3>
          <p class="text-sm text-gray-500">Explore and review premium e-commerce items</p>
        </div>

        <div class="space-y-4">
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider pl-1">Full Name</label>
            <input
              v-model="signupForm.name"
              type="text"
              placeholder="John Doe"
              class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider pl-1">Email</label>
            <input
              v-model="signupForm.email"
              type="email"
              placeholder="name@example.com"
              class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-bold text-gray-600 uppercase tracking-wider pl-1">Password</label>
            <input
              v-model="signupForm.password"
              type="password"
              placeholder="••••••••"
              class="w-full text-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-3 border border-gray-200 rounded-xl transition-all"
            />
          </div>
        </div>

        <div
          v-if="signupError"
          class="text-red-700 bg-red-50 border border-red-100 p-3.5 rounded-xl text-xs font-medium"
        >
          {{ signupError }}
        </div>

        <button
          @click="handleSignup"
          class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:shadow-xl transition-all"
        >
          Create Account
        </button>

        <p class="text-center text-xs text-gray-500">
          Already have an account?
          <span
            @click="openLogin"
            class="text-indigo-600 font-bold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/services/mockApi";

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
      signupForm: { name: "", email: "", password: "", role: "user" },
    };
  },
  computed: {
    cartCount() {
      // Dynamic reactive cart badge
      return this.$store.getters.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }
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
      const email = this.loginForm.email.trim().toLowerCase();
      const password = this.loginForm.password.trim();
      if (!email || !password) {
        this.loginError = "Please fill in all fields";
        return;
      }
      try {
        const res = await axios.get(
          `http://localhost:3333/users?email=${encodeURIComponent(
            email
          )}&password=${encodeURIComponent(password)}`
        );
        if (res.data.length > 0) {
          const user = res.data[0];
          this.currentUser = user;
          this.isLoggedIn = true;
          localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
          localStorage.setItem("isLoggedIn", true);
          this.showLogin = false;
          alert("Login successful!");
          this.loginForm.email = "";
          this.loginForm.password = "";

          if (user.role === "admin") {
            this.$router.push("/admin");
          } else {
            return;
          }
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
      alert("Logged out successfully!");

      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
      this.isLoggedIn = false;
      this.currentUser = {};
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isLoggedIn");
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
