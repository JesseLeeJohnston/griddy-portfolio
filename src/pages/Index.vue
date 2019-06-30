<template>
<layout>
<div class="container">
  <div class="hero-text">
    <h1 class="special-heading">Hi, I’m Jesse. I design and develop web applications that end customers find easy to use. I believe rapid prototyping and feedback cycles help achieve the best end product.</h1>
  </div>
    <project-grid/>
</div>
</layout>
</template>

<script>
import ProjectGrid from '~/layouts/Project-Grid.vue';
  
// import anime from '../../node_modules/animejs/lib/anime.es.js';

export default {
  metaInfo: {
    title: 'Vancouver & Remote Producer Designer',
    meta: [
      { name: 'author', content: 'Jesse Johnston' },
      { key: 'description', name: 'description', content: 'Jesse is a product designer based in Vancouver, BC. He\'s skill in creating detailed designs, interactive prototypes and working with developments teams for implementation.' }
    ]
  },
  components: {
    ProjectGrid,
    // anime
  },
  data() {
    return {
      showNav: false,
    }
  },
  mounted() {
    // anime({
    //   targets: '.hero-text',
    //   translateY: -10,
    //   duration: 3000
    // });
  }
}
</script>

<style lang="scss">

.hero-text {
  text-align: center;
  padding: 6rem 0rem;
  margin: 0 auto;
  max-width: 710px;
}

.blog-post {
  margin-bottom: 2.6rem;
}
</style>
