<template lang="pug">
.school
  h3.school-name
    a(
      v-bind:href='website' 
      target='_blank')
      | {{ name }}
  p
    b Studied:
    |  {{ degree }} - {{ major }}
  p
    b Attended:
    |  {{ attended.from }} - {{ attended.to }}
  slot
</template>

<script lang="coffee">
export default 
    name: 'school'
    props:
        name: String
        degree: String
        major: String
        website: String
        attended: Object
        address: Object
</script>

<style lang="sass">
.school
</style>

