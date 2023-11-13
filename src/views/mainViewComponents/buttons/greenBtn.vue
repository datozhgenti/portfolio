<template>
  <a :href="anchorLink" class="font-medium btn-padding"
    ><slot>Download CV</slot></a
  >
</template>

<script>
export default {
  props: {
    anchorLink: {
      default: "david_zhgenti-cv.pdf",
    },
  },
};
</script>

<style scoped>
a {
  background: var(--green-color);
  color: #ffffff;
}
</style>
