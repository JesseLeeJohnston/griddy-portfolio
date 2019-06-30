<template>
  <div class="project-grid">
    <g-link to="/projects/buddi" class="column-span-2 project-tile buddi-bg background-zoom">
      <div>
        <h2>Buddi</h2>
        <p class="text-small is-marginless">
          <span class="text-small is-bold">2019 //</span> An express shopping and product information kiosk.
        </p>
      </div>
      <p class="text-small uppercase project-details">
        Project Details
        <img src="../assets/images/icons/arrow-right.svg" alt="" width="10px" height="10px">
      </p>
    </g-link>
    <g-link to="/projects/motto" class="project-tile motto-bg background-zoom">
      <div>
        <h2>Motto 20</h2>
        
        <p class="text-small is-marginless">
          <span class="text-small is-bold">2018 //</span> A Chatbot Channel to help Movie Theatres Sell Tickets.
        </p>
        
      </div>
      <p class="text-small uppercase project-details">
        Project Details
        <img src="../assets/images/icons/arrow-right.svg" alt="" width="10px" height="10px">
      </p>
    </g-link>
    <g-link to="/projects/cully" class="project-tile cully-bg background-zoom">
      <div>
        <h2>Cully Movie Bot</h2>
        <p class="text-small is-marginless">
          <span class="text-small is-bold">2018 //</span> A Chatbot Channel to help Movie Theatres Sell Tickets.
        </p>
      </div>
      <p class="text-small uppercase project-details">
        Project Details
        <img src="../assets/images/icons/arrow-right.svg" alt="" width="10px" height="10px">
      </p>
    </g-link>
    <g-link to="/projects/rt-dashboard" class="project-tile rt-dashboard-bg background-zoom">
      <div>
        <h2>ResponseTek Dashboard</h2>
        <p class="text-small is-marginless">
          <span class="text-small is-bold">2016 //</span> A voice of customer analytics dashboard.
        </p>
      </div>
      <p class="text-small uppercase project-details">
        Project Details
        <img src="../assets/images/icons/arrow-right.svg" alt="" width="10px" height="10px">
      </p>
    </g-link>
    <g-link to="/projects/rt-surveys" class="project-tile rt-survey-bg background-zoom">
      <div>
        <h2>ResponseTek Surveys</h2>
        <p class="text-small is-marginless">
          <span class="text-small is-bold">2016 //</span> A voice of customer program survey.
        </p>
      </div>
      <p class="text-small uppercase project-details">
        Project Details
        <img src="../assets/images/icons/arrow-right.svg" alt="" width="10px" height="10px">
      </p>
    </g-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.project-tile {
  background-color: #081014;
  background-repeat: no-repeat;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 14px 0 rgba(245, 166, 166, 0);
  min-height: 300px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-size 500ms ease-in-out;
  background-size: 100%;
  padding: 1rem;
  &:hover {
    box-shadow: 0 0 14px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
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

  &.motto-bg {
    background-image: linear-gradient(
        137deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url("../assets/images/main-tiles/motto.jpg");
  }
  &.cully-bg {
    background-image: linear-gradient(
        137deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url("../assets/images/main-tiles/cully.jpg");
  }
  &.buddi-bg {
    background-image: linear-gradient(
        137deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url("../assets/images/main-tiles/buddi.jpg");
  }
  &.rt-dashboard-bg {
    background-image: linear-gradient(
        137deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url("../assets/images/main-tiles/rt-dashboard.jpg");
  }
  &.rt-survey-bg {
    background-image: linear-gradient(
        137deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      url("../assets/images/main-tiles/rt-survey.jpg");
  }
}

.background-zoom {
  background-size: cover;
}

@media (min-width: 1000px) {
  .background-zoom {
    background-size: 101%;
    background-position: 50% 50%;
    transition: background-size 3700ms cubic-bezier(0.17, 0.67, 0.62, 0.99),
      background-position 3700ms cubic-bezier(0.17, 0.67, 0.62, 0.99);
    &:hover {
      background-size: 120%;
      background-position: 50% 55%;
    }
  }
}

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
