<template>
  <div class="max-w-5xl mx-auto p-6">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Customer Reviews</h2>
      <div class="flex items-center gap-2">
        <div class="flex items-center">
          <span v-for="i in 5" :key="i" class="text-yellow-400 text-xl">★</span>
        </div>
        <span class="text-gray-600"
          >{{ averageRating.toFixed(1) }} out of 5 ({{
            reviews.length
          }}
          reviews)</span
        >
      </div>
    </div>

    <div v-if="isLoggedIn" class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-semibold text-gray-800">
          {{ isEditing ? "Edit Your Review" : "Write a Review" }}
        </h3>
        <button
          @click="logout"
          class="text-sm text-red-600 hover:text-red-700 font-medium"
        >
          Logout
        </button>
      </div>

      <!-- Logged-in User Info -->
      <div class="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
        <div
          class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold"
        >
          {{ getInitials(currentUser.email) }}
        </div>
        <span class="text-gray-700 font-medium">{{ currentUser.email }}</span>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">Your Rating</label>
        <div class="flex gap-2">
          <button
            v-for="star in 5"
            :key="star"
            @click="selectedRating = star"
            class="text-3xl transition-colors duration-200 focus:outline-none"
            :class="
              star <= selectedRating ? 'text-yellow-400' : 'text-gray-300'
            "
          >
            ★
          </button>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-medium mb-2">Your Review</label>
        <textarea
          v-model="reviewText"
          rows="4"
          placeholder="Share your experience..."
          class="w-full px-4 py-2 border focus:outline-none border-gray-300 rounded-lg"
        ></textarea>
      </div>

      <div class="flex gap-3">
        <button
          @click="isEditing ? updateReview() : addReview()"
          :disabled="!reviewText.trim() || selectedRating === 0"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {{ isEditing ? "Update Review" : "Submit Review" }}
        </button>

        <button
          v-if="isEditing"
          @click="cancelEdit"
          class="bg-gray-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Login Modal -->
     
    <div
      v-if="showLoginModal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div class="flex items-center justify-between p-6 border-b">
          <h3 class="text-2xl font-bold text-gray-800">Login</h3>
          <button
            @click="closeLoginModal"
            class="text-white flex items-center justify-center hover:text-gray-300 text-3xl text-center bg-gray-500 h-[30px] w-[30px] rounded-full font-bold"
          >
            ×
          </button>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              v-model="loginForm.email"
              type="email"
              placeholder="Enter your email"
              class="w-full focus:outline-none focus px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="Enter your password"
              class="w-full focus:outline-none px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div
            v-if="loginError"
            class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <p class="text-red-600 text-sm">{{ loginError }}</p>
          </div>

          <button
            @click="handleLogin"
            class="w-full text-2xl bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition-colors duration-200"
          >
            Login
          </button>

          <div class="w-full p-4 text-end cursor-pointer">
            <p>
              Don't have an account ?
              <span @click="openSignup()" class="text-blue-600">SIGNUP</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Register Modal -->
    <div
      v-if="showSignupModal"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div class="flex items-center justify-between p-6 border-b">
          <h3 class="text-2xl font-bold text-gray-800">Sign Up</h3>
          <button
            @click="closeSignUpModal"
            class="text-white flex items-center justify-center hover:text-gray-300 text-3xl text-center bg-gray-500 h-[30px] w-[30px] rounded-full font-bold"
          >
            ×
          </button>
        </div>
        <div class="p-6">
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Name</label>
            <input
              v-model="signUpForm.name"
              type="text"
              placeholder="Enter your Name"
              class="w-full focus:outline-none focus px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              v-model="signUpForm.email"
              type="email"
              placeholder="Enter your email"
              class="w-full focus:outline-none focus px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Password</label>
            <input
              v-model="signUpForm.password"
              type="password"
              placeholder="Enter your password"
              class="w-full focus:outline-none px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div
            v-if="signupError"
            class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
          >
            <p class="text-red-600 text-sm">{{ signupError }}</p>
          </div>

          <button
            @click="handleSignup"
            class="w-full text-2xl bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition-colors duration-200"
          >
            Sign Up
          </button>

          <div class="w-full p-4 text-end cursor-pointer">
            <p>
              Already have an account ?
              <span @click="openLogin" class="text-blue-800"> Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Reviews List -->
    <div class="space-y-6">
      <div
        v-for="review in sortedReviews"
        :key="review.id"
        class="bg-white border rounded-lg shadow-md p-6 transition-shadow hover:shadow-lg"
      >
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg"
            >
              {{ getInitials(review.email) }}
            </div>
            <div>
              <p class="font-semibold text-gray-800">{{ review.email }}</p>
              <p class="text-sm text-gray-500">{{ formatDate(review.date) }}</p>
            </div>
          </div>

          <!-- Edit Button (only show for own reviews) -->
          <button
            v-if="isLoggedIn && review.email === currentUser.email"
            @click="editReview(review)"
            class="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Edit
          </button>
        </div>

        <div class="flex items-center gap-2 mb-3">
          <div class="flex">
            <span
              v-for="i in 5"
              :key="i"
              class="text-lg"
              :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
            >
              ★
            </span>
          </div>
          <span class="text-sm text-gray-600">({{ review.rating }}/5)</span>
        </div>

        <p class="text-gray-700 leading-relaxed">{{ review.text }}</p>
      </div>

      <div v-if="reviews.length === 0" class="text-center py-12 text-gray-500">
        <p class="text-lg">No reviews yet. Be the first to review!</p>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ReviewSection",
  data() {
    return {
      isLoggedIn: false,
      showLoginModal: false,
      showSignupModal: false,
      loginError: "",
      signupError: "",
      currentUser: {
        email: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
      signUpForm: {
        name: "",
        email: "",
        password: "",
      },
      selectedRating: 0,
      reviewText: "",
      reviews: [],
      isEditing: false,
      editingReviewId: null,
    };
  },
 mounted() {
  this.fetchReviews();

  // Detect logged in user from localStorage
  const savedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (savedUser) {
    this.currentUser = savedUser;
    this.isLoggedIn = true;
  }
},
  computed: {
    averageRating() {
      if (this.reviews.length === 0) return 0;
      const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
      return sum / this.reviews.length;
    },
    sortedReviews() {
      return [...this.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    async fetchReviews() {
      try {
        const res = await axios.get("http://localhost:3333/reviews");
        this.reviews = res.data;
        console.log("Fetched reviews:", this.reviews);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
        alert("Failed to load reviews. Please refresh the page.");
      }
    },

    async addReview() {
      if (!this.reviewText.trim() || this.selectedRating === 0) {
        return;
      }

      // Don't  include 'id' - let json-server auto-generate it
      const newReview = {
        email: this.currentUser.email,
        rating: this.selectedRating,
        text: this.reviewText.trim(),
        date: new Date().toISOString(),
      };

      console.log("Adding review (without ID):", newReview);

      try {
        const response = await axios.post("http://localhost:3333/reviews", newReview);

        this.reviews.unshift(response.data);

        // Reset form
        this.reviewText = "";
        this.selectedRating = 0;

        alert("Review submitted successfully! ID: " + response.data.id);
      } catch (err) {
        console.error("Add review error:", err);
        alert("Failed to submit review. Please try again.");
      }
    },

    editReview(review) {
      console.log("Editing review:", review);
      this.isEditing = true;
      this.editingReviewId = review.id;
      this.reviewText = review.text;
      this.selectedRating = review.rating;

      // window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    async updateReview() {
      if (!this.reviewText.trim() || this.selectedRating === 0) {
        return;
      }

      console.log("Attempting to update review ID:", this.editingReviewId);

      try {
    
        const checkResponse = await axios.get(`http://localhost:3333/reviews/${this.editingReviewId}`);
        console.log("Found review to update:", checkResponse.data);
        
        const originalDate = checkResponse.data.date; 
        const updatedData = {
          email: this.currentUser.email,
          rating: this.selectedRating,
          text: this.reviewText.trim(),
          date: originalDate,
        };

        console.log("Sending update with data:", updatedData);

        const response = await axios.put(
          `http://localhost:3333/reviews/${this.editingReviewId}`,
          updatedData
        );

        console.log("Update successful:", response.data);

        // Update local state with server response
        const index = this.reviews.findIndex(r => r.id === this.editingReviewId);
        if (index !== -1) {
          this.reviews.splice(index, 1, response.data);
        }

        alert("Review updated successfully!");
        this.cancelEdit();
      } catch (err) {
        console.error("Update error:", err);
        console.log("Failed review ID:", this.editingReviewId);
        console.log("Available review IDs:", this.reviews.map(r => r.id));

        if (err.response && err.response.status === 404) {
          alert(`Review not found! The review with ID ${this.editingReviewId}`);
        } else if (err.response) {
          alert(`Failed to update: ${err.response.status} - ${err.response.statusText}`);
        } else {
          alert("Network error. Please check your connection.");
        }
      }
    },

    cancelEdit() {
      this.isEditing = false;
      this.editingReviewId = null;
      this.reviewText = "";
      this.selectedRating = 0;
    },

    async handleSignup() {
      this.signupError = "";

      if (!this.signUpForm.name || !this.signUpForm.email || !this.signUpForm.password) {
        this.signupError = "Please fill in all fields";
        return;
      }

      try {
        const res = await axios.get(
          `http://localhost:3333/users?email=${this.signUpForm.email}`
        );
        if (res.data.length > 0) {
          this.signupError = "User already exists with this email";
          return;
        }
        const newUser = {
          name: this.signUpForm.name,
          email: this.signUpForm.email,
          password: this.signUpForm.password,
        };

        await axios.post("http://localhost:3333/users", newUser);
        alert("Signup successful! You can now log in.");
        this.openLogin();

        this.signUpForm.name = "";
        this.signUpForm.email = "";
        this.signUpForm.password = "";
      } catch (err) {
        console.error("Signup error:", err);
        this.signupError = "Something went wrong during signup.";
      }
    },

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
          this.isLoggedIn = true;
          this.currentUser.email = res.data[0].email;
          this.closeLoginModal();
          alert("Login successful! You can now write a review.");

          this.loginForm.email = "";
          this.loginForm.password = "";
        } else {
          this.loginError = "Invalid email or password.";
        }
      } catch (err) {
        console.error("Login error:", err);
        this.loginError = "Something went wrong during login.";
      }
    },

    openLogin() {
      this.showSignupModal = false;
      this.showLoginModal = true;
      this.signupError = "";
    },

    openSignup() {
      this.showLoginModal = false;
      this.showSignupModal = true;
      this.loginError = "";
    },

    closeLoginModal() {
      this.showLoginModal = false;
      this.loginForm.email = "";
      this.loginForm.password = "";
      this.loginError = "";
    },

    closeSignUpModal() {
      this.showSignupModal = false;
      this.signUpForm.name = "";
      this.signUpForm.email = "";
      this.signUpForm.password = "";
      this.signupError = "";
    },

    logout() {
      this.isLoggedIn = false;
      this.currentUser.email = "";
      this.selectedRating = 0;
      this.reviewText = "";
      this.cancelEdit();
    },

    getInitials(email) {
      if (!email) return "??";
      const name = email.split("@")[0];
      const parts = name.split(".");
      if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    },

    formatDate(date) {
      if (!date) return "Unknown date";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
  },
};
</script>
