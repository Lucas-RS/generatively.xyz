<template>
  <div class="header">
    <span class="header__text">Density</span>
  </div>
  <div class="image-collage">
    <div
      class="image-collage__sticky"
      ref="sticky"
    >
      <div
        class="image-collage__container"
        :style="{
          transform: `perspective(200px) translate3d(${state.v * -350 +
            100}vw, ${state.v * -350 + 100}vh, ${state.v * 700 - 200}px)`,
        }"
      >
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752478/noise_grain/wavy.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 250vw), calc(-50% + 250vh), -500px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752478/noise_grain/orbit.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 200vw), calc(-50% + 200vh), -400px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752479/noise_grain/plastic.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 150vw), calc(-50% + 150vh), -300px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752479/noise_grain/focus.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 100vw), calc(-50% + 100vh), -200px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752481/noise_grain/pixels.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 50vw), calc(-50% + 50vh), -100px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_800,f_auto/v1602752478/noise_grain/bugged.jpg"
          :style="{
            transform: `translate3d(-50%, -50%, 0)`,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive, ref } from "vue";
export default {
  name: "NoiseDensity",
  components: {},
  setup() {
    const sticky = ref(null);
    let stickyHeight = 0;
    let state = reactive({ v: 0 });
    let doUpdateScrollPositions = true;

    const updateScrollPositions = () => {
      if (doUpdateScrollPositions) {
        state.v = Math.min(1, sticky.value.offsetTop / stickyHeight);
        window.requestAnimationFrame(updateScrollPositions);
      }
    };

    const updateStickyHeightOnWindowResize = () => {
      stickyHeight =
        sticky.value.offsetParent.offsetHeight - sticky.value.offsetHeight;
    };

    onMounted(() => {
      updateStickyHeightOnWindowResize();
      window.addEventListener("resize", updateStickyHeightOnWindowResize);
      window.requestAnimationFrame(updateScrollPositions);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateStickyHeightOnWindowResize);
      doUpdateScrollPositions = false;
    });

    return {
      sticky,
      state,
    };
  },
};
</script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url("https://res.cloudinary.com/generatively/image/upload/w_1920,f_auto/v1602752058/noise_grain/focus.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
}

.header__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  font-family: "Bagnard", serif;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
}

@media (max-width: 1100px) {
  .header__text {
    font-size: 3em;
    white-space: initial;
  }
}

.image-collage {
  position: relative;
  height: 750vh;
}

.image-collage__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  background-color: black;
}

.image-collage__container {
  position: relative;
  height: 100vh;
  will-change: transform;
  transform-style: preserve-3d;
  white-space: nowrap;
  transition: transform 0.4s ease-out;
}

@media (hover: none), (max-width: 800px) {
  .image-collage__container {
    transition: none;
  }
}

.image-collage__container * {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 5pt;
}
</style>
