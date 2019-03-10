<template lang="pug">
.post.posts
  header.post-header(
      v-if='!hideHeader')
    h1.post-title
      | {{ title }}
    p.post-meta
      slot(
          name='meta')
  .post-description
    slot
</template>

<script lang="coffee">
export default
    name: 'post'
    props:
        id: String
        title: String
        slug: String
        permalink: String
        categories: Array
        tags: Array
        date: String
        draft: Boolean
        order: Number
        hideHeader: false
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            return '/post/' + @slug
</script>

<style lang="sass">
.post
</style>
