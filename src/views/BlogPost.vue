<template lang="pug">
span#blog-post
    template(v-if="is404")
        p Sorry that post does not exist
    template(v-else="isPost")
        BlogView(
            v-bind:title="post.title"
            v-bind:content="post.content"
        )
</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default 
    name: 'blog-post'
    inject: ['getPost']
    components: {
        BlogView
    }
    data: ->
        isPost: false
        is404: false
        isLoaded: false
        post: null
    watch:
        '$route': (to,frome) ->
            console.log("Snagged the router on change",to)
            @isPathToPost(to.path)
    methods:
        isPathToPost: (path) ->
            post = @getPost(path)
            if (post?)
                @isPost = true
                @is404 = false
                @post = post
            else
                @is404 = true
                @isPost = false
                @post = null
            @isLoaded = true
    created: () ->
        console.log("Snagged the router",@$route)
        @isPathToPost(@$route.params.title)
</script>

<style lang="sass">

</style>