<template>
  <div v-if="navbar" class="navbar">
    <v-app-bar absolute color="white" height="60px" elevation="0">
      <v-btn text color="grey" to="/">Azaa's blog</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="nav in navbar"
        :key="nav.name"
        color="grey"
        :to="nav.link"
        class="navbar-item"
      >{{nav.name}}</v-btn>
    </v-app-bar>
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

