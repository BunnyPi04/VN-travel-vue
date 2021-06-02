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
        <div class="place__price">
          <div class="place__title">
            <h3>{{ tour.place }}</h3>
          </div>
          <div class="place__content" v-html="tour.content"></div>
        </div>
      </div>
    </div>
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
// import ProductCarousel from 'vue-product-carousel';
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  components: {
    SubBanner,
    PlanTrip,
    VueSlickCarousel,
    BackToTop
  },
  data() {
    return {
      switcher: 1,
      tour: {
        name: "Quy Nhon Beach Escape",
        duration: "21 Days",
        from: "Hanoi, Vietnam",
        to: "Quy Nhơn, Vietnam",
        rate: "5",
        rateCount: "124",
        banner: "",
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
      settings: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        dotsClass: "slick-dots",
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
      showingImage: ""
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
  display: flex;
  gap: 24px;

  .place-carousel {
    flex: 2;
  }

  .place {
    &__price {
      flex: 1;
    }
  }
}
// .city-content {
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-gap: 24px;

//   @include breakpoint-down(tablet) {
//     grid-template-columns: repeat(1, 1fr);
//   }

//   .city-banner {
//     margin-bottom: 24px;

//     img {
//       width: 100%;
//       border-radius: 4px;
//     }
//   }

//   .city-intro {
//     font-size: 14px;
//     margin-bottom: 24px;

//     img {
//       max-width: 100%;
//     }
//   }

//   .place {
//     &__title {
//       h3 {
//         color: $dark-blue;
//         text-transform: uppercase;
//         font-size: 24px;
//         font-weight: 600;
//         line-height: 22px;
//         margin-top: 15px;

//         @include breakpoint-down(tablet) {
//           font-size: 16px;
//           margin-top: 0;
//         }
//       }
//     }

//     &__content {
//       font-size: 13px;
//     }
//   }
// }
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
  width: 557px;
  margin-top: 12px;
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

  .slick-slide {
    // width: 133px;

    :not(.slick-current) {
      position: relative;

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
</style>
