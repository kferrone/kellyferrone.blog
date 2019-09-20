<template lang="pug">
nav.nav
    ul#view-list.blog-menu.nav-list
        li.nav-item
            router-link.pure-button(
                to="/")
                | Home
        li.nav-item
            router-link.pure-button(
                to="/blog")
                | Blog
        li.nav-item
            router-link.pure-button(
                to="/contact")
                | Contact
    ul#page-list.blog-menu.nav-list(
      v-if="pages.length > 0"
    )
        li.nav-item(
            v-for="page in pages"
            v-if="page.title != 'Home'"
            :key="page.id")
            router-link.pure-button(
                :to="'/' + page.slug")
                | {{ page.title }}
</template>

<script lang="coffee">
export default
    name: 'blog-menu'
    inject: ['sanitizeTitle']
    props:
        pages: Array
</script>

<style lang="sass">
.blog-menu
    .nav-list
        margin: 0
        padding: 0
        list-style: none
    .nav-item
        display: inline-block
        *display: inline
        zoom: 1
        a
            background: transparent
            border: 2px solid rgb(176, 202, 219)
            color: #fff
            margin-top: 1em
            letter-spacing: 0.05em
            text-transform: uppercase
            font-size: 85%
            &:hover
                border: 2px solid rgb(61, 146, 201)
                text-decoration: none
            &:focus
                border: 2px solid rgb(61, 146, 201)
                text-decoration: none
</style>
