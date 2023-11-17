<template>
  <section class="hero-section flex space-between align-center">
    <div class="left hero-left-animation">
      <h1 class="font-bold font-48">
        Hi
        {{
          userName === ""
            ? "Stranger"
            : userName[0].toUpperCase() + userName.slice(1).toLowerCase()
        }},<br />I Am David Zhgenti
      </h1>
      <p class="font-medium font-18">Frontend Developer</p>
      <div class="btns flex">
        <greenBtn download></greenBtn>
        <a href="#about" class="font-medium btn-padding">Learn More</a>
      </div>
    </div>
    <div class="right" ref="imgWrapper" :data-aos="aosAnim">
      <div class="image-wrapper">
        <img
          src="@/assets/images/me.jpg"
          alt="picture of man"
          class="block border-radius-50"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import greenBtn from "./buttons/greenBtn.vue";
import { useStore } from "@/store";
import { onMounted, ref } from "vue";

const userName = useStore().userName;

const imgWrapper = ref(null);

const aosAnim = ref("");

function changeImageAnim() {
  const media = window.matchMedia("(max-width: 83.75rem)");

  if (media.matches) {
    aosAnim.value = "fade-left";
  } else {
    imgWrapper.value.classList.add("hero-right-animation");
    aosAnim.value = "";
  }
}

onMounted(() => {
  changeImageAnim();
});
</script>

<style scoped>
section {
  padding: 0 6.125rem 2.9375rem 8rem;
  margin-top: 11.6875rem;
}

.left {
  flex-basis: 27.5rem;
}

h1 {
  line-height: 3.90625rem;
}

p {
  color: #828282;
  margin: 0.5625rem 0 2.1875rem;
}

.btns a:last-child {
  border: 0.0625rem solid var(--text-color);
}

.btns {
  gap: 0.625rem;
}

.image-wrapper {
  width: 40.625rem;
  height: 40.625rem;
}

img {
  width: 100%;
  height: 100%;
}

.hero-left-animation {
  animation: hero-left-anim 1s 1s forwards ease-in-out;
}

.hero-right-animation {
  animation: hero-right-anim 1s 1s forwards ease-in-out;
}

@keyframes hero-left-anim {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes hero-right-anim {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 83.75rem) {
  section {
    flex-direction: column;
    padding: 1.25rem;
    padding-top: 0;
  }

  .left {
    flex-basis: auto;
  }

  .right {
    margin-top: 3.75rem;
  }
}

@media (max-width: 45.3125rem) {
  .image-wrapper {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 21.5625rem) {
  a {
    font-size: 0.8125rem;
  }
}
</style>
