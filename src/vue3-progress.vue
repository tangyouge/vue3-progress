<template>
  <div class="vue3-progress" :style="style"></div>
</template>
<script>
const inBrowser = typeof window !== "undefined";
import v3bus from "./v3bus";
export default {
  name: "Vue3Progress",
  data() {
    return {
      style: {
        opacity: 0,
        display: "none",
        position: window.V3P_OPT.position,
        height: window.V3P_OPT.height,
        background: window.V3P_OPT.color,
      },
    };
  },
  created() {
    if (inBrowser) {
      v3bus.setEventHandlers({
        begin: () => {
          this.style.opacity = 1;
          this.style.display = "block";
        },
        fade: () => {
          this.style.opacity = 0;
          this.style.display = "block";
        },
        afterFade: () => {
          this.style.display = "none";
        },
        height: () => {
          this.style.height = window.V3P_OPT.height;
        },
      });
    } else {
      // The vue3-progress can work in browser only!
      console.warn("The vue3-progress can work in browser only!");
    }
  },
};
</script>
<style scoped>
.vue3-progress {
  /* Default Rainbow Color */
  /* Default Rainbow Color */

  background: #a307ba;
  background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));
  background: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background: #27c4f5
    linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);

  -webkit-animation: 2s linear infinite rainbow, 0.5s ease-out enter;
  animation: 2s linear infinite rainbow, 0.5s ease-out enter;

  /* Default Rainbow Color */
  /* Default Rainbow Color */

  -webkit-transition: opacity 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out;

  -webkit-transform-origin: left;
  transform-origin: left;

  background-size: 500%;

  z-index: 999999;
  position: fixed;
  display: block;
  width: 100%;
  opacity: 1;
  left: 0;
  top: 0;
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 0;
  }
  to {
    background-position: 125% 0;
  }
}

@keyframes rainbow {
  0% {
    background-position: 0% 0;
  }
  to {
    background-position: 125% 0;
  }
}

@-webkit-keyframes enter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes enter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
