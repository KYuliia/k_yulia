<template>
  <div>
    <button class="btn button-download" @click="show = !show"  >
      <i class="fa fa-download"></i> Download Resume
    </button>
    <transition name="animation" >
    <div class="alert alert-dark" role="alert" v-if="show">
      <h4 class="alert-heading">Hello!</h4>
      <p>You should fill up form at the end of page , and I will contact with you</p>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      show: false
    }
  }}
</script>

<style>
  .animation-enter{
    opacity: 0;
  }
  .animation-enter-active{
    transition: opacity 1s;
    opacity: 1;
  }
  .animation-leave{

  }
  .animation-leave-active{
    transition: opacity 1s;
    opacity: 1;
  }
</style>
