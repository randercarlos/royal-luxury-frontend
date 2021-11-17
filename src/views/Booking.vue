<template>
  <div>
    <DetailPageTitle title="Booking" includeClass="event" />

    <!-- Main Content Begin -->
    <div class="rh rh-100 section-booking">
      <!-- Booking Page Begin -->
      <div class="container">
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-wizard">
                  <!-- Form Wizard -->
                  <form action="#" method="post">
                      <!-- Form progress -->
                      <div class="form-wizard-steps form-wizard-tolal-steps-4">
                          <div class="form-wizard-progress">
                              <div class="form-wizard-progress-line" data-now-value="12.25" data-number-of-steps="4" style="width: 12.25%;"></div>
                          </div>
                          <!-- Step 1 -->
                          <div class="form-wizard-step active">
                              <div class="form-wizard-step-icon"><i class="fa fa-calendar" aria-hidden="true"></i></div>
                              <p>Choose Your Date</p>
                          </div>
                          <!-- Step 1 -->
                          <!-- Step 2 -->
                          <div class="form-wizard-step">
                              <div class="form-wizard-step-icon"><i class="fa fa-building-o" aria-hidden="true"></i></div>
                              <p>Choose Your Room</p>
                          </div>
                          <!-- Step 2 -->
                          <!-- Step 3 -->
                          <div class="form-wizard-step">
                              <div class="form-wizard-step-icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                              <p>Reservation</p>
                          </div>
                          <!-- Step 3 -->
                          <!-- Step 4 -->
                          <div class="form-wizard-step">
                              <div class="form-wizard-step-icon"><i class="fa fa-check" aria-hidden="true"></i></div>
                              <p>Confirmation</p>
                          </div>
                          <!-- Step 4 -->
                      </div>
                      <!-- Form progress -->
                      <!-- Form Step 1 -->
                      <fieldset style="display: block;">
                          <div class="row">
                              <div class="col-lg-12">
                                  <div class="row">
                                      <div class="col-md-12">
                                          <div class="rh-datepicker">
                                              <div class="input-daterange" id="datepicker">
                                                  <div class="date-picker-inline first"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-12">

                                  <!-- Check Availability Begin -->
                                  <section class="rh rh-100 check-availability rh-check-availability select-list">
                                      <div class="container">
                                          <div class="row">
                                              <div class="col-lg-3 col-md-3 co-sm-3 col-xs-6 rh-xs-12">
                                                  <h5>Room</h5>
                                                  <select class="selectpicker">
                                                      <option>Deluxe Room</option>
                                                      <option>Royal Room</option>
                                                      <option>Deluxe Room</option>
                                                  </select>
                                              </div>
                                              <div class="col-lg-3 col-md-3 co-sm-3 col-xs-6 rh-xs-12">
                                                  <h5 class="fw-x15">Adults</h5>
                                                  <select class="selectpicker">
                                                      <option>1 Adult</option>
                                                      <option>2 Adult</option>
                                                      <option>3 Adult</option>
                                                      <option>3 Adult</option>
                                                  </select>
                                              </div>
                                              <div class="col-lg-3 col-md-3 co-sm-3 col-xs-6 rh-xs-12">
                                                  <h5 class="fw-15">Children</h5>
                                                  <select class="selectpicker">
                                                      <option>1</option>
                                                      <option>2</option>
                                                      <option>3</option>
                                                      <option>3</option>
                                                  </select>
                                              </div>
                                              <div class="rh-clear col-lg-3 col-md-3 co-sm-3 col-xs-6 rh-xs-12">
                                                  <a class="rh-check-btn pull-right" href="javascript:;">Check Availability</a>
                                              </div>
                                          </div>
                                      </div>
                                  </section>
                                  <!-- Check Availability Close -->
                              </div>
                          </div>
                          <div class="form-wizard-buttons">
                              <button type="button" class="btn btn-next">Next</button>
                          </div>
                      </fieldset>
                      <!-- Form Step 1 -->
                      <!-- Form Step 2 -->
                      <fieldset>
                          <!-- Featured Rooms Begin -->
                          <section class="rh rh-featured-rooms rh-booking-rooms">
                              <div class="row">
                                  <!-- Featured Rooms Grid Box -->
                                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                      <div class="rh rh-feature-box">
                                          <div class="rh-img">
                                              <img src="assets/images/feature/feature_1.jpg" alt="feature_1">
                                              <router-link to="single-rooms"></router-link>
                                          </div>
                                          <div class="feature-detail">
                                              <h4>
                                                <router-link to="single-rooms">Luxury with ultra superior room</router-link>
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
                                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                      <div class="rh rh-feature-box">
                                          <div class="rh-img">
                                              <img src="assets/images/feature/feature_2.jpg" alt="feature_2">
                                              <router-link to="single-rooms"></router-link>
                                          </div>
                                          <div class="feature-detail">
                                              <h4><router-link to="single-rooms">Classic Room In 5 Star Hotel</router-link></h4>
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
                                              <img src="assets/images/feature/feature_3.jpg" alt="feature_3">
                                              <router-link to="single-rooms"></router-link>
                                          </div>
                                          <div class="feature-detail">
                                              <h4><router-link to="single-rooms">Corinthia Hotel Lisboa &amp; Spa</router-link></h4>
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
                          </section>
                          <!-- Featured Rooms Close -->

                          <div class="form-wizard-buttons">
                              <button type="button" class="btn btn-previous">Previous</button>
                              <button type="button" class="btn btn-next">Next</button>
                          </div>
                      </fieldset>
                      <!-- Form Step 2 -->
                      <!-- Form Step 3 -->
                      <fieldset>
                          <div class="rh rh-reservation-form">
                              <div class="row">
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="First Name /">
                                      </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Last Name" />
                                      </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="email" class="form-control" placeholder="Email" />
                                      </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Phone" />
                                      </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="City" />
                                      </div>
                                  </div>
                                  <div class="col-md-4 col-sm-6 col-xs-6 rh-xs-12">
                                      <div class="form-group">
                                          <input type="text" class="form-control" placeholder="Address" />
                                      </div>
                                  </div>
                                  <div class="col-md-12">
                                      <div class="form-group">
                                          <textarea cols="12" rows="10" class="form-control" placeholder="Special Requirements"></textarea>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="form-wizard-buttons">
                              <div class="">

                              </div>
                              <button type="button" class="btn btn-previous">Previous</button>
                              <button type="button" class="btn btn-next">Next</button>
                          </div>
                      </fieldset>
                      <!-- Form Step 3 -->
                      <!-- Form Step 4 -->
                      <fieldset>
                          <div class="rh-reservation-complate">
                              <h4>Reservation Complete!</h4>
                              <p>Details of your reservation request was sent to your email </p>
                              <p>For more information you can contact us via <a href="contact.html">contact form</a> of website</p>
                          </div>
                          <div class="form-wizard-buttons">
                              <button type="button" class="btn btn-previous">Previous</button>
                              <button type="submit" class="btn btn-submit">Done</button>
                          </div>
                      </fieldset>
                      <!-- Form Step 4 -->
                  </form>
                  <!-- Form Wizard -->
              </div>
          </div>
      </div>
      <!-- Booking Page Close -->
    </div>
    <!-- Main Content Close -->

  </div>
</template>

<script>
import DetailPageTitle from '@/components/___shared/DetailPageTitle';

export default {
  name: 'Booking',
  components: {
    DetailPageTitle
  }
}
</script>

<style>

</style>