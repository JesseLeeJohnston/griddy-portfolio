<template>
  <div class="layout">
    <Navigation/>

    <transition name="fade" appear>
      <main class="background-img">
        <slot/>
      </main>
    </transition>

    <Footer/>

  </div>
</template>
<script>
import Navigation from '~/layouts/Navigation.vue';
import Footer from '~/layouts/Footer.vue';

export default {
  components: {
      Navigation,
      Footer,
  }
}
</script>



<style>



</style>
