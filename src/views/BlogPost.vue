<template lang="pug">
span#blog-post
    template(v-if="is404")
        p Sorry that post does not exist
    template(v-else="isPost")
        .page-content(
            v-html="post.content"
        )
</template>

<script lang="coffee">
export default
    name: 'blog-post'
    inject: ['getPost','setTitle']
    data: ->
        isPost: false
        is404: false
        isLoaded: false
        post: null
    watch:
        '$route': (to,frome) ->
            @loadPost(to.path)
    methods:
        track: (path, title) ->
            @$ga.page(
                page: "/post/#{path}"
                title: title
                location: window.location.href
            )
        loadPost: (path) ->
            post = @getPost(path)
            if (post?)
                @isPost = true
                @is404 = false
                @post = post
                @setTitle(post.title)
                @track(path, post.title)
            else
                @is404 = true
                @isPost = false
                @post = null
                @setTitle('404')
            @isLoaded = true
    created: () ->
        @loadPost(@$route.params.title)
</script>

<style lang="sass">

</style>
