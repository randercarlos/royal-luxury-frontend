<template>
  <!-- Slider Begin -->
  <section class="rh-banner">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="assets/images/home/1.jpg" alt="1">
          <div class="rh rh-banner-widgets">
            <div class="container">
              <div class="row">
                <div class="rh-banner flex">
                  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <h1>Live The Wonderous <span>Life</span></h1>
                    <span class="rh-price">From $195 / day</span>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <router-link to="/available-rooms" class="book-now">BOOK NOW</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="assets/images/home/2.jpg" alt="2">
          <div class="rh rh-banner-widgets">
            <div class="container">
              <div class="row flex">
                <div class="col-lg-9 col-md-9">
                  <h1>Live The Wonderous <span>Life</span></h1>
                  <span class="rh-price">From $195 / day</span>
                </div>
                <div class="col-lg-3 col-md-3">
                  <router-link to="/available-rooms" class="book-now">BOOK NOW</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="assets/images/home/3.jpg" alt="3">
          <div class="rh rh-banner-widgets">
            <div class="container">
              <div class="row flex">
                <div class="col-lg-9 col-md-9">
                  <h1>Live The Wonderous <span>Life</span></h1>
                  <span class="rh-price">From $195 / day</span>
                </div>
                <div class="col-lg-3 col-md-3">
                  <router-link to="/available-rooms" class="book-now">BOOK NOW</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- slider Close -->

</template>

<script>
export default {
  name: 'HomeSlider'
}
</script>

<style>

</style>