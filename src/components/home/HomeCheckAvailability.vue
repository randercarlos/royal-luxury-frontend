<template>

  <!-- Check Availability Begin -->
  <section class="rh rh-100 check-availability select-list">
    <div class="container">
      <div class="row">
        <form action="#" method="post">

          <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4 rh-m-30">
            <h5>Arrival date</h5>
            <div class="form-group">
              <input id="arrivalDate" type="text" name="arrive" value="" class="form-control"
                placeholder="December 24 2017">
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4 rh-m-30">
            <h5>Departure date</h5>
            <div class="form-group">
              <input id="departureDate" type="text" name="arrive" value="" class="form-control"
                placeholder="January 12 2018">
            </div>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4 rh-m-30">
            <h5>Room</h5>
            <select class="selectpicker">
              <option>Deluxe Room</option>
              <option>Royal Room</option>
              <option>Deluxe Room</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4 rh-s-30">
            <h5>Adults</h5>
            <select class="selectpicker">
              <option>1 Adult</option>
              <option>2 Adult</option>
              <option>3 Adult</option>
              <option>3 Adult</option>
            </select>
          </div>

          <div class="rh-clear col-lg-4 col-md-8 co-sm-8 col-xs-8 rh-xs-12">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-4 rh-xs-3">
                <h5>Budget</h5>
                <div class="form-group">
                  <input type="text" name="arrive" value="" class="form-control" placeholder="$ 5000">
                </div>
              </div>
              <div class="col-md-8 col-sm-6 col-xs-8 rh-xs-9">
                <router-link to="/available-rooms" class="rh-check-btn pull-right">Check Availability</router-link>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  </section>
  <!-- Check Availability Close -->

</template>

<script>
export default {
  name: 'HomeCheckAvailability'
}
</script>

<style>

</style>
