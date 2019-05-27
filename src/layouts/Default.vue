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

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>

import Navigation from '~/layouts/Navigation.vue';
import Footer from '~/layouts/Footer.vue';
import feathers from '../assets/images/icons/feather.min.js';

export default {
  components: {
      Navigation,
      Footer,
  }, 
  mounted() {
    feather.replace();
  }
}
</script>



<style>



</style>
