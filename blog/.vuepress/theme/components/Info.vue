<template>
  <section class="info">
    <article class="main info-content max-w-4xl mx-auto rounded p-12 shadow-2xl">
      <div class="content-header text-5xl font-light mt-8 mb-8 text-center">
        <span class="header-title">{{ $page.title }}</span>
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
  name: "Info"
};
</script>