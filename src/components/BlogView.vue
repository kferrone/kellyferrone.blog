<template lang="pug">
    .blog-view
        h1 {{ title }}
        slot

</template>

<script lang="coffee">
export default 
    name: 'blog-view'
    props: 
        title: ""
</script>

<style lang="sass">

</style>
