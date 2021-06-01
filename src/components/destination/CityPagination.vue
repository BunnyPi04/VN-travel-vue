<template>
  <div class="city-grid-section">
    <div class="wrapper">
      <transition name="slide">
        <div class="">
          <!-- <VueSelect :options="options2"></VueSelect> -->
          <div class="city-list-container grid-container">
            <div v-for="city in viewList" class="city-item" :key="city.id">
              <div class="city__image">
                <img
                  :src="
                    city.img
                      ? require(`@/assets/images/${city.img}`)
                      : require(`@/assets/images/app/unnamed.png`)
                  "
                />
              </div>
              <div class="city__content">
                <div class="city__content__title text-left">
                  {{ city.id }} {{ city.name }}
                </div>
                <div class="city__excerpt">({{ city.excerpt }})</div>
                <div class="city-button">
                  <div class="text-detail text-left">
                    <router-link to="/destinations/city-highlight/detail"
                      >Tour detail</router-link
                    >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
          <pagination
            :total-pages="totalPage"
            :total="cityList.length"
            :per-page="perPage"
            :current-page="currentPage"
            :maxVisibleButtons="5"
            @pagechanged="onPageChange"
          />
          <!-- <Pagination :totalPages="totalPage" :currentPage="currentPage" :total="tourList.length" @pagechanged="onPageChange" :per-page="perPage"/> -->
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
import VueSelect from "vue-select";
export default {
  components: {
    Pagination,
    VueSelect
  },
  props: {
    cityList: [Array]
  },
  data() {
    return {
      options1: [
        {
          label: "name1",
          value: "value1"
        },
        {
          label: "name2",
          value: "value2"
        },
        {
          label: "name3",
          value: "value3"
        }
      ],
      options2: [
        {
          label: "Hanoi",
          value: "value1"
        },
        {
          label: "Da Nang",
          value: "value2"
        },
        {
          label: "HCM",
          value: "value3"
        },
        {
          label: "Da lat",
          value: "value3"
        }
      ],
      viewList: [],
      perPage: 8,
      currentPage: 1
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.cityList.length / this.perPage);
    }
  },
  watch: {},
  created() {
    let range = [];
    this.currentPage = 1;

    let offset = this.perPage * (this.currentPage - 1);

    let last =
      offset + this.perPage < this.cityList.length - 1
        ? offset + this.perPage - 1
        : this.cityList.length - 1;

    for (let i = offset; i <= last; i += 1) {
      range.push(this.cityList[i]);
    }

    this.viewList = range;
  },
  methods: {
    onPageChange(page) {
      let range = [];
      this.currentPage = page;

      let offset = this.perPage * (this.currentPage - 1);

      let last =
        offset + this.perPage - 1 < this.cityList.length - 1
          ? offset + this.perPage - 1
          : this.cityList.length - 1;
      console.log(last);

      for (let i = offset; i <= last; i += 1) {
        range.push(this.cityList[i]);
      }

      this.viewList = range;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@import "vue-select/src/scss/vue-select.scss";
.city-list-container {
  grid-template-columns: repeat(4, 1fr);
  padding: 0 5px 10px;
  grid-gap: 24px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(1, 1fr);
  }

  .city {
    &__image {
      img {
        width: 100%;
      }
    }

    &__content {
      padding: 16px 0px 6px;

      &__title {
        font-size: 16px;
        font-weight: 700;
        color: $dark-blue;
        text-transform: uppercase;
        line-height: 22px;
      }

      .nsy-icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .info-item {
        &:not(:first-child) {
          margin-top: 18px;
        }
      }
    }

    &__excerpt {
      font-size: 14px;
      line-height: 22px;
      margin-top: 10px;
    }

    &-button {
      .text-detail {
        padding-left: 0;
        padding-top: 18px;
      }
    }
  }
}
</style>
