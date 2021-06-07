<template>
  <div id="plan-your-trip">
    <SubBanner
      title="NEWS"
      quote="Unrivaled expertise for unique travel experiences"
      img="app/bg-news.png"
    />
    <div class="heri-container news-list">
      <NewsPagination :newsList="newsList" />
    </div>
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import TravelTips from "@/components/planTrip/TravelTips";
import BackToTop from "@/components/BackToTop";
import newsList from "@/sampleData/newsList";
import NewsPagination from "@/components/NewsPagination";

export default {
  components: {
    SubBanner,
    TravelTips,
    BackToTop,
    NewsPagination,
    PlanTrip
  },
  data() {
    return {
      newsList: newsList["newsList"]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.news-list {
  padding-bottom: 0px;
}
</style>
