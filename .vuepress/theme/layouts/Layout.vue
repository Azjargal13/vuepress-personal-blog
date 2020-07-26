<template>
  <div class="container my-auto mx-auto">
    <section class="layout lg:ml-20 mt-12 lg:pa-10 ml-0 p-5">
      <div v-if="$route.path === '/'">
        <Home />
      </div>
      <list v-else></list>
    </section>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Home from "./Home.vue";
import List from "../components/List.vue";
export default Vue.extend({
  components: {
    Home,
    List
  }
});
</script>

<style scoped>
</style>