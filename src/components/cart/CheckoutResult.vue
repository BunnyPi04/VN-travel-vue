<template>
  <div class="custom-modal-container checkout-result-modal">
    <div class="close-button" @click="closeModal()"></div>
    <div class="modal__header">
      <div v-if="bookingStatus" class="result-title success">
        Thank you for your booking
      </div>
      <div v-else class="result-title fail">OOps! Something went wrong...</div>
    </div>
    <div class="modal__body text-center">
      <div class="booking-result-img">
        <img
          :src="
            bookingStatus
              ? require(`@/assets/images/app/checkoutSuccess.png`)
              : require(`@/assets/images/app/checkoutFail.png`)
          "
        />
        <div v-if="bookingStatus">
          <p>Your order number is: <b>#HT149840237</b></p>
          <p>
            We will email you an order confirmation with detail informations.
          </p>
        </div>
        <div v-else>
          <p>We can’t verify your payment.</p>
          <p>Please contact your payment provider for more information.</p>
        </div>
      </div>
      <div v-if="bookingStatus" class="booking-table">
        <table>
          <thead>
            <tr>
              <td>Tour Name</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemList" :key="item.id" class="item-row">
              <td>{{ item.tourName }}</td>
              <td>${{ item.price }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ parseInt(item.price) * parseInt(item.quantity) }}</td>
            </tr>
            <tr class="total">
              <td colspan="3" class="text-right">
                Grand Total
              </td>
              <td>${{ grandTotal }}</td>
            </tr>
          </tbody>
        </table>
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
  props: {
    bookingStatus: {
      type: Boolean,
      default: false
    },
    grandTotal: {
      type: Number,
      default: 0
    },
    itemList: [Array]
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
      // this.$emit("display", this.display);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.checkout-result-modal {
  .modal {
    &__header {
      border: none;
      padding-top: 64px;
      padding-bottom: 5px;

      .result-title {
        font-size: 24px;
        font-family: "Antonio";
        text-align: center;
        letter-spacing: 0.04em;
        line-height: 35px;

        &.success {
          color: $green;
        }

        &.fail {
          color: $red;
        }
      }
    }

    &__body {
      .booking-result-img {
        img {
          height: 256px;
          margin-bottom: 32px;
        }

        p {
          color: $ink;

          &:not(:first-child) {
            margin-top: 13px;
          }
        }
      }

      .booking-table {
        padding: 16px;
        background-color: $light-blue-bg;
        border-radius: 4px;
        border: 1px solid $border-blue;

        table {
          width: 100%;
          line-height: 20px;
          font-size: 14px;

          thead {
            color: $ink;
            font-weight: 600;
            border-bottom: 1px solid $grey;

            tr {
              td {
                padding-bottom: 12px;
              }
            }
          }

          tr {
            &:not(:last-of-type) {
              border-bottom: 1px solid $grey;
            }

            td {
              padding-top: 8px;
              padding-bottom: 12px;

              &:first-child {
                text-align: left;
              }

              &:nth-last-child(2) {
                text-align: right;
              }

              &:last-child {
                text-align: right;
              }
            }

            &.total {
              color: $ink;
              font-weight: 600;

              td {
                text-align: right;
                padding-bottom: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
