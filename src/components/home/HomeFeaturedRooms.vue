<template>

  <!-- Featured Rooms Begin -->
  <section class="rh rh-100 rh-featured-rooms">
    <div class="container">
      <div class="row">

        <!-- Featured Rooms Title -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="rh-section-title">
            <h2>Featured Rooms</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          </div>
        </div>

        <!-- Featured Rooms Grid Box -->
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 rh-mf-30">
          <div class="rh rh-feature-box">
            <div class="rh-img">
              <img src="assets/images/feature/feature_1.jpg" alt="feature_1" />
              <router-link to="/single-rooms"></router-link>
            </div>
            <div class="feature-detail">
              <h4>
                <router-link to="/single-rooms">Luxury with ultra superior room</router-link>
              </h4>
              <div class="rating-star">
                <ul>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <span><a href="javascript:;">7 Reviews</a></span>
              </div>
              <div class="rh">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 rh-mf-30">
          <div class="rh rh-feature-box">
            <div class="rh-img">
              <img src="assets/images/feature/feature_2.jpg" alt="feature_2" />
              <router-link to="/single-rooms"></router-link>
            </div>
            <div class="feature-detail">
              <h4>
                <router-link to="/single-rooms">Classic Room In 5 Star Hotel</router-link>
              </h4>
              <div class="rating-star">
                <ul>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <span><a href="javascript:;">15 Reviews</a></span>
              </div>
              <div class="rh">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div class="rh rh-feature-box">
            <div class="rh-img">
              <img src="assets/images/feature/feature_3.jpg" alt="feature_3" />
              <router-link to="/single-rooms"></router-link>
            </div>
            <div class="feature-detail">
              <h4>
                <router-link to="/single-rooms">Corinthia Hotel Lisboa & Spa</router-link>
              </h4>
              <div class="rating-star">
                <ul>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                  <li><i class="fa fa-star" aria-hidden="true"></i></li>
                </ul>
                <span><a href="javascript:;">14 Reviews</a></span>
              </div>
              <div class="rh">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Rooms Close -->

</template>

<script>
export default {
  name: 'HomeFeaturedRooms'
}
</script>

<style>

</style>
