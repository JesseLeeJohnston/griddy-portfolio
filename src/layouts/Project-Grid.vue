<template>
  <div class="project-grid">
    <project-tile
      title="Buddi"
      year="2019"
      description="An express shopping and product information kiosk."
      class="buddi-bg-wide column-span-2"
      link="/projects/buddi"
    ></project-tile>
    <project-tile
      title="Motto 20"
      year="2018"
      description="A mobile first cryptocurrency dashboard."
      class="motto-bg"
      link="/projects/motto"
    ></project-tile>
    <project-tile
      title="Cully Movie Bot"
      year="2018"
      description=" A Chatbot Channel to help Movie Theatres Sell Tickets."
      class="cully-bg"
      link="/projects/cully"
    ></project-tile>
    <project-tile
      title="ResponseTek Dashboard"
      year="2016"
      description=" A voice of customer analytics dashboard."
      class="rt-dashboard-bg"
      link="/projects/rt-dashboard"
    ></project-tile>
    <project-tile
      title="ResponseTek Surveys"
      year="2016"
      description="A voice of customer program survey."
      class="rt-survey-bg"
      link="/projects/rt-surveys"
    ></project-tile>
  </div>
</template>
<script>
import ProjectTile from "~/components/Project-Tile.vue";

export default {
  components: {
    ProjectTile
  }
};
</script>
<style lang="scss" scoped>
.project-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
}
@media (min-width: 620px) {
  .project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .column-span-2 {
      grid-column: 1 / 3;
    }
  }
}
</style>
