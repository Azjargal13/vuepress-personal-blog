import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueKinesis from 'vue-kinesis'
import "../src/assets/styles.css"

Vue.use(VueKinesis)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
