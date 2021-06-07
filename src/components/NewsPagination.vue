<template>
  <div>
    <div class="news-list">
      <div class="news-item" v-for="item in viewList" :key="item.id">
        <div class="news__image">
          <img
            :src="
              item.img
                ? require(`@/assets/images/${item.img}`)
                : require(`@/assets/images/app/unnamed.png`)
            "
          />
        </div>
        <div class="news__content">
          <div class="news__title">
            <h4>{{ item.title }}</h4>
          </div>
          <div class="news__excerpt">{{ item.excerpt }}</div>
          <div class="detail">
            <router-link to="/news/attraction-in-hoi-an/"
              >View detail →</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="heri-container">
      <pagination
        :total-pages="totalPage"
        :total="newsList.length"
        :per-page="perPage"
        :current-page="currentPage"
        :maxVisibleButtons="5"
        @pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  components: {
    Pagination
  },
  props: {
    newsList: [Array]
  },
  data() {
    return {
      viewList: [],
      perPage: 6,
      currentPage: 1
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.newsList.length / this.perPage);
    }
  },
  created() {
    let range = [];
    this.currentPage = 1;

    let offset = this.perPage * (this.currentPage - 1);

    let last =
      offset + this.perPage < this.newsList.length - 1
        ? offset + this.perPage - 1
        : this.newsList.length;

    for (let i = offset; i <= last; i += 1) {
      range.push(this.newsList[i]);
    }

    this.viewList = range;
  },
  methods: {
    onPageChange(page) {
      let range = [];
      this.currentPage = page;

      let offset = this.perPage * (this.currentPage - 1);

      let last =
        offset + this.perPage < this.newsList.length - 1
          ? offset + this.perPage - 1
          : this.newsList.length - 1;

      for (let i = offset; i <= last; i += 1) {
        range.push(this.newsList[i]);
      }

      this.viewList = range;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.news-list {
  padding-bottom: 24px;
  border-bottom: 1px solid $grey;

  .news-item {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 170px auto;
    padding-top: 24px;
    padding-bottom: 0;

    .news {
      &__image {
        img {
          width: 100%;
          border-radius: 4px;
        }
      }

      &__title {
        h4 {
          color: $ink;
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }

      &__content {
        font-size: 14px;
        line-height: 22px;

        .detail {
          a {
            font-size: 13px;
            line-height: 18px;
            margin-top: 10px;
            color: $ink;
            text-decoration: underline;
          }
        }
      }

      &__excerpt {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }

    &:first-child {
      grid-template-columns: repeat(2, 1fr);
      border-bottom: 1px solid $grey;
      padding: 24px 0;

      .news {
        &__title {
          h4 {
            color: $ink;
            font-size: 24px;
            font-weight: 600;
            line-height: 33px;
            margin-top: 10px;
            margin-bottom: 15px;
          }
        }

        &__excerpt {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }

      .detail {
        a {
          margin-top: 18px;
        }
      }
    }
  }
}
</style>
