<template>
  <layout>
    <div class="container">
      <g-link :to="link" class="blog-tile">
        <div>
          <h2>This is a title</h2>
          <p class="text-small is-marginless">December 25, 2020</p>
          <p
            class
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium, perspiciatis cupiditate corrupti debitis impedit! Aliquid vero numquam omnis nihil ut? Adipisci ullam ea quisquam nihil, doloribus repellendus aliquam vero?</p>
        </div>
        <p class="text-small uppercase project-details">
          Read More
          <img
            src="../assets/images/icons/arrow-right-blk.svg"
            alt
            width="10px"
            height="10px"
          />
        </p>
      </g-link>
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
</style>
