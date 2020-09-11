<template>
  <section class="info flex justify-center">
    <article class="main info-content rounded p-4 md:p-12 shadow-2xl lg:w-3/4" >
      <div class="content-header text-3xl md:text-5xl font-light mt-8 mb-8 text-center">
        <span class="header-title">{{ $page.title }}</span>

        <p v-for="category in $page.frontmatter.categories" :key="category.id" class="text-xl">
          @{{category}}
          <span class="m-2">|</span>

          <span v-for="tag in $page.frontmatter.tag" :key="tag.id" class="text-xl mr-3">#{{tag}}</span>
        </p>

        <div class="p-4 text-right grid grid-cols-1" v-if="$frontmatter.date">
          <p class="text-sm">
            <!-- <span>
              <img src="https://img.icons8.com/officexs/16/000000/time.png" />
            </span>-->
            {{$frontmatter.date | sliceText}}
          </p>
        </div>
      </div>
      <div class="info-img flex justify-center" v-if="$page.frontmatter.image">
        <img
          :src="$page.frontmatter.image"
          :alt="$frontmatter.title"
          class="rounded info-img sm:m-0"
        />
      </div>
      <Content class="content leading-relaxed text-justify tracking-wide" />

      <!-- <div v-if="postTime" class="content-time">
      <time
        v-if="postTime.createTime && createTime"
        :datetime="createTime"
        class="time-text"
        >{{ postTime.createTime + ': ' + createTime }}
      </time>
      <time
        v-if="postTime.lastUpdated && lastUpdated"
        :datetime="lastUpdated"
        class="time-text"
        >{{ postTime.lastUpdated + ': ' + lastUpdated }}
      </time>
      </div>-->
    </article>
  </section>
</template>

<script>
export default {
  name: "Info",
  filters: {
    sliceText: function (val) {
      var newDate = new Date(val);
      return newDate.toDateString();
    },
  },
};
</script>

<style scoped>
.info-img {
  max-height: 600px;
  min-height: 100px;
  min-width: 250px;
}
.info-content {
  min-width: 300px;
  max-width: 85%;
}
</style>