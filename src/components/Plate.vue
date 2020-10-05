<template>
  <a :href="href">
    <div class="plate" :style="plateStyle" @mouseenter="mouseEnter">
      <div class="plate__dimmer"></div>
      <div class="plate__title" :style="titleStyle">{{ title }}</div>
    </div>
  </a>
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "Plate",
  props: {
    src: String,
    title: String,
    href: String,
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 360,
    },
  },
  setup(props) {
    const state = reactive({
      mouse_gravity_force: {
        x: 0,
        y: 0,
      },
    });

    const mouseMove = (event) => {
      state.mouse_gravity_force.x = (event.offsetX - props.width * 0.5) * 0.1;
      state.mouse_gravity_force.y = (event.offsetY - props.height * 0.5) * 0.1;
    };

    const mouseLeave = (event) => {
      event.target.removeEventListener("mouseleave", mouseLeave);
      event.target.removeEventListener("mousemove", mouseMove);
    };

    const mouseEnter = (event) => {
      event.target.addEventListener("mouseleave", mouseLeave);
      event.target.addEventListener("mousemove", mouseMove);
    };

    const plateStyle = computed(() => {
      return `
        background-image: url(${props.src});
        width: ${props.width}px;
        height: ${props.height}px;
      `;
    });

    const titleStyle = computed(() => {
      return `transform: translate(calc(-50% + ${state.mouse_gravity_force.x}px), calc(-50% + ${state.mouse_gravity_force.y}px))`;
    });

    return {
      state,
      mouseEnter,
      plateStyle,
      titleStyle,
    };
  },
};
</script>

<style lang="sass" scoped>
.plate
  position: relative
  display: inline-block
  background-size: cover
  background-position: center
  transition: filter 0.1s
  font-size: 36pt
  font-weight: bold
  text-align: left
  line-height: 1em
  color: rgba(255,255,255,1)
  -webkit-text-stroke: 1px white
  
  &:hover
    filter: saturate(0.2)

    .plate__title
      opacity: 1

    .plate__dimmer
      background-color: rgba(0, 0, 0, 0.6)

  .plate__dimmer
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0)
    transition: background-color 0.2s

  .plate__title
    position: absolute
    top: 50%
    left: 50%
    opacity: 0
    transform: translate(-50%, -50%)
    transition: opacity 0.1s
    pointer-events: none
</style>
