<template>
  <div>
    <DetailPageTitle title="Contact" includeClass="event" />

    <!-- Main Content Begin -->
    <div class="rh section-booking">

      <ContactUs />

      <ContactForm />

      <ContactNewsletter />
      
    </div>
    <!-- Main Content Close -->
  </div>
</template>

<script>
import DetailPageTitle from '@/components/___shared/DetailPageTitle';
import ContactUs from '@/components/contact/ContactUs';
import ContactForm from '@/components/contact/ContactForm';
import ContactNewsletter from '@/components/contact/ContactNewsletter';

export default {
  name: 'Contact',
  components: {
    DetailPageTitle,
    ContactUs,
    ContactForm,
    ContactNewsletter
  }
}
</script>

<style>

</style>