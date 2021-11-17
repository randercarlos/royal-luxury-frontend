<template>
  <!-- Conatct Us Form Begin -->
  <section class="rh rh-100 rh-contact-form">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="rh-c-form">
                    <div class="form-area">
                        <form action="#">
                            <h3>Contact Form</h3>
                            <div class="row">
                                <div class="form-group col-lg-12 col-md-12 col-sm-6 col-xs-6 rh-xs-12">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-6 col-xs-6 rh-xs-12">
                                    <input type="text" class="form-control" id="formemail" name="email" placeholder="Email" required>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-6 col-xs-6 rh-xs-12">
                                    <input type="text" class="form-control" id="mobile" name="mobile" placeholder="Mobile Number" required>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-6 col-xs-6 rh-xs-12">
                                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
                                </div>
                                <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <textarea class="form-control" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                                    <span class="help-block" id="characterLeft">You have reached the limit</span>
                                </div>
                                <div class="rh col-xs-12">
                                    <a href="javascript:;" class="rh-check-btn">Submit Form</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <!-- The element that will contain our Google Map. This is used in both the Javascript and CSS above. -->
                <div id="map"></div>
            </div>
        </div>
    </div>
  </section>
  <!-- Conatct Us Form Close -->
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style>

</style>