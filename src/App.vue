<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="sass">
body 
  margin: 0

#app 
  width: 100vw
  height: 100vh
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  background-color: hsl(220deg, 50%, 90%)

</style>
