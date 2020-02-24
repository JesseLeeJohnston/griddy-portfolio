<template>
  <layout>
    <div class="container">
      <div class="blog-tile">
        <a href="#">
          <h2>This is a blog title</h2>
        </a>
        <p class="text-small text-muted">March 1, 2020</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veritatis nulla reiciendis laboriosam, dolorem earum voluptate perspiciatis cupiditate rem voluptates voluptatem facere! Quia nisi totam dicta ex sint vitae nam!</p>
      </div>

      <div class="blog-tile">
        <a href="#">
          <h2>This is a blog title</h2>
        </a>
        <p class="text-small text-muted">March 1, 2020</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veritatis nulla reiciendis laboriosam, dolorem earum voluptate perspiciatis cupiditate rem voluptates voluptatem facere! Quia nisi totam dicta ex sint vitae nam!</p>
      </div>

      <div class="blog-tile">
        <a href="#">
          <h2>This is a blog title</h2>
        </a>
        <p class="text-small text-muted">March 1, 2020</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo veritatis nulla reiciendis laboriosam, dolorem earum voluptate perspiciatis cupiditate rem voluptates voluptatem facere! Quia nisi totam dicta ex sint vitae nam!</p>
      </div>
    </div>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: "Blog",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "I'm a product designer that enjoys both designing and coding for the web. Not all projects and teams are the same and I believe it's important to adapt my toolset to the project I'm currently working on and the specific needs of that team."
      }
    ]
  }
};
</script>
<style lang="scss" scoped>
a {
  color: #081014;
}
.blog-tile {
  background-color: #ffffff;
  background-repeat: no-repeat;
  /* min-height: 300px; */
  border-radius: 0.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  transition: transform 500ms ease-in-out,
    /* background-size 1500ms 200ms cubic-bezier(0.17, 0.67, 0.62, 0.99), */
      background-position 1500ms 200ms cubic-bezier(0.17, 0.67, 0.62, 0.99);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
  background-size: 100%;
  padding: 1.5rem 1rem;
  margin: 3rem 0;
  &:hover {
    transform: scale(0.98);
    /* background-size: 100%; */
    background-position: 50% 55%;
    .project-details {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .blog-details {
    transition: opacity 1.5s ease-in-out,
      transform 1.5s cubic-bezier(0.17, 0.67, 0.62, 0.99);
    opacity: 0;
    transform: translateY(3px);
    margin: 0 0 0 auto;
  }
}
</style>
