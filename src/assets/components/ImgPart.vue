<template>
  <div class="part_img">
    <h2>My Portfolio</h2>
    <hr>
    <div class="row">
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/underwater.jpg"></div></transition>
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"> <img class="part_img__image" src="../images/p6.jpg"></div></transition>
    </div>
    <div class="row">
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/wedding.jpg"></div></transition>
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/chef.jpg"></div></transition>
    </div>
    <div class="row">
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/underwater.jpg"></div></transition>
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/sailboat.jpg"></div></transition>
    </div>
    <div class="row">
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/sailboat.jpg" ></div></transition>
      <transition name="animation" appear>
      <div class="col-md-6" v-if="show"><img class="part_img__image" src="../images/rocks.jpg"></div></transition>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      show: true
    }
  }}
</script>
<style>
  .animation-enter{
    opacity: 1;
  }
  .animation-enter-active{
    transition: opacity 1s;
    opacity: 1;
  }
  .animation-leave{

  }
  .animation-leave-active{
    transition: opacity 1s;
    opacity: 0;
  }
</style>
