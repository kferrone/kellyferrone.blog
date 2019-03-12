<template lang="pug" >
  #app.pure-g.wrapper
    template(v-if="pagesLoaded && blogLoaded")
        BlogSidebar(
            v-bind:blog="blog",
            v-bind:pages="pages"
        )
        section.content.pure-u-1.pure-u-md-3-4
            router-view
            BlogFooter

</template>

<script lang="coffee">
import BlogSidebar from '@/components/BlogSidebar.vue'
import BlogFooter from '@/components/BlogFooter.vue'

export default
    name: 'app'
    inject: ['message']
    components: {
        BlogSidebar
        BlogFooter
    }
    data: ->
        blog: Object
        pages: Array
        pagesLoaded: false
        blogLoaded: false
    provide: ->
        blog: @blog
        message: "Hell there"
        getPage: @getPage
        sanitizeTitle: @sanitizeTitle
    methods:
        setBlog: ->
            @blogLoaded = false
            @$blogger.getBlog().then(
                (response) => 
                    @blog = response.data
                    @blogLoaded = true
            )
        setPages: ->
            @pagesLoaded = false
            @$blogger.getPages().then(
                (response) => 
                    @pages = response.data.items
                    @pagesLoaded = true
            )
        getPage: (title) ->
            title = @sanitizeTitle(title)
            @pages.filter(
                (page) => @sanitizeTitle(page.title) == title
            )[0]
        sanitizeTitle: (title) ->
            title.toLowerCase().split(' ').join('_')
    mounted: ->
        @setBlog()
        @setPages()

</script>

<style lang="sass">
#app
  padding: 0
</style>
