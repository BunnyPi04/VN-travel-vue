<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        class="first-page"
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      ></button>
    </li>

    <!--     <li class="pagination-item">
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
        Previous
      </button>
    </li> -->

    <li v-for="page in pages" class="pagination-item" :key="page.id">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <!--     <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li> -->

    <li class="pagination-item">
      <button
        class="last-page"
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
      ></button>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      if (this.currentPage <= 2) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1 > 1
          ? this.totalPages - this.maxVisibleButtons + 1
          : 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.pagination {
  list-style-type: none;
  display: flex;
  text-align: center;
  justify-content: center;

  &-item {
    display: inline-block;

    &:not(:first-child) {
      margin-left: 8px;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: transparent;
      border-radius: 4px;
      box-shadow: none;
      border: 1px solid $grey;
      color: $ink;

      &.active {
        color: white;
        background-color: $ink;
        font-weight: bold;
      }

      &.first-page {
        background-image: url("~@/assets/images/app/icon/ic_arrow_prev.svg");
        background-position: center;
        background-repeat: no-repeat;
      }

      &.last-page {
        transform: rotate(180deg);
        background-image: url("~@/assets/images/app/icon/ic_arrow_prev.svg");
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}

.active {
  background-color: #4aae9b;
  color: white;
}
</style>
