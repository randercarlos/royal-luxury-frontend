<template>

  <!-- Login Form Begin -->
  <div class="modal fade rh-login" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <h4 class="modal-title">Login</h4>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-xs-12">
              <div class="well">

                <form id="loginForm" method="POST" action="#">
                  <div class="form-group">
                    <label for="username" class="control-label">Username</label>
                    <input type="text" class="form-control" id="username" name="username" required
                      title="Please enter you username" placeholder="example@gmail.com">
                  </div>

                  <div class="form-group">
                    <label class="control-label">Password</label>
                    <input type="password" class="form-control" required title="Please enter your
                      password" placeholder="Password">
                  </div>

                  <div class="alert alert-error hide">Wrong username og password</div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="remember"> Remember login
                    </label>
                    <p class="help-block">(if this is a private computer)</p>
                  </div>
                  <a href="javascript:;" class="rh-check-btn btn-block">Login</a>
                  <a href="javascript:;" class="btn btn-default btn-block">Create Account</a>
                </form>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- Login Form Close -->

</template>

<script>
export default {
  name: 'TheLoginForm'
}
</script>

<style>

</style>