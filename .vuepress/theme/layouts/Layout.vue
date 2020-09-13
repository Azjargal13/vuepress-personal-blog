<template>
  <div class="my-auto mx-auto">
    <section class="outer-layout max-w-full sm:min-w-full lg:ml-20 mt-12 lg:pa-10 ml-0 p-5">
      <Content />
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


<style lang="stylus">
@import ('../styles/base.styl');
@import ('../styles/index.styl');
</style>