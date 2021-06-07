<template>
  <div class="custom-modal checkout-modal">
    <div class="overlay"></div>
    <div class="custom-modal-container">
      <div class="close-button"></div>
      <div class="modal__header">Process to checkout</div>
      <div class="modal__body">
        <div class="guest-container">
          <div class="guest-info__title">GUEST INFORMATION</div>
          <div class="guest-info__form">
            <div class="guest-info__form__row-3">
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
                <label>Your full name <span class="required">*</span></label>
                <input type="text" />
              </div>
              <div class="form-item">
                <label>Your phone number <span class="required">*</span></label>
                <input type="text" />
              </div>
            </div>

            <div class="guest-info__form__row-2">
              <div class="form-item">
                <label>E-mail address <span class="required">*</span></label>
                <input type="email" />
              </div>
              <div class="form-item">
                <label
                  >Country of residence <span class="required">*</span></label
                >
                <VueSelect
                  class="vue-select2"
                  name="selectCountry"
                  :searchable="true"
                  :single="true"
                  :options="country"
                >
                </VueSelect>
              </div>
            </div>
          </div>

          <hr />

          <div class="guest-info__title">PAYMENT METHOD</div>
          <div class="guest-info__form">
            <div class="guest-info__form__row-3">
              <div class="form-item">
                <label
                  class="pick-card"
                  :class="parseInt(payment) == 1 ? 'active' : ''"
                >
                  <input
                    v-model="payment"
                    type="radio"
                    name="card"
                    value="1"
                    class="d-none"
                  />
                  <span class="nsy-icon nsy-card"></span>
                  <span>Visa / Master Card</span>
                </label>
              </div>
              <div class="form-item">
                <label
                  class="pick-card"
                  :class="parseInt(payment) == 2 ? 'active' : ''"
                >
                  <input
                    v-model="payment"
                    type="radio"
                    name="card"
                    value="2"
                    class="d-none"
                  />
                  <span class="nsy-icon nsy-card"></span>
                  <span>Paypal</span>
                </label>
              </div>
              <div class="form-item">
                <label
                  class="pick-card"
                  :class="parseInt(payment) == 3 ? 'active' : ''"
                >
                  <input
                    v-model="payment"
                    type="radio"
                    name="card"
                    value="3"
                    class="d-none"
                  />
                  <span class="nsy-icon nsy-bank"></span>
                  <span>Bank Transfer</span>
                </label>
              </div>
            </div>

            <div class="guest-info__form__row-2">
              <div class="form-item">
                <label>Name On Card <span class="required">*</span></label>
                <input type="email" />
              </div>
              <div class="form-item">
                <label>Card Number <span class="required">*</span></label>
                <VueSelect
                  class="vue-select2"
                  name="selectCountry"
                  :searchable="true"
                  :single="true"
                  :options="country"
                >
                </VueSelect>
              </div>
            </div>

            <div class="guest-info__form__row-3">
              <div class="form-item">
                <label>Month <span class="required">*</span></label>
                <VueSelect
                  class="vue-select2"
                  name="select2"
                  :searchable="false"
                  :single="true"
                  :options="month"
                  placeholder="Select Month"
                >
                </VueSelect>
              </div>
              <div class="form-item">
                <label>Year <span class="required">*</span></label>
                <VueSelect
                  class="vue-select2"
                  name="select2"
                  :searchable="false"
                  :single="true"
                  :options="year"
                  placeholder="Select Year"
                >
                </VueSelect>
              </div>
              <div class="form-item">
                <label>CVV <span class="required">*</span></label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div class="checkout-info__container">
          <div class="checkout-info__title">Checkout INFORMATION</div>
          <div class="checkout-info__table">
            <div class="checkout-info__row">
              <div class="item-info">
                <div class="item-title">
                  Quy Nhon Beach Escape
                </div>
                <div class="item-price">$2,136</div>
              </div>
              <div class="item-count">1</div>
            </div>

            <div class="checkout-info__row">
              <div class="item-info">
                <div class="item-title">
                  Taste of Vietnam
                </div>
                <div class="item-price">$2,136</div>
              </div>
              <div class="item-count">1</div>
            </div>

            <div class="total">
              <div class="total-title">Total</div>
              <div class="total-price">$4,272</div>
            </div>

            <button class="golden-gradient-button w-100">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSelect from "vue-select";
export default {
  components: {
    VueSelect
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
.checkout-modal {
  .custom-modal-container {
    width: 100%;
    margin-left: 24px;
    margin-right: 24px;

    .modal {
      &__body {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 24px;
      }
    }
  }

  .guest-container {
    .guest-info {
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

        input {
          border: 1px solid $grey;
          border-radius: 4px;
          width: 100%;
          padding: 9px 14px;

          &:focus {
            outline: none;
          }
        }

        &__row-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 24px;
        }

        &__row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 24px;
        }
      }
    }

    hr {
      margin-top: 0;
    }
  }

  .checkout-info {
    &__container {
    }

    &__title {
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      color: $dark-blue;
      line-height: 22px;
    }

    &__table {
      background-color: $light-blue-bg;
      border: 1px solid $border-blue;
      border-radius: 4px;
      padding: 16px;
      margin-top: 18px;
    }

    &__row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding-bottom: 13px;
      border-bottom: 1px solid $grey;

      &:not(:first-child) {
        padding-top: 13px;
      }

      .item {
        &-count {
          display: inline-flex;
          border-radius: 4px;
          border: 1px solid $grey;
          background-color: white;
          justify-content: center;
          align-items: center;
          height: 32px;
          min-width: 32px;
        }

        &-title {
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          color: $dark-blue;
        }

        &-price {
          color: $green;
          font-size: 13px;
          font-weight: bold;
        }
      }
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
.overlay {
}
</style>
