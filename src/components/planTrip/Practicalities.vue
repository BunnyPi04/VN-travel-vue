<template>
  <div class="practicalities-section">
    <div class="page-section-head">
      <div class="page-section__title">
        PRACTICALITIES
      </div>
      <div class="page-section__comment">
        Travelling made as easy as a walk in the park.
      </div>
    </div>
    <div class="practicalities heri-container">
      <div v-for="item in list" :key="item.id" class="practicalities-item">
        <div class="practicalities-item__image">
          <img
            :src="
              item.img
                ? require(`@/assets/images/${item.img}`)
                : require(`@/assets/images/app/unnamed.png`)
            "
          />
        </div>
        <div class="practicalities-item__content">
          <div class="practicalities-item__title">{{ item.title }}</div>
          <div class="excerpt-content">
            {{ item.excerpt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    list: [Array]
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.page-section__title {
  text-transform: uppercase;
}
.practicalities {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  padding-bottom: 64px;

  &-section {
    background-color: $light-blue-bg;
  }

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(1, 1fr);
  }

  &-item {
    background-color: white;
    border-radius: 4px;
    overflow: hidden;

    &__image {
      img {
        width: 100%;
      }
    }

    &__content {
      padding: 16px 16px 26px;
      font-size: 14px;
      line-height: 22px;
      color: $black;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }

      .excerpt-content {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    &__title {
      color: $dark-blue;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 10px;
      line-height: 22px;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }
    }
  }
}
</style>
