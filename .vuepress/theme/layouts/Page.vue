<template>
  <section class="page container mt-12 max-w-full">
    <div class="flex justify-center">
      <info />
    </div>
    <div class="flex justify-between">
      <div v-if="$list.lastPost" class="m-10 shadow-2xl">
        <router-link :to="$list.lastPost.regularPath" class="hover:text-indigo-700">
          <h4>go to Prev article <=</h4>
          <p>{{$list.lastPost.title}}</p>
        </router-link>
      </div>
      <div v-if="$list.nextPost" class="m-10 shadow-2xl">
        <router-link :to="$list.nextPost.regularPath" class="hover:text-indigo-700">
          <h4>go to Next article =></h4>
          <p>{{$list.nextPost.title}}</p>
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