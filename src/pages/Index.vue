<template>
<layout>
<div class="container">
  <div class="hero-text">
    <p>Hi, I’m Jesse. I design and develop web applications that end customers find easy to use.<br/>I believe rapid prototyping and feedback cycles help achieve the best end product.</p>
  </div>
    <project-grid/>
</div>
</layout>
</template>

<script>
import ProjectGrid from '~/layouts/Project-Grid.vue';
  
// import anime from '../../node_modules/animejs/lib/anime.es.js';

export default {
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
  max-width: 1200px;
}

.blog-post {
  margin-bottom: 2.6rem;
}
</style>
