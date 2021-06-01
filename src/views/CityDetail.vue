<template>
  <div id="destination">
    <SubBanner
      title="Destination"
      type="destination"
      quote="Discover the most attractive destinations of Southeast Asia"
    />
    <div class="heri-container">
      <div class="breadcrum">
        <router-link to="/">Home / </router-link>
        <router-link to="/destinations/">Destination / </router-link>
        <router-link to="/destinations/city-highlight/">{{
          city_info.name
        }}</router-link>
        {{ city_info.place }}
      </div>
      <div class="city-content">
        <!-- <ProductCarousel :images="images"></ProductCarousel> -->
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="item in images"
            class="group-carousel__item"
            :key="item.id"
          >
            <div class="product-carousel row justify-content-center">
              <img :src="item.url" />
            </div>
          </div>
        </VueSlickCarousel>
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
import CityPagination from "@/components/destination/CityPagination";
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
    CityPagination,
    // ProductCarousel,
    VueSlickCarousel,
    BackToTop
  },
  data() {
    return {
      switcher: 1,
      city_info: {
        name: "Hanoi",
        banner: "",
        place: "Hoan Kiem lake",
        content1:
          "The capital of Vietnam, Hanoi is the second most populous city in the country with approximately 4 million people. The history and culture of Vietnam is clearly on display. Excellent Vietnamese cuisine, vibrant street-life, contemporary art galleries and French architecture combine to form a unique blend of old and new, Asian and European. Despite recent rapid development, the city has retained much of its traditional identity. Physically the lakes and Old Quarter still retain a wonderful sense of timeless grace and much of its population continues to observe centuries old customs and festivals."
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
      settings: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dotsClass: "slick-dots",
        centerMode: true,
        focusOnSelect: true,
        prevArrow:
          "<a class='slick-arrow__left' href='#tesmonial-slide'><span class='nsy-icon nsy-slide-arrow-left'></span></a>",
        nextArrow:
          "<a class='slick-arrow__right' href='#tesmonial-slide'><span class='nsy-icon nsy-slide-arrow-right'></span></a>",
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
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
      }
    };
  },
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.city-content {
  .city-banner {
    margin-bottom: 24px;

    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  .city-intro {
    font-size: 14px;
    margin-bottom: 24px;

    img {
      max-width: 100%;
    }
  }
}
.product-carousel {
  width: 133px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
  }
}
</style>
