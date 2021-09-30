<template>
  <Modal 
    v-model="isShow"
    closeable>
    <template #activator>
      <h1>Hello</h1>
    </template>
    <h3>Hello.vue</h3>
    <textarea
      ref="editor"
      v-model="msg"></textarea>
    <button @click="submit">
      Submit!
    </button>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Please enter the text.',
      isShow: false
    }
  },
  watch: {
    isShow(newValue) {
      if(newValue) {
        this.$nextTick(() => {
          this.$refs.editor.focus()
        })
      }
    }
  },
  methods: {
    submit() {
      console.log(this.msg)
    }
  }
}
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
textarea {
  width: 100%;
  height: 100px;
  box-sizing: border-box;
}
</style>