import dbData from "../../db.json";

// Initialize localStorage if not present
if (!localStorage.getItem("mock_products")) {
  localStorage.setItem("mock_products", JSON.stringify(dbData.products));
} else {
  // Self-heal: Migrate any old HTTP image URLs to the new local assets
  try {
    let storedProducts = JSON.parse(localStorage.getItem("mock_products")) || [];
    let hasOldLinks = storedProducts.some((p) => p.image && p.image.startsWith("http"));
    if (hasOldLinks) {
      storedProducts.forEach((p) => {
        const match = dbData.products.find((dbP) => String(dbP.id) === String(p.id));
        if (match) {
          p.image = match.image;
        }
      });
      localStorage.setItem("mock_products", JSON.stringify(storedProducts));
    }
  } catch (e) {
    console.error("Failed to migrate mock products cache", e);
  }
}
if (!localStorage.getItem("mock_reviews")) {
  localStorage.setItem("mock_reviews", JSON.stringify(dbData.reviews));
}
if (!localStorage.getItem("mock_users")) {
  localStorage.setItem("mock_users", JSON.stringify(dbData.users));
}

// Helpers to get/set data
const getProducts = () => JSON.parse(localStorage.getItem("mock_products")) || [];
const setProducts = (p) => localStorage.setItem("mock_products", JSON.stringify(p));

const getReviews = () => JSON.parse(localStorage.getItem("mock_reviews")) || [];
const setReviews = (r) => localStorage.setItem("mock_reviews", JSON.stringify(r));

const getUsers = () => JSON.parse(localStorage.getItem("mock_users")) || [];
const setUsers = (u) => localStorage.setItem("mock_users", JSON.stringify(u));

// Simulate network latency
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockAxios = {
  async get(url) {
    await delay(50);
    // Parse URL and query params
    const parsedUrl = new URL(url, "http://localhost:3333");
    const path = parsedUrl.pathname;
    const params = parsedUrl.searchParams;

    if (path === "/products" || path === "/products/") {
      return { data: getProducts() };
    }
    
    if (path.startsWith("/products/")) {
      const id = path.split("/").pop();
      const product = getProducts().find((p) => String(p.id) === String(id));
      if (!product) throw new Error("Product not found");
      return { data: product };
    }

    if (path === "/reviews" || path === "/reviews/") {
      return { data: getReviews() };
    }

    if (path.startsWith("/reviews/")) {
      const id = path.split("/").pop();
      const review = getReviews().find((r) => String(r.id) === String(id));
      if (!review) throw new Error("Review not found");
      return { data: review };
    }

    if (path === "/users" || path === "/users/") {
      const email = params.get("email");
      const password = params.get("password");
      let users = getUsers();
      if (email) {
        users = users.filter((u) => u.email.toLowerCase() === email.toLowerCase());
      }
      if (password) {
        users = users.filter((u) => u.password === password);
      }
      return { data: users };
    }

    throw new Error(`MockApi: GET request to ${url} not handled`);
  },

  async post(url, data) {
    await delay(50);
    const parsedUrl = new URL(url, "http://localhost:3333");
    const path = parsedUrl.pathname;

    if (path === "/products" || path === "/products/") {
      const products = getProducts();
      const newProduct = { 
        ...data, 
        id: data.id || Math.random().toString(36).substring(2, 9) 
      };
      products.push(newProduct);
      setProducts(products);
      return { data: newProduct };
    }

    if (path === "/reviews" || path === "/reviews/") {
      const reviews = getReviews();
      const newReview = { 
        ...data, 
        id: data.id || Math.random().toString(36).substring(2, 9) 
      };
      reviews.push(newReview);
      setReviews(reviews);
      return { data: newReview };
    }

    if (path === "/users" || path === "/users/") {
      const users = getUsers();
      const newUser = { 
        ...data, 
        id: data.id || Math.random().toString(36).substring(2, 9) 
      };
      users.push(newUser);
      setUsers(users);
      return { data: newUser };
    }

    throw new Error(`MockApi: POST request to ${url} not handled`);
  },

  async put(url, data) {
    await delay(50);
    const parsedUrl = new URL(url, "http://localhost:3333");
    const path = parsedUrl.pathname;

    if (path.startsWith("/products/")) {
      const id = path.split("/").pop();
      const products = getProducts();
      const idx = products.findIndex((p) => String(p.id) === String(id));
      if (idx === -1) throw new Error("Product not found");
      products[idx] = { ...products[idx], ...data, id };
      setProducts(products);
      return { data: products[idx] };
    }

    if (path.startsWith("/reviews/")) {
      const id = path.split("/").pop();
      const reviews = getReviews();
      const idx = reviews.findIndex((r) => String(r.id) === String(id));
      if (idx === -1) throw new Error("Review not found");
      reviews[idx] = { ...reviews[idx], ...data, id };
      setReviews(reviews);
      return { data: reviews[idx] };
    }

    throw new Error(`MockApi: PUT request to ${url} not handled`);
  },

  async patch(url, data) {
    return this.put(url, data);
  },

  async delete(url) {
    await delay(50);
    const parsedUrl = new URL(url, "http://localhost:3333");
    const path = parsedUrl.pathname;

    if (path.startsWith("/products/")) {
      const id = path.split("/").pop();
      const products = getProducts();
      const filtered = products.filter((p) => String(p.id) !== String(id));
      setProducts(filtered);
      return { data: { success: true } };
    }

    if (path.startsWith("/reviews/")) {
      const id = path.split("/").pop();
      const reviews = getReviews();
      const filtered = reviews.filter((r) => String(r.id) !== String(id));
      setReviews(filtered);
      return { data: { success: true } };
    }

    throw new Error(`MockApi: DELETE request to ${url} not handled`);
  }
};

export default mockAxios;
