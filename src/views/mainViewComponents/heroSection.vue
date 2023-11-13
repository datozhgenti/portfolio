<template>
  <section class="hero-section flex space-between align-center">
    <div class="left">
      <h1 class="font-bold">
        Hi
        {{
          userName === ""
            ? "Stranger"
            : userName[0].toUpperCase() + userName.slice(1).toLowerCase()
        }},<br />I Am David Zhgenti
      </h1>
      <p class="font-medium">Frontend Developer</p>
      <div class="btns flex">
        <greenBtn download></greenBtn>
        <a href="#about" class="font-medium btn-padding" @click="cl"
          >Learn More</a
        >
      </div>
    </div>
    <div class="right">
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

const userName = useStore().userName;
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
  font-size: 3rem;
  line-height: 3.90625rem;
}

p {
  font-size: 1.125rem;
  color: #828282;
  margin: 0.5625rem 0 2.1875rem;
}

.btns a:last-child {
  border: 0.0625rem solid var(--text-color);
}

.btns {
  gap: 10px;
}

.image-wrapper {
  width: 40.625rem;
  height: 40.625rem;
}

img {
  width: 100%;
  height: 100%;
}

@media (max-width: 64rem) {
  section {
    flex-direction: column;
    padding: 20px;
    padding-top: 0;
  }

  .left {
    flex-basis: auto;
  }

  .right {
    margin-top: 3.75rem;
  }
}

@media (max-width: 26.5625rem) {
  .image-wrapper {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 20rem) {
  a {
    font-size: 0.8125rem;
  }
}
</style>
