<template>
  <h1>Hello</h1>
  <div>{{ reversedMsg }}</div>
  <div>{{ msg }}</div>
  <div>{{ count }}</div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg
    },
    count() {
      return this.$store.state.count
    },
    reversedMsg() {
      return this.$store.getters.reversedMsg
    }
  }  
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>