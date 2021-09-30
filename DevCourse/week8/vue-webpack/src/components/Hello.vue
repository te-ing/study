<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import sampleMixin from '~/mixins/sample'
export default {
  mixins: [sampleMixin]
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}

</style>