<template>
  <div class="rate-star" :class="disabled ? 'disabled' : ''">
    <label
      v-for="rating in ratings"
      :class="value >= rating.value ? 'selected' : ''"
      :key="rating.id"
      @click="set(rating.value)"
    >
      <span>
        <input
          class="star-rating star-rating__checkbox"
          type="radio"
          :value="rating.value"
          v-model="markedStar"
          :disabled="disabled"
        />★
      </span>
    </label>
  </div>
</template>
<script>
export default {
  props: {
    star: {
      type: Number,
      default: function() {
        return 0;
      }
    },
    disabled: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    name: String
  },
  data() {
    return {
      ratings: [
        {
          id: 1,
          label: "1 star",
          value: 1
        },
        {
          id: 2,
          label: "2 star",
          value: 2
        },
        {
          id: 3,
          label: "3 star",
          value: 3
        },
        {
          id: 4,
          label: "4 star",
          value: 4
        },
        {
          id: 5,
          label: "5 star",
          value: 5
        }
      ],
      temp_value: null,
      value: 0,
      markedStar: null
    };
  },
  // created() {
  //   if (this.star) {
  //     this.value = this.star;
  //   }
  // },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over: function(index) {
      // var self = this;

      if (!this.disabled) {
        this.temp_value = this.value;
        return (this.value = index);
      }
    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out: function() {
      // var self = this;

      if (!this.disabled) {
        return (this.value = this.temp_value);
      }
    },

    /*
     * Set the rating.
     */
    set: function(value) {
      // var self = this;

      if (!this.disabled) {
        this.temp_value = value;

        return (this.value = value);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.rate-star {
  color: $grey-2;
  font-size: 24px;
  line-height: 1;

  &:not(.disabled) {
    &:hover {
      color: $golden;
    }

    label {
      cursor: pointer;
      transition-duration: 0.3s;
      margin-bottom: 0;

      &:hover {
        ~ label {
          color: $grey-2;
        }
      }
    }
  }

  .selected {
    color: $golden;
  }

  input {
    display: none;
  }
}
</style>
