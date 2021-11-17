<template>

  <div>
    <DetailPageTitle title="Rooms & Suits" />

    <!-- Main Content Begin -->
    <div class="rh rh-100">

      <!-- Column2 Grid View Begin -->
      <section class="sort-view-list select-list">
        <div class="container">
          <!-- Sort By -->
          <div class="row">
            <div class="col-lg-9 col-md-8 col-sm-12">
              <div class="row">
                <div id="sort-by" class="sort-by">
                  <div class="col-md-6 col-sm-8 col-xs-7">
                    <form method="post" action="#">
                      <div class="form-group">
                        <select class="selectpicker">
                          <option>Sort By</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-6 col-sm-4 col-xs-5">
                    <div class="buttons pull-right">
                      <button class="sort-by-grid"><i class="fa fa-th" aria-hidden="true"></i></button>
                      <button class="sort-by-list current"><i class="fa fa-th-list" aria-hidden="true"></i></button>
                    </div>
                  </div>

                  <div id="grid_list" class="sort-by-list">
                    <div class="rh-flex">
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pr">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/1.jpg" alt="1" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
                            </h4>
                            <div class="rating-star">
                              <ul>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                              </ul>
                              <span><a href="javascript:;">9 Reviews</a></span>
                            </div>
                            <div class="rh">
                              <p class="rh-top">Dolor adipisicing sunt laborum ut anim fugiat proident in culpa sint et eu.
                                Dolore consectetur labore in magna ut laborum occaecat consequat dolor magna minim eiusmod
                                dolor. Ut elit labore sed velit
                                ex fugiat esse sit.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pl">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/2.jpg" alt="2" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
                            </h4>
                            <div class="rating-star">
                              <ul>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                              </ul>
                              <span><a href="javascript:;">12 Reviews</a></span>
                            </div>
                            <div class="rh">
                              <p class="rh-top">Lorem ipsum dolor aute duis sed adipisicing dolore in irure commodo
                                consectetur. Et culpa consectetur ad veniam dolore enim minim laboris esse ex cupidatat.
                                Enim consectetur do nulla proident occaecat
                                quis ullamco sed nisi.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pr">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/3.jpg" alt="3" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
                            </h4>
                            <div class="rating-star">
                              <ul>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                              </ul>
                              <span><a href="javascript:;">10 Reviews</a></span>
                            </div>
                            <div class="rh">
                              <p class="rh-top">Aute elit ut nostrud culpa qui ut eu ea consequat veniam in duis magna irure
                                nostrud in. Dolor excepteur amet laborum dolore ut ullamco in proident voluptate. Culpa id
                                reprehenderit et reprehenderit.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pl">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/4.jpg" alt="4" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
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
                              <p class="rh-top">Consectetur nisi culpa nisi pariatur eu excepteur velit sint nulla tempor
                                dolore in consectetur dolore dolore. Commodo cillum ut occaecat aliqua cillum magna amet
                                ullamco do nulla est aute sit nulla
                                ut dolore.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pr">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/5.jpg" alt="5" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
                            </h4>
                            <div class="rating-star">
                              <ul>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                <li><i class="fa fa-star" aria-hidden="true"></i></li>
                              </ul>
                              <span><a href="javascript:;">10 Reviews</a></span>
                            </div>
                            <div class="rh">
                              <p class="rh-top">Ut adipisicing laboris labore ullamco esse sint ut consectetur ut. Velit
                                exercitation exercitation qui sunt quis reprehenderit minim laboris irure nostrud non velit.
                                Consequat esse dolore.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-6 xs-pl">
                        <div class="rh rh-feature-box rh-margin-30">
                          <div class="rh-img">
                            <img src="assets/images/grid-list/6.jpg" alt="6" />
                            <router-link to='/single-room'></router-link>
                          </div>
                          <div class="feature-detail">
                            <h4>
                              <router-link to='/single-room'>Luxury with ultra superior room</router-link>
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
                              <p class="rh-top">Esse commodo proident est irure qui commodo exercitation sint ea nostrud in.
                                Lorem ipsum sunt tempor voluptate duis duis cillum sed commodo cupidatat enim magna in
                                commodo aute id ex pariatur laboris.</p>
                              <ul>
                                <li>
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                  <p>(315) 724-2102</p>
                                </li>
                                <li>
                                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                                  <p>105 Barton Ave, Utica, NY, 13502</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar Detail -->
            <div class="col-lg-3 col-md-4 col-sm-12">
              <div class="rh-detail-right">

                <div class="row">
                  <div class="col-md-12 col-sm-6 col-xs-6 col-sxs-12">
                    <!-- Search Listing Begin -->
                    <div class="rh-reservation">
                      <h5>Search Listing</h5>
                      <form method="post" action="#">
                        <div class="form-group">
                          <input type="text" name="Search Keyword" class="form-control" placeholder="Search Keyword" />
                        </div>
                        <div class="form-group">
                          <select class="selectpicker">
                            <option>Select Category</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <select class="selectpicker">
                            <option>Select Country</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <select class="selectpicker">
                            <option>Select State</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <select class="selectpicker">
                            <option>Select City</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <input type="text" name="address" class="form-control" placeholder="Address">
                        </div>
                        <div class="form-group">
                          <input type="text" name="amenity" class="form-control" placeholder="Amenity">
                        </div>
                        <a class="rh-check-btn" href="javascript:;">SEARCH</a>
                      </form>
                    </div>
                    <!-- Search Listing Close -->
                  </div>

                  <div class="col-md-12 col-sm-6 col-xs-6 col-sxs-12">
                    <!-- Filter Listings By Miles Begin -->
                    <div class="rh-reservation">
                      <h5>Filter Listings By Miles</h5>
                      <form class="rh-filter-list-mile" method="post" action="#">
                        <div class="form-group">
                          <input type="text" name="enter-your-address" class="form-control"
                            placeholder="Enter your address">
                        </div>
                      </form>
                    </div>
                    <!-- Filter Listings By Miles Close -->
                  </div>

                  <div class="col-md-12 col-sm-6 col-xs-6 col-sxs-12">
                    <!-- Mile Range Begin -->
                    <div class="rh-mile-range">
                      <div class="rh rh-mile-detail">
                        <h6 class="rh-mile-title">Mile range:</h6>
                        <input class="rh-mile-number" type="text" id="amount" readonly>
                      </div>
                      <div id="slider-range"></div>

                      <vue-slider v-model="mileRangeValue" :dotSize="10" :min="0" :max="500" :interval="10" />

                    </div>
                    <!-- Mile Range Close -->
                  </div>

                  <div class="col-md-12 col-sm-6 col-xs-6 col-sxs-12">
                    <!-- Popular Author Begin -->
                    <div class="rh-reservation">
                      <h5>Popular Author</h5>
                      <ul class="similar">
                        <li>
                          <img src="assets/images/author/1.jpg" alt="1" />
                          <div class="why-book-list">
                            <span><a href="javascript:;">Alexandra</a></span>
                            <p>Submitted: 6 Listings </p>
                          </div>
                        </li>
                        <li>
                          <img src="assets/images/author/2.jpg" alt="2" />
                          <div class="why-book-list">
                            <span><a href="javascript:;">Jessica</a></span>
                            <p>Submitted: 8 Listings </p>
                          </div>
                        </li>
                        <li>
                          <img src="assets/images/author/3.jpg" alt="3" />
                          <div class="why-book-list">
                            <span><a href="javascript:;">Katherine</a></span>
                            <p>Submitted: 9 Listings </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!-- Popular Author Close -->
                  </div>

                  <div class="col-md-12 col-sm-6 col-xs-6 col-sxs-12">
                    <!-- AdVertise Begin -->
                    <div class="rh-reservation addvertise">
                      <img src="assets/images/anuncio.jpg" alt="advertise" />
                    </div>
                    <!-- AdVertise Close -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- About Royal Hotel Close -->

    </div>
    <!-- Main Content Close -->
  </div>
</template>

<script>
import DetailPageTitle from '@/components/___shared/DetailPageTitle';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default {
  name: 'AvailableRooms',
  components: {
    DetailPageTitle,
    VueSlider
  },
  data() {
    return {
      mileRangeValue: 0
    }
  }
}
</script>

<style>

</style>