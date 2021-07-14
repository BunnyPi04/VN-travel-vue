<template>
  <div class="feedback-section">
    <div class="page-section-head">
      <div class="page-section__title">
        Feedback from our customers
      </div>
      <div class="page-section__comment">
        See all feedback of our customers, they tell you about their trips!
      </div>
    </div>
    <div class="page-tesmonial">
      <div id="tesmonial-slide">
        <!-- The slideshow -->
        <div class="heri-container">
          <VueSlickCarousel v-bind="settings">
            <!-- <div class="home-slick"> -->
            <div
              class="group-carousel__item"
              v-for="item in itemList"
              :key="item.id"
            >
              <div
                class="group-carousel__item-image row justify-content-center"
              >
                <img class="col-md-6" :src="item.img" />
              </div>
              <div class="group-carousel__item-title">
                {{ item.name }}
              </div>
              <div class="group-carousel__item-dob">
                14.01.2021
              </div>
              <div class="text-center group-carousel__item-intro">
                {{ item.description }}
              </div>
            </div>
            <!-- </div> -->
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "FeedbackSection",
  components: {
    VueSlickCarousel
  },
  props: {
    itemList: [Array]
  },
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
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
              dots: true
            }
          }
        ]
      }
    };
  }
};
</script>
