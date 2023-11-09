<template>
  <main class="flex justify-center align-center">
    <div class="flex">
      <input
        type="text"
        placeholder="Enter Name, Please"
        maxlength="13"
        autofocus
        :onkeydown="onInput"
      />
      <img
        src="@/assets/arrow-icons/arrow-right.svg"
        alt="go to portfolio button"
        class="block pointer"
      />
    </div>
  </main>
</template>

<script setup>
function onInput(e) {
  return /[a-z]/i.test(e.key);
}
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
