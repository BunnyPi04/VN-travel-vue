<template>
  <div id="plan-your-trip">
    <SubBanner
      title="YOUR CART"
      quote="Get a Travel Specialist to Plan Your Dream Vacation"
      img="app/bg-cart.png"
    />
    <div class="cart">
      <h3>There are 2 items in your cart</h3>
      <div class="cart-block">
        <div class="block__title">
          <h4>Quy Nhon Beach Escape</h4>
          <div class="block__action">
            <span class="nsy-icon nsy-edit"></span>
            <span class="nsy-icon nsy-trash"></span>
          </div>
        </div>
        <div class="block__price">
          $2,136
        </div>
        <div class="block__table">
          <div class="block__column">
            <div class="block__table__td">
              <div class="label">Departure date:</div>
              <div class="info">26/05/2021</div>
            </div>
            <div class="block__table__td">
              <div class="label">Guest name:</div>
              <div class="info">Mr.Takahashi Hiro</div>
            </div>
            <div class="block__table__td">
              <div class="label">Phone number:</div>
              <div class="info">+81 262 829 6223</div>
            </div>
            <div class="block__table__td">
              <div class="label">Email address:</div>
              <div class="info">takahashi.hiro@gmail.com</div>
            </div>
            <div class="block__table__td">
              <div class="label">Country of residentce:</div>
              <div class="info">Japan</div>
            </div>
          </div>

          <div class="block__column">
            <div class="block__table__td">
              <div class="label">Accommodation:</div>
              <div class="info">The Mansion Quy Nhon</div>
            </div>
            <div class="block__table__td">
              <div class="label">Adult:</div>
              <div class="info">2</div>
            </div>
            <div class="block__table__td">
              <div class="label">Children: <br /><i>(2 - 11 years)</i></div>
              <div class="info">1</div>
            </div>
            <div class="block__table__td">
              <div class="label">Infant: <br /><i>(under 2 years)</i></div>
              <div class="info">0</div>
            </div>
          </div>
        </div>

        <div class="special_request">
          <div class="label">Special request (or Destinations to visit)</div>
          <div class="info">
            The guides were phenomenal, more 'local experts' vs. tourist tamers,
            each providing us with the perfect balance of seeing the main
            attractions/exhibits/sites and local hidden spots/parks/fountains,
            etc.
          </div>
        </div>
      </div>

      <div class="cart-block">
        <div class="block__title">
          <h4>Taste of Vietnam</h4>
          <div class="block__action">
            <span class="nsy-icon nsy-edit"></span>
            <span class="nsy-icon nsy-trash"></span>
          </div>
        </div>
        <div class="block__price">
          $2,136
        </div>
        <div class="block__table">
          <div class="block__column">
            <div class="block__table__td">
              <div class="label">Departure date:</div>
              <div class="info">26/05/2021</div>
            </div>
            <div class="block__table__td">
              <div class="label">Guest name:</div>
              <div class="info">Mr.Takahashi Hiro</div>
            </div>
            <div class="block__table__td">
              <div class="label">Phone number:</div>
              <div class="info">+81 262 829 6223</div>
            </div>
            <div class="block__table__td">
              <div class="label">Email address:</div>
              <div class="info">takahashi.hiro@gmail.com</div>
            </div>
            <div class="block__table__td">
              <div class="label">Country of residentce:</div>
              <div class="info">Japan</div>
            </div>
          </div>

          <div class="block__column">
            <div class="block__table__td">
              <div class="label">Accommodation:</div>
              <div class="info">The Mansion Quy Nhon</div>
            </div>
            <div class="block__table__td">
              <div class="label">Adult:</div>
              <div class="info">2</div>
            </div>
            <div class="block__table__td">
              <div class="label">Children: <br /><i>(2 - 11 years)</i></div>
              <div class="info">1</div>
            </div>
            <div class="block__table__td">
              <div class="label">Infant: <br /><i>(under 2 years)</i></div>
              <div class="info">0</div>
            </div>
          </div>
        </div>

        <div class="special_request">
          <div class="label">Special request (or Destinations to visit)</div>
          <div class="info">
            The guides were phenomenal, more 'local experts' vs. tourist tamers,
            each providing us with the perfect balance of seeing the main
            attractions/exhibits/sites and local hidden spots/parks/fountains,
            etc.
          </div>
        </div>
      </div>

      <hr />
      <div class="checkout text-right">
        <button class="golden-gradient-button" @click="modalCheckout = true">
          Proceed To Checkout
        </button>
      </div>
    </div>
    <PlanTrip />
    <BackToTop />
    <transition name="fade">
      <CheckoutModal v-if="modalCheckout" v-model="modalCheckout" />
    </transition>
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import TravelTips from "@/components/planTrip/TravelTips";
import BackToTop from "@/components/BackToTop";
import CheckoutModal from "@/components/CheckoutModal";

export default {
  components: {
    SubBanner,
    TravelTips,
    BackToTop,
    CheckoutModal,
    PlanTrip
  },
  data() {
    return {
      modalCheckout: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.cart {
  padding: 64px 0px;
  max-width: 800px;
  margin: 0 auto;

  @include breakpoint-down(tablet) {
    padding: 40px 24px;
  }

  .cart-block {
    background-color: $light-blue-bg;
    border-radius: 4px;
    border: 1px solid $border-blue;
    padding: 24px;
    margin-bottom: 24px;

    .block {
      &__title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 13px;

        h4 {
          color: $dark-blue;
          font-size: 24px;
          line-height: 35px;
          font-weight: bold;
          font-family: Antonio;
          letter-spacing: 0.04em;
          margin-bottom: 0;
        }

        .nsy-icon {
          width: 24px;
          height: 24px;
          background-color: $grey-2;
          margin-left: 16px;
        }
      }

      &__action {
        display: flex;
        align-items: center;
      }

      &__price {
        color: $green;
        font-size: 24px;
        font-weight: bold;
        line-height: 33px;
      }

      &__table {
        margin-top: 15px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;

        &__td {
          display: grid;
          grid-template-columns: 160px auto;

          .label {
            font-size: 14px;
            font-weight: 600;
            color: $grey-2;
            line-height: 28px;
          }

          .info {
            color: $ink;
            font-size: 14px;
            font-weight: 600;
            line-height: 28px;
          }
        }
      }
    }

    .special_request {
      margin-top: 15px;

      .label {
        color: $grey-2;
        font-weight: 600;
        line-height: 22px;
        font-size: 14px;
      }

      .info {
        font-size: 14px;
        line-height: 22px;
        margin-top: 10px;
      }
    }
  }

  .golden-gradient-button {
    padding: 14px;
  }
}

h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  color: $ink;
  margin-bottom: 34px;
}
</style>
