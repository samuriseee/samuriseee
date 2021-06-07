<template>
  <div id="app">
    <div class="container">
      <div class="navBar"> 
        <button @click="activeNav = 'home'"> Home </button>
        <button @click="activeNav = 'contact'"> contact </button>
        <button @click="activeNav = 'blogs'"> blogs </button>
      </div>
      <home v-if="activeNav === 'home'" /> 
      <contact v-if="activeNav === 'contact'"/> 
      <blogs v-if="activeNav === 'blogs'"/>
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
    border: 1px;
    padding:10px;
    margin-left:5px;
    color: #fff;
    background: #47749e;
    border-radius:7px;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
}
</style>
