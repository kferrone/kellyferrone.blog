<template lang="pug">
nav.nav
    ul.blog-menu.nav-list
        li.nav-item(
            v-for="view in viewList"
            :key="view.id")
            router-link.pure-button(
                :to="view.permalink")
                | {{ view.title }}
</template>

<script lang="coffee">
export default
    name: 'blog-menu'
    props:
        viewList: Array
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
