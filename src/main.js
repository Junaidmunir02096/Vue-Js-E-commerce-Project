import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css"
import router from "./routes/router";
import store from "./vuex/store"
import "vue-awesome/icons/flag";
import "vue-awesome/icons/user";


new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");


// const savedUser = JSON.parse(localStorage.getItem("currentUser"));
// if (savedUser) {
//   Vue.prototype.$user = savedUser;
// }

