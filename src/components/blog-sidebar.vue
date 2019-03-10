<template lang="pug">
aside.blog-sidebar.sidebar.pure-u-1.pure-u-md-1-4
  header.header
    img(
        v-bind:src='getGravatar()' 
        alt='Logo')
    h1.brand-title
      a(
        href='#')
        | {{ title }}
    h2.brand-tagline
      | {{ description }}
    p.view.user-page
      a(
        href='https://github.com/kferrone') 
        | View My GitHub Profile
    kf-menu(
        :view-list='getViewList()')
</template>

<script lang="coffee">
export default
    name: 'blog-sidebar'
    inject: ['getViewList']
    props:
        title: String
        description: String
    methods:
        getGravatar: ->
            util.getGravatar(@$root.profile.email,150)
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
