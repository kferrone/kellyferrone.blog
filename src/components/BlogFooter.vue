<template lang="pug">
footer.blog-footer
  .pure-menu.pure-menu-horizontal
    ul
      li.pure-menu-item
        a.pure-menu-link(href='#')
          | Home
      li.pure-menu-item
        a.pure-menu-link(href='https://purecss.io/layouts/blog/')
          | Theme based on PureCSS Blog Layout
      li.pure-menu-item
        a.pure-menu-link(href='https://github.com/kferrone')
          | kferrone @ GitHub
</template>

<script lang="coffee">
export default
    name: 'blog-footer'
</script>

<style lang="sass">
.blog-footer
    padding: 1em 0
    a 
        color: #ccc
        font-size: 80%
    .pure-menu
        a
            &:hover
                background: none
            &:focus
                background: none
@media (min-width: 48em)
    .blog-footer
        text-align: center
</style>
