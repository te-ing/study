<template>
  <div style="transform: scale(1);">
    <Modal
      v-model="isShow"
      width="300px">
      <template #activator>
        <button>On Modal!</button>        
      </template>
      <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>  
</template>

<script>
import Hello from '~/components/Hello'


export default {
  components: {
    Hello,
  },
  data() {
    return {
      isShow: false,
      msg: 'Hello Vue!'
    }
  },
}
</script>

<style>
</style>