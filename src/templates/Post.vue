<template>
  <Layout>
    <div class="container">
      <h2>{{$page.post.title}}</h2>
      <p class="text-small is-marginless">Published: {{$page.post.date}}</p>

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

  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>