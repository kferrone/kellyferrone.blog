<template lang="pug">
  #home
    img(
        alt="Vue logo" 
        src="../assets/logo.png")
    HelloWorld(
        msg="Welcome to Your Vue.js App")
    button(
        class="pure-button pure-button-primary")
        | A Primary Button Dude
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
