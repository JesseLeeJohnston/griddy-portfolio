<template>
  <layout>
    <div class="container">
      <h2 class="text-center margin-bottom-xs">Contact me</h2>
      <Panel>
        <form 
          id="contact-form"
          method="post"
          action="https://www.flexyform.com/f/bd698d2b98c378008cde661a455e19e0e8e1d4ee"
        >
            <div class="form-control">
                <label for="name">Name</label>
                <input type="text" name="name" placeholder="Mr. Jinx" autofocus required>
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="cats@catsmania.com" required>
            </div>
            <div class="form-control">
                <label for="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Always looking forward to hearing from people."></textarea>
            </div>
            <div class="form-control text-right">
              <button type="submit" class="button primary g-recaptcha" data-sitekey="6LeXWHobAAAAAGNpEnUWRG9vpGrI5a2mL1zX7iHz" data-callback="onSubmit" data-action="submit">Submit</button>
            </div>
        </form>
      </Panel>
    </div>
  </layout>
</template>
<script>
import Panel from '@/components/Panel.vue';

export default {
  metaInfo: {
    title: 'Contact',
    meta: [
      { name: 'author', content: 'Jesse Johnston' },
      { key: 'description', name: 'description', content: 'Looking for a product designer? Contact Jesse Johnston to see if it\'s a good fit.' }
    ]
  },
  components: {
      Panel
  },
  methods: {
      onSubmit(token) {
        document.getElementById("contact-form").submit();
      }
  },
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
    margin: 1.4rem 0;
}
textarea{
     resize:none;
}


</style>
