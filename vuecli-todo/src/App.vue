<template>
  <div id="app">
    <div class="container">
      <div class="navBar"> 
        <button @click="activeNav = 'home'" :class="{}"> Home </button>
        <button @click="activeNav = 'contact'"> contact </button>
        <button @click="activeNav = 'blogs'"> blogs </button>
      </div>
      <home v-if="activeNav === 'home'" /> 
      <contact v-if="activeNav === 'contact'"/> 
      <blogs v-if="activeNav === 'blogs'"/>
    </div>
    <div class="footer">
                    <div class="wave"></div>
                </div>
  </div>
</template>

<script>
import home from "./components/home.vue";
import contact from "./components/contact.vue";
import blogs from "./components/blogs.vue";

export default {
  components: {
    'home':home,
    'contact':contact,
    'blogs':blogs,
  },
  data: () => {
    return {
      activeNav: 'blogs'
    }
  },
};
</script>

<style>
body {
  width: 100%;
  background: url(../../img/jungle.jpg)
  no-repeat 
  center center/cover;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.container .navBar {
    margin-top:-45px;
    display:flex;
    justify-content: center;
}
.container .navBar button{
    border: none;
    outline: none;
    padding:10px;
    margin-left:5px;
    color: #292734;
    background: #fbfaff;
    border-radius:7px;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 
    0 0.7px 4px rgb(0,0,0,0.045),
    0 1.9px 11.1px rgba(0,0,0,0.065),
    0 4.5px 26.8px rgba(0,0,0,0.085),
    0 15px 89px rgba(0,0,0,0.013);
}
.footer .wave {
    width: 100%;
    height: 227px;
    top:0px;
    left: 0px;
    background: url(../../img/wave-large.png);
    animation: move 10s linear infinite;
}
  
.footer .wave::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 227px;
    margin-bottom: 0;
    left: 0;
    background: url(../../img/wave-large.png);
    opacity: 0.4;
    animation: move-reversed 10s linear infinite;
}

.footer .wave::after {
    content: '';
    width: 100%;
    height: 227px;
    bottom: 0;
    left: 0;
    background: url(../../img/wave-large.png);
    opacity: 0.5;
    animation-delay: -4s;
    animation: move 10s linear infinite;
}
@keyframes move {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 1920px;
    }
}

@keyframes move-reversed {
    0% {
      background-position: 1920px;
    }
    100% {
      background-position: 0%;
    }
}
</style>
