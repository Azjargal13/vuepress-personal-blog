import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/components/About.vue"
import Project from "@/components/Project.vue"
import TechBlog from "@/components/TechBlog.vue"
import PersonalBlog from "@/components/PersonalBlog.vue"
import Home from "@/components/Home.vue"
import NotFound from "@/components/NotFound.vue"

Vue.use(VueRouter)
const routes = [

    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/project', component: Project },
    { path: '/blog1', component: TechBlog },
    { path: '/blog2', component: PersonalBlog },
    { path: '*', component: NotFound },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router