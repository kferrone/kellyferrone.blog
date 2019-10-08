<template lang="pug" >
  #layout.pure-g.wrapper
    template(v-if="pagesLoaded && postsLoaded && blogLoaded")
        BlogSidebar(
            v-bind:blog="blog",
            v-bind:pages="pages"
        )
        img(src="./assets/logo.png")
        section.content.pure-u-1.pure-u-md-3-4
            BlogHeader(
                :title="title"
            )
            router-view
            BlogFooter

</template>

<script lang="coffee">
import BlogSidebar from '@/components/BlogSidebar.vue'
import BlogFooter from '@/components/BlogFooter.vue'
import BlogHeader from '@/components/BlogHeader.vue'

export default
    name: 'app'
    inject: ['message']
    components: {
        BlogSidebar
        BlogFooter
        BlogHeader
    }
    data: ->
        title: "Home"
        blog: null
        pages: Array
        posts: Array
        pagesLoaded: false
        blogLoaded: false
        postsLoaded: false
    provide: ->
        blog: @blog
        posts: @posts
        message: "Hello there"
        getPage: @getPage
        getPost: @getPost
        getPosts: @getPosts
        sanitizeTitle: @sanitizeTitle
        setTitle: @setTitle
        blogLoaded: @blogLoaded
        pagesLoaded: @pagesLoaded
        postsLoaded: @postsLoaded
    methods:
        setBlog: ->
            @blogLoaded = false
            @$http.get("/meta").then(
                (response) =>
                    @blog = response.data
                    @blogLoaded = true
            )
        setPages: ->
            @pagesLoaded = false
            @$http.get("/blog/pages").then(
                (response) =>
                    @pages = response.data
                    @pagesLoaded = true
            )
        setPosts: ->
            @postsLoaded = false
            @$http.get("/blog/posts").then(
                (response) =>
                    @posts = response.data
                    @postsLoaded = true
            )
        getPage: (slug) ->
            @pages.filter(
                (page) => page.slug == slug
            )[0]
        getPost: (slug) ->
            @posts.filter(
                (post) => post.slug == slug
            )[0]
        getPosts: ->
            @posts
        sanitizeTitle: (title) ->
            title.toLowerCase().split(' ').join('_')
        setTitle: (title) ->
            document.title = @title = title
    mounted: ->
        @setBlog()
        @setPages()
        @setPosts()

</script>

<style lang="sass">
#app
  padding: 0
</style>
