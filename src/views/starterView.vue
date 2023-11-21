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
        name="input"
        id="starter-input"
      />
      <img
        src="@/assets/icons/arrow-right.svg"
        alt="go to portfolio button"
        class="block pointer"
        height="94"
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
  if (/^[A-Za-z]+$/.test(e.target.value)) {
    store.userName = input.value;
  } else {
    store.userName = input.value = input.value.slice(0, -1);
  }
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
    font-size: 1rem;
  }

  img {
    width: 2.5rem;
  }

  input,
  img {
    padding-bottom: 0.3125rem;
  }
}
</style>
