<template>
  <kinesis-container>
    Here, you can put
    <kinesis-element :strength="10">whatever</kinesis-element>
    <kinesis-element :strength="20">content!</kinesis-element>
  </kinesis-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Main"
});
</script>

<style scoped>
</style>