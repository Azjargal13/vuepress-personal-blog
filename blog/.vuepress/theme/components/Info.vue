<template>
  <section class="info">
    <article class="main info-content">
      <div class="content-header text-5xl font-light mt-4 mb-4 text-center">
        <h1 class="header-title">{{ $page.title }}</h1>
      </div>

      <Content class="content" />
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