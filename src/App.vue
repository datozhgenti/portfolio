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
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init({
    startEvent: "scroll",
    duration: 1000,
  });
});
</script>

<style>
@import "aos/dist/aos.css";

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

.body,
html {
  overflow-x: hidden;
}

/* scroll styles */

html {
  scroll-behavior: smooth;
  scroll-padding-top: 6.5rem;
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

/* font sizes */

.font-36 {
  font-size: 2.25rem;
}

.font-48 {
  font-size: 3rem;
}

.font-18 {
  font-size: 1.125rem;
}

.font-14 {
  font-size: 0.875rem;
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

.space-evenly {
  justify-content: space-evenly;
}

.wrap {
  flex-wrap: wrap;
}

.column {
  flex-direction: column;
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

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}
/* list styles */

ul {
  list-style-type: none;
}

/* text styles */

.text-align-center {
  text-align: center;
}

/* button styles */

.btn-padding {
  padding: 0.75rem 1.6875rem;
}

/* border radiuses */

.border-radius-50 {
  border-radius: 50%;
}

/* wrappers */
.projects-and-skills-wrapper {
  padding-left: 8.8125rem;
  padding-right: 8.1875rem;
  row-gap: 1.25rem;
  margin-top: 6.25rem;
}

@media (max-width: 39.375rem) {
  .projects-and-skills-wrapper {
    padding: 0 1rem 0;
  }
}

/* card sizes */

.skill-and-project-card-sizes {
  flex-basis: 21.8125rem;
  height: 15.0625rem;
}

/* section styles */

section {
  overflow-x: hidden;
}
</style>
