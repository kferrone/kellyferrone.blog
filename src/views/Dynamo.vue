<template>
  <div class="dynamo">
    <h1>This is the dynamo page {{ hello }}</h1>
    <Tester></Tester>
  </div>
</template>

<script lang="coffee">
import Tester from '@/components/Tester.vue'
export default
    name: 'dynamo'
    components: {
        Tester
    }
    data: ->
        hello: 'world'
    beforeCreate: () ->
        console.log("Snagged the router",@$route)
    beforeRouteUpdate: (to, from, next) =>
        console.log("The new path is #{to.path}")
</script>