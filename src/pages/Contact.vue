<template>
  <layout>
 <div class="container">
     <h2 class="text-center margin-bottom-xs">Contact me</h2>
    <Panel>
      <form 
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
          <div class="form-control">
              <label for="name">Name</label>
              <input type="text" name="name" placeholder="Mr. Jinx" autofocus v-model="formData.name" required>
          </div>
          <div class="form-control">
              <label for="email">Email</label>
              <input type="email" name="email" placeholder="cats@catsmania.com" v-model="formData.email" required>
          </div>
          <div class="form-control">
              <label for="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10" placeholder="Always looking forward to hearing from people." v-model="formData.message"></textarea>
          </div>
          <div class="form-control text-right">
            <button type="submit" class="button reversed">Submit form</button>
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
  data() {
  return {
    formData: {},
  }
},

methods: {
  encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  },
  handleSubmit(e) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
        'form-name': e.target.getAttribute('name'),
        ...this.formData,
      }),
    })
    .then(() => this.$router.push('/success'))
    .catch(error => alert(error))
  }
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
    margin: 1.4rem 0;
}
textarea{
     resize:none;
}


</style>
