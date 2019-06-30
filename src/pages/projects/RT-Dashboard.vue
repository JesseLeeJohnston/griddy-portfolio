<template>
  <layout>
    <div class="container">
      <h1 class="margin-bottom-sm">ResponseTek Dashboard</h1>
      <div class="columns-2 margin-bottom-md">
        <div>
          <h2>Project Summary</h2>
          <p>The ResponseTek dashboard needed to be redesigned. Some key aspects that I needed to focus on improving were the way filtering works and the visual look of the data we were presenting. We also had massive amounts of data that we needed to find ways of presenting to our users.</p>
        </div>
        <div>
          <h2>My Role</h2>
          <p>Product Design, User Research, Persona Development</p>

          <h2>The Team</h2>
          <p>Product Manager, 2 Senior Developers, 1 Intermediate Developer, 2 Junior Developers</p>

          <h2>Tools I Used</h2>
          <p>Sketch, Invision, Atom, Flinto, HTML, CSS</p>
        </div>
      </div>

      <g-image
        src="../../assets/images/projects/rt-dashboard/dash-1.png"
        class="fluid rounded-corners margin-bottom-md"
        alt
      ></g-image>
      <p>This project had many different stakeholders so it was important to first learn from interviews with clients and client service staff. I wanted to find out what was working and not working for them, what kind of reports they were manually creating and how they were filtering through their data.</p>
      <p
        class="margin-bottom-md"
      >I really wanted to help our dev team feel more connected to our customers and dashboard users. I began to build personas based off of real conversations and clients to help them understand just who they were building these products for.</p>

      <g-image
        src="../../assets/images/projects/rt-dashboard/dash-2.png"
        class="fluid rounded-corners"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >Prototyping was a major component to what I did with this project. I had created some early prototypes with Invision that I let clients try out. The initial feedback I received really helped me plan how this project would unfold.</p>

      <g-image
        src="../../assets/images/projects/rt-dashboard/dash-3.png"
        class="fluid rounded-corners"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >ResponseTek has a tremendous amount of data coming into their system for all of their clients. When speaking with our clients it was clear there was a need for an array of different kinds of reports. Our new framework and tools allowed us to build reports at a much faster rate for them.</p>

      <g-image
        src="../../assets/images/projects/rt-dashboard/dash-4.png"
        class="fluid rounded-corners"
        alt
      ></g-image>

      <p
        class="margin-bottom-md margin-top-md"
      >A lot of the work I did for ResponseTek involved custom data visualizations. This example is showing a heat map that allows clients to see at a glance when their best send times occur. One thing to note about these data visualizations is that I had to make sure to accommodate users that are colourblind.</p>

      <div class="margin-top-sm margin-bottom-sm">
        <h2>Up Next</h2>
      </div>

      <div class="columns-2">
        <project-tile
          title="Cully Movie Bot"
          year="2018"
          description=" A Chatbot Channel to help Movie Theatres Sell Tickets."
          class="cully-bg"
          link="/projects/cully"
        ></project-tile>
        <project-tile
          title="ResponseTek Surveys"
          year="2016"
          description="A voice of customer program survey."
          class="rt-survey-bg"
          link="/projects/rt-surveys"
        ></project-tile>
      </div>
    </div>
  </layout>
</template>
<script>
import ProjectTile from "~/components/Project-Tile.vue";

export default {
  metaInfo: {
    title: "ResponseTek Data Vizualization UX/UI Design",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "A UX/UI design case study featuring dashboard design and data visualizations."
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
