<template>

  <!-- Your stay Begin -->
  <section class="rh rh-100 rh-your-stay">
    <div class="container-fluid">
      <div class="row rh-margin-o">
        <div class="col-lg-4 col-md-12 half-left">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="rh-left">
                  <h2>Your Stay</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris
                    nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia
                    deserunt mollit
                    anim id est laborum</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12 half-right">
          <div class="row">
            <div class="rh rh-right">
              <div class="col-md-6 col-sm-6 col-xs-12 rh-mf-30">
                <div class="stay-box">
                  <img src="assets/images/your-stay1.jpg" alt="your-stay1" />
                  <router-link to="/single-rooms"></router-link>
                  <div class="overley">
                    <div class="stay-detail">
                      <h5>Luxury Room</h5>
                      <span>$99 / day</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="stay-box">
                  <img src="assets/images/your-stay2.jpg" alt="your-stay2" />
                  <router-link to="/single-rooms"></router-link>
                  <div class="overley">
                    <div class="stay-detail">
                      <h5>Royal Room</h5>
                      <span>$149 / day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Your stay Close -->

</template>

<script>
export default {
  name: 'HomeYourStay'
}
</script>

<style>

</style>
