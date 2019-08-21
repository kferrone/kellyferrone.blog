<template lang="pug">
    span#blog-page
        template(v-if="is404")
            p Sorry that page does not exist
        template(v-else="isPage")
            .page-content(
                v-html="page.content"
            )
</template>

<script lang="coffee">
export default
    name: 'blog-page'
    inject: ['getPage','setTitle']
    data: ->
        hello: 'world'
        isPage: false
        is404: false
        isLoaded: false
        page: null
    watch:
        '$route': (to,frome) ->
            @loadPage(to.path)
    methods:
        track: (path, title) ->
            @$ga.page(
                page: "/#{path}"
                title: title
                location: window.location.href
            )
        loadPage: (path) ->
            path = path.substr(1)
            page = @getPage(path)
            if (page?)
                @isPage = true
                @is404 = false
                @page = page
                @setTitle(page.title)
                @track(path, page.title)
            else
                @is404 = true
                @isPage = false
                @page = null
                @setTitle('404')
            @isLoaded = true
    created: () ->
        @loadPage(@$route.path)
    
</script>

<style lang="sass">

</style>