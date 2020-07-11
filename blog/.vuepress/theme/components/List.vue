<template>
  <section class="container">
    <div class="font-medium text-gray-700 tracking-tight">
      <span class="text-2xl">Welcome to</span>
      <router-link
        v-for="(item, index) in $list.posts"
        :key="index"
        :to="item.path"
        :class="items "
        class="text-lg"
      >
        <div v-if="item.frontmatter.image" class="flex-xcc item-img">
          <img-lazy :src="item.frontmatter.image" :alt="item.title" class="img" />
        </div>
        <article class="titles mt-4 mb-4 hover:text-indigo-600">
          <h2 class="content-title">{{ item.title }}</h2>
          <div v-html="item.excerpt" class="content" />
        </article>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style  scoped>
.items {
  color: black;
  font-size: 30px;
}
</style>