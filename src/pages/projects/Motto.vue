<template>
  <layout>
    <div class="container">
      <h2 class="margin-bottom-sm">Motto</h2>
      <div class="columns-2">
        <div>
          <h4>Project Summary</h4>
          <p>The Motto project is another type of crypto currency exchange that I had the opportunity to design & develop a functional prototype for. While working with the Cully team we were given the task of working on this new exchange platform and we had to have a functional prototype within 2 weeks.</p>
          <p>From scratch we had to create a name, logo and product.</p>
        </div>
        <div>
          <h4>My Role</h4>
          <p>Project Design, Front-End Design, Product Management</p>

          <h4>The Team</h4>
          <p>1 Senior Developer, 1 Intermediate Developer</p>

          <h4>Tools I Used</h4>
          <p>Sketch (and Sketch prototyping), GitHub, VueJs, VS Code</p>
        </div>
      </div>

      <div class="columns-2 margin-bottom-lg margin-top-lg background-splash">
          <div style="display: flex; flex-direction: column; justify-content: center;">
              <g-image src="../../assets/images/projects/motto/motto.svg" class="fluid rounded-corners" alt style="max-width: 20rem; margin: 0 auto; padding: 2rem 0;"></g-image>
          </div>
        <g-image src="../../assets/images/projects/motto/phone-1.png" class="fluid rounded-corners" alt style="max-width: 20rem; margin: 0 auto; position: relative; top: 5rem;"></g-image>
        
      </div>

      <div class="intro-paragraph">
        <p class="lead">
          The end product was a mobile first trading platform. 
        </p>
      </div>

      <div class="columns-2">
          <g-image src="../../assets/images/projects/motto/logo-samples-1.jpg" class="fluid rounded-corners" alt=""></g-image>
          <g-image src="../../assets/images/projects/motto/logo-samples-2.jpg" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md">Normally I don't work on logo designs. I'm either working with an established company or I have the luxury of having a talented graphic designer on the team that can handle that. Since I didn't have any of those things I handled the logo myself. Thank you Google Fonts, you made it easy on me!</p>

      <div class="motto-wf-background">
        <h3>At this time Sketch had just released their prototyping feature. This gave me the chance to test it out and demo the initial prototypes to the team.</h3>
      </div>

      <p class="lead margin-bottom-md margin-top-md">
        I wanted to paint a clear picture of the functionality involved in the application. I had to figure out exactly how a user would perform trades on the platform. I took some inspiration from existing stock trading platforms. 
      </p>

      <div class="columns-3">
        <g-image src="../../assets/images/projects/motto/wireframe-1.png" class="fluid rounded-corners" alt=""></g-image>
        <g-image src="../../assets/images/projects/motto/wireframe-2.png" class="fluid rounded-corners" alt=""></g-image>
        <g-image src="../../assets/images/projects/motto/wireframe-3.png" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi qui consequuntur, rem et repellat exercitationem earum rerum voluptatum architecto aliquid sit id eos maxime tempore magnam voluptate nostrum dignissimos illo?
      </p>

      <div class="columns-2">
        <div class="vertical-center">
          <h2> I created a few different style tile options and designed what the main UI components would look like. </h2>
        </div>
        <g-image src="../../assets/images/projects/motto/style-tiles.png" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md">
I decided to use style tiles instead of creating a full design system as we only had two weeks to complete the project and I wasn't sure how much time I would be spending in development. Given our team size there also wasn't too much of a risk in someone going off the rails and adding in a feature without following our design system.       </p>

      <div class="columns-3 staggered-images">
        <g-image src="../../assets/images/projects/motto/trade-1.png" class="fluid rounded-corners" alt=""></g-image>
        <g-image src="../../assets/images/projects/motto/trade-2.png" class="fluid rounded-corners second" alt=""></g-image>
        <g-image src="../../assets/images/projects/motto/trade-3.png" class="fluid rounded-corners third" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo maxime architecto eum natus ipsa magni, veritatis voluptatum totam eveniet rerum laborum, ipsum dolores asperiores, nostrum enim ipsam suscipit consequuntur. </p>

      <div class="columns-3">
        <div class="column-span-2">
            <g-image src="../../assets/images/projects/motto/desktop-2.png" class="fluid rounded-corners" alt=""></g-image>
        </div>
        <g-image src="../../assets/images/projects/motto/mobile-1.png" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md">
Overall this project was a success, we completed the prototype within our 2 week deadline. The Cully company has since moved forward with this project and begun raising money to get this off the ground. I left shortly after completing this and started working at Buddi full-time.       </p>

    </div>


  </layout>
</template>
<script>
export default {};
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
    }
}

@media (min-width: 620px) {
  .staggered-images {
    > .second { margin-top: 4rem; }
    > .third { margin-top: 8rem; }
  }
}
</style>
