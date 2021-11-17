<template>
  
  <!-- Header Begin -->
  <header class="rh">
    <!-- ========== Top Menu ========== -->
    <div class="rh-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-4">
            <ul class="top">
              <li>
                <select class="selectpicker">
                  <option>English</option>
                  <option>Portugal</option>
                  <option>French</option>
                </select>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-8">
            <ul class="pull-right">
              <li>
                <a href="Javascript:;" data-toggle="modal" data-target=".rh-login">Login</a>
              </li>
              <li>
                <a href="Javascript:;" data-toggle="modal" data-target=".rh-signup">Signup</a>
              </li>
              <li>
                <select class="selectpicker">
                  <option>Usd</option>
                  <option>Euro</option>
                  <option>Doller</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <TheHeaderMenu />
    
  </header>
<!-- Header Close -->

</template>

<script>
import TheHeaderMenu from '@/components/___template/TheHeaderMenu';

export default {
  name: 'TheHeader',
  components: {
    TheHeaderMenu
  }
}
</script>

<style>

</style>