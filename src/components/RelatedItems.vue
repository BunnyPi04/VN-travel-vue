<template>
  <div class="related-section">
    <div class="page-section-head">
      <div class="page-section__title">
        {{ title }}
      </div>
      <hr />
    </div>
    <div class="page-related heri-container">
      <div v-for="item in itemList" class="w-100" :key="item.id">
        <div class="justify-content-center">
          <img :src="item.image" />
        </div>
        <div class="place-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    itemList: [Array]
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.page-section-head {
  padding-top: 48px;
  text-transform: uppercase;

  .page-section__title {
    font-size: 24px;
    line-height: 22px;
    padding-bottom: 0;
  }
}

hr {
  width: 63px;
  height: 2px;
  background-color: $ink;
  margin-top: 16px;
  margin-bottom: 16px;
}

.page-related {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin-bottom: 42px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    width: 100%;
    border-radius: 4px;
  }

  .place-name {
    color: $dark-blue;
    font-size: 16px;
    font-weight: bold;
    line-height: 22px;
    margin-top: 24px;
    text-transform: uppercase;

    @include breakpoint-down(tablet) {
      margin-top: 16px;
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
