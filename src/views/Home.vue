<template lang="pug">
    BlogView(
        v-bind:title="page.title"
        v-bind:content="page.content"
    )
</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default 
    name: 'home'
    inject: ['getPage']
    components: {
        BlogView
    }
    data: ->
        page: ""
        title: ""
    mounted: ->
        @page = @getPage('Home')
</script>

<style lang="sass">

</style>