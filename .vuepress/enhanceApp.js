
// import router from "./router"
// // import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueKinesis from "vue-kinesis"
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

import "./theme/styles/index.styl"
import "./theme/styles/base.styl"

import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(VueKinesis, Prism)
    Vue.component(ImgLazy.name, ImgLazy)
}
