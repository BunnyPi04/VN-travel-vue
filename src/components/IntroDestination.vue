<template>
  <div class="intro-destination-section">
    <div class="intro-banner">
      <img src="@/assets/images/app/intro-banner-1.png" />
      <div class="destination-name">
        {{ title }}
      </div>
    </div>
    <div class="intro-content" v-html="content"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: "",
    content: ""
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.intro-banner {
  position: relative;
  margin-bottom: 32px;

  img {
    width: 100%;
    border-radius: 4px;
  }

  .destination-name {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    font-family: Automobile;
    font-size: 240px;
    color: white;
    text-align: center;
  }
}

.intro-content {
  font-size: 14px;
  line-height: 22px;
  color: $black;
}
</style>
