<template>
  <section class="projects-section" id="projects">
    <h2 class="font-bold font-48 text-align-center">My Projects</h2>
    <div class="projects-and-skills-wrapper flex space-evenly wrap">
      <div
        class="project-card skill-and-project-card-sizes relative"
        v-for="(project, index) of projects"
        :key="project"
        :style="{ order: index - index * 2 }"
        data-aos="fade-right"
      >
        <img
          :src="project.imgUrl"
          :alt="project.name + ' photo'"
          class="block"
        />
        <div class="overlay flex column justify-center align-center absolute">
          <h2 class="font-bold text-align-center">{{ project.name }}</h2>
          <greenBtn :anchorLink="project.link" target="_blank">View</greenBtn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import greenBtn from "./buttons/greenBtn.vue";

const projects = ref([
  {
    imgUrl: require("@/assets/images/restaraunt-website.png"),
    name: "Restaraunt Website",
    link: "https://datozhgenti.github.io/restaraunt-website/",
  },
  {
    imgUrl: require("@/assets/images/retail-website.png"),
    name: "Retail Website",
    link: "https://datozhgenti.github.io/Acme-Shop-Website/",
  },
  {
    imgUrl: require("@/assets/images/fitnesso-website.png"),
    name: "Fitnesso Website",
    link: "https://datozhgenti.github.io/fitnesso/",
  },
  {
    imgUrl: require("@/assets/images/finsweet-website.png"),
    name: "Finsweet Website",
    link: "https://datozhgenti.github.io/finsweet_vue/",
  },
  {
    imgUrl: require("@/assets/images/environment-website.png"),
    name: "Environment Website",
    link: "https://datozhgenti.github.io/environment_website/",
  },
]);
</script>

<style scoped>
.projects-section {
  margin-bottom: 6.25rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 0;
  transition: transform 1s;
}

.overlay {
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  gap: 1.5rem;
}

.overlay h2 {
  font-size: 1.5rem;
  color: #ffffff;
  text-shadow: 0px 0px 20px black;
}

.project-card {
  overflow: hidden;
  margin: 0 0.125rem 0;
}

.project-card:hover img {
  transform: scale(1.5);
}
</style>
