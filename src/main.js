import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import getGravatar from './lib/gravatar'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.prototype.$http = axios

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