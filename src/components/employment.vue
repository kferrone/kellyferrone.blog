<template lang="pug">
.employment
  h3.employer-name
    a(
      v-bind:href='website' 
      target='_blank')
      | {{ name }}
  p
    b Title: 
    | {{ title }}
  p
    b Attended: 
    | {{ attended.from }} - {{ attended.to }}
  p {{ description }}
  slot
</template>

<script lang="coffee">
export default 
    name: 'employment'
    props:
        name: String
        title: String
        description: String
        website: String
        attended: Object
        address: Object
</script>

<style lang="sass">
.employment
</style>
