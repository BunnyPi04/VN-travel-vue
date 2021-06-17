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
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
          <div class="video-item grid-item">
            <div
              class="video-item__image"
              @click="openVideo('https://www.youtube.com/embed/84k3v5jYB58')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="video-item__title">Hanoi</div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <MediaModal
        v-if="modalVideo"
        v-model="modalVideo"
        :url="url"
        type="video"
      />
    </transition>
  </div>
</template>
<script>
import MediaModal from "@/components/destination/MediaModal";
export default {
  components: {
    MediaModal
  },
  data() {
    return {
      toggle: true,
      modalVideo: false,
      url: ""
    };
  },
  methods: {
    openVideo(url) {
      this.modalVideo = true;
      this.url = url;
    }
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
        cursor: pointer;

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
