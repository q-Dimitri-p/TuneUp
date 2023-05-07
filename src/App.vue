<template>
  <div id="app">

    <div id="sd">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand class="m-3" href="#">TuneUp</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="m-3">
            <b-nav-item to="/">ToDo</b-nav-item>
            <b-nav-item to="/form">Form</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<style>
  #app{
    background-color: rgb(155, 255, 152);
    height: 100vh;
    font-weight: bold;
  }
  #sd{
    box-shadow: 0px 5px 10px black;
  }
</style>
