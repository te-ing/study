<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
</template>

<script>
import Hello from '~/components/Hello' // 절대경로


export default {
  components: {
    Hello
  },
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
}
</script>

<style>
</style>