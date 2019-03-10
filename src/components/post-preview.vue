<template lang="pug">
.post-preview
  h2.blog-title
    router-link(
        v-bind:to='linker') 
        | {{ title }}
  .blog-excerpt
    #blog-excerpt(
        v-html='excerpt')
</template>

<script lang="coffee">
export default
    name: 'post-preview'
    props:
        title: String
        slug: String
        excerpt: String
        id: String
        tags: Array
        categories: Array
        heritage: String
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            if @heritage == 'blogger'
                return @id
            else
                return '/post/' + @slug
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
