<template>
  <div class="container ">
    <navigation-sad />

    <div class="uk-container">
      <router-view/>
    </div>
  </div>

 
</template>

<script>

import NavigationSad from './components/NavigationSad.vue';
  export default{
    components:{
      NavigationSad
    }
  }
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root{
  --black: #2d2d29;
  --blue: #215a6d;
  --blue_light: #3ca2a2;
  --green: #92c7a3;
  --gray: #dfece6;
  --purple: #635063;
  --red: #e88087;
  --red_leght: #fa9b9b;
  --gold: #ffdabf;
  --yellow: #f7f3d5;
}

#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--black);
}


</style>
