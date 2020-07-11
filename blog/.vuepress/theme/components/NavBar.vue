<template>
  <div v-if="navbar" class="navbar">
    <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6 w-screen">
      <div class="flex items-center flex-shrink-0 text-white">
        <a class="font-semibold text-xl tracking-tight" href="/">Azaa's blog</a>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex lg:flex lg:items-center lg:w-auto">
        <div class="text-m lg:flex-grow">
          <a
            v-for="nav in navbar"
            :key="nav.name"
            :href="nav.link"
            class="navbar-item block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold ml-4"
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
  }
};
</script>

