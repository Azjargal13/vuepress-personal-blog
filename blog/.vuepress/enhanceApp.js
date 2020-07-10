import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.css'
import router from "./router"
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueKinesis from "vue-kinesis"
export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(Vuetify);
    Vue.use(VueKinesis);
    options.vuetify = new Vuetify({})

}
