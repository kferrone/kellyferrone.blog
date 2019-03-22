<template lang="pug">
div#blog-feed.posts
    PostPreview(
        v-for='post in posts' 
        v-bind:post='post' 
        :key='post.id'
    )
</template>

<script lang="coffee">
import PostPreview from '@/components/PostPreview.vue'
export default
    name: 'blog-feed'
    inject: ['getPosts','setTitle']
    components: {
        PostPreview
    }
    data: ->
        posts: Array
        title: 'Blog Feed'
    methods:
        track: ->
            @$ga.page(
                page: '/blog'
                title: @title
                location: window.location.href
            )
    created: ->
        @setTitle(@title)
        @posts = @getPosts()
</script>

<style lang="sass">

</style>