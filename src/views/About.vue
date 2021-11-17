<template>

  <div>
     <DetailPageTitle title="About" includeClass="event" />

    <!-- Main Content Begin -->
    <div class="rh section-booking">
     
      <AboutRoyalHotel />

      <AboutServices />

      <AboutOurHistory />

      <AboutNewsletter />
      
    </div>
    <!-- Main Content Close -->
  </div>
  
</template>

<script>
import DetailPageTitle from '@/components/___shared/DetailPageTitle';
import AboutRoyalHotel from '@/components/about/AboutRoyalHotel';
import AboutServices from '@/components/about/AboutServices';
import AboutOurHistory from '@/components/about/AboutOurHistory';
import AboutNewsletter from '@/components/about/AboutNewsletter';

export default {
  name: 'About',
  components: {
    DetailPageTitle,
    AboutRoyalHotel,
    AboutServices,
    AboutOurHistory,
    AboutNewsletter
  }
}
</script>

<style>

</style>