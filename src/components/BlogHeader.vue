<template lang="pug">
header.blog-header.pure-g
    .pure-u-2-3
        h1 {{ title }}
    .pure-u-1-3
        form.pure-form
            input.pure-input-rounded(
                type='text',
                placeholder='search'
            )
    hr
</template>

<script lang="coffee">
export default
    name: 'blog-header'
    props:
        title: String
</script>

<style lang="sass">
.blog-header
    width: 100%
</style>