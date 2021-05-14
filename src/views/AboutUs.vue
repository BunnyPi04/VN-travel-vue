<template>
  <div id="about-us">
    <SubBanner
      title="About us"
      type="about"
      quote="Some information to help you know us more"
    />
    <WhoWeAre />
    <WhyUs />
    <FeedbackSection />
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import FeedbackSection from "@/components/home/FeedbackSection";
import PlanTrip from "@/components/home/PlanTrip";
import WhoWeAre from "@/components/aboutUs/WhoWeAre";
import WhyUs from "@/components/aboutUs/WhyUs";
import BackToTop from "@/components/BackToTop";

export default {
  components: {
    SubBanner,
    FeedbackSection,
    PlanTrip,
    WhoWeAre,
    WhyUs,
    BackToTop
  },
  data() {
    return {
      // title: 'About us'
    };
  },
  mounted() {}
};
</script>
