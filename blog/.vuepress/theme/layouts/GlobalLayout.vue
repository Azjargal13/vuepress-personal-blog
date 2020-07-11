// this is for showing global view layouts

<template>
  <section id="global-layout">
    <div class="container ma-auto pa-5 h-auto">
      <nav-bar />
      <component :is="layout" />
      <!-- <footer>
        <h1>Footer</h1>
      </footer>-->
      <!-- <div class="bg-gray-700 p-4 w-screen bottom-0 sticky">
        <span class="text-white">this is footer</span>
      </div>
      <footer />-->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default Vue.extend({
  components: {
    NavBar,
    Footer
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