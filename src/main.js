import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import BloggerAPI from './lib/BloggerAPI.js'
import getGravatar from './lib/gravatar'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.prototype.$http = axios
const blogger = new BloggerAPI(process.env.VUE_APP_BLOGGER_BLOG_ID,process.env.VUE_APP_BLOGGER_API_KEY)
Vue.prototype.$blogger = blogger

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS
})

new Vue({
    router,
    render: h => h(App),
    provide: {
        message: "Hello vuebes",
        getGravatar: getGravatar
    }
}).$mount('#app')