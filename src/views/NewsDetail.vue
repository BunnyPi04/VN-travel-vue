<template>
  <div id="news-detail">
    <SubBanner
      title="News"
      type="news"
      quote="Unrivaled expertise for unique travel experiences"
      img="app/sub-bg-4.png"
    />
    <div class="news-container">
      <div class="breadcrum">
        <router-link to="/">Home / </router-link>
        <router-link to="/destination/">News / </router-link>
        {{ news.title }}
      </div>
      <div class="page-section__title">
        {{ news.title }}
      </div>
      <div class="news-detail__log">
        <div class="news-detail__log-item">
          <span class="nsy-icon nsy-calendar"></span>
          <span>{{ news.publish }}</span>
        </div>
        <div class="news-detail__log-item">
          <span class="nsy-icon nsy-eye"></span>
          <span>{{ news.view }}</span>
        </div>
      </div>
      <div class="news-detail__banner">
        <img :src="require(`@/assets/images/${news.banner}`)" />
      </div>
      <div class="news-detail__excerpt">
        Hoi An is famous for the beauty of traditional architecture, the harmony
        of houses, walls and roads. Hoi An Ancient Town is always on the list of
        must-visit places in Vietnam. Here are 6 top tourist attractions in Hoi
        An.
      </div>
      <div class="news-detail__content-table">
        <ul>
          <li v-for="item in news.contentTable" :key="item.id">
            <a href="#item1">
              <span>1. </span>
              <span class="content-link">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        v-for="item in news.contentTable"
        :key="item.id"
        class="news-content-item"
      >
        <div class="news-content-item__title">
          {{ item.title }}
        </div>
        <div class="news-content-item__content" v-html="item.content"></div>
      </div>
      <TagShare :tags="tags" />
    </div>
    <RelatedItems title="Related Post" :itemList="postList" />
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import BackToTop from "@/components/BackToTop";
import RelatedItems from "@/components/RelatedItems";
import TagShare from "@/components/TagShare";
import practicalitiesList from "@/sampleData/practicalitiesList";

export default {
  components: {
    SubBanner,
    BackToTop,
    RelatedItems,
    TagShare,
    PlanTrip
  },
  data() {
    return {
      practicalitiesList: practicalitiesList["practicalities"],
      contentTableCounter: 0,
      news: {
        id: 1,
        title: "6 Top Tourist Attractions in Hoi An",
        publish: "26.04.2021",
        view: "2440",
        banner: "app/news-banner.png",
        contentTable: [
          {
            id: 1,
            title: "Hoi An Ancient Town",
            content: "<p style='color: coral'>Test content</p>"
          },
          {
            id: 2,
            title: "Cua Dai Beach",
            content: "<p style='color: coral'>Test content</p>"
          },
          {
            id: 3,
            title: "My Son Sanctuary",
            content: "<p style='color: coral'>Test content</p>"
          },
          {
            id: 4,
            title: "An Bang Beach",
            content: "<p style='color: coral'>Test content</p>"
          },
          {
            id: 5,
            title: "Tra Que Village",
            content: "<p style='color: coral'>Test content</p>"
          },
          {
            id: 6,
            title: "Japanese Covered Bridge",
            content: "<p style='color: coral'>Test content</p>"
          }
        ],
        // additional_info: [
        //   {
        //     'Location': 'Hội An, Việt Nam',
        //     'Address': 'Quảng Nam City',
        //     'Opening hours': 'All hours',
        //     'Entrance fee': 'Free'
        //   }
        // ],
        tags: [
          {
            id: 1,
            name: "4 days"
          },
          {
            id: 2,
            name: "Vietnam"
          }
        ]
      },
      postList: [
        {
          id: 1,
          name: "Basic Vietnamese Phrase",
          image: "https://placem.at/places?w=800&h=800&random=1"
        },
        {
          id: 2,
          name: "7 Top Tourist Attractions in Hue",
          image: "https://placem.at/places?w=800&h=800&random=8"
        },
        {
          id: 3,
          name: "MVisa To Laos",
          image: "https://placem.at/places?w=800&h=800&random=3"
        },
        {
          id: 4,
          name: "The 9 Best Dishes To Eat in Vietnam",
          image: "https://placem.at/places?w=800&h=800&random=4"
        }
      ],
      tags: [
        {
          id: 1,
          name: "4 Days"
        },
        {
          id: 2,
          name: "Vietnam"
        },
        {
          id: 3,
          name: "tour"
        },
        {
          id: 4,
          name: "beach"
        },
        {
          id: 5,
          name: "Quy Nhơn"
        },
        {
          id: 6,
          name: "beach"
        }
      ]
    };
  },
  mounted() {},
  created() {},
  methods: {
    incrementIndex() {
      // this.contentTableCounter = this.contentTableCounter++;
      // return this.contentTableCounter;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.page-section {
  &__title {
    margin-top: 21px;
    text-transform: uppercase;
    text-align: center;
  }
}
.news-container {
  max-width: 752px;
  margin: 0 auto;
}
.news-detail {
  &__log {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;

      &:not(:first-child) {
        margin-left: 24px;
      }
    }

    .nsy-icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }

  &__banner {
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 24px;

    img {
      width: 100%;
    }
  }

  &__content-table {
    border: 1px solid $border-blue;
    padding: 16px;
    border-radius: 4px;
    background-color: $light-blue-bg;
    margin-bottom: 24px;

    ul {
      list-style: none;
      padding-left: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 0;

      .content-link {
        color: $dark-blue;
        margin-left: 8px;
      }
    }
  }

  &__excerpt {
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: $grey-2;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
  }
}

.news-content-item {
  &__title {
    color: $dark-blue;
    font-size: 24px;
    font-weight: 600;
  }

  &__content {
    font-size: 14px;

    img {
      max-width: 100% !important;
    }
  }
}

::v-deep .related-section {
  background-color: $light-blue-bg;
  padding-bottom: 66px;

  .page-section-head {
    padding-bottom: 24px;

    hr {
      margin-bottom: 0;
    }
  }

  .place-name {
    text-transform: none;
  }
}
</style>
