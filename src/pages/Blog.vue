<template>
  <layout>
    <div class="container">
      <div v-for="post in $page.posts.edges" :key="post.node.id">
        <g-link :to="post.node.path" class="blog-tile">
          <div>
            <h2>{{post.node.title}}</h2>
            <p class="text-small is-marginless">Published: {{post.node.date}}</p>
            <p class>{{post.node.excerpt}}</p>
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
      </div>
      <Pager
        :info="$page.posts.pageInfo"
        ,
        :linkClass="pagination"
        class="pagination"
        nextLabel="Next"
        prevLabel="Previous"
      />
    </div>
  </layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        path
        excerpt
        date(format: "YYYY-MM-DD")
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

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
  },
  components: {
    Pager
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
  padding: 1.6rem 1rem 1rem;
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
  display: flex;
  justify-content: flex-end;
  a {
    color: var(--secondary-brand);
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.33, 0.66, 0.66, 1);
    padding: 4px 8px;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
    &.active--exact {
      background-color: var(--secondary-brand);
      color: var(--text-rev);
      &:hover {
        color: var(--text-rev);
      }
    }
    &:hover {
      color: var(--primary-brand);
    }
  }
}
</style>
