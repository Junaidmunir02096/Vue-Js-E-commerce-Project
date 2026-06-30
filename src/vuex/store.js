import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

// Initialize auth state from localStorage so it persists on page refresh
const savedUser = JSON.parse(localStorage.getItem("currentUser")) || {};
const savedLogin = localStorage.getItem("isLoggedIn") === "true";

export default new Vuex.Store({
  state: {
    cart: [],
    orders: [],
    // Auth state — single source of truth for the entire app
    isLoggedIn: savedLogin,
    currentUser: savedUser,
    // Controls the login modal from anywhere in the app
    showLoginModal: false,
    showSignupModal: false,
  },
  getters,
  actions,
  mutations,
});
