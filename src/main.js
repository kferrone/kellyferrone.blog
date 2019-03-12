import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import BloggerAPI from './lib/BloggerAPI.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios
const blogger = new BloggerAPI(process.env.VUE_APP_BLOGGER_BLOG_ID,process.env.VUE_APP_BLOGGER_API_KEY)
Vue.prototype.$blogger = blogger
new Vue({
    router,
    render: h => h(App),
    provide: {
        "message": "Hello vuebes"
    }
}).$mount('#app')