<template lang="pug">
    BlogView(
        v-bind:title="title"
        v-bind:v-html="title"
    )
</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default 
    name: 'home'
    components: {
        BlogView
    }
    watch:
        title: ->
            @$root.homePage.title
    computed:
        homePage: ->
            @$root.homePage
    data: ->
        page: ""
        title: ""
</script>

<style lang="sass">

</style>