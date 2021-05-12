<template>
  <div id="app">
    <HomeBanner />
    <!-- <router-view></router-view> -->
    <BestSellingTour />
    <BestSellingTrip />
    <QuoteSection />
    <FeedbackSection />
    <OurProducts />
    <PlanTrip />
    <TravelGuide />
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import SlickCarousel from 'slick-carousel';
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

export default {
  name: "App",
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
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
