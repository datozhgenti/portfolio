<template>
  <header
    class="flex space-between align-center"
    :class="{ fixed: fixedHeader }"
  >
    <a href="#" class="block">
      <h2 class="font-bold font-36">David</h2>
    </a>
    <div class="flex align-center space-between">
      <img
        src="@/assets/icons/burger-icon.svg"
        alt="burger button"
        class="block pointer"
        @click="openPageNav"
      />
      <div
        v-for="(colorBtn, index) of colorsBtns"
        :key="colorBtn"
        class="color-mode-btn pointer"
        :class="[colorBtn.shadowClass, colorBtn.colorClass]"
        @click="changeColorMode(colorBtn.bgColor, colorBtn.textColor, index)"
      ></div>
    </div>
  </header>
  <transition name="nav">
    <pageNav v-if="pageNavOn" @closeNav="pageNavOn = false"></pageNav>
  </transition>
</template>

<script setup>
/* eslint-disable */
import pageNav from "@/views/mainViewComponents/pageNav.vue";
import { onMounted, ref } from "vue";

let pageNavOn = ref(false);
let fixedHeader = ref(false);

const colorsBtns = ref([
  {
    colorClass: "black-rectangle-btn",
    bgColor: "#171717",
    textColor: "#ffffff",
    shadowClass: "box-shadow-green",
  },
  {
    colorClass: "white-rectangle-btn",
    bgColor: "#ffffff",
    textColor: "#171717",
    shadowClass: "",
  },
]);

onMounted(() => {
  setTimeout(() => {
    fixedHeader.value = true;
  }, 1000);
});

function openPageNav() {
  pageNavOn.value = true;
}

function shadowOnActiveColorBtn(index) {
  for (let colorBtn of colorsBtns.value) {
    colorBtn.shadowClass = "";
  }

  colorsBtns.value[index].shadowClass = "box-shadow-green";
}

function changeColorMode(bgColor = "#171717", textColor = "#ffffff", index) {
  const root = document.documentElement;

  shadowOnActiveColorBtn(index);

  document.body.style.transition = "0.5s ease-in-out background-color";

  root.style.setProperty("--page-background", bgColor);
  root.style.setProperty("--text-color", textColor);
}
</script>

<style scoped>
header {
  padding: 1.75rem 5.4375rem 1.75rem 5.4375rem;
  background: #171717;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

h2 {
  color: #ffffff;
}

img {
  width: 3rem;
  height: 3rem;
}

.black-rectangle-btn {
  background: black;
}

.white-rectangle-btn {
  background: white;
}

.box-shadow-green {
  box-shadow: 0 0 1.25rem 0.1875rem var(--green-color);
}

.color-mode-btn {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.625rem;
}

header > div {
  flex-basis: 11.875rem;
}

.nav-enter-active,
.nav-leave-active {
  transition: 1s transform;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 48rem) {
  header {
    padding: 1.75rem 1rem 1.75rem;
  }

  header > div {
    flex-basis: 9rem;
  }
}
</style>
