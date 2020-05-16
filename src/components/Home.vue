<template>
  <v-container>
    <kinesis-container>
      <v-row class="text-center ma-10">
        <v-col md="3">
          <kinesis-element :strength="15" type="depth">
            <img :src="codingSVG" alt height="60" class="pa-2" />
            <h2>Javascript/Typescript</h2>
          </kinesis-element>
        </v-col>
        <v-col md="6" class="ml-auto">
          <kinesis-element :strength="15">
            <img :src="writeSVG" alt height="60" class="pa-2" />
            <h2>Hobbyist blog writer</h2>
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" class="ml-md-auto">
          <kinesis-element :strength="15">
            <img :src="bookSVG" alt height="60" class="pa-2" />
            <h2>bibliophile</h2>
          </kinesis-element>
        </v-col>
        <v-col md="3" class="ml-md-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="ideaSVG" alt height="60" class="pa-2" />
            <h2>Idealist/Dreamer</h2>
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="studentSVG" alt height="60" class="pa-2" />
            <h2>Front-End Engineer</h2>
            <h2>VueJs love</h2>
          </kinesis-element>
        </v-col>
        <v-col cols="auto">
          <kinesis-element :strength="15">
            <img :src="travelSVG" alt height="60" class="pa-2" />
            <h2>Travel love</h2>
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <kinesis-element :strength="15">
          <v-img :src="myImg" contain class="myImg" max-width="200" max-height="200"></v-img>
        </kinesis-element>
      </v-row>
      <h1 class="display mt-3 d-flex justify-center">Azjargal Gankhuyag</h1>
      <v-row>
        <v-col class="d-flex justify-center ma-0">
          <v-btn class="mx-1" fab dark small color="grey">
            <v-icon>$blog</v-icon>
          </v-btn>

          <v-btn class="mx-1" fab dark small color="grey">
            <v-icon>$linkedin</v-icon>
          </v-btn>

          <v-btn class="mx-1" fab dark small color="grey">
            <v-icon>$git</v-icon>
          </v-btn>

          <v-btn class="mx-1" fab dark small color="grey">
            <v-icon>$insta</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <h2 class="display ma-4 d-flex justify-center">
        <kinesis-element :strength="1" type="scale">
          Life motto:
          <span v-for="m in motto" :key="m.id">{{m}}</span>
        </kinesis-element>
      </h2>
    </kinesis-container>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        <p class="overline">
          made with
          <v-icon>$heart</v-icon>&
          <a href="https://vuejs.org/">VueJs</a>
          &copy; {{ new Date().getFullYear() }} Azjargal Gankhuyag | Powered by
          <a
            href="https://vuetifyjs.com/"
          >Vuetify</a>
          |
          <a href="https://www.flaticon.com/">Flaticon</a>
        </p>

        <p></p>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data: () => ({
    codingSVG: require("../assets/coding.svg"),
    bookSVG: require("../assets/books.svg"),
    ideaSVG: require("../assets/idea.svg"),
    studentSVG: require("../assets/students.svg"),
    travelSVG: require("../assets/travel.svg"),
    writeSVG: require("../assets/write.svg"),
    myImg: require("../assets/me.jpg"),
    justify: ["start", "end", "center", "baseline", "auto", "stretch"],
    motto: "vivere memento"
  })
});
</script>

<style scoped>
.myImg {
  border-radius: 50px;
  border: 5px solid #dbdbdb;
}
</style>