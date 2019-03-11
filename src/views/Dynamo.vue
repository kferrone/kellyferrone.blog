<template>
  <div class="dynamo">
    <h1>This is the dynamo page</h1>
  </div>
</template>

<script lang="coffee">
export default
    name: 'dynamo'
    beforeRouteUpdate: (to, from, next) =>
        console.log(to,from,next)
</script>