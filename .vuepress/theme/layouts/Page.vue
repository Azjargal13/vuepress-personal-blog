<template>
  <section class="page container mt-12 max-w-full">
    <div class="lg:flex lg:justify-center">
      <info />
    </div>
    <div class="flex justify-between">
      <div v-if="$list.lastPost && $list.nextPost" class="m-10 shadow-2xl">
        <router-link :to="$list.lastPost.regularPath" class="hover:text-indigo-700">
          <h4>Prev article <i class="fas fa-arrow-left"></i> </h4>
          <p>{{$list.lastPost.title}}</p>
        </router-link>
      </div>
      <div v-if="$list.nextPost && $list.lastPost" class="m-10 shadow-2xl">
        <router-link :to="$list.nextPost.regularPath" class="hover:text-indigo-700">
          <h4>Next article <i class="fas fa-arrow-right"></i> </h4>
          <p>{{$list.nextPost.title}}</p>
        </router-link>
      </div>
    </div>
    <div class="flex justify-center">
      <div v-if="!$list.lastPost && $list.nextPost" class="m-10 shadow-2xl w-1/2">
        <router-link :to="$list.nextPost.regularPath" class="hover:text-indigo-700">
          <h4>Next article <i class="fas fa-arrow-right"></i></h4>
          <p>{{$list.nextPost.title}}</p>
        </router-link>
      </div>
      <div v-if="!$list.nextPost && $list.lastPost" class="m-10 shadow-2xl w-1/2">
        <router-link :to="$list.lastPost.regularPath" class="hover:text-indigo-700">
          <h4>Prev article <i class="fas fa-arrow-left"></i></h4>
          <p>{{$list.lastPost.title}}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Info from "../components/Info.vue";
export default {
  name: "Page",
  components: {
    Info,
  },
};
</script>

<style lang="stylus">
@import ('../styles/base.styl');
@import ('../styles/index.styl');
</style>