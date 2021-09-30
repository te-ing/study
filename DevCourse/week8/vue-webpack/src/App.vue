<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
  <button @click="increaseCount">
    Increase!
  </button>
  <World />
  <button @click="$store.dispatch('fetchTodo')"> 
    Update Msg!!
  </button>
</template>

<script>
import Hello from '~/components/Hello' 
import World from '~/components/World' 

export default {
  components: {
    Hello,
    World
  },
   data() {
    return {
      msg: 'Hello Vue!'
    }
  },
  methods: {
    increaseCount() {
      this.$store.commit('increaseCount') // mutation은 $store.commit을 통해 실행
    },
    fetchTodo() {
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>

<style>
</style>