<template>
  <div v-if="navbar" class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div class="flex items-center flex-shrink-0 text-white">
        <router-link
          class="font-semibold text-lg tracking-tight ml-4 hover:text-white"
          to="/"
        >Azaa's blog</router-link>
      </div>

      <div class="block flex-inline">
        <div class="text-m nav-list">
          <router-link
            v-for="nav in navbar"
            :key="nav.name"
            :to="nav.link"
            class="navbar-item block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold ml-4"
          >{{nav.name}}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    navbar() {
      return this.$themeConfig.navbar || null;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
  color: #c7ede6;
  border-bottom: #c7ede6;
  border-bottom-style: double;
}

/* .nav-links:nth-child(1) > .router-link-exact-active {
  color: rgb(3, 7, 6);
}

.nav-links:nth-child(1) > .router-link-active {
  color: #edf2f7;
} */
.nav-links:nth-child(1) {
  color: rebeccapurple;
}
</style>
