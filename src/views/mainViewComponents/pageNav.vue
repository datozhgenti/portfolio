<template>
  <nav class="fixed flex justify-center align-center">
    <img
      src="@/assets/icons/close-icon.svg"
      alt="close button"
      class="fixed pointer"
      @click="$emit('closeNav')"
    />
    <ul class="text-align-center">
      <li v-for="link of navLinks" :key="link">
        <a
          :href="link.sectionLink"
          class="font-bold font-36"
          @click="$emit('closeNav')"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { sectionLink: "#", name: "Home" },
        { sectionLink: "#about", name: "About" },
        { sectionLink: "#skills", name: "What I Do?" },
        { sectionLink: "#projects", name: "My Projects" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  inset: 0;
  overflow: auto;
  z-index: 200;
}

a {
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
