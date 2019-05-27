<template>
  <layout>
    <div class="container">
      <h2 class="margin-bottom-sm">Buddi</h2>
      <div class="columns-2">
        <div>
          <h4>Project Summary</h4>
          <p>As a designer, I’ve always felt that people would look down on me if I had cannabis product in my portfolio. It’s been an industry I’ve always seen potential in but until recently it's always suffered from poor design. In April of 2017, I signed up to the local Vancouver Protohack event. I met Ryan at the event and learned about his project Buddi we decided to work together and actually wound up winning the event.</p>
          <p>As of right now our product is being tested by a select few dispensaries in Vancouver and many different cannabis producers in British Columbia and Alberta.</p>
        </div>
        <div>
          <h4>My Role</h4>
          <p>Product Design, Product Management, Front-End Development</p>

          <h4>The Team</h4>
          <p>CEO, 1 Senior Developer</p>

          <h4>Tools I Used</h4>
          <p>Sketch, InvisionApp, FramerX, VS Code, HTML, CSS, Javascript, VueJS, Laravel, GitHub</p>
        </div>
      </div>

        <div class="intro-grid margin-top-lg margin-bottom-lg">
            <div class="item-1 background-city rounded-corners">
            </div>
            <div class="item-2 background-gradient vertical-center rounded-corners">
                <g-image src="../../assets/images/projects/buddi/vector-buddi.svg" alt="" class="fluid rounded-corners"></g-image>
            </div>
            <div class="item-3 background-nls rounded-corners">
            </div>
            <div class="item-4 background-plantlife rounded-corners">
            </div>
        </div>


        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ipsam non impedit! Ad cumque, eligendi, itaque, dolorem odio rerum officiis quis tempora ducimus et ut eveniet dolor suscipit. Itaque, asperiores.
        </p>



      <div class="columns-2 margin-top-lg margin-bottom-lg">
        <div class="vertical-center">
          <h3> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium voluptatibus iure modi quas quaerat animi, perferendis.</h3>
        </div>
        <g-image src="../../assets/images/projects/buddi/ipad-1.png" class="fluid rounded-corners" alt=""></g-image>
      </div>



      <div class="columns-2">
          <g-image src="../../assets/images/projects/buddi/user-research-1.jpg" class="fluid rounded-corners" alt=""></g-image>
          <g-image src="../../assets/images/projects/buddi/user-research-2.jpg" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque illo fugiat, quod maxime quaerat pariatur modi harum iusto minus laboriosam asperiores doloribus fuga veritatis quasi iste architecto perferendis! Optio!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima eligendi quibusdam, beatae nihil deleniti praesentium dolor, incidunt laudantium voluptas dolorem earum. Reprehenderit quod sed iure architecto. Iusto, architecto quibusdam.</p>

   
     <div class="columns-3 margin-top-lg">
        <g-image src="../../assets/images/projects/buddi/tablet-1.png" class="fluid rounded-corners" alt=""></g-image>
        <g-image src="../../assets/images/projects/buddi/tablet-2.png" class="fluid rounded-corners scale" alt=""></g-image>
        <g-image src="../../assets/images/projects/buddi/tablet-3.png" class="fluid rounded-corners" alt=""></g-image>
      </div>

      <p class="lead margin-bottom-md margin-top-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, illo quibusdam. Voluptatem molestiae repudiandae delectus id voluptatibus, doloribus rem tempora non corporis eligendi, sed placeat ratione molestias aliquid quidem beatae.
      </p>

       <div class="columns-2 margin-top-lg margin-bottom-lg">
        <div class="vertical-center">
          <h3> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic accusantium voluptatibus iure modi quas quaerat animi, perferendis.</h3>
        </div>
        <g-image src="../../assets/images/projects/buddi/media.png" class="fluid rounded-corners" alt=""></g-image>
      </div>

        <div class="social-grid">
            <g-image src="../../assets/images/projects/buddi/insta-1.png" class="fluid rounded-corners item-1" alt=""></g-image>
            <g-image src="../../assets/images/projects/buddi/insta-2.png" class="fluid rounded-corners item-2" alt=""></g-image>
        </div>



      <p class="lead margin-bottom-md margin-top-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi qui consequuntur, rem et repellat exercitationem earum rerum voluptatum architecto aliquid sit id eos maxime tempore magnam voluptate nostrum dignissimos illo?
      </p>


        <h2 class="text-center">This is just the beginning, there will be more to come.</h2>

 



    </div>


  </layout>
</template>
<script>
export default {
metaInfo: {
    title: 'Hello, world!'
  }
};
</script>
<style lang="scss" scoped>

    .intro-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2rem;
        grid-template-rows: 15rem 15rem;
        grid-template-areas:
        "main main logo store-1"
        "main main logo store-2";
        >.item-1 {
            grid-area: main;
        }
        >.item-2 {
            grid-area: logo;
        }
        >.item-3 {
            grid-area: store-1;
        }
        >.item-4 {
            grid-area: store-2;
        }
        >.background-city {
            background-image: url("../../assets/images/projects/buddi/city-image.jpg");
            background-size: cover;
        }
        >.background-nls {
            background-image: url("../../assets/images/projects/buddi/nls-store.jpg");
            background-size: cover;
        }
        >.background-plantlife {
            background-image: url("../../assets/images/projects/buddi/plantlife-store.jpg");
            background-size: cover;
        }
        >.background-gradient {
            background-image: linear-gradient(-45deg, #03001E 0%, #7303C0 50%, #EC38BC 100%);
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
    > .second { margin-top: 4rem; }
    > .third { margin-top: 8rem; }
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
