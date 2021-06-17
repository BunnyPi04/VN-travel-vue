<template>
  <div class="gallery-grid-section collapse-custom">
    <label class="collapse-title">
      <input type="checkbox" v-on:change="toggle = !toggle" :value="toggle" />
      <span>Gallery</span>
    </label>

    <div class="wrapper">
      <transition name="slide">
        <div class="gallery-grid grid-container" v-if="toggle">
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
          <div class="gallery-item grid-item">
            <div
              class="gallery-item__image"
              @click="openImage('app/video-image.png')"
            >
              <img src="@/assets/images/app/video-image.png" />
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <MediaModal
        v-if="modalImage"
        v-model="modalImage"
        :url="url"
        type="image"
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
      modalImage: false,
      url: ""
    };
  },
  methods: {
    openImage(url) {
      this.modalImage = true;
      this.url = url;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.gallery-grid {
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 64px;

  @include breakpoint-down(tablet) {
    grid-gap: 16px !important;
    margin-bottom: 24px;
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery {
    &-item {
      &__image {
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
          cursor: pointer;
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
      }
    }
  }
}
</style>
