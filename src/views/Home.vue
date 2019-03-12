<template lang="pug">
    BlogView(
        title="Home"
    )
</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default 
    name: 'home'
    inject: ['message']
    components: {
        BlogView
    }
    data: ->
        page: ""
        title: ""
</script>

<style lang="sass">

</style>