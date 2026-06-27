# 🛍️ Aura Mart — Premium Vue.js E-Commerce Application

Aura Mart is a responsive, feature-rich e-commerce application designed to deliver a modern shopping experience for customers and a complete control panel for store administrators. Built using a modular component-based architecture with **Vue.js**, **Vuex**, **Vue Router**, and **Tailwind CSS**, this project demonstrates clean coding practices, solid frontend state management, and user authentication workflows.

---

## 🎯 Project Overview & Purpose
This application was engineered to simulate a production-grade e-commerce application. It includes a dynamic product catalog, detailed product views with interactive customer reviews, a centralized shopping cart, a secure multi-step checkout workflow, role-based route security, and an admin console featuring complete CRUD (Create, Read, Update, Delete) capabilities.

---

## 🛠️ Tech Stack & Key Technologies

*   **Core Framework:** Vue.js (v2.6)
*   **State Management:** Vuex (v3.6) — Centrally manages cart state, order records, and calculations.
*   **Routing:** Vue Router (v3.6) — History-mode navigation with dynamic parameter matching and router interceptors.
*   **Styling & UI:** Tailwind CSS (v3.4) + PostCSS — Fully responsive layouts, custom utility-first styles, and transitions.
*   **API Layer:** Axios (v1.1) + Custom offline-first mock API wrapper.
*   **Persistence:** LocalStorage API initialized from a structured `db.json` database.

---

## 🚀 Key Architectural & Engineering Highlights

### 1. Offline-First Latency-Simulated REST Mock API (`mockApi.js`)
*   **The Problem:** Dynamic applications hosted on static pages (like GitHub Pages or Netlify) lose their database state when refreshed, and spinning up external servers can result in cold starts or subscription costs.
*   **The Solution:** Implemented a custom wrapper around Axios that intercepts HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), executes logic against local data stored in `localStorage`, and updates the storage reactively.
*   **Simulated Latency:** The mock API injects a artificial `50ms` delay on requests to simulate network round-trips, ensuring loading spinners, skeletons, and asynchronous transitions behave exactly as they would in production.

### 2. Client-Side Middleware & Navigation Guards
*   Secured routes like `/admin` and `/orders` using Vue Router's `beforeEach` navigation guards.
*   Guards verify session flags (`isLoggedIn` and `currentUser` roles) in real-time, redirecting unauthorized traffic safely back to the home page with user feedback notifications.

### 3. Centralized Reactive State Engine
*   Utilizes a Vuex store to coordinate complex actions (adding items to the cart, modifying item quantities, clearing the cart, and generating invoice datasets).
*   Mutations ensure synchronous, predictable state modifications, and getters isolate order calculations (subtotals, discounts, totals) away from UI components.

---

## ✨ Features

### For Customers:
*   **Browse & Search:** Dynamic product catalog with ratings, price adjustments, and discount tags.
*   **Product Detail Portal:** Image previews, size selections, and quantity controls.
*   **Interactive Reviews:** Real-time customer review board with star-rating logic.
*   **Shopping Cart:** Real-time updates, quantity adjustments, and auto-calculating totals.
*   **Secure Checkout:** Validation-supported checkout forms mimicking cash on delivery and debit card methods.
*   **Order Tracking:** Live transaction log detailing date, time, and purchase invoices.

### For Administrators:
*   **Full Product CRUD:** Access to an admin dashboard to list, create, update, and delete products.
*   **Form Validation:** Safeguards on inventory fields to ensure valid prices, discounts, and ratings.

---

## 📁 Repository Structure

```text
src/
├── Auth/
│   └── LoginPage.vue              # Account authentication components
├── services/
│   └── mockApi.js                 # Latency-simulating Axios-mock database layer
├── routes/
│   └── router.js                  # Vue Router configuration & navigation guards
├── vuex/
│   ├── store.js                   # State initialization (cart, orders)
│   ├── actions.js                 # Dispatched asynchronous operations
│   ├── mutations.js               # Synchronous state modifications
│   └── getters.js                 # Reactive data selectors
└── components/
    ├── AppHeader.vue              # Sticky navigation bar with login/signup modals
    ├── Home/
    │   └── HomePage.vue           # Main catalog landing page
    ├── ProductDetails/
    │   ├── ProductDetails.vue     # Detail view with interactive controls
    │   └── ReviewSection.vue      # Dynamic customer review feed
    ├── Blog/
    │   └── AddToCart.vue          # Shopping cart management panel
    ├── Checkout.vue/
    │   └── CheckoutPage.vue       # Billing, shipping, and payment forms
    ├── Orders/
    │   ├── OrderPage.vue          # Customer order portal
    │   └── OrderDetails.vue       # Interactive invoices
    └── AdminDashboard/
        ├── AdminDashboard.vue     # Inventory management portal
        ├── AddProductForm.vue     # Product creation form
        ├── AdminProductList.vue   # Tabular inventory view
        └── EditProduct.vue        # Product updating console
```

---

## 🚦 Getting Started

### 📋 Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### ⚙️ Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/Junaidmunir02096/Vue-Js-E-commerce-Project.git
   cd Vue-Js-E-commerce-Project
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### 💻 Running Locally
To launch the hot-reloading development server:
```bash
npm run serve
```
The application will be accessible at `http://localhost:8080` (or the next available port).

---

## 📈 Learnings & Project Evolution
Through the development of this project, several core concepts were mastered:
*   Structuring clean, single-source-of-truth architectures using Vuex.
*   Building robust validation engines for user and admin inputs.
*   Designing and implementing navigation guards for client-side routing.
*   Creating a backend-free API simulation to achieve high-fidelity UX on static web hosts.
