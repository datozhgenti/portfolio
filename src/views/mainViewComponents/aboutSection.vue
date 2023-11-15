<template>
  <section class="about-section" id="about">
    <h2 class="font-bold font-48 text-align-center">About</h2>
    <div class="about-text flex justify-center">
      <article class="text-align-center">
        <p class="font-18">
          Hi! I'm David, a front-end developer based in Tbilisi. With 7 years of
          experience, I specialize in creating beautiful and user-friendly
          websites using HTML, CSS, JavaScript and Vue.js. Let's work together
          to bring your ideas to life!
        </p>
      </article>
    </div>
    <div class="more-info flex justify-center">
      <div class="more-info-wrapper flex space-evenly wrap">
        <div
          class="info-card text-align-center"
          v-for="(info, index) of infos"
          :key="info"
        >
          <a
            :href="info.link"
            :target="index === infos.length - 1 ? '_blank' : ''"
          >
            <div
              class="circle-big border-radius-50 flex justify-center align-center"
            >
              <div class="circle-small border-radius-50"></div>
            </div>
            <p class="font-18 font-bold">{{ info.infoTitle }}</p>
            <p>{{ info.infoSubtitle }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      infos: [
        {
          link: "mailto:datozhgenti1998@gmail.com",
          infoTitle: "Email Address",
          infoSubtitle: "datozhgenti1998@gmail.com",
        },
        {
          link: "tel:+995591404227",
          infoTitle: "Phone",
          infoSubtitle: "+995591404227",
        },
        {
          link: "https://github.com/datozhgenti",
          infoTitle: "Github",
          infoSubtitle: "https://github.com/datozhgenti",
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-section {
  padding-bottom: 7.5rem;
}

h2 {
  margin-bottom: 2.375rem;
}

article {
  flex-basis: 45.9375rem;
}

.circle-big {
  width: 3.875rem;
  height: 3.875rem;
  background: #212121;
  margin: 0 auto;
  margin-bottom: 1.125rem;
}

.circle-small {
  width: 0.75rem;
  height: 0.75rem;
  background: var(--green-color);
}

.more-info {
  margin-top: 4rem;
}
.more-info-wrapper {
  flex-basis: 72.1875rem;
}

a:hover .circle-small {
  animation: green-circle-anim 1s infinite ease-in;
}

@keyframes green-circle-anim {
  100% {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 46.875rem) {
  .more-info-wrapper {
    gap: 1.875rem;
    flex-direction: column;
    flex-basis: content;
  }

  article {
    padding: 0 0.3125rem 0;
  }
}
</style>
