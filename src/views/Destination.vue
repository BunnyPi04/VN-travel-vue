<template>
  <div id="destination">
    <SubBanner
      title="Destination"
      type="destination"
      quote="Discover the most attractive destinations of Southeast Asia"
    />
    <div class="heri-container">
      <div class="heri-tabs">
        <div class="tab-switch">
          <div
            class="tab-switch-item"
            :class="switcher == 1 ? 'switch-active' : ''"
            @click="switcher = 1"
          >
            North Vietnam
          </div>
          <div
            class="tab-switch-item"
            :class="switcher == 2 ? 'switch-active' : ''"
            @click="switcher = 2"
          >
            Central Vietnam
          </div>
          <div
            class="tab-switch-item"
            :class="switcher == 3 ? 'switch-active' : ''"
            @click="switcher = 3"
          >
            South Vietnam
          </div>
        </div>
        <div class="content-switch">
          <div v-if="switcher == 1" class="">
            <IntroDestination :title="introTitle1" :content="content1" />
          </div>
          <div v-else-if="switcher == 2" class="">
            <IntroDestination :title="introTitle2" :content="content1" />
          </div>
          <div v-else class="">
            <IntroDestination :title="introTitle3" :content="content1" />
          </div>
        </div>
      </div>
      <CityHighlightGrid />
      <GalleryGrid />
      <VideoGrid />
    </div>
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
import CityHighlightGrid from "@/components/CityHighlightGrid";
import VideoGrid from "@/components/VideoGrid";
import GalleryGrid from "@/components/GalleryGrid";
import IntroDestination from "@/components/IntroDestination";

export default {
  components: {
    SubBanner,
    PlanTrip,
    BackToTop,
    IntroDestination,
    CityHighlightGrid,
    GalleryGrid,
    VideoGrid
  },
  data() {
    return {
      switcher: 1,
      introTitle1: "North Vietnam",
      introTitle2: "Central Vietnam",
      introTitle3: "South Vietnam",
      content1:
        "<p>Modern day Vietnam is a feast for the senses and the sights, tastes, smells and sounds you will experience during a visit to Vietnam will bring you a profound feeling of peace, optimism and exuberance.</p><p>It’s amazing to think that back in 1969 Danang airport was the busiest ‘single runway’ airport in the world. This extraordinary fact highlights the awful scale of one of the 20th century’s most notorious wars.</p><p>However, today the country’s 3,444 kilometre coastline boasts some of the world’s most luxurious resorts. Danang, along with a handful of other locations, has a gleaming new airport. It enables visitors to discover a dynamic land rich in culture with some of the freshest and tastiest food anywhere in the world.</p><p>From the latticed mountains in the North, the dramatic rivers and caves in the Centre and the pristine beaches and tropical islands in the South, Vietnam’s natural landscape has something for anyone wanting to find a revitalizing escape.</p>"
    };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.tab-switch {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 24px;
  margin-top: 32px;
  margin-bottom: 32px;

  &-item {
    text-align: center;
    padding: 21px;
    border-radius: 4px;
    color: $light-grey;
    border: 1px solid $grey;
    font-weight: 600;
    cursor: pointer;
    background-color: white;
    transition-duration: 0.5s;
    transition-property: all;
    background: linear-gradient(130.3deg, white -5.64%, white 104.06%);

    &:hover {
      box-shadow: $box-shadow;
    }

    &.switch-active {
      color: $ink;
      border: none;
      background: linear-gradient(130.3deg, #cba054 -5.64%, #ffe381 104.06%);
    }
  }
}
</style>
