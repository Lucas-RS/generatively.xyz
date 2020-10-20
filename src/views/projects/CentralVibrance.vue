<template>
  <div class="header">
    <span class="header__text">Central Vibrance</span>
  </div>
  <div class="image-collage">
    <div class="image-collage__sticky" ref="sticky">
      <div
        class="image-collage__container"
        :style="{
          transform: `perspective(${
            state.small_display ? 1 : 2
          }00px) translate3d(${getXPosition() * -50}vw, ${state.v *
            -550}vh, ${state.v * 1100}px)`,
        }"
      >
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813723/vibrance/wave.jpg"
          :style="{
            transform: `translate3d(calc(-50% - 50vw), calc(-50% + 550vh), -1100px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813722/vibrance/net.jpg"
          :style="{
            transform: `translate3d(-50%, calc(-50% + 500vh), -1000px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813721/vibrance/portal.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 50vw), calc(-50% + 450vh), -900px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813720/vibrance/meteor.jpg"
          :style="{
            transform: `translate3d(-50%, calc(-50% + 400vh), -800px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813721/vibrance/zoom.jpg"
          :style="{
            transform: `translate3d(calc(-50% - 50vw), calc(-50% + 350vh), -700px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813720/vibrance/meteor2.jpg"
          :style="{
            transform: `translate3d(-50%, calc(-50% + 300vh), -600px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813719/vibrance/butterfly.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 50vw), calc(-50% + 250vh), -500px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813719/vibrance/abstraction.jpg"
          :style="{
            transform: `translate3d(-50%, calc(-50% + 200vh), -400px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813719/vibrance/cyberpunk_butterfly.jpg"
          :style="{
            transform: `translate3d(calc(-50% - 50vw), calc(-50% + 150vh), -300px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813720/vibrance/dotdotdot.jpg"
          :style="{
            transform: `translate3d(-50%, calc(-50% + 100vh), -200px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813720/vibrance/default.jpg"
          :style="{
            transform: `translate3d(calc(-50% + 50vw), calc(-50% + 50vh), -100px)`,
          }"
        />
        <img
          src="https://res.cloudinary.com/generatively/image/upload/w_1400,f_auto/v1602813719/vibrance/droplet.jpg"
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
  name: "CentralVibrance",
  components: {},
  setup() {
    const sticky = ref(null);
    let stickyHeight = 0;
    let state = reactive({
      small_display: window.matchMedia("(hover: none), (max-width: 800px)")
        .matches,
      v: 0,
    });
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

    const n = 11;
    const getXPosition = () => {
      if (state.small_display) {
        return Math.abs(((state.v * n + 3) % 4) - 2) - 1;
      } else {
        const mod = ((state.v * n) / 4) % 1;
        if (mod <= 0.5 && mod > 0) {
          return Math.cos(Math.PI * (state.v * n + 1)) * 0.5 + 0.5;
        } else {
          return (
            -1 - Math.cos(Math.PI * ((2 * state.v * n) / 2 + 1)) * 0.5 + 0.5
          );
        }
      }
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
      getXPosition,
    };
  },
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url("https://res.cloudinary.com/generatively/image/upload/w_1920,f_auto/v1602813720/vibrance/dotdotdot.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.header__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5em;
  font-family: "Italiana", serif;
  letter-spacing: 0.1em;
  text-align: center;
  white-space: nowrap;
  color: black;
}

@media (max-width: 1100px) {
  .header__text {
    font-size: 3em;
    white-space: initial;
  }
}

.image-collage {
  position: relative;
  height: 1050vh;
}

.image-collage::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  width: 100%;
  height: 100%;
  background-color: hsla(250deg, 40%, 10%, 0.5);
  mix-blend-mode: color;
}

.image-collage__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.image-collage__container {
  position: relative;
  height: 100vh;
  will-change: transform;
  transform-style: preserve-3d;
  white-space: nowrap;
  transition: transform 0.3s ease-out;
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
}
</style>
