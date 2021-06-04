<template>
  <div class="tag-share-section">
    <div class="tag-container">
      <div class="title">
        Tags:
      </div>
      <div class="tag-list">
        <div class="tag-item" v-for="item in tags" :key="item.id">
          {{ item.name }}
        </div>
      </div>
    </div>

    <div class="share-container">
      <div class="title">
        Share:
      </div>
      <div class="share-list">
        <a class="share-item">
          <img src="~@/assets/images/app/icon/ic_facebook.svg" />
        </a>
        <a class="share-item">
          <img src="~@/assets/images/app/icon/ic_youtube.svg" />
        </a>
        <a class="share-item">
          <img src="~@/assets/images/app/icon/ic_instagram.svg" />
        </a>
        <a class="share-item">
          <img src="~@/assets/images/app/icon/ic_twitter.svg" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: [Array]
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.tag-share-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  padding-bottom: 37px;

  .tag {
    &-list {
      // display: flex;
      // gap: 8px;
    }

    &-item {
      background-color: $light-blue-bg;
      color: $ink;
      padding: 5.5px 12px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 20px;
      float: left;
      margin-right: 8px;
      margin-bottom: 12px;
    }

    &-container {
      display: flex;

      .title {
        line-height: 19px;
        color: $grey-2;
        font-size: 14px;
        font-weight: 600;
        padding: 5.5px;
        margin-right: 12px;
      }
    }
  }

  .share {
    &-container {
      display: flex;
      justify-content: flex-end;
      // gap: 8px;

      .title {
        line-height: 19px;
        color: $grey-2;
        font-size: 14px;
        font-weight: 600;
        padding: 5.5px;
        margin-right: 12px;
      }
    }

    &-list {
      display: flex;
      gap: 14px;
    }

    &-item {
      width: 33px;
      height: 33px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
