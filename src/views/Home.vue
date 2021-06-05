<template>
  <div class="home-page">
    <HomeBanner />
    <!-- <router-view></router-view> -->
    <BestSellingTour :itemList="tourList" />
    <BestSellingTrip />
    <QuoteSection />
    <FeedbackSection />
    <OurProducts />
    <PlanTrip />
    <TravelGuide />
    <BackToTop />
  </div>
</template>

<script>
// import SlickCarousel from "slick-carousel";
import HomeBanner from "@/components/home/HomeBanner";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BestSellingTrip from "@/components/home/BestSellingTrip";
import BestSellingTour from "@/components/home/BestSellingTour";
import QuoteSection from "@/components/home/QuoteSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import OurProducts from "@/components/home/OurProducts";
import PlanTrip from "@/components/home/PlanTrip";
import TravelGuide from "@/components/home/TravelGuide";
import tourList from "@/sampleData/tourList";

export default {
  components: {
    HomeBanner,
    Footer,
    BackToTop,
    BestSellingTrip,
    BestSellingTour,
    QuoteSection,
    FeedbackSection,
    OurProducts,
    PlanTrip,
    TravelGuide
  },
  data() {
    return {
      tourList: tourList["tourList"]
    };
  }
};
</script>
