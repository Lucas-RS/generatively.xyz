<template>
  <div class="nav">
    <router-link to="/">home</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.nav {
  position: fixed;
  line-height: 1em;
  z-index: 99;
  font-size: 1.5em;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
}

a {
  display: block;
  text-decoration: none;
  color: white;
  margin: 0.75em;
}
</style>
