<template>
  <section class="skills-section" id="skills">
    <h1 class="text-align-center font-bold font-48">What I Do</h1>
    <div class="projects-and-skills-wrapper flex space-evenly wrap">
      <div
        class="skill-card skill-and-project-card-sizes"
        v-for="skill of skills"
        :key="skill"
        data-aos="fade-left"
      >
        <div class="img-wrapper">
          <img :src="skill.imgUrl" :alt="`${skill.name} icon`" class="block" />
        </div>
        <h2 class="font-bold font-36">{{ skill.name }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { imgUrl: require("@/assets/icons/html5.svg"), name: "HTML 5" },
        { imgUrl: require("@/assets/icons/css3.svg"), name: "CSS 3" },
        {
          imgUrl: require("@/assets/icons/javascript.svg"),
          name: "JAVASCRIPT ES6",
        },
        { imgUrl: require("@/assets/icons/vuejs3.svg"), name: "VUE.JS 3" },
      ],
    };
  },
};
</script>

<style scoped>
.skill-card {
  background: #212121;
  padding: 2.125rem 4.375rem 2.25rem 3.125rem;
  position: relative;
  margin: 0 0.125rem 0;
}

img {
  width: 3.5625rem;
  height: 3.5625rem;
}

h2 {
  margin-top: 1.875rem;
  color: #535353;
}

.skill-card:hover {
  border: 0.0625rem solid #000;
}

.skill-card:hover::after {
  content: "";
  display: block;
  position: absolute;
  height: 0.25rem;
  left: 0;
  bottom: 0;
  background: var(--green-color);
  animation: green-line-anim 1s ease-in-out forwards;
}

.skills-section {
  padding-bottom: 8.75rem;
}

@keyframes green-line-anim {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media (max-width: 23.125rem) {
  h2 {
    font-size: 1.1875rem;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
