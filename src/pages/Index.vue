<template>
  <layout>
    <div class="container">
      <div class="hero-text">
        <h1 class="special-heading margin-bottom-sm">Hi, I’m Jesse.</h1>
        <h1
          class="special-heading"
        >I design and develop web applications that people find easy to use. I believe rapid prototyping and feedback cycles help achieve the best end product.</h1>
        <span class="separator"></span>
      </div>
      <project-grid />
    </div>
  </layout>
</template>

<script>
import ProjectGrid from "~/layouts/Project-Grid.vue";

import anime from "../../node_modules/animejs/lib/anime.es.js";

export default {
  metaInfo: {
    title: "Vancouver & Remote Producer Designer",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "Jesse is a product designer based in Vancouver, BC. He's skilled in creating detailed designs, interactive prototypes and working with developments teams for implementation."
      }
    ]
  },
  components: {
    ProjectGrid,
    anime
  },
  data() {
    return {
      showNav: false
    };
  },
  mounted() {
    anime({
      targets: ".hero-text",
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 2000
    });
    anime({
      targets: ".separator",
      width: "10%",
      easing: "easeInOutQuad",
      direction: "alternate",
      delay: 200,
      duration: 500
    });
  }
};
</script>

<style lang="scss">
.hero-text {
  padding: 3rem 0rem;
  margin: 0 auto;
  max-width: 1000px;
  @media (min-width: 620px) {
    padding: 6rem 0rem;
  }
}

.blog-post {
  margin-bottom: 2.6rem;
}
</style>
