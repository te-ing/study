<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      TJ's Notion
    </div>
    <ul>
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace" />
    </ul>
    <div class="actions"></div>
  </nav>
</template>

<script>
import WorkspaceItem from '~/components/WorkspaceItem'

export default {
  components: {
    WorkspaceItem
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces
    }
  },
  created() {
    this.$store.dispatch('workspace/readWorkspaces')
  }
}
</script>

<style lang="scss" scoped>

nav {
  width: 240px;
  height: 100%;
  background-color: $color-background;
  .header {
    display: flex;
    align-items: center;
    padding: 14px;
    font-weight: 700;
    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://ca.slack-edge.com/T024MG1J97Z-U029LMSR0LU-7f04eac3e495-512");
      background-size: cover;
    }
  }
  ul {

  }
  .actions{
    
  }
}
</style>