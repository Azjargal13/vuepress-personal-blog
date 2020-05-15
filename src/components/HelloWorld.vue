<template>
  <v-container>
    <v-app-bar absolute color="white" height="60px">
      <v-btn text color="grey">Azaa's blog</v-btn>

      <v-spacer></v-spacer>

      <v-btn text color="grey">Tech blog</v-btn>
      <v-btn text color="grey">Personal blog</v-btn>
      <v-btn text color="grey">Project</v-btn>
      <v-btn text color="grey">About</v-btn>
    </v-app-bar>

    <kinesis-container>
      <v-row class="text-center">
        <div class="codingImg mt-10">
          <kinesis-element :strength="15">
            <img :src="codingSVG" width="50px" />
          </kinesis-element>
        </div>
        <div class="bookImg mt-10">
          <kinesis-element :strength="15">
            <img :src="bookSVG" width="50px" />
          </kinesis-element>
        </div>
        <div class="ideaImg mt-10">
          <kinesis-element :strength="15">
            <img :src="ideaSVG" width="50px" />
          </kinesis-element>
        </div>
        <div class="travelImg mt-10">
          <kinesis-element :strength="15">
            <img :src="travelSVG" width="50px" />
          </kinesis-element>
        </div>
        <div class="studentImg mt-10">
          <kinesis-element :strength="15">
            <img :src="studentSVG" width="50px" />
          </kinesis-element>
        </div>
        <div class="writeImg mt-10">
          <kinesis-element :strength="15">
            <img :src="writeSVG" width="50px" />
          </kinesis-element>
        </div>

        <kinesis-element :strength="5">
          <v-col cols="12">
            <v-img :src="myImg" class="my-3" contain height="250" />
          </v-col>
        </kinesis-element>

        <v-col class="mb-4">
          <kinesis-element :strength="5">
            <h1 class="display mb-3">Azjargal Gankhuyag</h1>
          </kinesis-element>
          <v-btn class="mx-2" fab dark small color="grey">
            <v-icon>$blog</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small color="grey">
            <v-icon>$linkedin</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small color="grey">
            <v-icon>$git</v-icon>
          </v-btn>

          <v-btn class="mx-2" fab dark small color="grey">
            <v-icon>$insta</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </kinesis-container>
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
    myImg: require("../assets/me.jpg")
  })
});
</script>

<style scoped>
.codingImg {
  position: relative;
  left: 130px;
  top: 100px;
}
.bookImg {
  position: relative;
  left: 500px;
  top: 150px;
}
.ideaImg {
  position: relative;
  left: 1550px;
  top: 260px;
}
.studentImg {
  position: relative;
  top: 300px;
  left: 150px;
}
.travelImg {
  position: relative;
  left: 1000px;
  top: 230px;
}
.writeImg {
  position: relative;
  left: 1200px;
  top: 120px;
}
</style>