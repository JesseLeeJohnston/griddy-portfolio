<template>
<div>

    <div class="navbar">
      <div class="inner">
    
        <g-link to="/">
            <img src="@/assets/images/logo.svg" alt="" style="max-height: 70px;">
        </g-link>      
    
         <div class="icon" :class="{active : showNav}" @click="showNav = !showNav">
             <div class="hamburger"></div>
         </div>
        
      </div>
    </div>

  <nav class="nav-overlay" :class="{active : showNav}">
        <div></div>

        <g-link v-on:click.native="showNav = false" to="/">
            <h3>Home</h3>
        </g-link>
             
        <g-link v-on:click.native="showNav = false" to="/about">
          <h3>About</h3>
        </g-link>
     
        <g-link v-on:click.native="showNav = false" to="/contact">
          <h3>Contact Me</h3>
        </g-link>


    <div class="channel-links">
      <a href="https://www.linkedin.com/in/jesseleejohnston/" target="_blank">
        <img src="../assets/images/icons/linkedin.svg" alt="">
      </a>
      <a href="https://www.instagram.com/jesseleejohnston/" target="_blank">
        <img src="../assets/images/icons/instagram.svg" alt="">
      </a>
      <a href="https://github.com/JesseLeeJohnston" target="_blank">
        <img src="../assets/images/icons/github.svg" alt="">
      </a>
    </div>
  </nav>

</div>
    
</template>
<script>
export default {
  data() {
    return {
      showNav: false,
    }
  }
}
</script>
<style lang="scss">
.icon {
    transform: translate(0%, 0%);
    width: 80px;
    height: 80px;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s;
    &:hover {
        opacity: 1;
    }
}
.hamburger {
    width: 40px;
    height: 4px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: .5s;
    border-radius: 0.25rem;
}
.hamburger:before,
.hamburger:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 4px;
    background-color: #ffffff;
    transition: .5s;
    border-radius: 0.25rem;
}

.hamburger:before {
    top: -16px;
}
.hamburger:after {
    top: 16px;
}
.icon.active .hamburger {
    background-color: rgba(0,0,0,0);
}
.icon.active .hamburger:before {
    top: 0;
    transform: rotate(45deg);
}
.icon.active .hamburger:after {
    top: 0;
    transform: rotate(135deg);
}


.navbar {
  z-index: 900;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  background-image: linear-gradient(180deg, #081014 0%, rgba(0,0,0,0.00) 100%);
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;height: 100px; margin: 0 1rem;
  }
}
  .nav-overlay {
    display: grid;
    z-index: 300;
    grid-template-rows: 100px 1fr 1fr 1fr 100px;
    height: 100vh;
    position: fixed;
    top: -100%;
    left: 0;
    width: 100vw;
    opacity: 0;
    background-color: rgba(0,0,0,0.95);
    transition: top 200ms ease-in, opacity 300ms ease-in;
    a {
      align-items: center;
      display: flex;
      justify-content: center;
      opacity: 0;
      h3 {
          opacity: 0.8;
          transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          &:hover {
              opacity: 1;
          }
          &:active {
              transform: scale(0.95);
          }
      }
    }
    &.active {
      top: 0px;
      opacity: 1;
      transition: top 250ms ease-in-out, opacity 400ms ease-in-out;
      a {
        opacity: 1;
        transition: opacity 2000ms ease-in-out;
      }
      .contact-section {
        opacity: 1;
        transition: opacity 3500ms ease-in-out;
      }
    }
    .contact-section {
      opacity: 0;
      align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      border-top: 1px solid rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      background-color: rgba(255,255,255,0.8);
      color: #081014; 
      h5 {
        margin: 0;
        margin-bottom: .5rem;
      }
      p {
        margin: 0rem;
      }
    }
  }
  .channel-links {
    display: flex;
    justify-content:
    space-around;
    align-items: center;
  }
</style>
