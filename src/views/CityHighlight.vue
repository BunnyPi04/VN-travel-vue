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
        <router-link to="/destination/">Destination / </router-link>
        {{ city_info.name }}
      </div>
      <div class="city-content">
        <div class="city-banner">
          <img src="@/assets/images/app/city.png" />
        </div>
        <div class="city-intro" v-html="city_info.content1"></div>
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

export default {
  components: {
    SubBanner,
    PlanTrip,
    BackToTop
  },
  data() {
    return {
      switcher: 1,
      city_info: {
        name: "Hanoi",
        banner: "",
        content1:
          "The capital of Vietnam, Hanoi is the second most populous city in the country with approximately 4 million people. The history and culture of Vietnam is clearly on display. Excellent Vietnamese cuisine, vibrant street-life, contemporary art galleries and French architecture combine to form a unique blend of old and new, Asian and European. Despite recent rapid development, the city has retained much of its traditional identity. Physically the lakes and Old Quarter still retain a wonderful sense of timeless grace and much of its population continues to observe centuries old customs and festivals."
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
</style>
