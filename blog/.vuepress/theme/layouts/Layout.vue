<template>
  <v-container>
    Its me Layout
    <section class="layout">
      little me!!
      <list ></list>
    </section>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
// // import Home from "./Home.vue";
import List from "../components/List.vue";
export default Vue.extend({
  components: {
    // Home
    List
  }
});
</script>

<style scoped>
</style>