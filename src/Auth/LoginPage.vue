<template>
  <!-- This page is no longer used. The /login route redirects to / -->
  <!-- Login is handled via the modal in AppHeader.vue -->
  <div></div>
</template>

<script>
export default {
  name: "LoginPage",
  created() {
    // Safety redirect — this component should never render since the
    // router redirects /login → / before this component loads.
    this.$router.replace("/");
  },
};
</script>
