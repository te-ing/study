<template>
  <form @submit.prevent>
    <input
      v-model="userID"
      placeholder="ID"
      type="text" />
    <input
      v-model="userPW"
      placeholder="PASS"
      type="password" />
    <button @click="login">
      Login
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: '',
      userPW: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/logIn', {
        id: this.userID,
        pw: this.userPW
      })
    }
  }
}
</script>