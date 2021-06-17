<template>
  <div class="custom-modal package-booking-modal">
    <div class="overlay"></div>
    <div class="custom-modal-container">
      <div class="close-button" @click="closeModal()"></div>
      <div class="modal__header text-center">
        <div class="package__title">Quy Nhon Beach Escape</div>
        <div class="package__duration">4 days</div>
        <div class="package__note">
          Let us know your travel plan by filling in the form below, we can
          customize this tour according to your request. We will contact you by
          email or phone within 12 hours with a full itinerary and quotation.
        </div>
      </div>
      <div class="modal__body">
        <div class="package-info__form">
          <div class="package-info__form__row-2">
            <div class="form-item">
              <label>Departure date <span class="required">*</span></label>
              <Datepicker class="datepicker" placeholder="DD/MM/YYYY">
              </Datepicker>
            </div>
            <div class="form-item">
              <label>Accommodation <span class="required">*</span></label>
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
          </div>

          <div class="package-info__form__row-3">
            <div class="form-item">
              <label>Adult <span class="required">*</span></label>
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
            <div class="form-item">
              <label>Children (2 - 11 years)</label>
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
            <div class="form-item">
              <label>Infant (under 2 years)</label>
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
          </div>

          <div class="package-info__form__row-3">
            <div class="form-item">
              <label>Title <span class="required">*</span></label>
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
            <div class="form-item">
              <label>Your full name</label>
              <input type="text" placeholder="Please enter your full name" />
            </div>
            <div class="form-item">
              <label>Your phone number</label>
              <div class="phone">
                <input type="text" />
              </div>
            </div>
          </div>

          <div class="package-info__form__row-2">
            <div class="form-item">
              <label>Email address <span class="required">*</span></label>
              <input
                type="email"
                placeholder="Please enter your email address"
              />
            </div>
            <div class="form-item">
              <label
                >Country of residence <span class="required">*</span></label
              >
              <VueSelect
                class="vue-select2"
                name="select2"
                :searchable="false"
                :single="true"
                :options="gender"
              >
              </VueSelect>
            </div>
          </div>

          <div class="package-info__form__row">
            <div class="form-item">
              <label>Special request (or Destinations to visit)</label>
              <textarea
                placeholder="Please enter your Special request (or Destinations to visit) here"
              ></textarea>
            </div>
          </div>
          <div class="package-info__form__row text-center mb-0">
            <button class="golden-gradient-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    VueSelect,
    Datepicker
  },
  data() {
    return {
      payment: 1,
      gender: [
        {
          label: "Mr. ",
          value: 0
        },
        {
          label: "Ms. ",
          value: 1
        },
        {
          label: "Mrs.",
          value: 3
        }
      ],
      country: [
        {
          label: "Vietnam",
          value: 0
        },
        {
          label: "Japan",
          value: 1
        },
        {
          label: "Thailan",
          value: 3
        }
      ],
      month: [
        {
          label: "January",
          value: 1
        },
        {
          label: "Febuary",
          value: 2
        },
        {
          label: "March",
          value: 3
        },
        {
          label: "April",
          value: 4
        },
        {
          label: "May",
          value: 5
        },
        {
          label: "June",
          value: 6
        },
        {
          label: "July",
          value: 7
        },
        {
          label: "Agust",
          value: 8
        },
        {
          label: "September",
          value: 9
        },
        {
          label: "Octorber",
          value: 10
        },
        {
          label: "November",
          value: 11
        },
        {
          label: "December",
          value: 12
        }
      ],
      year: [
        {
          label: "1995",
          value: 1995
        },
        {
          label: "1996",
          value: 1996
        },
        {
          label: "1997",
          value: 1997
        }
      ],
      display: false
    };
  },
  methods: {
    closeModal() {
      this.display = false;
      this.$emit("input", this.display);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.package-booking-modal {
  .custom-modal-container {
    width: 100%;
    margin-left: 24px;
    margin-right: 24px;
    padding: 40px 97px;

    @include breakpoint-down(tablet) {
      padding: 40px 20px;
    }

    .modal {
      &__header {
        padding: 8px 0 19px;
        text-transform: capitalize;
        font-family: "Open Sans";
        border: none;
        border-bottom: 1px solid $grey-2;

        .package {
          &__title {
            font-family: "Antonio";
            font-size: 24px;
            font-weight: bold;
            color: $dark-blue;
            text-transform: capitalize;
            line-height: 35px;
          }

          &__duration {
            color: $green;
            margin-top: 5px;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
          }

          &__note {
            font-size: 14px;
            line-height: 22px;
            color: $black;
            font-weight: 400;
            font-style: italic;
          }
        }
      }

      &__body {
        padding: 0;
      }
    }
  }

  .package-info {
    &__title {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      color: $dark-blue;
      line-height: 22px;
    }

    &__form {
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      line-height: 22px;
      font-size: 14px;

      > div {
        margin-bottom: 24px;
      }

      .required {
        color: $red;
      }

      label {
        margin-bottom: 10px;
      }

      .phone {
        position: relative;

        &:after {
          content: "+84-";
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
        }

        input {
          padding-left: 45px;
        }
      }

      input {
        border: 1px solid $grey;
        border-radius: 4px;
        width: 100%;
        padding: 9px 14px;

        &:focus {
          outline: none;
        }
      }

      textarea {
        border: 1px solid $grey;
        border-radius: 4px;
        width: 100%;
        padding: 9px 14px;
      }

      .golden-gradient-button {
        padding: 14px 60px;
      }

      &__row-3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 24px;

        @include breakpoint-down(phone) {
          grid-template-columns: repeat(1, 1fr);
        }
      }

      &__row-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;

        @include breakpoint-down(phone) {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }

  ::v-deep .v-select ul {
    z-index: 3;
  }

  ::v-deep .datepicker {
    width: 100%;
    position: relative;

    input {
      border: 1px solid $grey;
      border-radius: 4px;
      width: 100%;
      padding: 8px 45px 8px 14px;
    }

    &:after {
      content: "";
      width: 24px;
      height: 24px;
      position: absolute;
      display: block;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      background-color: $grey-2;
      -webkit-mask: url("~@/assets/images/app/icon/ic_calendar.svg") no-repeat;
      -webkit-mask-size: 100% 100%;
      mask-image: url("~@/assets/images/app/icon/ic_calendar.svg");
    }
  }

  .total {
    padding: 16px 0 23px;
    font-weight: bold;

    &-title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 5px;
      color: $ink;
    }

    &-price {
      font-size: 24px;
      font-weight: bold;
      left: 32px;
      color: $green;
    }
  }

  .pick-card {
    border-radius: 4px;
    border: 1px solid $grey;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px;
    color: $grey-2;
    cursor: pointer;

    input {
      display: none;
    }

    .nsy-icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      background-color: $grey-2;
    }

    &.active {
      color: white;
      background-color: $dark-blue;
      border: none;

      .nsy-icon {
        background-color: white;
      }
    }
  }
}
</style>
