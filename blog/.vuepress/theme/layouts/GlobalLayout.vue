// this is for showing global view layouts

<template>
  <section id="global-layout">
    <v-container>
      <nav-bar />
      <section class="welcome">Welcome to Personal place!</section>
      <component :is="layout" />
      <footer>
        <h1>Footer</h1>
      </footer>
    </v-container>
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
.welcome {
  margin-top: 100px;
}
</style>