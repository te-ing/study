<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink>
  <RouterLink
    :to="{ 
      name: 'docsId',
      params: { id: '7777'},
      query: { name: '태중', age: 26, email: 'TJ@abc.com' }
    }">
    Documents ID
  </RouterLink>
  <button
    @click="
      $router.push({
        name:
          'home'})">
    Home
  </button>
  <button @click="$router.push('/about')">
    About
  </button>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!'
    }
  },
}
</script>

<style>
</style>