<template>
  <transition name="starter">
    <starterView v-if="useStore().starterViewOn"></starterView>
  </transition>
  <mainView v-if="!useStore().starterViewOn"></mainView>
</template>

<script setup>
import starterView from "./views/starterView.vue";
import mainView from "./views/mainView.vue";
import { useStore } from "@/store/index.js";
</script>

<style>
/* color variables */

:root {
  --page-background: #171717;
  --text-color: #ffffff;
  --green-color: #27ae60;
  --footer-text-color: #4f4f4f;
}

/* styles for all elements */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--text-color);
  font-family: "DMsans-regular", "sans-serif";
}

/* body styles */
body {
  background: var(--page-background);
}

/* font families */
@font-face {
  font-family: DMsans-regular;
  src: url("@/assets/fonts/DMSans-Regular.ttf");
}

@font-face {
  font-family: DMsans-medium;
  src: url("@/assets/fonts/DMSans-Medium.ttf");
}

@font-face {
  font-family: DMsans-bold;
  src: url("@/assets/fonts/DMSans-Bold.ttf");
}

/* font family classes */

.font-regular {
  font-family: "DMsans-regular", "sans-serif";
}

.font-medium {
  font-family: "DMsans-medium", "sans-serif";
}

.font-bold {
  font-family: "DMsans-bold", "sans-serif";
}

/* flex styles */

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.space-between {
  justify-content: space-between;
}

/* displays */

.flex {
  display: flex;
}

.block {
  display: block;
}

/* cursor styles */

.pointer {
  cursor: pointer;
}

/* transitions */

.starter-leave-active {
  transition: 1s opacity;
}

.starter-leave-to {
  opacity: 0;
}

/* anchor styles */

a {
  text-decoration: none;
}

/* positions */

.fixed {
  position: fixed;
}

/* .absolute {
  position: absolute;
}

.relative {
  position: relative;
} */
/* list styles */

ul {
  list-style-type: none;
}

/* text styles */

.text-align-center {
  text-align: center;
}
</style>
