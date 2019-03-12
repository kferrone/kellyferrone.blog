<template lang="pug">
  #app.pure-g.wrapper(
      v-if="homePageLoaded"
  )
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
    components: {
        BlogSidebar
        BlogFooter
    }
    data: ->
        blog: Object
        pages: Array
        homePage: Object
        homePageLoaded: false
    provide: ->
        blog: @blog
        homePage: @homePage
    methods:
        setBlog: ->
            @$blogger.getBlog().then(
                (response) => @blog = response.data
            )
        setPages: ->
            @$blogger.getPages().then(
                (response) => 
                    @pages = response.data.items
                    @homePage = @getPage('Home')
                    @homePageLoaded = true
            )
        getPage: (title) ->
            @pages.filter(
                (page) => page.title == title
            )[0]
    created: ->
        @setBlog()
        @setPages()

</script>

<style lang="sass">
#app
  padding: 0
</style>
