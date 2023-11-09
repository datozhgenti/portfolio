<template>
  <starterView></starterView>
</template>

<script setup>
import starterView from "./views/starterView.vue";
</script>

<style>
/* color variables */

:root {
  --page-background: #171717;
  --text-starter-color: #ffffff;
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
  color: var(--text-starter-color);
  font-family: "DMsans-regular", "sans-serif";
}

/* body styles */
body {
  background: var(--page-background);
}

/* font families */
@font-face {
  font-family: DMsans-regular;
  src: url("@/fonts/DMSans-Regular.ttf");
}

@font-face {
  font-family: DMsans-medium;
  src: url("@/fonts/DMSans-Medium.ttf");
}

@font-face {
  font-family: DMsans-bold;
  src: url("@/fonts/DMSans-Bold.ttf");
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
</style>
