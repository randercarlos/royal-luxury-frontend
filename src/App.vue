<template>
  <div id="app">
    <TheHeader />

    <router-view />

    <TheFooter />
    <TheLoginForm />
    <TheSignupForm />
  </div>
</template>

<script>
import TheHeader from '@/components/___template/TheHeader';
import TheFooter from '@/components/___template/TheFooter';
import TheLoginForm from '@/components/___template/TheLoginForm';
import TheSignupForm from '@/components/___template/TheSignupForm';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TheLoginForm,
    TheSignupForm
  }
}

</script>

<style>
  /* @import './assets/css/spinner.css';
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/bootstrap-select.min.css';
  @import './assets/css/jquery-ui-date.css';
  @import './assets/css/fullcalendar.css';
  @import './assets/css/slick.css';
  @import './assets/css/color.css';
  @import './assets/css/style.css'; */
</style>
