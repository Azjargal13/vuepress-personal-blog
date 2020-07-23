<template>
  <section class="error">
    <div class="text-center">
      <h1 class="error-code mt-10">Sorry, its 404</h1>
      <p class="error-description">and the Page not found ...</p>

      <h4>
        We're redirecting you to
        <router-link :to="$localePath" class="error-home text-indigo-600 font-bold">home</router-link>
      </h4>
      <h2 class="error-code mt-10">Thanks for visiting this blog :)</h2>
    </div>
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