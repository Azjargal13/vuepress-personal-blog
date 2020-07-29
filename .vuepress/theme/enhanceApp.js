import "./styles/base.styl"
import "./styles/index.styl"

export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(VueKinesis, Prism)
    Vue.component(ImgLazy.name, ImgLazy)
}
