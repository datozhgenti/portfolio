<template>
  <nav class="fixed flex justify-center align-center">
    <img
      src="@/assets/icons/close-icon.svg"
      alt="close button"
      class="fixed pointer"
      @click="$emit('closeNav')"
    />
    <ul class="text-align-center">
      <li>
        <a href="#" class="font-bold">Home</a>
      </li>
      <li>
        <a href="#about" class="font-bold">About</a>
      </li>
      <li>
        <a href="#skills" class="font-bold">What I Do?</a>
      </li>
      <li>
        <a href="#projects" class="font-bold">My Projects</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  inset: 0;
  overflow: auto;
}

a {
  font-size: 2.25rem;
  margin-bottom: 1.25rem;
  display: block;
  color: #ffffff;
  padding: 0;
}

img {
  top: 0.9375rem;
  right: 0.9375rem;
  width: 3rem;
  height: 3rem;
}
</style>
