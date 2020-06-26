<template>
  <div id="app">
    <nav id="nav" class="blue lighten-3">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link> </li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
   </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('../node_modules/materialize-css/dist/css/materialize.min.css');
</style>
