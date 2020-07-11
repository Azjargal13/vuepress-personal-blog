<template>
  <section class="container">
    <span class="text-2xl tracking-wide font-thin">Welcome to {{$themeConfig.navbar[0].name}}!</span>
    <div class="font-normal text-gray-700 tracking-tight max-w-4xl mx-auto">
      <div class="articles">
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
          <article class="titles mt-4 mb-4 shadow-sm p-12">
            <h2 class="content-title hover:text-indigo-600">{{ item.title }}</h2>
            <div v-html="item.excerpt" class="content pt-2" />
            <span class="pt-4">#tag</span>
          </article>
        </router-link>
      </div>
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