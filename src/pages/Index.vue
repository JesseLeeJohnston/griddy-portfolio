<template>
<layout>
<div class="container">
  <div class="hero-text">
    <p class="lead">Hi, I’m Jesse, a UX Designer with a passion for building web applications that customers love to use.<br/>I believe rapid prototyping and feedback cycles help achieve the best end product.</p>
  </div>
    <project-grid/> 
</div>
</layout>
</template>

<script>
import ProjectGrid from '~/layouts/Project-Grid.vue';
  
export default {
  components: {
    ProjectGrid
  },
  data() {
    return {
      showNav: false,
    }
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
