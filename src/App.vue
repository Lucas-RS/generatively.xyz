<template>
  <Nav v-if="route.path != '/'" />
  <router-view />
  <a href="#" class="top">^ back to top ^</a>
</template>

<script>
import Nav from "./components/Nav";
import { useRoute } from "vue-router";
export default {
  name: "App",
  components: {
    Nav,
  },
  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Italiana&display=swap");
@font-face {
  font-family: "Bagnard";
  src: local("Bagnard Regular"), url(./fonts/Bagnard.otf) format("opentype");
}

body {
  margin: 0;
  background: hsl(220deg, 50%, 1%);
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 24px;
  color: white;
}

#app::before {
  content: "";
  position: fixed;
  top: -15px;
  left: -15px;
  width: calc(100vw + 30px);
  height: calc(100vh + 30px);
  overflow: hidden;
  opacity: 0.4;
  filter: blur(15px);
  background-image: url("./media/grain.gif");
  background-size: cover;
  background-position: center;
  pointer-events: none;
}

@media (max-width: 800px) {
  #app::before {
    background-image: none;
    background-color: black;
  }
}

a:active,
a:focus {
  outline: none;
}

.top {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 0.75em;
  z-index: 99;
  text-decoration: none;
  color: inherit;
}
</style>
