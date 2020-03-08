<template>
  <Layout>
    <div class="container pt-7">
      <ul>
        <li>
          <g-link to="/blog" class>Blog</g-link>
        </li>
        <li class="seperator">//</li>
        <li class="text-sm">{{$page.post.title}}</li>
      </ul>
      <h2>{{$page.post.title}}</h2>
      <p
        class="text-small is-marginless"
      >Published {{$page.post.date}} // Author {{$page.post.author}}</p>

      <div v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    date(format: "YYYY-MM-DD")
    author
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: this.$page.post.excerpt
        },
        {
          name: "author",
          content: "Jesse Johnston"
        },
        {
          property: "og:title",
          content: this.$page.post.title
        },
        {
          property: "og:description",
          cotent: this.$page.post.excerpt
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
  border-bottom: 1px dashed #a7b4ba;
  margin-bottom: 1rem;
  li {
    font-size: 0.8rem;
    a {
      color: var(--secondary-brand);
      font-size: 0.8rem;
    }
  }
  .seperator {
    padding: 0 1rem;
  }
}
.pt-7 {
  padding-top: 7rem;
}
</style>