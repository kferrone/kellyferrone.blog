<template lang="pug">
    .blog-view
        h1 {{ title }}
        .page-content(
            v-html="content"
        )

</template>

<script lang="coffee">
export default 
    name: 'blog-view'
    props: 
        title: ""
        content: ""
</script>

<style lang="sass">

</style>
