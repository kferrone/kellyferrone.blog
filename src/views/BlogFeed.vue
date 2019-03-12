<template lang="pug">
span#blog-feed.posts
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
    inject: ['getPosts']
    components: {
        PostPreview
    }
    data: ->
        posts: Array
    created: ->
        @posts = @getPosts()
</script>

<style lang="sass">

</style>