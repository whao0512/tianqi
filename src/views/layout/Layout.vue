<template>
  <div>
    <top-nav/>
    <div id="contentWrapper">
      <router-view style="min-height: 791px"></router-view>
    </div>
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
