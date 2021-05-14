<template>
  <div class="sub-banner-section">
    <div class="">
      <div id="sub-banner" class="">
        <div class="sub-banner-image">
          <img v-if="(type = 'about')" src="@/assets/images/app/sub-bg.png" />
          <img
            v-else-if="(type = 'destination')"
            src="@/assets/images/app/sub-bg2.png"
          />
          <img v-else src="@/assets/images/app/sub-bg.png" />
        </div>
        <div class="banner-text">
          <div class="insprite">{{ title }}</div>
          <div class="within">{{ quote }}</div>
        </div>
      </div>
      <Menu />
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    quote: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@import "@/assets/scss/sub-banner.scss";
</style>
