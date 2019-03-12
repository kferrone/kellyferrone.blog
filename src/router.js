import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '*',
        name: 'blog-page',
        component: () => import(/* webpackChunkName: "blog-page" */ './views/BlogPage.vue')
    },
    {
        path: '/contact',
        name: 'contact-me',
        component: () => import(/* webpackChunkName: "contact-me" */ './views/ContactMe.vue')
    },
    {
        path: '/blog',
        name: 'blog-feed',
        component: () => import(/* webpackChunkName: "blog-feed" */ './views/BlogFeed.vue')
    },
    {
        path: '/post/:title',
        name: 'blog-post',
        component: () => import(/* webpackChunkName: "blog-post" */ './views/BlogPost.vue')
    }
  ]
})
