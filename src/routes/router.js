import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/components/Home/HomePage.vue";
import AboutPage from "@/components/About/AboutPage.vue";
import ServicePage from "@/components/Service/ServicePage.vue";
import AddToCart from "@/components/Blog/AddToCart.vue";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard.vue";
import ProductDetails from "@/components/ProductDetails/ProductDetails.vue";
import CheckoutPage from "@/components/Checkout.vue/CheckoutPage.vue";
import OrderPage from "@/components/Orders/OrderPage.vue";
import OrderDetails from "@/components/Orders/OrderDetails.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/services", name: "Service", component: ServicePage },
  { path: "/cart", name: "Blog", component: AddToCart },
  // /login is removed — login is handled via the modal in the navbar.
  // This redirect prevents a 404 if anyone hits the old URL.
  { path: "/login", redirect: "/" },
  { path: "/productsDetails/:id", name: "ProductDetails", component: ProductDetails, props: true },
  { path: "/checkout", name: "Checkout", component: CheckoutPage },
  { path: "/admin", name: "AdminDashboard", component: AdminDashboard, meta: { requiresAuth: true } },
  { path: "/orders", name: "OrderPage", component: OrderPage, meta: { requiresAuth: true } },
  { path: "/orders/:id", name: "OrderDetail", component: OrderDetails, props: true },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLoggedIn) {
      next();
    } else {
      // Don't navigate to a separate page — just go home.
      // The checkout page will open the login modal if needed.
      next("/");
    }
  } else {
    next();
  }
});

export default router;
