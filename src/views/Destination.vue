<template>
  <div id="destination">
    <SubBanner
      title="Destination"
      type="destination"
      quote="Discover the most attractive destinations of Southeast Asia"
    />
    <div class="heri-container">
      <VideoGrid />
    </div>
    <FeedbackSection />
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import FeedbackSection from "@/components/home/FeedbackSection";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
import VideoGrid from "@/components/VideoGrid";

export default {
  components: {
    SubBanner,
    FeedbackSection,
    PlanTrip,
    BackToTop,
    VideoGrid
  },
  data() {
    return {
      // title: 'About us'
    };
  },
  mounted() {}
};
</script>
