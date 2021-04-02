<template>
  <div class="projects">
    <router-link to="/projects/central-vibrance">
      <ImageCard
        class="projects__item"
        src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602813719/vibrance/droplet.jpg"
        >CENTRAL<br />VIBRANCE</ImageCard
      >
    </router-link>
    <router-link to="/projects/noise-density">
      <ImageCard
        class="projects__item"
        style="font-family: Bagnard"
        src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752058/noise_grain/focus.jpg"
        >DENSITY</ImageCard
      >
    </router-link>
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard.vue";
export default {
  name: "projects",
  components: {
    ImageCard,
  },
};
</script>

<style scoped>
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
}

a {
  margin: 50px;
}

@media (max-width: 800px) {
  a {
    margin: 6.25vw;
  }
}
</style>
