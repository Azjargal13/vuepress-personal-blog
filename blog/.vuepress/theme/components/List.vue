<template>
  <section class="flex-w main list">
    <div>
      this is from List
    </div>
    <router-link
      v-for="(item, index) in $list.posts"
      :key="index"
      :to="item.path"
      :class="items"
      class="flex-y list-item"
    >
      <div v-if="item.frontmatter.image" class="flex-xcc item-img">
        <img-lazy :src="item.frontmatter.image" :alt="item.title" class="img" />
      </div>
      <article class="flex-yb item-content">
        <h2 class="content-title">{{ item.title }}</h2>
        <div v-html="item.excerpt" class="content" />
       
      </article>
    </router-link>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style  scoped>
.items{
color: black;
font-size: 30px;
}
</style>