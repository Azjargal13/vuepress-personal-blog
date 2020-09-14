
// import router from "./router"
// // import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueKinesis from "vue-kinesis"
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

// import "./theme/styles/base.css"
// import "./theme/styles/index.css"

import Prism from "prismjs";
import "prismjs/themes/prism.css";

import JwPagination from 'jw-vue-pagination'

export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(VueKinesis, Prism)
    Vue.component(ImgLazy.name, ImgLazy, JwPagination)
}
