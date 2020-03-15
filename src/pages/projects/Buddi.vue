<template>
  <layout>
    <div class="container">
      <h1 class="margin-bottom-sm">Buddi</h1>
      <span class="separator"></span>
      <div class="columns-2">
        <div>
          <p class="text-small uppercase is-bold">Project Summary</p>
          <p>I'm a founding member of the Buddi team. Over the past year I've been leading the design and development of the platform with a super talented remote team. In addition to my primary duties I've also been part of building the team, helping clients get started, demoing the application, working trade-shows among what seems like a million others things you do to push a startup forward.</p>
        </div>
        <div>
          <p class="text-small uppercase is-bold">My Role</p>
          <p>Product Design, Product Management, Front-End Development</p>

          <p class="text-small uppercase is-bold">The Team</p>
          <p>CEO (Sales), 1 Remote Developer, 1 Remote DevOps Engineer</p>

          <p class="text-small uppercase is-bold">Tools I Used</p>
          <p>Sketch, InvisionApp, FramerX, VS Code, HTML, CSS, Javascript, VueJS, Laravel, GitHub</p>
        </div>
      </div>

      <div class="intro-grid margin-top-lg margin-bottom-lg">
        <div class="item-1 background-kiaro-1 rounded-corners"></div>
        <div class="item-2 background-gradient vertical-center rounded-corners">
          <g-image
            src="../../assets/images/projects/buddi/vector-buddi.svg"
            alt
            class="fluid rounded-corners"
          ></g-image>
        </div>
        <div class="item-3 background-kiaro-2 rounded-corners"></div>
        <div class="item-4 background-city rounded-corners"></div>
      </div>
      <p>The Buddi platform is made up of a few different components. The first is the retail application, this is a tablet app that is used by customers inside of legal cannabis stores. The second is the retail admin area which is used by the staff and managers to control their retail application. The last is our producer platform, this is where producers can update their content, run advertising and review analytic dashboards. In this portfolio entry, I'll primarily be talking about the retail application.</p>

      <p>Our main retail application is a VueJs Progressive Web App. This provided us the flexibility of working with web technologies but also being able to run the application as a full-screen application on Apple and Android devices. We've also kept it as a separate static site which connects to the backend via API calls, this makes updating the front-end extremely quick and easy.</p>

      <!-- <div class="video-wrapper video-tv">
        <video ref="video" class="video" autoplay loop muted playsinline>
          <source src="@/assets/images/projects/buddi/video.mp4" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
        </video>
      </div>-->

      <div class="columns-2 margin-top-lg margin-bottom-lg">
        <div class="vertical-center">
          <h3>Buddi for Retail is a static application that connects to an API. This setup provides us a lot of flexibility in terms of making rapid UI updates.</h3>
        </div>
        <g-image
          src="../../assets/images/projects/buddi/ipad-1.png"
          class="fluid rounded-corners"
          alt
        ></g-image>
      </div>

      <div class="columns-2">
        <g-image
          src="../../assets/images/projects/buddi/user-research-1.jpg"
          class="fluid rounded-corners"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/buddi/user-research-2.jpg"
          class="fluid rounded-corners"
          alt
        ></g-image>
      </div>

      <p
        class="margin-bottom-lg margin-top-md"
      >My process throughout the creation of our product is to build features based on feedback but only build the MVP of that feature. Once it's released we then start collecting feedback from retail clients, customer testing sessions and analytical tools such as HotJar and Google Analytics. Then I can decide how I need to move forward in prioritizing the enhancements and working with the development team to get them ready.</p>

      <div class="columns-3 margin-top-lg" style="padding: 3rem 0;">
        <g-image
          src="../../assets/images/projects/buddi/tablet-1.png"
          class="fluid rounded-corners"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/buddi/tablet-2.png"
          class="fluid rounded-corners scale"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/buddi/tablet-3.png"
          class="fluid rounded-corners"
          alt
        ></g-image>
      </div>

      <p class="margin-bottom-md margin-top-lg">
        <span class="is-bold">Ease of use for retailers and their customers:</span> The retail application had to be easy to use and easy to set up. Since our clients were all over Canada it had to be for us to provide setup instructions remotely. We also needed to make sure that we could integrate with the leading point of sale systems within the cannabis industry. These integrations allowed us to pull their inventory (clients don't have to worry about managing their menu) and display the correct products based on their current stock. It also allowed us to send customer orders to the POS systems so that a staff member could easily full-fill the order.
      </p>
      <p class="margin-bottom-md">
        <span class="is-bold">Managing accounts and adding new ones:</span> Since we're just a small team and as of this writing it's only 3 of us plus 1 remote developer we needed it to be a simple process to add/setup new retailer accounts. I made sure our onboarding could be done by anyone and would only take a few minutes to set up an account. Currently when we onboard new clients we can have accounts set up in less than 15 minutes even with full integration to their point of sale system.
      </p>

      <div class="columns-2 margin-top-lg margin-bottom-lg">
        <div class="vertical-center">
          <h3>Our application is being used all across Canada in legal recreational cannabis stores.</h3>
        </div>
        <g-image
          src="../../assets/images/projects/buddi/media.png"
          class="fluid rounded-corners shadow-lvl-3"
          alt
        ></g-image>
      </div>

      <div class="social-grid margin-bottom-lg">
        <g-image
          src="../../assets/images/projects/buddi/insta-1.png"
          class="fluid rounded-corners item-1 shadow-lvl-3"
          alt
        ></g-image>
        <g-image
          src="../../assets/images/projects/buddi/insta-2.png"
          class="fluid rounded-corners item-2 shadow-lvl-3"
          alt
        ></g-image>
      </div>

      <p class="text-center">This is just the beginning, there will be more to come.</p>

      <div class="margin-top-sm margin-bottom-sm">
        <h2>Up Next</h2>
      </div>

      <div class="columns-2">
        <project-tile
          title="ResponseTek Surveys"
          year="2016"
          description="A voice of customer program survey."
          class="rt-survey-bg"
          link="/projects/rt-surveys"
        ></project-tile>
        <project-tile
          title="Motto 20"
          year="2018"
          description="A mobile first cryptocurrency dashboard."
          class="motto-bg"
          link="/projects/motto"
        ></project-tile>
      </div>
    </div>
  </layout>
</template>
<script>
import ProjectTile from "~/components/Project-Tile.vue";

export default {
  metaInfo: {
    title: "Buddi Retail Cannabis Application UX/UI Product Design",
    meta: [
      { name: "author", content: "Jesse Johnston" },
      {
        key: "description",
        name: "description",
        content:
          "Product design for a retail cannabis application. The application is a PWA kiosk style app that allows customers to learn about products and make a purchase."
      }
    ]
  },
  components: {
    ProjectTile
  }
};
</script>
<style lang="scss" scoped>
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: 15rem 15rem 15rem 15rem;
  grid-template-areas:
    "main main"
    "main main"
    "logo store-1"
    "logo store-2";
  > .item-1 {
    grid-area: main;
  }
  > .item-2 {
    grid-area: logo;
  }
  > .item-3 {
    grid-area: store-1;
  }
  > .item-4 {
    grid-area: store-2;
  }
  > .background-kiaro-1 {
    background-image: url("../../assets/images/projects/buddi/Kiaro-Buddi-1.jpg");
    background-size: cover;
    background-position: 80% 60%;
  }
  > .background-kiaro-2 {
    background-image: url("../../assets/images/projects/buddi/Kiaro-Buddi-2.jpg");
    background-size: cover;
    background-position: 50% 50%;
  }
  > .background-city {
    background-image: url("../../assets/images/projects/buddi/city-image.jpg");
    background-size: cover;
  }
  > .background-gradient {
    background-image: linear-gradient(
      -45deg,
      #03001e 0%,
      #7303c0 50%,
      #ec38bc 100%
    );
  }
}

@media (min-width: 620px) {
  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    grid-template-rows: 15rem 15rem;
    grid-template-areas:
      "main main logo store-1"
      "main main logo store-2";
    > .item-1 {
      grid-area: main;
    }
    > .item-2 {
      grid-area: logo;
    }
    > .item-3 {
      grid-area: store-1;
    }
    > .item-4 {
      grid-area: store-2;
    }
  }
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
  .scale {
    transform: scale(1.5);
  }
}

.social-grid {
  display: block;
  position: relative;
  max-width: 100%;
  height: 250px;
  .item-1 {
    position: absolute;
    width: 55%;
    left: 0;
  }
  .item-2 {
    right: 0;
    position: absolute;
    width: 55%;
    top: 5rem;
  }
}

@media (min-width: 620px) {
  .social-grid {
    height: 500px;
  }
}
</style>
