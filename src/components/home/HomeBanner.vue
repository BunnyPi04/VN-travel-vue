<template>
  <div class="home-banner-section">
    <div class="">
      <div id="home-slide" class="carousel slide" data-ride="carousel">
        <!-- The slideshow -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/app/bg.png" alt="Los Angeles" width="1100" height="500">
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/app/bg.png" alt="Chicago" width="1100" height="500">
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/app/bg.png" alt="New York" width="1100" height="500">
          </div>
        </div>

        <div class="banner-text">
          <div class="insprite">Inspiring destinations</div>
          <div class="within">Within your Reach.</div>
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
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
</style>
