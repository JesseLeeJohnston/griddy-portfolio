<template>
  <layout>
    <div class="container">
      <div class="text-center">
        <g-image src="@/assets/images/Jesse-Headshot.jpg" class="fluid profile"></g-image>
        <h2>Hi, I'm Jesse!</h2>
      </div>
      <p>I'm a product designer that enjoys both designing and coding for the web. Not all projects and teams are the same and I believe it's important to adapt my toolset to the project I'm currently working on and the specific needs of that team.</p>
      <p>In my current practice, I work in sprints using lean methodology, I'm constantly listening to our users' needs and using that feedback to create informed iterations on the next version of our product.</p>
      <p>In my spare time, I really enjoy learning new technologies and tools, binge watching awesome TV shows and staying active.</p>

      <div class="margin-top-md">
        <h2 class="text-center">My Experience</h2>
        <ul class="timeline">
          <!-- Item 1 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <h3 class="flag">Buddi</h3>
              </div>
              <div class="time-wrapper">2018 - Present</div>
              <div class="desc text-muted text-small">Co-founder VP of Product & Design</div>
            </div>
          </li>
          <!-- Item 2 -->
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <h3 class="flag">Cully</h3>
              </div>
              <div class="time-wrapper">2017 - 2018</div>
              <div class="desc text-muted text-small">Product Design Lead</div>
            </div>
          </li>
          <!-- Item 3 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <h3 class="flag">ResponseTek</h3>
              </div>
              <div class="time-wrapper">2014 - 2017</div>
              <div class="desc text-muted text-small">User Experience Designer</div>
            </div>
          </li>
          <!-- Item 3 -->
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <h3 class="flag">Brandspank</h3>
              </div>
              <div class="time-wrapper">2009 - 2014</div>
              <div class="desc text-muted text-small">Digital Strategy</div>
            </div>
          </li>
          <!-- Item 3 -->
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <h3 class="flag">Seneca College</h3>
              </div>
              <div class="time-wrapper">2007 - 2009</div>
              <div class="desc text-muted text-small">Creative Advertising Diploma</div>
            </div>
          </li>
        </ul>
        <!-- TODO: Add resume file -->
        <div class="text-center">
          <g-link
            href="https://drive.google.com/open?id=1UDoEpMk3lIo8iwOOyxvxBX7llBxy4x8U"
            target="_blank"
            class="button primary"
            download
          >
            Download My Resume
            <i
              data-feather="download-cloud"
              stroke-width="1"
              width="16px"
              height="16px"
            ></i>
          </g-link>
        </div>
      </div>
    </div>
  </layout>
</template>
<script>
export default {
  metaInfo: {
    title: "About Jesse",
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
.profile {
  max-width: 12rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-3);
}
.timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}
.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: " ";
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: #1e3744;
  background: linear-gradient(
    to bottom,
    rgba(80, 80, 80, 0) 0%,
    #1e3744 8%,
    #101f27 92%,
    rgba(80, 80, 80, 0) 100%
  );
  z-index: 5;
}
.timeline li {
  padding: 2rem 0;
}
.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}
.direction-r {
  position: relative;
  width: 300px;
  float: right;
}
.flag-wrapper {
  position: relative;
  display: inline-block;
  text-align: center;
}
.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 50%;
  right: -40px;
  content: " ";
  display: block;
  width: 12px;
  height: 12px;
  margin-top: -10px;
  background: #fff;
  border-radius: 10px;
  border: 4px solid #208fc6;
  z-index: 10;
}

.direction-r .flag:before {
  left: -40px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-width: 8px;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-width: 8px;
  pointer-events: none;
}
.time-wrapper {
  margin: 0.5rem 0rem;
  line-height: 1rem;
  color: #208fc6;
}
.desc {
  margin: 1rem 0;
}

.direction-r .desc {
  margin: 1rem 0;
}

/* ================ Timeline Media Queries ================ */

@media screen and (max-width: 660px) {
  .timeline:before {
    background: rgba(0, 0, 0, 0);
  }
  .timeline {
    width: 100%;
    padding: 4em 0 1em 0;
  }

  .timeline li {
    padding: 3em 0;
  }

  .direction-l,
  .direction-r {
    float: none;
    width: 100%;
    text-align: center;
  }

  .flag-wrapper {
    text-align: center;
  }

  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: -30px;
    left: 50%;
    content: " ";
    display: block;
    width: 12px;
    height: 12px;
    margin-left: -9px;
    border-radius: 10px;
  }

  .direction-l .flag:after,
  .direction-r .flag:after {
    content: "";
    position: absolute;
    left: 50%;
    top: -8px;
    height: 0;
    width: 0;
    margin-left: -8px;
    border-width: 8px;
    pointer-events: none;
  }

  .time-wrapper {
    display: block;
    position: relative;
  }

  .direction-l .time-wrapper {
    float: none;
  }

  .direction-r .time-wrapper {
    float: none;
  }

  .desc {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    // background: rgb(245,245,245);
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);

    z-index: 15;
  }

  .direction-l .desc,
  .direction-r .desc {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;

    z-index: 15;
  }
}
</style>
