<template>
  <div id="plan-your-trip">
    <SubBanner
      title="PLAN YOUR TRIP"
      type="planTrip"
      quote="Discover the most attractive destinations of Vietnam"
      img="app/sub-bg-3.png"
    />
    <div class="heri-container">
      <TravelTips />
    </div>
    <Practicalities :list="practicalitiesList" />
    <TravelGuide />
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import TravelTips from "@/components/planTrip/TravelTips";
import BackToTop from "@/components/BackToTop";
import Practicalities from "@/components/planTrip/Practicalities";
import TravelGuide from "@/components/home/TravelGuide";
import practicalitiesList from "@/sampleData/practicalitiesList";

export default {
  components: {
    SubBanner,
    TravelTips,
    BackToTop,
    Practicalities,
    TravelGuide,
    PlanTrip
  },
  data() {
    return {
      practicalitiesList: practicalitiesList["practicalities"]
    };
  },
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
