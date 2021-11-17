<template>
  
  <!-- ========== Nav Menu ========== -->
  <nav class="rh navbar navbar-default">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">
          <img src="assets/images/logo.png" alt="logo" />
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse rh-toggle" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right main-navbar">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/available-rooms">Available Rooms</router-link>
          </li>
          <!-- <li>
            <a href="single-rooms.html">Single Rooms</a>
          </li> -->
          <li>
            <router-link to="/booking">Booking</router-link>
          </li>
          <li>
            <a href="javascript:;">Events</a>
            <ul class="dropdown-nav rh-drop-menu">
              <li>
                <router-link to="/events">Events</router-link>
              </li>
              <li>
                <router-link to="/event">Events Single Page</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
            <ul class="dropdown-nav rh-drop-menu">
              <li>
                <router-link to="/blog">Blog Single Page</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'TheHeaderMenu'
}
</script>

<style>

</style>