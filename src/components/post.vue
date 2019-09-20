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
        exerpt: String
        content: String
        permalink: String
        categories: Array
        tags: Array
        published: String
        updated: String
        draft: Boolean
        order: Number
        hideHeader: false
    data: ->
        hidden: false
        loaded: false
    computed:
        linker: ->
            return '/post/' + @slug
</script>

<style lang="sass">
.post
</style>
