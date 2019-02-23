/* eslint-disable */
<template>
  <div id="app">
    <div class=" side_bar_left ">
      <img class="side_bar_left__image" src="./assets/images/profile_girl.jpg">
    </div>
    <div class="side_bar_right cleafix">
      <my-header></my-header>
      <my-portfolio></my-portfolio>
      <div class="part_text">
        <h3>About</h3>
        <hr>
        <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <my-skill></my-skill>
      <my-reputation></my-reputation>
      <my-price></my-price>
      <router-view></router-view>
      <my-contact></my-contact>
    </div>
  </div>
</template>
<script>
import HeaderPart from './assets/components/HeaderPart.vue'
import ImgPart from './assets/components/ImgPart.vue'
import SkillsPart from './assets/components/SkillsPart.vue'
import ButtonDownload from './assets/components/ButtonDownload.vue'
import ReputationPart from './assets/components/ReputationPart.vue'
import MyPricePart from './assets/components/MyPricePart.vue'
import ContactPart from './assets/components/ContactPart.vue'
export default {
  components: {
    'my-header': HeaderPart,
    'my-portfolio': ImgPart,
    'my-skill': SkillsPart,
    'button-download': ButtonDownload,
    'my-reputation': ReputationPart,
    'my-price': MyPricePart,
    'my-contact': ContactPart
  }
}

</script>
<style lang="scss">
  @import "./assets/scss/style.scss";

</style>
