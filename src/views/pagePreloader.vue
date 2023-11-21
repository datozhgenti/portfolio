<template>
  <div
    class="preloader fixed flex justify-center align-center"
    v-if="pageLoaded"
  >
    <div class="loading border-radius-50"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageLoaded: true,
    };
  },

  mounted() {
    window.addEventListener("load", () => {
      this.pageLoaded = false;
    });
  },
};
</script>

<style scoped>
.preloader {
  background: var(--page-background);
  z-index: 3000;
  inset: 0;
}

.loading {
  flex-basis: 6.25rem;
  height: 6.25rem;
  border: 0.625rem solid var(--green-color);
  border-top-color: var(--page-background);
  animation: loading-anim 500ms infinite ease-in-out;
}

@keyframes loading-anim {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
