<template lang="pug" >
  #app.pure-g.wrapper
    template(v-if="pagesLoaded && postsLoaded && blogLoaded")
        BlogSidebar(
            v-bind:blog="blog",
            v-bind:pages="pages"
        )
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
        blog: Object
        pages: Array
        posts: Array
        pagesLoaded: false
        blogLoaded: false
        postsLoaded: false
        blogID: process.env.VUE_APP_BLOG_ID
    provide: ->
        blog: @blog
        posts: @posts
        message: "Hello there"
        getPage: @getPage
        getPost: @getPost
        getPosts: @getPosts
        sanitizeTitle: @sanitizeTitle
        setTitle: @setTitle
    methods:
        setBlog: ->
            @blogLoaded = false
            @$http.get("/blogs/#{@blogID}").then(
                (response) =>
                    @blog = response.data
                    @blogLoaded = true
            )
        setPages: ->
            @pagesLoaded = false
            @$http.get("/blogs/#{@blogID}/pages").then(
                (response) =>
                    @pages = response.data
                    @pagesLoaded = true
            )
        setPosts: ->
            @postsLoaded = false
            @$http.get("/blogs/#{@blogID}/posts").then(
                (response) =>
                    @posts = response.data
                    @postsLoaded = true
            )
        getPage: (title) ->
            title = @sanitizeTitle(title)
            @pages.filter(
                (page) => @sanitizeTitle(page.title) == title
            )[0]
        getPost: (title) ->
            title = @sanitizeTitle(title)
            @posts.filter(
                (post) => @sanitizeTitle(post.title) == title
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
