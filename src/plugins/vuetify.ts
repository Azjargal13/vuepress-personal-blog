import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
        values: {
            git: "fab fa-github",
            linkedin: "fab fa-linkedin",
            insta: "fab fa-instagram",
            blog: "fas fa-book-open",
            heart: "fa-heart"
        }
    }
});
