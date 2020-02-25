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
        <p class="text-small uppercase read-blog">
          Read More
          <img
            src="../assets/images/icons/arrow-right-blk.svg"
            alt
            width="10px"
            height="10px"
          />
        </p>
      </g-link>

      <g-link :to="link" class="blog-tile">
        <div>
          <h2>This is a title</h2>
          <p class="text-small is-marginless">December 25, 2020</p>
          <p
            class
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium, perspiciatis cupiditate corrupti debitis impedit! Aliquid vero numquam omnis nihil ut? Adipisci ullam ea quisquam nihil, doloribus repellendus aliquam vero?</p>
        </div>
        <p class="text-small uppercase read-blog">
          Read More
          <img
            src="../assets/images/icons/arrow-right-blk.svg"
            alt
            width="10px"
            height="10px"
          />
        </p>
      </g-link>

      <g-link :to="link" class="blog-tile">
        <div>
          <h2>This is a title</h2>
          <p class="text-small is-marginless">December 25, 2020</p>
          <p
            class
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium, perspiciatis cupiditate corrupti debitis impedit! Aliquid vero numquam omnis nihil ut? Adipisci ullam ea quisquam nihil, doloribus repellendus aliquam vero?</p>
        </div>
        <p class="text-small uppercase read-blog">
          Read More
          <img
            src="../assets/images/icons/arrow-right-blk.svg"
            alt
            width="10px"
            height="10px"
          />
        </p>
      </g-link>

      <div class="pagination">
        <div>
          <a href="#" class="link">Previous</a>
        </div>

        <div style="display: flex; justify-content: space-between;">
          <a href="#" class="link">1</a>
          <a href="#" class="link">2</a>
          <a href="#" class="link">3</a>
          <a href="#" class="link">4</a>
          <a href="#" class="link active">5</a>
        </div>

        <div style="text-align: right;">
          <a href="#" class="link">Next</a>
        </div>
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
.blog-tile {
  background-color: var(--background-color);
  background-repeat: no-repeat;
  color: var(--primary-brand);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 500ms ease-in-out,
    background-position 1500ms 200ms cubic-bezier(0.17, 0.67, 0.62, 0.99);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  background-size: 100%;
  padding: 1rem;
  margin-bottom: 3.5rem;
  &:hover {
    transform: scale(0.98);
    /* background-size: 100%; */
    background-position: 50% 55%;
    .read-blog {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .read-blog {
    transition: opacity 1.5s ease-in-out,
      transform 1.5s cubic-bezier(0.17, 0.67, 0.62, 0.99);
    opacity: 0;
    transform: translateY(3px);
    margin: 0 0 0 auto;
  }
}
.pagination {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
