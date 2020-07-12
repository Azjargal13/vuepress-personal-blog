<template>
  <div class="container home">
    <kinesis-container>
      <div class="grid grid-cols-3 gap-4 p-2">
        <kinesis-element :strength="15" type="depth" class="p-10">
          <img :src="codingSVG" alt class="p-2 h-24" />
          <span>Javascript/Typescript</span>
        </kinesis-element>
        <kinesis-element :strength="15">
          <img :src="writeSVG" alt class="pa-2 h-24" />
          <span>Hobbyist blog writer</span>
        </kinesis-element>
        <kinesis-element :strength="10" type="rotate" class="p-12">
          <img :src="ideaSVG" alt class="pa-2 h-24" />
          <span>Idealist/Dreamer</span>
        </kinesis-element>
        <kinesis-element :strength="15" class="p-16">
          <img :src="studentSVG" alt class="pa-2 h-24" />
          <span>Front-End Engineer</span>
          <span>Vue.js love</span>
        </kinesis-element>
        <kinesis-element :strength="15" type="rotate" class="p-4">
          <img :src="travelSVG" alt class="pa-2 h-24" />
          <span>Travel love</span>
        </kinesis-element>
        <kinesis-element :strength="15" type="depth" class="p-20 justify-end">
          <img :src="bookSVG" alt class="pa-2 h-24" />
          <span>bibliophile</span>
        </kinesis-element>
      </div>
      <div class="flex justify-center p-6">
        <img :src="myImg" class="rounded-full w-48 border-gray-700 border-4 h-48 text-center" />
      </div>
      <div class="flex justify-center">
        <a href="https://www.linkedin.com/in/azjargal-gankhuyag/">
          <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" class="h-20 ml-4" />
        </a>
        <a href>
          <img src="https://img.icons8.com/clouds/100/000000/github.png" class="h-20 ml-4" />
        </a>
        <a href>
          <img src="https://img.icons8.com/clouds/100/000000/gmail.png" class="h-20 ml-4" />
        </a>
        <a href>
          <img src="https://img.icons8.com/clouds/100/000000/ball-point-pen.png" class="h-20 ml-4" />
        </a>
      </div>
      <h4 class="text-medium font-thin text-center mt-6">Azjargal Gankhuyag</h4>
      <h2 class="text-center p-10">
        <kinesis-element :strength="1" type="scale" class="font-normal">
          Life motto:
          <span v-for="m in motto" :key="m.id">{{m}}</span>
        </kinesis-element>
      </h2>

      <!-- 
      <v-row>
        <v-col md="2" class="ml-md-auto">
         
        </v-col>
        <v-col md="3" class="ml-md-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="ideaSVG" alt class="pa-2 h-24" />
            <h2>Idealist/Dreamer</h2>
          </kinesis-element>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto" class="mr-auto">
          <kinesis-element :strength="15" type="rotate">
            <img :src="studentSVG" alt class="pa-2 h-24" />
            <h2>Front-End Engineer</h2>
            <h2>Vue.js love</h2>
          </kinesis-element>
        </v-col>
        <v-col cols="auto">
          <kinesis-element :strength="15">
            <img :src="travelSVG" alt class="pa-2 h-24" />
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
          <v-btn class="mx-1" fab dark small color="grey" to="/blog1">
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
      </h2>-->
    </kinesis-container>
    <!-- <v-footer padless>
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
      </v-col>
    </v-footer>-->
  </div>
</template> 

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},

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
</style>