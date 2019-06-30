<template>
  <div class="footer-container">
    <social-links />
    <!-- <div>
        TODO: Create a inline list with links to pages for some of the following
         <ul>
            <li><a href="#" class="text-small">View source on Github</a></li>
            <li><a href="#" class="text-small">My favourite products and services</a></li>
            <li><a href="#" class="text-small">View source on Github</a></li>
        </ul> 
    </div>-->
    <div>
      <p class="text-small text-muted margin-top-sm">Copyright 2019 - Jessejohnston.co.</p>
      <p class="text-small text-muted">All client work is property of the specified client.</p>
    </div>
  </div>
</template>
<script>
import SocialLinks from "~/components/Social-Links.vue";

export default {
  components: {
    SocialLinks
  }
};
</script>
<style lang="scss" scoped>
.footer-container {
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 3rem;
}
</style>