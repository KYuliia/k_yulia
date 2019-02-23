<template>
  <div class="part_title">
    <h1 class="part_title__head"><b>Jane Doe</b></h1>
    <h6>Photographer and Web Designer</h6>
    <button-download></button-download>
    <router-link tag="button" :to="link" class="btn router-button">
      <i class="fas fa-arrow-alt-circle-down"></i></router-link>
  </div>
</template>
<script>
import ButtonDownload from './ButtonDownload.vue'
export default {
  data () {
    return {
      link: {
        name: 'appContact',
        params: {
          id: this.$route.params.id
        },
        hash: '#contact'
      }
    }
  },
  components: {
    'button-download': ButtonDownload
  }
}
</script>
