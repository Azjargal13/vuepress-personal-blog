<template>
  <div class="container home">
    <kinesis-container :is="home">
      <!-- <div class="grid grid-cols-3 gap-4 p-2">
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
      </div>-->
      <div class="flex justify-center p-6">
        <img :src="myImg" class="rounded-full w-48 border-gray-700 border-4 h-48 text-center p-0" />
      </div>
      <div class="flex justify-center">
        <a href="https://www.linkedin.com/in/azjargal-gankhuyag/" target="_blank">
          <img src="https://img.icons8.com/clouds/100/000000/linkedin.png" class="h-20 ml-4 p-0" />
        </a>
        <a href="https://github.com/Azjargal13" target="_blank">
          <img src="https://img.icons8.com/clouds/100/000000/github.png" class="h-20 ml-4 p-0" />
        </a>
        <a href="mailto:azjargalgankhuyag13@gmail.com" target="_blank">
          <img src="https://img.icons8.com/clouds/100/000000/gmail.png" class="h-20 ml-4 p-0" />
        </a>
        <a href="/blog1/">
          <img
            src="https://img.icons8.com/clouds/100/000000/ball-point-pen.png"
            class="h-20 ml-4 p-0"
          />
        </a>
      </div>
      <h4 class="text-medium font-thin text-center mt-4">Azjargal Gankhuyag</h4>
      <h2 class="text-center p-10">
        <kinesis-element :strength="1" type="scale" class="font-normal sm:text-medium">
          Life motto:
          <span v-for="m in motto" :key="m.id">{{m}}</span>
        </kinesis-element>
      </h2>
    </kinesis-container>
  </div>
</template> 

<script>
export default {
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
    motto: "vivere memento",
  }),
};
</script>

<style scoped>
</style>