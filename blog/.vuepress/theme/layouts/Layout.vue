<template>
  <div class="container ma-auto">
    <section class="layout ml-20 mt-12 pa-10">
      <div v-if="$route.path === '/'"></div>
      <list v-else></list>
    </section>
  </div>
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