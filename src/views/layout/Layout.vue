<template>
  <div>
    <top-nav/>
    <router-view></router-view>
    <bottom-nav/>
  </div>
</template>

<script>
  import {TopNav, BottomNav} from './components'

  export default {
    name: "layout",
    components: {
      TopNav,
      BottomNav,
    }
  }
</script>

<style scoped>

</style>
