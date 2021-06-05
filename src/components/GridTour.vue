<template>
  <div class="similar-section">
    <div class="page-section-head">
      <div class="page-section__title">
        {{ title }}
      </div>
      <hr />
    </div>
    <div class="page-similar heri-container">
      <div class="page-section-main product-selling__list-container">
        <div
          class="product__list tour"
          v-for="item in itemList.slice(0, 3)"
          :key="item.id"
        >
          <div class="product__item">
            <div class="product__image">
              <img
                :src="
                  item.img
                    ? require(`@/assets/images/${item.img}`)
                    : require(`@/assets/images/app/unnamed.png`)
                "
              />
            </div>
            <div class="product__content">
              <div class="product__content__title">
                {{ item.name }}
              </div>
              <div class="product__content__rate">
                <StarRate :star="parseInt(item.rate)" :disabled="true" />
                (120)
              </div>
              <div class="tour-info">
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-calendar"></span>
                  </div>
                  <div class="text">
                    <span class="text-green">21 Days</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-ticket"></span>
                  </div>
                  <div class="text weight-600">
                    <span>From</span>
                    <span class="text-green">$2,136</span>
                    <span>pp</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-location"></span>
                  </div>
                  <div class="text font-smaller">
                    Hanoi, Vietnam
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-arrow-right"></span>
                  </div>
                  <div class="text font-smaller">
                    Vientiane, Laos
                  </div>
                </div>
              </div>
              <div class="tour-button">
                <div class="book-button text-right">
                  <button class="golden-gradient-button">Book Now</button>
                </div>
                <div class="text-detail text-left">
                  <a href="#">Tour detail</a> →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRate from "@/components/StarRate";
export default {
  components: {
    StarRate
  },
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
.similar-section {
  background-color: $light-blue-bg;
  padding-bottom: 64px;
}
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

.page-similar {
  display: grid;
  // grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  margin-bottom: 42px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(1, 1fr);
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
