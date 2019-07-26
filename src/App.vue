<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FootGuide'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style lang="stylus">

</style>
