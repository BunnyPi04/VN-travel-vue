<template>
  <div class="custom-modal">
    <div class="custom-modal-container media-modal">
      <div class="close-button" @click="closeModal()"></div>
      <div class="media modal__body">
        <iframe
          v-if="type == 'video'"
          :src="url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <img v-else :src="require(`@/assets/images/${url}`)" />
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-select";
export default {
  components: {
    VueSelect
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "img"
    }
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.display = false;
      this.$emit("input", this.display);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.media-modal {
  background-color: transparent;

  .modal {
    &__header {
      border: none;
      padding-top: 64px;
      padding-bottom: 5px;
    }

    &__body {
      padding: 0;
      margin-bottom: 0;
    }
  }

  .media {
    iframe {
      width: 946px;
      height: 538px;

      @include breakpoint-down(tablet) {
        width: 100%;
        min-width: 90vw;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>
