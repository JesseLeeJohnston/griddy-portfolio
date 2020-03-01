<template>
  <div class="footer-container">
    <div class="social-icons">
      <social-links />
    </div>
    <!-- <div>
        TODO: Create a inline list with links to pages for some of the following
         <ul>
            <li><a href="#" class="text-small">View source on Github</a></li>
            <li><a href="#" class="text-small">My favourite products and services</a></li>
            <li><a href="#" class="text-small">View source on Github</a></li>
        </ul> 
    </div>-->
    <div>
      <p class="text-small text-muted margin-top-sm">Copyright 2012 - 2020. Jessejohnston.co.</p>
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
  background: var(--primary-brand);
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 3rem;
  color: var(--text-rev);
}
.social-icons {
  max-width: 300px;
  margin: 0 auto;
}
</style>