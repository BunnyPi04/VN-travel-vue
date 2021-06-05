<template>
  <div class="side-widget">
    <div class="widget__head">
      TOURS FILTER
    </div>
    <div class="widget__body">
      <div class="filter-item collapse-custom">
        <label class="collapse-title">
          <input
            type="checkbox"
            v-on:change="toggle = !toggle"
            :value="toggle"
          />
          <span>Search</span>
        </label>

        <div class="wrapper">
          <transition name="slide">
            <div class="search">
              <input
                v-if="toggle"
                type="text"
                placeholder="Enter search key word"
              />
              <button class="search-button">
                <span class="nsy-icon nsy-search"></span>
              </button>
            </div>
          </transition>
        </div>
      </div>
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
    tourList: [Array]
  },
  data() {
    return {
      toggle: true
    };
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.side-widget {
  background-color: white;

  .search {
    font-size: 14px;
    padding: 9px 14px;
    border-radius: 4px;
    border: 1px solid $grey;
    line-height: 22px;
    width: 100%;
    display: grid;
    grid-template-columns: auto 30px;

    input {
      border: none;

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: none;
      }
    }

    .search-button {
      border: none;
      background-color: transparent;
      display: flex;
      padding: 0;

      .nsy-icon {
        width: 24px;
        height: 24px;
        background-color: $grey-2;
      }
    }
  }
}

::v-deep {
  .collapse-title {
    text-transform: none;
    color: $dark-blue;
  }
}
</style>
