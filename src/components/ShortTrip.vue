<template>
  <div class="best-selling-short-trip">
    <div class="container">
      <div class="page-section-head">
        <div class="page-section__title">
          {{ title }}
        </div>
        <div class="page-section__comment">
          {{ quote }}
        </div>
      </div>
      <div class="page-section-main product-selling__list-container">
        <div class="short-tour-list-container">
          <div class="tour-list">
            <div class="filter-bar">
              <div class="filter-bar__item">
                <div class="filter-bar__label">Short by</div>
                <VueSelect
                  class="vue-select2"
                  name="select2"
                  :searchable="false"
                  :single="true"
                  :options="options1"
                >
                </VueSelect>
              </div>
              <div class="filter-bar__item">
                <div class="filter-bar__label">Display</div>
                <VueSelect
                  class="vue-select2"
                  name="select2"
                  :searchable="false"
                  :single="true"
                  :options="options2"
                >
                </VueSelect>
                <span>results</span>
              </div>
            </div>
            <div class="tour-list-container grid-container">
              <div
                v-for="tourItem in viewList"
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
                  <div class="product__content__title text-left">
                    {{ tourItem.id }} {{ tourItem.name }}
                  </div>
                  <div class="product__content__rate">
                    <StarRate
                      :star="parseInt(tourItem.rate)"
                      :disabled="true"
                    />
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
                          <span v-if="parseInt(tourItem.duration) < 2"
                            >Day </span
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
                        <span class="text-green"
                          >${{ tourItem.tourPrice }}</span
                        >
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
                      <router-link to="/destinations/city-highlight"
                        >Tour detail</router-link
                      >
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <pagination
              :total-pages="totalPage"
              :total="itemList.length"
              :per-page="perPage"
              :current-page="currentPage"
              :maxVisibleButtons="5"
              @pagechanged="onPageChange"
            />
            <!-- <div class="product__list tour" v-for="item in itemList.slice(0, 3)" :key="item.id">
            <div class="product__item">
              <div class="product__image">
                <img :src="item.img
                  ? require(`@/assets/images/${item.img}`)
                  : require(`@/assets/images/app/unnamed.png`)">
              </div>
              <div class="product__content">
                <div class="product__content__title">
                  {{ item.name }}
                </div>
                <div class="product__content__rate">
                  <StarRate :star="parseInt(item.rate)" :disabled="true"/>
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
                    <a href="#">Tour detail</a> →
                  </div>
                </div>
              </div>
            </div>
            </div> -->
          </div>
        </div>
        <div class="widget">
          <TourFilter />
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
// import TourPagination from "@/components/TourPagination";
import TourFilter from "@/components/TourFilter";
import Pagination from "@/components/Pagination";
import VueSelect from "vue-select";
export default {
  components: {
    StarRate,
    TourFilter,
    Pagination,
    VueSelect
    // TourPagination
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    quote: {
      type: String,
      default: null
    },
    itemList: [Array]
  },
  data() {
    return {
      options1: [
        {
          label: "name1",
          value: "value1"
        },
        {
          label: "name2",
          value: "value2"
        },
        {
          label: "name3",
          value: "value3"
        }
      ],
      options2: [
        {
          label: "Hanoi",
          value: "value1"
        },
        {
          label: "Da Nang",
          value: "value2"
        },
        {
          label: "HCM",
          value: "value3"
        },
        {
          label: "Da lat",
          value: "value3"
        }
      ],
      viewList: [],
      perPage: 8,
      currentPage: 1
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.itemList.length / this.perPage);
    }
  },
  created() {
    let range = [];
    this.currentPage = 1;

    let offset = this.perPage * (this.currentPage - 1);

    let last =
      offset + this.perPage < this.itemList.length - 1
        ? offset + this.perPage - 1
        : this.itemList.length;

    for (let i = offset; i <= last; i += 1) {
      range.push(this.itemList[i]);
    }

    this.viewList = range;
  },
  methods: {
    onPageChange(page) {
      let range = [];
      this.currentPage = page;

      let offset = this.perPage * (this.currentPage - 1);

      let last =
        offset + this.perPage < this.itemList.length - 1
          ? offset + this.perPage - 1
          : this.itemList.length - 1;

      for (let i = offset; i <= last; i += 1) {
        range.push(this.itemList[i]);
      }

      this.viewList = range;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.best-selling-short-trip {
  background-color: $light-blue-bg;

  .product-selling__list-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 24px;

    .tour-list {
      &-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
      }
      // display: grid;
      // grid-template-columns: repeat(2, 1fr);
      // grid-gap: 24px;
    }
  }
}

.tour-list-container {
  // grid-template-columns: repeat(4, 1fr);
  padding: 0 5px 10px;
  // display: flex !important;
  // flex-direction: column;

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
        font-size: 14px;
        margin-top: 0;
        &:not(:first-child) {
          // margin-top: 18px;
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

::v-deep .v-select {
  min-width: 160px;
  position: relative;
  background-color: white;

  .vs {
    &__dropdown-toggle {
      // position: relative;
    }

    &__actions {
      display: flex;
      align-items: center;
      padding: 4px 17px 0 3px;
    }

    &__selected-options {
      display: flex;
      flex-basis: 100%;
      flex-grow: 1;
      flex-wrap: wrap;
      padding: 0 2px;
      position: relative;
    }

    &__dropdown-toggle {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: flex;
      background: none;
      border: 1px solid rgba(60, 60, 60, 0.26);
      border-radius: 4px;
      cursor: pointer;
      white-space: normal;
      min-height: 40px;
    }

    &__search,
    .vs__search:focus {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      line-height: 1.4;
      font-size: 1em;
      border: 1px solid transparent;
      border-left: none;
      outline: none;
      margin: 4px 0 0;
      padding: 0 7px;
      background: none;
      box-shadow: none;
      width: 0;
      max-width: 100%;
      flex-grow: 1;
      z-index: 1;
    }

    &__selected {
      display: flex;
      align-items: center;
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      color: $black;
      line-height: 1.4;
      padding: 0 0.25em;
      z-index: 0;
      padding: 10px;
    }

    &__clear {
      fill: rgba(60, 60, 60, 0.5);
      padding: 0;
      border: 0;
      background-color: transparent;
      cursor: pointer;
      margin-right: 8px;
    }

    &__open-indicator {
      fill: rgba(60, 60, 60, 0.5);
      transform: scale(1);
      transition: transform 0.15s cubic-bezier(1, -0.115, 0.975, 0.855);
      transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
    }
  }

  ul {
    list-style: none;
    border: 1px solid rgba(60, 60, 60, 0.26);
    padding-left: 0px;
    margin-bottom: 0;
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    background-color: white;

    li {
      color: $ink !important;
      cursor: pointer;
      text-align: left;
      padding: 7px 10px;

      &:hover {
        background-color: $light-blue-bg;
      }
    }
  }
}
::v-deep .rate-star {
  display: inline-block;
}
</style>
