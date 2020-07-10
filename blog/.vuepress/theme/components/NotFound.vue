<template>
  <section class="flex-ycc error">
    <h1 class="error-code">404</h1>
    <p class="error-description">Page not found</p>
    <router-link :to="$localePath" class="error-home">home</router-link>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound"
});
</script>

<style scoped>
</style>