<template>
  <div  class="part-contact" >
    <h4 id="contact">Contact Me</h4>
    <hr>
    <div class="part-contact-section">
      <p><i class="fa fa-map-marker fa-fw part-contact-section__icon "></i> Chicago, US</p>
      <p><i class="fa fa-phone fa-fw part-contact-section__icon  "></i> Phone: +00 151515</p>
      <p><i class="fa fa-envelope fa-fw part-contact-section__icon "> </i> Email: mail@mail.com</p>
    </div>
    <p>Lets get in touch. Send me a message:</p>
    <form >
      <p><input class="part-contact-input__input" type="text" placeholder="Name" required name="Name" v-model="user.name"></p>
      <p><input class="part-contact-input__input"  type="text" placeholder="Email" required name="Email" v-model="user.email"></p>
      <p><input class="part-contact-input__input"  type="text" placeholder="Message" required name="Message" v-model="user.message"></p>
      <button class="btn button-download" type="submit" @click="submit">
        <i class="fa fa-paper-plane part-contact-section__icon "></i> SEND MESSAGE
        </button>
    </form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submit: function () {
      this.$http.post('', this.user)
    }
  }
}
</script>
<style>

</style>
