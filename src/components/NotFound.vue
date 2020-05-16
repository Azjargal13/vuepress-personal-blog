<template>
  <v-container class="ma-11">
    <h2 class="text-center">oopss, path not found!</h2>
    <v-row align="center" justify="center">
      <v-img :src="notFound" contain height="500"></v-img>
    </v-row>
    <p class="text-center">
      Icon credit:
      <span>
        Icons made by
        <a href="https://www.flaticon.com/authors/mavadee" title="mavadee">mavadee</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </span>
    </p>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NotFound",
  data: () => ({
    notFound: require("../assets/404.svg")
  })
});
</script>

<style scoped>
</style>