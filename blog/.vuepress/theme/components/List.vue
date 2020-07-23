<template>
  <section class="container">
    <span class="text-2xl tracking-wide font-thin">Welcome to {{navName}}!</span>
    <div class="font-normal text-gray-700 tracking-tight max-w-4xl mx-auto">
      <div class="articles">
        <div class="px-6 py-4 categories">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 mr-4 hover:text-indigo-600 m-2"
            v-for="(val, k) in $categories._metaMap"
            :key="k"
          >@{{k}}</span>
        </div>

        <router-link
          v-for="(item, index) in $list.posts"
          :key="index"
          :to="item.path"
          class="text-lg"
        >
          <div class="flex mt-4 mb-4 shadow-sm p-6 md:p-12 justify-between sm:p-4">
            <article class="titles md:w-1/2 w-full">
              <h2 class="content-title hover:text-indigo-600">{{ item.title }}</h2>
              <div v-html="item.excerpt" class="content pt-2" />
              <p
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-4 mr-4 m-2"
                v-for="tags in item.frontmatter.tags"
                :key="tags"
              >#{{tags}}</p>

              <p
                class="pt-4 text-gray-500 text-sm"
                v-if="$frontmatter.date"
              >{{item.frontmatter.date | sliceText}}</p>
            </article>
            <div v-if="item.frontmatter.image" class="item-img hidden md:inline">
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
import { getNavName, convertTimestamp } from "../lib/getNavName.ts";
export default Vue.extend({
  data() {
    navName: "";
    timestamp: "";
    testingTxt: "";
    return {
      navName: getNavName(this.$route.path),
      testingTxt: "lowercase"
    };
  },
  filters: {
    sliceText: function(val) {
      return val.slice(0, 10);
    }
  }
});
</script>

<style  scoped>
</style>