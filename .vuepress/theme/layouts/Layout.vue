<template>
  <div class="container my-auto mx-auto">
    <section class="layout lg:ml-20 mt-12 lg:pa-10 ml-0 p-5">
      <Content class="flex-1 container mx-auto leading-normal" />
      <div v-if="$route.path === '/'">
        <Home />
      </div>
      <list v-else></list>
    </section>
  </div>
</template>


<script>
import Home from "@theme/layouts/Home";
import List from "@theme/components/List";
export default {
  components: {
    Home,
    List,
  },
  name: "Layout",
};
</script>

</style>