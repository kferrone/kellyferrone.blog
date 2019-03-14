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
        page: ""
        title: ""
    created: ->
        @setTitle('Home')
        @page = @getPage('Home')
</script>

<style lang="sass">

</style>