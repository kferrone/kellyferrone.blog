<template lang="pug">
span.post-preview
  h2.blog-title
    router-link(
        v-bind:to='linker')
        | {{ post.title }}
  .blog-excerpt
    #blog-excerpt(
        v-html='post.exerpt')
    br
</template>

<script lang="coffee">
export default
    name: 'post-preview'
    inject: ['sanitizeTitle']
    props:
        post: Object
    computed:
        linker: ->
            '/post/' + @post.slug
</script>

<style lang="sass">
.post-preview
    .blog-content
        transition: opacity 2s
        opacity: 0
    .blog-content:hover
    .blog-content-loaded
        opacity: 1
    .blog-content-hidden
        opacity: 0
        display: block
        line-height: 0
        height: 0
        overflow: hidden
</style>
