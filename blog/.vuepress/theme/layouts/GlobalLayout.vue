// this is for showing global view layouts

<template>
  <section id="global-layout">
    <div class="container ma-auto pa-5 h-auto">
      <nav-bar />
      <component :is="layout" />
      <footer />
      <footer class="p-8">
        <div class="text-center">
          <a href="https://github.com/Azjargal13" class="hover:text-indigo-600">&copy;Azjargal |</a>
          <a href="https://vuepress.vuejs.org/" class="hover:text-indigo-600">VuePress |</a>
          <a
            href="https://icons8.com/icon/64520/ball-point-pen"
            class="hover:text-indigo-600"
          >Icons8</a>
        </div>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "../components/NavBar.vue";

export default Vue.extend({
  components: {
    NavBar
  },
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        return "Layout";
      }
      return "NotFound";
    }
  }
});
</script>

<style scoped>
</style>