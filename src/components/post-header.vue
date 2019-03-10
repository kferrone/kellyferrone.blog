<template lang="pug">
header.post-header
  h1.post-title
    | {{ title }}
  .post-meta
    .pure-g
      .pure-u-1-3
        small {{ date | formatDate }}
        p.view by {{ author }}
      .pure-u-1-3
        small
          | categories: 
          em(
              v-for='category in categories')
            router-link(
                v-bind:to="categoryLink(category)") 
                | {{ '/' + category }}
        br
        small
          | tags: 
          em(v-for='tag in tags')
            router-link(
                v-bind:to="tagLink(tag)") 
                | {{ '#' + tag }}
      .pure-u-1-3
        a(
            href='https://www.pinterest.com/pin/create/button/' 
            data-pin-do='buttonBookmark')

</template>

<script lang="coffee">
export default 
    name: 'post-header'
    props:
        title: String
        date: String
        author: String
        tags: Array
        categories: Array
    data: ->
        hidden: false
        content: ''
        loaded: false
    computed:
        linker: ->
            return '/post/' + @slug
    methods:
        categoryLink: category ->
            return "/blog?category=#{category}"
        tagLink: tag ->
            return "/blog?tag=#{tag}"
</script>

<style lang="sass">
.post-header
</style>
