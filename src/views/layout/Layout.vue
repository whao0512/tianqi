<template>
  <div>
    <top-nav/>
    <router-view></router-view>
    <button-nav/>
  </div>
</template>

<script>
  import {TopNav, ButtonNav} from './components'

  export default {
    name: "layout",
    components: {
      TopNav,
      ButtonNav,
    }
  }
</script>

<style scoped>

</style>
