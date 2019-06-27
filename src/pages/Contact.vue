<template>
  <layout>
 <div class="container">
     <h2 class="text-center margin-bottom-xs">Contact me</h2>
    <div class="contact-panel">
    <form form name="contact" method="POST" data-netlify="true">
    <div class="form-control">
        <label for="">Name</label>
        <input type="text" name="name" placeholder="Mr. Jinx" autofocus>
    </div>
    <div class="form-control">
        <label for="">Email</label>
        <input type="email" name="email" placeholder="cats@catsmania.com">
    </div>
    <div class="form-control">
        <label for="">Message</label>
        <textarea name="message" id="" cols="30" rows="10" placeholder="Always looking forward to hearing from people."></textarea>
    </div>
    <div class="form-control text-right">
      <button type="submit" value="Send Message" class="button reversed">Submit</button>
    </div>
    </form>
    </div>
</div>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: 'Contact Me',
    meta: [
      { name: 'author', content: 'Jesse Johnston' }
    ]
  }  
};
</script>
<style lang="scss" scoped>

input, textarea {
    display: block;
    border-radius: 0.25rem;
    padding: 0.8rem;
    border: 1px solid rgba(255,255,255,0.5);
    outline: 0;
    width: 100%;
    margin-bottom: 0.5rem;
    background-color: #0810141c;
    outline-width: 1px;
    -webkit-box-sizing: border-box; /* For legacy WebKit based browsers */
     -moz-box-sizing: border-box; /* For legacy (Firefox <29) Gecko based browsers */
          box-sizing: border-box;
    color: #081014;
    font-weight: 300;
}

input::placeholder, textarea::placeholder {
    color: rgba(14,30,37,.38);
    white-space: normal;
}

.form-control {
    display: block;
    margin: 1rem 0;
}
textarea{
     resize:none;
}
 .contact-panel {
   background-color: #ffffff; 
   border-radius: 0.25rem; 
   padding: 1rem; 
   max-width: 500px; 
   margin: 0 auto; 
   color: #081014;
 }

</style>
