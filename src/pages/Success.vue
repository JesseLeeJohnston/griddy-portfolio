<template>
  <layout>
 <div class="container">
     <h2 class="text-center margin-bottom-xs">Contact me</h2>
    <div class="contact-panel">
        <h2 class="margin-bottom-sm">Success! A carrier pigeon is on its way to me.</h2>
        <div class="form-control">
            <a href="/" class="button reversed">Return Home</a>
        </div>
    </div>
</div>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Contact Successful',
    meta: [
      { name: 'author', content: 'Jesse Johnston' }
    ]
  }
};
</script>
<style lang="scss" scoped>
 .contact-panel {
   background-color: #ffffff; 
   border-radius: 0.25rem; 
   padding: 1rem; 
   max-width: 500px; 
   margin: 0 auto; 
   color: #081014;
 }
.form-control {
    display: block;
    margin: 1rem 0;
}
</style>
