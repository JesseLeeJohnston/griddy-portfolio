<template>
  <layout>
    <div class="container">
      <h1 class="margin-bottom-sm">Motto</h1>
              <span class="separator"></span>

      <div class="columns-2">
        <div>
          <p class="text-small uppercase is-bold">Project Summary</p>
          <p>The Motto project is another type of cryptocurrency exchange that I had the opportunity to design & develop a functional prototype for. While working with the Cully team we were given the task of working on this new exchange platform and we had to have a functional prototype within 2 weeks.</p>
        </div>
        <div>
          <p class="text-small uppercase is-bold">My Role</p>
          <p>Project Design, Front-End Design, Product Management</p>

          <p class="text-small uppercase is-bold">The Team</p>
          <p>1 Senior Developer, 1 Intermediate Developer</p>

          <p class="text-small uppercase is-bold">Tools I Used</p>
          <p>Sketch (and Sketch prototyping), GitHub, VueJs, VS Code</p>
        </div>
      </div>

      <div class="columns-2 margin-bottom-lg margin-top-lg background-splash">
        <div style="display: flex; flex-direction: column; justify-content: center;">
          <g-image
            src="../../assets/images/projects/motto/motto.svg"
            class="fluid rounded-corners"
            alt
            style="max-width: 20rem; margin: 0 auto; padding: 2rem 0;"
          ></g-image>
        </div>
        <g-image
          src="../../assets/images/projects/motto/phone-1.png"
          class="fluid rounded-corners"
          alt
          style="max-width: 20rem; margin: 0 auto; position: relative; top: 5rem;"
        ></g-image>
      </div>

      <div class="intro-paragraph">
        <p>My primary design focus throughout this project was to make a mobile friendly trading platform that felt familiar. Most crypto trading platforms really appeal to the end user that's very knowledgeable about cryptocurrencies and trading, I wanted to make this a bit more accessible and appeal to an audience that might be a bit more informed about stock market trading. To do this I spent lots of time reviewing and researching various stock trading platforms.</p>
      </div>

      <div class="columns-2">
        <g-image
          src="../../assets/images/projects/motto/logo-samples-1.jpg"
          class="fluid rounded-corners"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/motto/logo-samples-2.jpg"
          class="fluid rounded-corners"
          alt
        ></g-image>
      </div>

      <p
        class="margin-bottom-md margin-top-md"
      >By no means am I a logo designer and thank you to Google Fonts, you made it easier on me. Since this project was built from just a concept the founders had I built the design framework from the ground up, including the logo.</p>

      <div class="motto-wf-background">
        <h3>Prototyping with Sketch's native feature.</h3>
      </div>

      <p
        class="margin-top-md"
      >At this time Sketch had just released their prototyping feature. This gave me the chance to test it out and demo the initial prototypes to the team. Normally I use InvisionApp for prototyping wireframes but I was very impressed with the native Sketch Prototyping.</p>

      <p
        class="margin-bottom-md"
      >I wasn't working with clear requirements when designing the platform, I had to work with the founders and figure out the features they wanted from a high level, then work on the details throughout my prototyping process.</p>

      <div class="columns-3">
        <g-image
          src="../../assets/images/projects/motto/wireframe-1.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/motto/wireframe-2.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/motto/wireframe-3.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
      </div>

      <p
        class="margin-bottom-md margin-top-md"
      >Once we had established a direction and nailed down all of the functionality we were going to include in our prototype, it was time to add some paint!</p>

      <div class="columns-2">
        <div class="vertical-center">
          <h2>I created a few different style tile options and designed what the main UI components would look like.</h2>
        </div>
        <g-image
          src="../../assets/images/projects/motto/style-tiles.png"
          class="fluid rounded-corners"
          alt
        ></g-image>
      </div>

      <p
        class="margin-bottom-md margin-top-md"
      >I decided to use style tiles instead of creating a full design system as we only had two weeks to complete the project and I wasn't sure how much time I would be spending in development. Given our team size, there also wasn't too much of a risk in someone going off the rails and adding in a feature without following our design system.</p>

      <div class="columns-3 staggered-images">
        <g-image
          src="../../assets/images/projects/motto/trade-1.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/motto/trade-2.png"
          class="fluid rounded-corners second shadow-lvl-3"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/motto/trade-3.png"
          class="fluid rounded-corners third shadow-lvl-3"
          alt
        ></g-image>
      </div>

      <div class="margin-bottom-md margin-top-md"></div>

      <div class="columns-3">
        <div class="column-span-2">
          <g-image
            src="../../assets/images/projects/motto/desktop-2.png"
            class="fluid rounded-corners shadow-lvl-3"
            alt
          ></g-image>
        </div>
        <g-image
          src="../../assets/images/projects/motto/mobile-1.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
      </div>

      <p
        class="margin-bottom-md margin-top-md"
      >Overall I'm happy with how this project turned out and I'm proud of what we accomplished in a short amount of time. In addition to that this project introduced me to the wonderful world of VueJs.</p>

      <div class="margin-top-sm margin-bottom-sm">
        <h2>Up Next</h2>
      </div>

      <div class="columns-2">
        <project-tile
          title="Buddi"
          year="2019"
          description="An express shopping and product information kiosk."
          class="buddi-bg-wide"
          link="/projects/buddi"
        ></project-tile>
        <project-tile
          title="Cully Movie Bot"
          year="2018"
          description=" A Chatbot Channel to help Movie Theatres Sell Tickets."
          class="cully-bg"
          link="/projects/cully"
        ></project-tile>
      </div>
    </div>
  </layout>
</template>
<script>
import ProjectTile from "~/components/Project-Tile.vue";

export default {
  metaInfo: {
    title: "Motto Cryptocurrency UX/UI design",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "Product design case study for a cryptocurrency dashboard called Motto Wealth."
      }
    ]
  },
  components: {
    ProjectTile
  }
};
</script>
<style lang="scss" scoped>
.background-splash {
  background-size: cover;
  background-image: url("../../assets/images/projects/motto/background-splash.jpg");
  max-height: 600px;
  border-radius: 0.5rem;
}

.intro-paragraph {
  padding-top: 15rem;
}

@media (min-width: 620px) {
  .intro-paragraph {
    padding-top: 3rem;
  }
}

.motto-wf-background {
  background-size: cover;
  height: 500px;
  background-image: url("../../assets/images/projects/motto/wireframes.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem;
  h3 {
    max-width: 50rem;
    color: var(--text-rev);
  }
}

@media (min-width: 620px) {
  .staggered-images {
    > .second {
      margin-top: 4rem;
    }
    > .third {
      margin-top: 8rem;
    }
  }
}
</style>
