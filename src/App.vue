<template>
  <v-app>
    <v-content>
      <v-app-bar absolute color="white" height="60px" elevation="0">
        <v-btn text color="grey" to="/">Azaa's blog</v-btn>

        <v-spacer></v-spacer>

        <v-btn text color="grey" to="/blog1">Tech blog</v-btn>
        <v-btn text color="grey" to="/blog2">Personal blog</v-btn>
        <v-btn text color="grey" to="/project">Projects</v-btn>
        <v-btn text color="grey" to="/about">About</v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  })
});
</script>
<style scoped>
</style>