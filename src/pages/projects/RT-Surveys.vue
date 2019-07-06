<template>
  <layout>
    <div class="container">
      <h1 class="margin-bottom-sm">ResponseTek Surveys</h1>
              <span class="separator"></span>

      <div class="columns-2 margin-bottom-md">
        <div>
          <p class="text-small uppercase is-bold">Project Summary</p>
          <p>People get tired of filling surveys out for companies. There is no joy for a customer filling in responses to a survey. We needed to build a modern design that worked on all types of devices while still maintaining the integrity of the various question types.</p>
          <p>We also had to build a framework that could be used by a design centric fashion company but also a multinational telecommunications company. The design had to be versatile.</p>
        </div>
        <div>
          <p class="text-small uppercase is-bold">My Role</p>
          <p>Product Design, Front-End Design/Development</p>

          <p class="text-small uppercase is-bold">The Team</p>
          <p>Product Manager, 2 Senior Developers, 1 Intermediate Developer, 2 Junior Developers</p>

          <p class="text-small uppercase is-bold">Tools I Used</p>
          <p>Sketch, Invision, Atom, HTML, CSS, JavaScript</p>
        </div>
      </div>

      <g-image
        src="../../assets/images/projects/rt-surveys/image-1.png"
        class="fluid rounded-corners shadow-lvl-3"
        alt
      ></g-image>
      <p
        class="margin-bottom-md margin-top-md"
      >Generally the UX of a survey is pretty straight forward however when you’re competing for attention of users you need something that is fun to fill out, customizable and feature rich. Clients must be able to customize the survey look and feel to better match their brand but we need to maintain a balance of not letting them go to crazy so our code base stays maintainable.</p>

      <g-image
        src="../../assets/images/projects/rt-surveys/image-2.png"
        class="fluid rounded-corners shadow-lvl-3"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >Working with the development team across different products we had to plan how these survey upgrades would work into our administration platform. We didn’t want to be implementing the new survey design individually for clients we needed our tools to be updated as well to accommodate the new survey design process.</p>

      <g-image
        src="../../assets/images/projects/rt-surveys/image-3.png"
        class="fluid rounded-corners shadow-lvl-3"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >Working with a few select few clients to launch their new survey look helped us test our new solution and validate our assumptions.</p>

      <g-image
        src="../../assets/images/projects/rt-surveys/image-4.png"
        class="fluid rounded-corners shadow-lvl-3"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >Our surveys are responsive but we still had to make some major adjustments and plan how to accommodate various screen sizes. A question types integrity had to hold true regardless of the screen a user was viewing it on.</p>

      <g-image
        src="../../assets/images/projects/rt-surveys/image-5.png"
        class="fluid rounded-corners shadow-lvl-3"
        alt
      ></g-image>

      <div class="margin-top-sm margin-bottom-sm">
        <h2>Up Next</h2>
      </div>

      <div class="columns-2">
        <project-tile
          title="ResponseTek Dashboard"
          year="2016"
          description=" A voice of customer analytics dashboard."
          class="rt-dashboard-bg"
          link="/projects/rt-dashboard"
        ></project-tile>
        <project-tile
          title="Buddi"
          year="2019"
          description="An express shopping and product information kiosk."
          class="buddi-bg-wide"
          link="/projects/buddi"
        ></project-tile>
      </div>
    </div>
  </layout>
</template>
<script>
import ProjectTile from "~/components/Project-Tile.vue";

export default {
  metaInfo: {
    title: "ResponseTek Voice of Customer Survey UX/UI Design",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "A UX/UI design case study for the ResponseTek platforms' customer surveys."
      }
    ]
  },
  components: {
    ProjectTile
  }
};
</script>
<style lang="scss" scoped>
</style>
