<template>
  <v-app>
    <v-content>
      <HelloWorld />
      <Main />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";
export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Main
  },

  data: () => ({
    //
  })
});
</script>
<style scoped>
</style>