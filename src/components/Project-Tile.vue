<template>
  <g-link :to="link" class="project-tile" :class="background">
    <div>
      <h2>{{ title }}</h2>
      <p class="text-small is-marginless">
        <span class="text-small is-bold">{{ year }} //</span>
        {{ description }}
      </p>
    </div>
    <p class="text-small uppercase project-details">
      Project Details
      <img
        src="../assets/images/icons/arrow-right.svg"
        alt
        width="10px"
        height="10px"
      />
    </p>
  </g-link>
</template>
<script>
export default {
  props: ["title", "year", "description", "background", "link"]
};
</script>
<style lang="scss" scoped>
.project-tile {
  background-color: #081014;
  background-repeat: no-repeat;
  min-height: 300px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 500ms ease-in-out,
    /* background-size 1500ms 200ms cubic-bezier(0.17, 0.67, 0.62, 0.99), */
      background-position 1500ms 200ms cubic-bezier(0.17, 0.67, 0.62, 0.99);
  box-shadow: 0 30px 30px 0 rgba(0, 0, 0, 0.3);
  background-size: 100%;
  padding: 1rem;
  color: var(--text-rev);
  &:hover {
    transform: scale(0.98);
    /* background-size: 100%; */
    background-position: 50% 55%;
    .project-details {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .project-details {
    transition: opacity 1.5s ease-in-out,
      transform 1.5s cubic-bezier(0.17, 0.67, 0.62, 0.99);
    opacity: 0;
    transform: translateY(3px);
    margin: 0 0 0 auto;
  }
}
.cully-bg {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/cully.jpg");
}
.buddi-bg-wide {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/buddi.jpg");
  background-size: cover;
  &:hover {
    background-size: cover;
  }
}
.buddi-bg {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/buddi-1x1.jpg");
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: box-shadow 500ms;
  background-size: cover;
}
.buddi-bg:hover {
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
}
.rt-dashboard-bg {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/rt-dashboard.jpg");
}
.rt-survey-bg {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/rt-survey.jpg");
}

.motto-bg {
  background-image: linear-gradient(
      137deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url("../assets/images/main-tiles/motto.jpg");
}
</style>
