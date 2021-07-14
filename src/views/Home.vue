<template>
  <div class="home-page">
    <HomeBanner />
    <!-- <router-view></router-view> -->
    <BestSellingTour :itemList="tourList" />
    <BestSellingTrip />
    <QuoteSection />
    <FeedbackSection :itemList="feedbackList" />
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
      tourList: tourList["tourList"],
      feedbackList: [
        {
          id: 1,
          name: "Emilia Bianchi",
          img:
            "https://i.pinimg.com/originals/4d/e9/eb/4de9eba8c7266fc0e728c929790ba9ed.jpg",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        },
        {
          id: 2,
          name: "John Doe",
          img:
            "https://cdn.dribbble.com/users/60729/screenshots/3717055/dribbble_avatar.gif",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        },
        {
          id: 3,
          name: "Black Widow",
          img:
            "https://dreambuilders.dk/wp-content/uploads/2015/03/Screen-Shot-2015-03-02-at-2.53.43-PM.png",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        },
        {
          id: 4,
          name: "Emilia Bianchi",
          img:
            "https://i.pinimg.com/originals/4d/e9/eb/4de9eba8c7266fc0e728c929790ba9ed.jpg",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        },
        {
          id: 5,
          name: "Bill",
          img:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c748bb40780039.578d2ae7b3f4e.jpg",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        },
        {
          id: 6,
          name: "Emilia Bianchi",
          img:
            "https://i.pinimg.com/originals/4d/e9/eb/4de9eba8c7266fc0e728c929790ba9ed.jpg",
          create_date: "2021-07",
          description:
            'Theo công văn của Ủy ban nhân dân phường Mễ Trì về việc rà soát, thống kê các đối tượng đăng ký tiêm vắc-xin phòng COVID-19 trên địa bàn, tòa nhà Keangnam tổ chức đăng ký tiêm chủng đối với toàn bộ nhân viên đang làm việc tại tất cả các văn phòng trong toà nhà, bao gồm cả nhân viên người Việt Nam và người nước ngoài (ngoại trừ trường hợp đã đăng ký qua "SỔ SỨC KHỎE ĐIỆN TỬ", hoặc đăng ký tại địa phương cư trú)',
          status: 1
        }
      ]
    };
  },
  created: {}
};
</script>
