<template>
  <div class="card" @mouseenter="mouseEnter">
    <div class="card__image" :style="{ backgroundImage: `url(${src})` }">
      <div class="card__dimmer"></div>
    </div>
    <div class="card__title-scaler">
      <div
        class="card__title"
        :style="{
          transform: state.small_display
            ? `translate(calc(-50% + ${state.mouse_gravity.x}%), calc(-50% + ${state.mouse_gravity.y}%))`
            : '',
        }"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "image-card",
  props: {
    src: String,
  },
  setup() {
    const state = reactive({
      small_display: window.matchMedia("(hover: hover) and (min-width: 800px)")
        .matches,
      mouse_gravity: {
        x: 0,
        y: 0,
      },
    });

    const mouseMove = (event) => {
      state.mouse_gravity.x = (event.offsetX / 600 - 0.5) * 30;
      state.mouse_gravity.y = (event.offsetY / 360 - 0.5) * 30;
    };

    const mouseLeave = (event) => {
      event.target.removeEventListener("mouseleave", mouseLeave);
      event.target.removeEventListener("mousemove", mouseMove);
    };

    const mouseEnter = (event) => {
      if (state.small_display) {
        event.target.addEventListener("mouseleave", mouseLeave);
        event.target.addEventListener("mousemove", mouseMove);
      }
    };

    window.addEventListener("resize", () => {
      state.small_display = window.matchMedia(
        "(hover: hover) and (min-width: 800px)"
      ).matches;
    });

    return {
      state,
      mouseEnter,
    };
  },
};
</script>

<style scoped>
.card {
  display: block;
  position: relative;
  border-radius: 3px;
  width: 600px;
  height: 360px;
  font-family: "Italiana", serif;
}

.card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-size: cover;
  background-position: center;
  transition: transform 0.7s;
  pointer-events: none;
}

.card__dimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: transparent;
  transition: background-color 0.7s;
  pointer-events: none;
}

.card__title-scaler {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: scale(5);
  transition: transform 0.7s;
  pointer-events: none;
  z-index: 1;
}

.card__title {
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -50%);
  font-size: 3.3em;
  letter-spacing: -0.5em;
  text-align: left;
  line-height: 0.05em;
  white-space: nowrap;
  color: white;
  transition: opacity 0.4s cubic-bezier(0, 0, 0, 1), letter-spacing 0s 0.4s,
    line-height 0s 0.4s;
}

@media (hover: hover) {
  .card:hover .card__dimmer {
    background-color: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 800px) {
    .card:hover .card__dimmer {
      transition-delay: 0.6s;
    }
    
    .card:hover .card__image {
      transform: scale(0.75);
      transition-delay: 0.6s;
    }

    .card:hover .card__title-scaler {
      transform: scale(1);
      transition: transform 0.7s ease-in;
    }

    .card:hover .card__title {
      opacity: 1;
      letter-spacing: 0.1em;
      line-height: 1em;
      transition: opacity 0.5s, letter-spacing 0.5s 0.3s, line-height 0.5s 0.5s;
    }
  }
}

@media (hover: none), (max-width: 799.9px) {
  .card:hover .card__dimmer {
    background-color: rgba(0, 0, 0, 0.3);
  }

  .card:active .card__image {
    transform: scale(0.85);
  }

  .card__title-scaler {
    transform: scale(1);
    top: unset;
    bottom: 10px;
    left: 10px;
  }

  .card__title {
    padding: 10px;
    border-radius: 1px;
    opacity: 1;
    letter-spacing: 0.1em;
    line-height: 1em;
    transition: none;
    transform: translate(0, -100%);
    background: linear-gradient(
      160deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.25)
    );
  }
}

@media (max-width: 800px) {
  .card {
    width: 75vw;
    height: 45vw;
  }

  .card__title {
    font-size: 1em;
  }
}

@media (min-width: 400px) {
  .card__title {
    font-size: 2em;
  }
}

@media (min-width: 600px) {
  .card__title {
    font-size: 3.3em;
  }
}
</style>
