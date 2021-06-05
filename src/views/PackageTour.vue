<template>
  <div id="destination">
    <SubBanner
      title="Package Tour"
      quote="Discover the hidden beauty of Vietnam"
      img="app/bg-package.png"
    />
    <div class="heri-container part">
      <p class="text-center">
        We are experts in providing Vietnam tour packages with services from 3
        to 5 stars for international travelers. Our Vietnam tour packages will
        be programmed with the optimized and comfortable itinerary, safety, and
        saving that ensures you will not miss the major tourist destinations for
        your proper time.
      </p>
      <p class="text-center">
        If you want to set up your own Vietnam package tour, please let us know
        then we will plan the wonderful trip just for you. We provide a personal
        service and we will be here to listen and support during your visit to
        Vietnam.
      </p>
      <p class="text-center">
        For more information about our Vietnam tour packages, please don't
        hesitate to contact our sales team (email, whatsApp or phone).
      </p>
    </div>
    <BestSellingTour :itemList="tourList" />
    <ShortTrip
      :itemList="tourList"
      title="Best Selling Short Trips"
      quote="Choose a package tour to start exploring Vietnam with a budget and time that suits you."
    />
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import ShortTrip from "@/components/ShortTrip";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
import BestSellingTour from "@/components/home/BestSellingTour";
import TourPagination from "@/components/TourPagination";
import InformationList from "@/components/destination/InformationList";
import tourList from "@/sampleData/tourList";
import informationList from "@/sampleData/informationList";

export default {
  components: {
    SubBanner,
    ShortTrip,
    PlanTrip,
    BackToTop,
    TourPagination,
    InformationList,
    BestSellingTour
  },
  data() {
    return {
      switcher: 1,
      introTitle1: "North Vietnam",
      introTitle2: "Central Vietnam",
      introTitle3: "South Vietnam",
      content1:
        "<p>Modern day Vietnam is a feast for the senses and the sights, tastes, smells and sounds you will experience during a visit to Vietnam will bring you a profound feeling of peace, optimism and exuberance.</p><p>It’s amazing to think that back in 1969 Danang airport was the busiest ‘single runway’ airport in the world. This extraordinary fact highlights the awful scale of one of the 20th century’s most notorious wars.</p><p>However, today the country’s 3,444 kilometre coastline boasts some of the world’s most luxurious resorts. Danang, along with a handful of other locations, has a gleaming new airport. It enables visitors to discover a dynamic land rich in culture with some of the freshest and tastiest food anywhere in the world.</p><p>From the latticed mountains in the North, the dramatic rivers and caves in the Centre and the pristine beaches and tropical islands in the South, Vietnam’s natural landscape has something for anyone wanting to find a revitalizing escape.</p>",
      tourList: tourList["tourList"],
      informationList: informationList
    };
  },
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.part {
  padding-top: 32px;
}

::v-deep .explore {
  display: none;
}

::v-deep .best-selling-tour {
  padding-bottom: 64px;
}

::v-deep .page-section-head {
  padding-top: 30px;
}
</style>
