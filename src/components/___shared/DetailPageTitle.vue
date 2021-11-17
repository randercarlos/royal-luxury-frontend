<template>

  <!-- Detail-page back Begin -->
  <section class="rh-detail-bg list-view-column2" :class="this.includeClass">
    <div class="container">
      <div class="row">
        <div class="rh-detail-widgets ">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="rh text-center">
              <h2>{{ this.title }}</h2>
              <p>{{ this.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Detail-page back Close -->

</template>

<script>
export default {
  name: 'DetailPageTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: false,
      default: 'Captions line here'
    },
    includeClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style>

</style>