<template>

  <!-- Sign up Form Begin -->
  <div class="modal fade rh-signup" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <h4 class="modal-title">Sign Up</h4>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <div class="well">

                <form id="signup" method="POST" action="#">
                  <div class="row">
                    <div class="form-group col-md-6 col-sm-6 col-xs-6">
                      <label for="firstname" class="control-label">First Name</label>
                      <input type="text" class="form-control" id="firstname" name="firstname" required
                        title="Please enter your firstname" placeholder="First Name" />
                    </div>

                    <div class="form-group col-md-6 col-sm-6 col-xs-6">
                      <label for="lastname" class="control-label">Last Name</label>
                      <input type="text" class="form-control" id="lastname" name="lastname" required
                        title="Please enter your lastname" placeholder="Last Name" />
                    </div>

                    <div class="form-group  col-md-12 col-sm-12 col-xs-12">
                      <label for="email" class="control-label">Email</label>
                      <input type="text" class="form-control" id="email" name="email" required
                        title="Please enter your email" placeholder="Email" />
                    </div>

                    <div class="form-group  col-md-12 col-sm-12 col-xs-12">
                      <label for="email" class="control-label">Phone</label>
                      <input type="text" class="form-control" id="phone" name="phone" required
                        title="Please enter your phone" placeholder="Phone" />
                    </div>

                    <div class="form-group  col-md-12 col-sm-12 col-xs-12">
                      <label for="address" class="control-label">Address 1</label>
                      <input type="text" class="form-control" id="address" name="address" required
                        title="Please enter your address" placeholder="Address" />
                    </div>

                    <div class="form-group col-md-6 col-sm-6 col-xs-6">
                      <label class="control-label">Password</label>
                      <input type="password" class="form-control" required placeholder="Password"
                      title="Please enter your password" />
                    </div>

                    <div class="form-group col-md-6 col-sm-6 col-xs-6">
                      <label class="control-label">Conform Password</label>
                      <input type="password" class="form-control" required title="conform password"
                        placeholder="Conform Password" />
                    </div>

                    <div class="alert alert-error hide">Wrong username og password</div>
                    <div class="form-group signup col-md-12">
                      <label>
                        <input type="checkbox" name="remember" /> Remember login
                      </label>
                      <a href="javascript:;" class="rh-check-btn btn-block">Create Account</a>
                    </div>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sign up Form Close -->

</template>

<script>
export default {
  name: 'TheSignupForm'
}
</script>

<style>

</style>
