<template lang="pug">

</template>

<script lang="coffee">
import BlogView from '@/components/BlogView.vue'
export default 
    name: 'blog-post'
    components: {
        BlogView
    }
    props: ->
        title: String
</script>

<style lang="sass">

</style>