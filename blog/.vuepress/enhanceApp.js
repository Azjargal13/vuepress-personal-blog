
// import router from "./router"
// // import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueKinesis from "vue-kinesis"
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'
import "../.vuepress/theme/styles/base.styl"
export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(VueKinesis)
    Vue.component(ImgLazy.name, ImgLazy)
}
