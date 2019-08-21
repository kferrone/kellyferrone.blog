<template lang="pug">
span#blog-post
    template(v-if="is404")
        p Sorry that post does not exist
    template(v-else="isPost")
        .page-content(
            v-html="post.content"
        )
        iframe(
            allowtransparency='allowtransparency' 
            frameborder='0' 
            height='88px' 
            name='comment-editor' 
            v-bind:src='getCommentUrl(post.blog.id,post.id)' 
            width='100%' 
            data-resized='true'
            v-on:onLoad='commentSubmitted()'
            sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
            
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
        getCommentUrl: (blogID, postID, parentID = null) ->
            baseURL = 'https://www.blogger.com/comment-iframe.g'
            parent = if (parentID?) then "&parentID=#{parentID}" else ''
            commentURL = "#{baseURL}?blogID=#{blogID}&postID=#{postID}#{parent}&blogspotRpcToken=3183554"
        commentSubmitted: ->
            console.log('something in the iframe happened',this.contentWindow.location)
    created: () ->
        @loadPost(@$route.params.title)
</script>

<style lang="sass">

</style>