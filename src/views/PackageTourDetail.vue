<template>
  <div id="destination">
    <SubBanner
      title="Package Tour"
      quote="Discover the hidden beauty of Vietnam"
      img="app/bg-package.png"
    />
    <div class="heri-container">
      <div class="breadcrum">
        <router-link to="/">Home / </router-link>
        <router-link to="/package-tour/">Destination / </router-link>
        {{ tour.name }}
      </div>
      <div class="package-head">
        <h2>{{ tour.name }}</h2>
        <div class="package-info-head">
          <div class="info-item">
            <div class="icon">
              <span class="nsy-icon nsy-calendar"></span>
            </div>
            <label>
              <span class="text-green">{{ tour.duration }}</span>
            </label>
          </div>
          <div class="info-item from">
            <div class="icon">
              <span class="nsy-icon nsy-location"></span>
            </div>
            <label>
              <span class="">{{ tour.from }}</span>
            </label>
          </div>
          <div class="info-item">
            <div class="icon">
              <span class="nsy-icon nsy-arrow-right"></span>
            </div>
            <label>
              <span class="">{{ tour.to }}</span>
            </label>
          </div>
          <div class="info-item">
            <div class="tour__rate">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              ({{ tour.rateCount }})
            </div>
          </div>
        </div>
      </div>

      <div class="package-content">
        <div class="place-carousel">
          <div class="">
            <img :src="showingImage" />
          </div>
          <div>
            <VueSlickCarousel v-bind="settings">
              <div
                v-for="item in images"
                class=""
                :key="item.id"
                @click="showingImage = item.url"
              >
                <div class="product-carousel justify-content-center">
                  <img :src="item.url" />
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
        <div class="place__price__container">
          <div class="place__price">
            <div class="place__price__head">
              <span>From </span><span class="price">$1,560</span
              ><span>USD/PP</span>
            </div>
            <div class="place__price__body">
              <p class="text-center">Check rate your group</p>
              <div class="group">
                <div class="group-item">2 people</div>
                <div class="group-item">4 people</div>
                <div class="group-item">6 people</div>
                <div class="group-item">8 people</div>
              </div>
              <div class="package-info">
                <div>Country:</div>
                <div>{{ tour.country }}</div>
                <div>Guide:</div>
                <div>{{ tour.guide }}</div>
                <div>Travel Style:</div>
                <div>{{ tour.travel_style }}</div>
                <div>Tour Type:</div>
                <div>{{ tour.tour_type }}</div>
                <div>Start:</div>
                <div>{{ tour.from }}</div>
                <div>Finish:</div>
                <div>{{ tour.to }}</div>
              </div>
              <div class="text-center">
                <button
                  class="golden-gradient-button"
                  @click="modalBooking = true"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="package-content">
        <div>
          <div class="heri-tabs">
            <div class="tab-switch">
              <div
                class="tab-switch-item"
                :class="switcher == 1 ? 'switch-active' : ''"
                @click="switcher = 1"
              >
                <span class="nsy-icon nsy-ribbon"></span>
                <span class="tab-text">Overview</span>
              </div>
              <div
                class="tab-switch-item"
                :class="switcher == 2 ? 'switch-active' : ''"
                @click="switcher = 2"
              >
                <span class="nsy-icon nsy-list"></span>
                <span class="tab-text">Full Itinerary</span>
              </div>
              <div
                class="tab-switch-item"
                :class="switcher == 3 ? 'switch-active' : ''"
                @click="switcher = 3"
              >
                <span class="nsy-icon nsy-inclusions"></span>
                <span class="tab-text">Inclusions</span>
              </div>
              <div
                class="tab-switch-item"
                :class="switcher == 4 ? 'switch-active' : ''"
                @click="switcher = 4"
              >
                <span class="nsy-icon nsy-exclusions"></span>
                <span class="tab-text">Exclusions</span>
              </div>
              <div
                class="tab-switch-item"
                :class="switcher == 5 ? 'switch-active' : ''"
                @click="switcher = 5"
              >
                <span class="nsy-icon nsy-notes"></span>
                <span class="tab-text">Notes</span>
              </div>
              <div
                class="tab-switch-item"
                :class="switcher == 6 ? 'switch-active' : ''"
                @click="switcher = 6"
              >
                <span class="nsy-icon nsy-map"></span>
                <span class="tab-text">Route map</span>
              </div>
            </div>
            <div class="content-switch">
              <div v-if="switcher == 1" class="">
                Spend your time together with your family and discover beautiful
                Vietnam in 15 days, you will get a lot of experiences and funs.
                Start the trip in Hanoi - the capital of Vietnam and then
                explore the geography diversity of Vietnam: from mountain areas
                (Sapa) to beautiful beaches in Halong, Hoi An, Nha Trang. The
                tour will finish in Ho Chi Minh city (former Saigon) and then
                you are easy to catch your departure flight to come back home.
              </div>
              <div v-else-if="switcher == 2" class="">
                2
              </div>
              <div v-else-if="switcher == 3" class="">
                3
              </div>
              <div v-else-if="switcher == 4" class="">
                4
              </div>
              <div v-else-if="switcher == 5" class="">
                5
              </div>
              <div v-else class="">
                6
              </div>
            </div>
          </div>
          <div class="place-information">
            <h3>Places you will visit</h3>
            <p>Hanoi / Quy Nhơn</p>
            <h4>Full Itinerary</h4>
            <div class="notice">
              <span class="nsy-icon nsy-notice"></span>
              <span>Notice: B (Breakfast), L (Lunch), D (Dinner)</span>
            </div>

            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle1 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle1 = !toggle1"
                  :value="toggle1"
                />
                <span>Day 1: Quy Nhon Arrival</span>
              </label>
              <div class="wrapper">
                <div class="inner" v-if="toggle1">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle2 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle2 = !toggle2"
                  :value="toggle2"
                />
                <span>Day 2, 3: Quy Nhon relaxing (B)</span>
              </label>
              <div class="wrapper">
                <div class="inner" v-if="toggle2">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle3 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle3 = !toggle3"
                  :value="toggle3"
                />
                <span>Day 4: Quy Nhon departure</span>
              </label>
              <div class="wrapper">
                <div class="inner " v-if="toggle3">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <h4>Inclusions</h4>
            <div class="clusion">
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-inclusions"></span>
                </div>
                <div class="clusion__content">
                  Accommodation based on twin/double sharing with daily
                  breakfast (3* hotel category).
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-inclusions"></span>
                </div>
                <div class="clusion__content">
                  Accommodation based on twin/double sharing with daily
                  breakfast (3* hotel category). Accommodation based on
                  twin/double sharing with daily breakfast (3* hotel category).
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-inclusions"></span>
                </div>
                <div class="clusion__content">
                  All sightseeing tickets.
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-inclusions"></span>
                </div>
                <div class="clusion__content">
                  Vietnam visa approval letter.
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-inclusions"></span>
                </div>
                <div class="clusion__content">
                  Private pick up and drop off service.
                </div>
              </div>
            </div>

            <h4>Exclusions</h4>
            <div class="clusion">
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-exclusions"></span>
                </div>
                <div class="clusion__content">
                  Accommodation based on twin/double sharing with daily
                  breakfast (3* hotel category).
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-exclusions"></span>
                </div>
                <div class="clusion__content">
                  Accommodation based on twin/double sharing with daily
                  breakfast (3* hotel category). Accommodation based on
                  twin/double sharing with daily breakfast (3* hotel category).
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-exclusions"></span>
                </div>
                <div class="clusion__content">
                  All sightseeing tickets.
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-exclusions"></span>
                </div>
                <div class="clusion__content">
                  Vietnam visa approval letter.
                </div>
              </div>
              <div class="clusion__item">
                <div class="clusion__icon">
                  <span class="nsy-icon nsy-exclusions"></span>
                </div>
                <div class="clusion__content">
                  Private pick up and drop off service.
                </div>
              </div>
            </div>

            <h4>Notes</h4>
            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle4 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle4 = !toggle4"
                  :value="toggle4"
                />
                <span>Tour Price</span>
              </label>
              <div class="wrapper">
                <div class="inner" v-if="toggle4">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle5 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle5 = !toggle5"
                  :value="toggle5"
                />
                <span>Deposit</span>
              </label>
              <div class="wrapper">
                <div class="inner" v-if="toggle5">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <div
              class="tour-collapse-item collapse-custom"
              :class="toggle6 ? 'toggle-active' : ''"
            >
              <label class="collapse-title">
                <input
                  type="checkbox"
                  v-on:change="toggle6 = !toggle6"
                  :value="toggle6"
                />
                <span>Clothing & Packing Tips</span>
              </label>
              <div class="wrapper">
                <div class="inner" v-if="toggle6">
                  Greeting at the airport, private pick up to your hotel. Check
                  in hotel and free tiem at your leisure.
                </div>
              </div>
            </div>

            <h4>Route Map</h4>
            <div class="w-100">
              <img class="w-100" src="@/assets/images/app/route_map.png" />
            </div>

            <div class="book-tour-map text-center">
              <button class="golden-gradient-button">Book Now</button>
            </div>

            <TagShare :tags="tags" />
            <ReviewForm />
          </div>
        </div>

        <!-- sidebar -->
        <div>
          <div class="side-widget">
            <div class="widget__head">
              How to book this tour?
            </div>
            <div class="widget__body">
              <div class="list-item">
                <span class="list-num">1</span>
                <span>Send us your inquiry</span>
              </div>
              <div class="list-item">
                <span class="list-num">2</span>
                <span>Dealing with travel consultant</span>
              </div>
              <div class="list-item">
                <span class="list-num">3</span>
                <span>Final tour itinerary and rate</span>
              </div>
              <div class="list-item">
                <span class="list-num">4</span>
                <span>Deposit the tour</span>
              </div>
              <div class="list-item">
                <span class="list-num">5</span>
                <span>Receive the confirmed itinerary</span>
              </div>
              <div class="list-item">
                <span class="list-num">6</span>
                <span>Settle the balance when arrival</span>
              </div>
            </div>
          </div>

          <div class="side-widget">
            <div class="widget__head">
              Why travel with us?
            </div>
            <div class="widget__body">
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>Recommended by 99% of TA users</span>
              </div>
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>Best value for money</span>
              </div>
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>100% private tour</span>
              </div>
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>Professional tour operator</span>
              </div>
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>Tailor made & flexible itinerary</span>
              </div>
              <div class="list-item">
                <span class="nsy-icon nsy-inclusions"></span>
                <span>Free visa approval letter</span>
              </div>
            </div>
          </div>

          <div class="side-widget seller">
            <div class="widget__head">
              Best seller tours
            </div>
            <div class="widget__body">
              <div class="tour-item" v-for="item in bestSeller" :key="item.id">
                <div class="tour__image">
                  <img
                    :src="
                      item.img
                        ? require(`@/assets/images/${item.img}`)
                        : require(`@/assets/images/app/unnamed.png`)
                    "
                  />
                </div>
                <div class="tour__info">
                  <h6>{{ item.name }}</h6>
                  <div class="tour__price">
                    <span>From </span>
                    <span class="price">{{ item.price }} </span>
                    <span>pp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GridTour title="Similar Tour" :itemList="tourList" />
    <PlanTrip />
    <BackToTop />
    <transition name="fade">
      <PackageBookingModal v-if="modalBooking" v-model="modalBooking" />
    </transition>
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import TagShare from "@/components/TagShare";
import ReviewForm from "@/components/ReviewForm";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
import GridTour from "@/components/GridTour";
import PackageBookingModal from "@/components/package/PackageBookingModal";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import tourList from "@/sampleData/tourList";

export default {
  components: {
    SubBanner,
    PlanTrip,
    VueSlickCarousel,
    BackToTop,
    ReviewForm,
    TagShare,
    PackageBookingModal,
    GridTour
  },
  data() {
    return {
      switcher: 1,
      modalBooking: false,
      tourList: tourList["tourList"],
      tour: {
        name: "Quy Nhon Beach Escape",
        duration: "21 Days",
        from: "Hanoi, Vietnam",
        to: "Quy Nhơn, Vietnam",
        rate: "5",
        rateCount: "124",
        banner: "",
        country: "Vietnam",
        guide: "English Speaking",
        travel_style: "Culture & Classic",
        tour_type: "Private Tour Package",
        content:
          "<p>Legend claims in the mid-15th century Heaven sent Emperor Le Thai To (Le Loi) a magical sword which he used to drive the Chinese from Vietnam. After the war a giant golden turtle grabbed the sword and disappeared into the depths to restore the sword to its divine owners, inspiring the name Ho Hoan Kiem (Lake of the Restored Sword). Every morning at around 6am local residents practise traditional t’ai chi on the shore.</p><p>Ngoc Son Temple sits on an island in Hoan Kiem lake. The ramshackle Thap Rua (Turtle Tower), on an islet near the southern end, is topped with a red star and is often used as an emblem of Hanoi.</p>"
      },
      images: [
        {
          id: 1,
          url: "https://placem.at/places?w=800&h=800&random=1"
        },
        {
          id: 2,
          url: "https://placem.at/places?w=1200&h=400&random=2"
        },
        {
          id: 3,
          url: "https://placem.at/places?w=800&h=800&random=3"
        },
        {
          id: 4,
          url: "https://placem.at/places?w=800&h=800&random=4"
        },
        {
          id: 5,
          url: "https://placem.at/places?w=800&h=800&random=5"
        },
        {
          id: 6,
          url: "https://placem.at/places?w=800&h=800&random=6"
        },
        {
          id: 7,
          url: "https://placem.at/places?w=800&h=800&random=7"
        },
        {
          id: 8,
          url: "https://placem.at/places?w=800&h=800&random=8"
        },
        {
          id: 9,
          url: "https://placem.at/places?w=800&h=800&random=9"
        }
      ],
      placeList: [
        {
          id: 1,
          name: "Hoan Kiem Lake",
          image: "https://placem.at/places?w=800&h=800&random=1"
        },
        {
          id: 2,
          name: "HO CHI MINH’S MAUSOLEUM",
          image: "https://placem.at/places?w=800&h=800&random=8"
        },
        {
          id: 3,
          name: "MUSEUM OF WOMEN",
          image: "https://placem.at/places?w=800&h=800&random=3"
        },
        {
          id: 4,
          name: "NGOC SON TEMPLE",
          image: "https://placem.at/places?w=800&h=800&random=4"
        }
      ],
      tags: [
        {
          id: 1,
          name: "4 Days"
        },
        {
          id: 2,
          name: "Vietnam"
        },
        {
          id: 3,
          name: "tour"
        },
        {
          id: 4,
          name: "beach"
        },
        {
          id: 5,
          name: "Quy Nhơn"
        },
        {
          id: 6,
          name: "beach"
        }
      ],
      settings: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: false,
        dotsClass: "slick-dots",
        // centerMode: true,
        prevArrow:
          "<a class='slick-arrow__left' href='#tesmonial-slide'><span class='nsy-icon nsy-slide-arrow-left'></span></a>",
        nextArrow:
          "<a class='slick-arrow__right' href='#tesmonial-slide'><span class='nsy-icon nsy-slide-arrow-right'></span></a>",
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      },
      bestSeller: [
        {
          id: 1,
          name: "Essence of Vietnam",
          img: "app/post1.png",
          price: "2,136"
        },
        {
          id: 2,
          name: "Taste of Vietnam",
          img: "app/post1.png",
          price: "2,136"
        },
        {
          id: 3,
          name: "Vietnam Discovery",
          img: "app/post1.png",
          price: "2,136"
        },
        {
          id: 4,
          name: "Amazing Vietnam",
          img: "app/post1.png",
          price: "2,136"
        },
        {
          id: 5,
          name: "Vietnam Family Holiday",
          img: "app/post1.png",
          price: "2,136"
        }
      ],
      showingImage: "",
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      toggle6: false,
      toggle7: false
    };
  },
  mounted() {},
  created() {
    if (this.images) {
      this.showingImage = this.images[0].url;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.package-head {
  h2 {
    color: $dark-blue;
    font-family: "Antonio";
    font-weight: bold;
    font-size: 32px;
    line-height: 46px;
    text-align: center;
    margin-bottom: 12.5px;
  }

  .package-info-head {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;

    .icon {
      margin-right: 10px;

      .nsy-icon {
        width: 24px;
        height: 24px;
      }
    }

    .info-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 24px;
      font-size: 14px;
      line-height: 19px;

      &.from {
        margin-right: 5px;
      }

      label {
        margin-bottom: 0;
      }
    }
  }
}
.package-content {
  // display: flex;
  // gap: 24px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
  margin-bottom: 40px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(1, 1fr);
  }

  .place-carousel {
    flex: 2;
  }

  .place {
    &__price {
      background-color: $light-blue-bg;
      border: 1px solid $border-blue;
      width: 100%;
      padding: 16px 24px 32px;

      &__container {
        flex: 1;
      }

      &__head {
        text-transform: uppercase;
        text-align: center;
        font-size: 14px;
        line-height: 19px;
        padding-bottom: 25px;
        border-bottom: 1px solid $grey;

        .price {
          color: $green;
          font-size: 32px;
          line-height: 44px;
          font-weight: 600;
          margin-right: 8px;
          margin-left: 8px;
        }
      }

      &__body {
        margin-top: 24px;

        @include breakpoint-down(tablet) {
          width: 400px;
          margin: 0 auto;
        }

        p {
          margin-bottom: 13px;
        }

        .group {
          display: grid;
          grid-gap: 5px;
          grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));

          &-item {
            text-align: center;
            border: 1px solid $green;
            color: $green;
            padding-top: 11px;
            padding-bottom: 11px;
            background-color: white;
            line-height: 17px;
            font-size: 13px;
            border-radius: 4px;
          }
        }

        .package-info {
          display: grid;
          grid-template-columns: auto auto;
          margin-top: 16px;
          font-size: 14px;
          line-height: 28px;

          > div:nth-of-type(odd) {
            font-weight: 600;
            color: $grey-2;
          }
        }

        .golden-gradient-button {
          margin-top: 24px;

          @include breakpoint-down(tablet) {
            width: 224px;
          }
        }
      }
    }
  }
}

.place-carousel {
  img {
    width: 100%;
    border-radius: 4px;
  }
}
.product-carousel {
  // width: 133px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  padding: 0 4px;

  img {
    width: 100%;
  }
}

::v-deep .slick-slider {
  width: 742px;
  margin-top: 16px;
  position: relative;

  @include breakpoint-down(tablet) {
    width: calc(100vw - 48px);
  }

  .slick-prev {
    z-index: 2;
    left: 16px;
  }

  .slick-next {
    z-index: 2;
    right: 16px;
  }

  .slick-arrow {
    opacity: 1;
    width: 24px;
    height: 24px;

    &:before {
      content: "";
      background-image: url("~@/assets/images/app/icon/arrow_right.svg");
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      display: block;
      background-size: cover;
      opacity: 1;
    }
  }

  .slick-prev {
    &:before {
      transform: rotate(180deg);
    }
  }
}
::v-deep .slick-list {
  margin-left: -4px;

  .product-carousel {
    background-color: white;
  }

  .slick-slide {
    img {
      // opacity: 1;
    }
    // width: 133px;

    &:not(.slick-current) {
      position: relative;

      img {
        // opacity: 0.5;
      }

      // &:after {
      //   content: '';
      //   width: 100%;
      //   height: 100%;
      //   left: 0;
      //   top: 0;
      //   position: absolute;
      //   background-color: white;
      //   opacity: 0.3;
      //   display: block;
      // }
    }
  }
}

.heri-tabs {
  margin-top: 20px;

  .content-switch {
    padding-top: 24px;
    font-size: 14px;
    font-weight: 600;
    color: $grey-2;
    line-height: 22px;
    padding-bottom: 32px;
  }
}

.tab-switch {
  display: flex;
  flex-direction: row;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: $grey;
    z-index: -1;
  }

  &-item {
    padding: 10.5px 12.5px;
    color: $grey-2;
    // border-bottom: 1px solid $grey-2;
    // transition-property: all;
    // transition-duration: 0.5s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 14px;

    @include breakpoint-down(tablet) {
      font-size: 13px;
    }

    &:after {
      content: "";
      color: $red;
      transition-duration: 0.5s;
      position: absolute;
      bottom: 0;
      transform: translateX(0);
      left: -100%;
      transition-property: all;
      background-color: $red;
      width: 100%;
      height: 1px;
      z-index: 2;
    }

    &:hover {
      color: $red;

      &:after {
        transform: translateX(100%);
      }

      .nsy-icon {
        background: linear-gradient(90.72deg, $red 0%, #ff8080 100%);
      }
    }

    &.switch-active {
      color: $red;
      // border-bottom: 1px solid $red;

      &:after {
        transform: translateX(100%);
      }

      .nsy-icon {
        background: linear-gradient(90.72deg, $red 0%, #ff8080 100%);
      }
    }

    .nsy-icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      background: linear-gradient(90.72deg, $grey 0%, $grey 100%);
      // transition-property: all;
      // transition-duration: 0.5s;
    }
  }
}
.place-information {
  h3 {
    text-align: center;
    color: $dark-blue;
    font-size: 24px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 18px;
  }

  p {
    color: $green;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }

  h4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 22px;
    color: $dark-blue;
    margin-top: 42px;
    margin-bottom: 19px;
  }

  .notice {
    color: $grey-2;
    font-style: italic;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    line-height: 22px;
    padding-bottom: 25px;

    .nsy-icon {
      background-color: $grey-2;
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
}

img {
  border-radius: 4px;
}

.book-tour-map {
  padding: 40px 0px 37px;

  button {
    font-size: 14px;
    padding: 14.5px 50.5px;
  }
}
</style>
