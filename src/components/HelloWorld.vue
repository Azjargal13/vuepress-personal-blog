<template>
  <v-container>
    <v-app-bar absolute color="white" elevate-on-scroll scroll-target="#scrolling-techniques-7">
      <v-btn text>Azaa's blog</v-btn>

      <v-spacer></v-spacer>

      <v-btn text>Tech blog</v-btn>
      <v-btn text>Personal blog</v-btn>
      <v-btn text>Project</v-btn>
      <v-btn text>About</v-btn>
    </v-app-bar>

    <kinesis-container>
      <v-row class="text-center">
        <kinesis-element :strength="15">
          <v-col cols="12">
            <v-img :src="require('../assets/me.jpg')" class="my-3" contain height="300" />
          </v-col>
        </kinesis-element>

        <v-col class="mb-4">
          <kinesis-element :strength="5">
            <h1 class="display-2 mb-3">Azjargal Gankhuyag</h1>
          </kinesis-element>
          <kinesis-element :strength="20">
            <v-btn class="mx-2" fab dark small color="primary">
              <v-icon>$blog</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark small color="pink">
              <v-icon>$linkedin</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark color="indigo">
              <v-icon>$git</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark color="teal">
              <v-icon>$insta</v-icon>
            </v-btn>
          </kinesis-element>
        </v-col>
      </v-row>
    </kinesis-container>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",

  data: () => ({})
});
</script>
