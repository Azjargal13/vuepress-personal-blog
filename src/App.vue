<template>
  <v-app>
    <v-content>
      <v-app-bar absolute color="white" height="60px" elevation="0">
        <v-btn text color="grey">Azaa's blog</v-btn>

        <v-spacer></v-spacer>

        <v-btn text color="grey">Tech blog</v-btn>
        <v-btn text color="grey">Personal blog</v-btn>
        <v-btn text color="grey">Project</v-btn>
        <v-btn text color="grey">About</v-btn>
      </v-app-bar>
      <Home />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "./components/Home.vue";

export default Vue.extend({
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
});
</script>
<style scoped>
</style>