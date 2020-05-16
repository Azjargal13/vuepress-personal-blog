<template>
  <v-container>
    <kinesis-container>
      <v-row class="text-center ma-10">
        <v-col md="3">
          <kinesis-element :strength="15" type="depth">
            <img :src="codingSVG" alt height="60" class="pa-2 codingImg" />
          </kinesis-element>
        </v-col>
        <v-col md="6" class="ml-auto">
          <kinesis-element :strength="15">
            <img :src="writeSVG" alt height="60" class="pa-2" />
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" class="ml-md-auto">
          <kinesis-element :strength="15">
            <img :src="bookSVG" alt height="60" class="pa-2" />
          </kinesis-element>
        </v-col>
        <v-col md="3" class="ml-md-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="ideaSVG" alt height="60" class="pa-2" />
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="studentSVG" alt height="60" class="pa-2" />
          </kinesis-element>
        </v-col>
        <v-col cols="auto">
          <kinesis-element :strength="15">
            <img :src="travelSVG" alt height="60" class="pa-2" />
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-img :src="myImg" contain height="200" />
          <h1 class="display mb-3 text-center">Azjargal Gankhuyag</h1>
        </v-col>
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
    </kinesis-container>
    <v-footer padless absolute>
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
  name: "HelloWorld",

  data: () => ({
    codingSVG: require("../assets/coding.svg"),
    bookSVG: require("../assets/books.svg"),
    ideaSVG: require("../assets/idea.svg"),
    studentSVG: require("../assets/students.svg"),
    travelSVG: require("../assets/travel.svg"),
    writeSVG: require("../assets/write.svg"),
    myImg: require("../assets/me.jpg"),
    justify: ["start", "end", "center", "baseline", "auto", "stretch"]
  })
});
</script>

<style scoped>
.codingImg {
  position: relative;
  /* left: 130px;
  top: 100px; */
}
.bookImg {
  position: relative;
  /* left: 500px;
  top: 150px; */
}
.ideaImg {
  position: relative;
  /* left: 1550px;
  top: 260px; */
}
.studentImg {
  position: relative;
  /* top: 300px;
  left: 150px; */
}
.travelImg {
  position: relative;
  /* left: 1000px;
  top: 230px; */
}
.writeImg {
  position: relative;
  /* left: 1200px;
  top: 120px; */
}
</style>