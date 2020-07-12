<template>
  <section class="container">
    <span class="text-2xl tracking-wide font-thin">Welcome to {{$themeConfig.navbar[0].name}}!</span>
    <div class="font-normal text-gray-700 tracking-tight max-w-4xl mx-auto">
      <div class="articles">
        <div class="px-6 py-4">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 mr-4 hover:text-indigo-600"
          >#tag1</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 mr-4 hover:text-indigo-600"
          >#tag2</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 hover:text-indigo-600"
          >#tag3</span>
        </div>

        <router-link
          v-for="(item, index) in $list.posts"
          :key="index"
          :to="item.path"
          class="text-lg"
        >
          <div class="flex mt-4 mb-4 shadow-sm p-12 justify-between">
            <article class="titles w-1/2">
              <h2 class="content-title hover:text-indigo-600">{{ item.title }}</h2>
              <div v-html="item.excerpt" class="content pt-2" />
              <p
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 mt-4"
              >#tag3</p>
              <p class="pt-4 text-gray-500">Time</p>
            </article>
            <div v-if="item.frontmatter.image" class="item-img">
              <img-lazy :src="item.frontmatter.image" :alt="item.title" class="h-40 rounded" />
            </div>
          </div>
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
</style>