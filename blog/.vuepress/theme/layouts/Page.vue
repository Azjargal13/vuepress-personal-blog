<template>
  <section class="page container mt-12 max-w-full">
    <div class="flex justify-center">
      <info />
    </div>
  </section>
</template>

<script>
import Info from "../components/Info.vue";
export default {
  name: "Page",
  components: {
    Info
  }
};
</script>