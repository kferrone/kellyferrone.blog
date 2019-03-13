<template lang="pug">
aside.blog-sidebar.sidebar.pure-u-1.pure-u-md-1-4
  header.header
    img(
        v-bind:src="getGravatar('info@kellyferrone.com')" 
        alt='Logo')
    h1.brand-title
      a(
        href='#')
        | {{ blog.name }}
    h2.brand-tagline
      | {{ blog.description }}
    p.view.user-page
      a(
        href='https://github.com/kferrone') 
        | View My GitHub Profile
    BlogMenu(
        :pages='pages')
</template>

<script lang="coffee">
import BlogMenu from '@/components/BlogMenu.vue'

export default
    name: 'blog-sidebar'
    inject: ['getGravatar']
    components: {
        BlogMenu
    }
    props:
        blog: null
        pages: null
</script>

<style lang="sass">
.blog-sidebar
.header
    text-align: center
    top: auto
    margin: 3em auto
.sidebar
    background: rgb(61, 79, 93)
    color: #fff
.brand-title
    margin: 0
    text-transform: uppercase
.brand-tagline
    margin: 0
    font-weight: 300
    color: rgb(176, 202, 219)
@media (min-width: 48em)
    .header
        margin: 5% 2em 0
        text-align: right
    .sidebar
        position: fixed
        top: 0
        bottom: 0
</style>
