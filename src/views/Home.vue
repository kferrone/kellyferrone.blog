<template lang="pug">
.page-content(
    v-html="page.content"
)
</template>

<script lang="coffee">
export default 
    name: 'home'
    inject: ['getPage','setTitle']
    data: ->
        page: ''
        title: 'Home'
    methods:
        track: ->
            @$ga.page(
                page: '/'
                title: @title
                location: window.location.href
            )
    created: ->
        @setTitle(@title)
        @page = @getPage('Home')
</script>

<style lang="sass">

</style>