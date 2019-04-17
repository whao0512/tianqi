<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import {Header, Footer} from './components'

  export default {
    name: "layout",
    components: {
      Header,
      Footer,
    }
  }
</script>

<style scoped>

</style>
