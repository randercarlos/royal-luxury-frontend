<template>
  <div>
    <HomeSlider />

    <!-- Main Content Begin -->
    <div class="rh">

      <HomeCheckAvailability />
      <HomeFeaturedRooms />
      <HomeYourStay />
      <HomeOurNewsEvents />
      <HomeOurServices />
      <HomeTestemonial />
      <HomeNewsletterSignup />

    </div>
    <!-- Main Content Close -->
    
  </div>
</template>

<script>
import HomeSlider from '@/components/home/HomeSlider';
import HomeCheckAvailability from '@/components/home/HomeCheckAvailability';
import HomeFeaturedRooms from '@/components/home/HomeFeaturedRooms';
import HomeYourStay from '@/components/home/HomeYourStay';
import HomeOurNewsEvents from '@/components/home/HomeOurNewsEvents';
import HomeOurServices from '@/components/home/HomeOurServices';
import HomeTestemonial from '@/components/home/HomeTestemonial';
import HomeNewsletterSignup from '@/components/home/HomeNewsletterSignup';


export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeCheckAvailability,
    HomeFeaturedRooms,
    HomeYourStay,
    HomeOurNewsEvents,
    HomeOurServices,
    HomeTestemonial,
    HomeNewsletterSignup,
  }
}
</script>

<style>

</style>