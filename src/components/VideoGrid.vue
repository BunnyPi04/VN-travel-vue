<template>
  <div class="video-grid-section collapse-custom">
    <label class="collapse-title">
      <input type="checkbox" v-on:change="toggle = !toggle" :value="toggle" />
      <span>Videos</span>
    </label>

    <div class="wrapper">
      <transition name="slide">
        <div class="video-grid grid-container" v-if="toggle">
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div class="video-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      toggle: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.video-grid {
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 64px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(1, 1fr);
  }

  .video {
    &-item {
      &__image {
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      &__title {
        text-align: center;
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 16px;
        margin-bottom: 2px;
        color: $dark-blue;

        @include breakpoint-down(tablet) {
          font-size: 13px;
          line-height: 20px;
          margin-top: 8px;
          margin-bottom: -2px;
        }
      }
    }
  }
}
.show {
  background-color: red;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
