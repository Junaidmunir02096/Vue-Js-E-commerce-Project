import Vue from "vue";
import VueRouter from "vue-router";


import HomePage from "@/components/Home/HomePage.vue";
import AboutPage from "@/components/About/AboutPage.vue";
import ServicePage from "@/components/Service/ServicePage.vue";
import AddToCart from "@/components/Blog/AddToCart.vue";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard.vue";

import ProductDetails from "@/components/ProductDetails/ProductDetails.vue";
import LoginPage from "@/Auth/LoginPage.vue";
import CheckoutPage from "@/components/Checkout.vue/CheckoutPage.vue";
import OrderPage from "@/components/Orders/OrderPage.vue";
import OrderDetails from "@/components/Orders/OrderDetails.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Service", component: ServicePage },
  {path :"/cart", name :"Blog" , component:AddToCart},
  {path : "/login", name : "Login", component:LoginPage},
  {path : "/productsDetails/:id" , name:"ProductDetails" , component:ProductDetails, props:true },
  {path : "/checkout" , name: "Checkout", component:CheckoutPage},
  {path: "/admin", name: "AdminDashboard",component: AdminDashboard,  meta: { requiresAuth: true },},
  {path: "/orders", name: "OrderPage",component: OrderPage,  meta: { requiresAuth: true },},
  { path: "/orders/:id", name: "OrderDetail", component: OrderDetails, props: true },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLoggedIn) {
      next(); 
    } else {
      alert("Please log in to access this page.");
      next("/"); 
    }
  } else {
    next(); 
  }
});


export default router;
