<template>
  <div class="gallery-grid-section collapse-custom">
    <label class="collapse-title">
      <input type="checkbox" v-on:change="toggle = !toggle" :value="toggle" />
      <span>Tours</span>
    </label>

    <div class="wrapper">
      <transition name="slide">
        <div>
          <!-- <VueSelect class="vue-select2" name="select2"
            :options="options2"
            >
          </VueSelect> -->
          <div class="tour-list-container grid-container" v-if="toggle">
            <div
              v-for="tourItem in tourList"
              class="tour-item"
              :key="tourItem.id"
            >
              <div class="product__image">
                <img
                  :src="
                    tourItem.img
                      ? require(`@/assets/images/${tourItem.img}`)
                      : require(`@/assets/images/app/unnamed.png`)
                  "
                />
              </div>
              <div class="product__content">
                <div class="product__content__title">
                  {{ tourItem.name }}
                </div>
                <div class="product__content__rate">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  ({{ tourItem.rateCount }})
                </div>
                <div class="tour-info">
                  <div class="info-item">
                    <div class="icon">
                      <span class="nsy-icon nsy-calendar"></span>
                    </div>
                    <div class="text">
                      <span class="text-green"
                        >{{ tourItem.duration }}
                        <span v-if="parseInt(tourItem.duration) < 2">Day </span
                        ><span v-else>Days</span></span
                      >
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="icon">
                      <span class="nsy-icon nsy-ticket"></span>
                    </div>
                    <div class="text weight-600">
                      <span>From </span>
                      <span class="text-green">${{ tourItem.tourPrice }}</span>
                      <span> pp</span>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="icon">
                      <span class="nsy-icon nsy-location"></span>
                    </div>
                    <div class="text font-smaller">
                      {{ tourItem.tourStartAt }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="icon">
                      <span class="nsy-icon nsy-arrow-right"></span>
                    </div>
                    <div class="text font-smaller">
                      {{ tourItem.tourDestination }}
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
            <!-- <VPagination :pages="pages" :currentPage.sync="currentPage" /> -->
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import VPagination from "./VPagination";
// import VueSelect from "vue-select2";
export default {
  components: {
    VPagination
    // VueSelect
  },
  props: {
    tourList: [Array]
    // itemsPerPage: {
    //   type: Number,
    //   required: false,
    //   default: 10
    // }
  },
  data() {
    return {
      toggle: true,
      options2: [
        {
          text: "name1",
          value: "value1"
        },
        {
          text: "name2",
          value: "value2"
        },
        {
          text: "name3",
          value: "value3"
        }
      ]
      // currentPage: 1
    };
  },
  computed: {
    // listConfig() {
    //   const filters = {
    //     offset: (this.currentPage - 1) * this.itemsPerPage,
    //     limit: this.itemsPerPage
    //   };
    // },
    // pages() {
    //   if (this.tourList.length <= this.itemsPerPage) {
    //     return [];
    //   }
    //   return [
    //     ...Array(Math.ceil(this.tourList.length / this.itemsPerPage)).keys()
    //   ].map(e => e + 1);
    // },
  },
  watch: {
    // currentPage(newValue) {
    //   this.listConfig.filters.offset = (newValue - 1) * this.itemsPerPage;
    // },
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.tour-list-container {
  grid-template-columns: repeat(4, 1fr);
  padding: 0 5px 10px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(1, 1fr);
  }

  .product {
    &__image {
      img {
        width: 100%;
      }
    }

    &__content {
      padding: 16px 24px 32px;

      &__title {
        font-size: 16px;
      }

      .nsy-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .info-item {
        &:not(:first-child) {
          margin-top: 18px;
        }
      }
    }
  }

  .tour {
    &-item {
      box-shadow: $box-shadow;
      background-color: white;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
