<template>
  <div v-if="navbar" class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
      <div class="flex items-center flex-shrink-0 text-white">
        <a
          class="font-semibold text-lg tracking-tight ml-4 hover:text-gray-400"
          href="/"
        >Azaa's blog</a>
      </div>

      <div class="block flex-inline">
        <div class="text-m nav-list">
          <a
            v-for="nav in navbar"
            :key="nav.name"
            :href="nav.link"
            class="navbar-item block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold ml-4 hover:underline"
          >{{nav.name}}</a>
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
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
