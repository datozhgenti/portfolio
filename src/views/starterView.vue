<template>
  <main class="flex justify-center align-center">
    <div class="flex">
      <input
        type="text"
        placeholder="Enter Name, Please"
        maxlength="13"
        autofocus
        @input="onInput"
        v-model="input"
      />
      <img
        src="@/assets/icons/arrow-right.svg"
        alt="go to portfolio button"
        class="block pointer"
        @click="goToMainView"
      />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/store/index.js";

const store = useStore();

const input = ref("");

function onInput(e) {
  store.userName = input.value;
  return /[a-z]/i.test(e.key);
}

function goToMainView() {
  store.starterViewOn = false;
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    goToMainView();
  }
});
</script>

<style scoped>
main {
  height: 100vh;
}

input {
  border: none;
  background-color: transparent;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid #4f4f4f;
  font-size: 4rem;
}

input:focus {
  outline: none;
}

img {
  width: 5rem;
  height: auto;
}

img,
input {
  border-bottom: 1px solid #4f4f4f;
}

@media (max-width: 48rem) {
  input {
    font-size: 5vw;
    padding-bottom: 5px;
  }

  img {
    width: 40px;
    padding-bottom: 5px;
  }
}
</style>
