<template lang="pug">
.kf-skill
  h3.skill-name
    | {{ name }}
  p {{ description }}
  slot
</template>

<script lang="coffee">
export default
    name: 'kf-skill'
    props:
        name: String
        description: String
</script>

<style lang="sass">
.kf-skill
</style>
