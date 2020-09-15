<template>
  <section class="list-section max-w-full sm:min-w-full">
    <span
      class="text-2xl tracking-wide font-thin"
    >Welcome to {{ $route.fullPath | changeSubTitle }} <i class="fab fa-angellist"></i>!</span>
    <div class="font-normal text-gray-700 tracking-tight max-w-4xl mx-auto">
      <div class="articles">
        <div class="px-6 py-4 categories">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-m font-semibold text-gray-700 mr-4 hover:text-indigo-600 m-2"
            v-for="val in getCategories()"
            :key="val.id"
          >
          <i class="fab fa-slack-hash"></i>
          {{val}}</span>
         
        </div>

        <router-link
          v-for="(item, index) in $list.posts"
          :key="index"
          :to="item.path"
          class="text-lg hover:text-indigo-600"
        >
          <div class="flex mt-4 mb-4 shadow-sm p-6 md:p-12 justify-between sm:p-4">
            <article class="titles w-full" v-show="!item.frontmatter.image">
              <h2 class="content-title">{{ item.title }}</h2>
              <div v-html="item.excerpt" class="content pt-2" />
              <p
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-4 mr-4 m-2 hover:text-indigo-600"
                v-for="tags in item.frontmatter.tag"
                :key="tags.id"
              >
              <i class="fas fa-tag"></i>
              {{tags}}</p>
              
              
              <p
                class="pt-4 text-gray-500 text-sm"
                v-if="item.frontmatter.date"
              >
               <i class="fas fa-clock"></i>
              {{item.frontmatter.date | sliceText}}</p>
            </article>
            <article class="titles md:w-1/2 w-full" v-show="item.frontmatter.image">
              <h2 class="content-title hover:text-indigo-600">{{ item.title }}</h2>
              <div v-html="item.excerpt" class="content pt-2" />
              <p
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-4 mr-4 m-2"
                v-for="tags in item.frontmatter.tag"
                :key="tags.id"
              >#{{tags}}</p>

              <p
                class="pt-4 text-gray-500 text-sm"
                v-if="item.frontmatter.date"
              >
              <i class="fas fa-clock"></i>
              {{item.frontmatter.date | sliceText}}</p>
            </article>
            <div v-show="item.frontmatter.image" class="item-img hidden md:inline">
              <img :src="item.frontmatter.image" :alt="item.title" class="h-40 rounded" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { getNavName, convertTimestamp } from "../lib/getNavName.ts";

import JwPagination from "jw-vue-pagination";

export default Vue.extend({
  name: "List",
  filters: {
    sliceText: function (val) {
      var newDate = new Date(val);
      return newDate.toDateString();
    },
    changeSubTitle: function (route) {
      let subTitle = "";
      if (route === "/blog1/") {
        subTitle = "Tech blog";
      }
      if (route === "/blog2/") {
        subTitle = "Personal blog";
      }
      if (route === "/project/") {
        subTitle = "Project";
      }
      return subTitle;
    },
  },
  methods:{
    getCategories(){
      let categories = Object.keys(this.$categories._metaMap)
      return categories.slice(0, 5)
    }
  },

  components: {
    JwPagination,
  },
});
</script>

<style  scoped>
</style>