<template>
  <header>
    <RouterLink to="/">
      Home..
    </RouterLink>
    <RouterLink to="/about">
      About..
    </RouterLink>
  </header>
  <section>
    <RouterView />
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}
section {
  margin-top: 80px;
}
</style>