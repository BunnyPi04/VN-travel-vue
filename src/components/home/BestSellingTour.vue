<template>
  <div class="best-selling-tour">
    <div class="container">
      <div class="page-section-head">
        <div class="page-section__title">
          Best Selling Tour Packages 2020
        </div>
        <div class="page-section__comment">
          Many our clients have started the journey to discover Southeast Asia
          with these tour packages
        </div>
      </div>
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
                ({{ item.rateCount }})
              </div>
              <div class="tour-info">
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-calendar"></span>
                  </div>
                  <div class="text">
                    <span class="text-green">{{ item.duration }} Days</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-ticket"></span>
                  </div>
                  <div class="text weight-600">
                    <span>From </span>
                    <span class="text-green">${{ item.tourPrice }} </span>
                    <span>pp</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-location"></span>
                  </div>
                  <div class="text font-smaller">
                    {{ item.tourStartAt }}
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon">
                    <span class="nsy-icon nsy-arrow-right"></span>
                  </div>
                  <div class="text font-smaller">
                    {{ item.tourDestination }}
                  </div>
                </div>
              </div>
              <div class="tour-button">
                <div class="book-button text-right">
                  <button class="golden-gradient-button">Book Now</button>
                </div>
                <div class="text-detail text-left">
                  <router-link to="/package-tour/quy-nhon">
                    Tour detail→
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="explore text-center">
        <a href="">Explore Now</a>
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
</style>
