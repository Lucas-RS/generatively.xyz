<template>
  <div class="home">
    <div class="home__banner">
      Generatively
    </div>
    <ProjectsList class="home__projects" id="projects" />
  </div>
</template>

<script>
import ProjectsList from "@/components/ProjectsList.vue";

export default {
  name: "Home",
  components: {
    ProjectsList,
  },
};
</script>

<style scoped>
.home {
  overflow: hidden;
}

.home__banner {
  display: grid;
  height: 50vh;
  place-items: center;
  font-size: 5em;
  font-family: "Italiana", serif;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

.home__projects {
  min-height: 50vh;
  overflow: visible;
}

@media (max-width: 1100px) {
  .home__banner {
    font-size: 2em;
    white-space: initial;
  }
}
</style>
