<template lang="pug">
    span#blog-page
        template(v-if="is404")
            p Sorry that page does not exist
        template(v-else="isPage")
            BlogView(
                v-bind:title="page.title"
                v-bind:content="page.content"
            )
</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default
    name: 'blog-page'
    inject: ['getPage']
    components: {
        BlogView
    }
    data: ->
        hello: 'world'
        isPage: false
        is404: false
        isLoaded: false
        page: null
    watch:
        '$route': (to,frome) ->
            console.log("Snagged the router on change",to)
            @isPathToPage(to.path)
    methods:
        isPathToPage: (path) ->
            path = path.substr(1)
            page = @getPage(path)
            if (page?)
                @isPage = true
                @is404 = false
                @page = page
            else
                @is404 = true
                @isPage = false
                @page = null
            @isLoaded = true
    created: () ->
        console.log("Snagged the router",@$route)
        @isPathToPage(@$route.path)
    
</script>