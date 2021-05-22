<template>
  <div class="gallery-grid-section collapse-custom">
    <label class="collapse-title">
      <input type="checkbox" v-on:change="toggle = !toggle" :value="toggle" />
      <span>Useful Information</span>
    </label>

    <div class="wrapper">
      <transition name="slide">
        <div class="information-list" v-if="toggle">
          <div class="information-item__icon" v-if="informationList.capital">
            <img src="@/assets/images/app/icon/capital.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.capital">
            <div class="information-item__title">CAPITAL CITY</div>
            <div class="" v-html="informationList.capital"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.size">
            <img src="@/assets/images/app/icon/ic_size.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.size">
            <div class="information-item__title">Size</div>
            <div class="" v-html="informationList.size"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.geographical_situation"
          >
            <img src="@/assets/images/app/icon/ic_geographic.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.geographical_situation"
          >
            <div class="information-item__title">Geographical situation</div>
            <div class="" v-html="informationList.geographical_situation"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.population">
            <img src="@/assets/images/app/icon/ic_population.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.population"
          >
            <div class="information-item__title">Population</div>
            <div class="" v-html="informationList.population"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.language">
            <img src="@/assets/images/app/icon/ic_language.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.language"
          >
            <div class="information-item__title">Language</div>
            <div class="" v-html="informationList.language"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.currency">
            <img src="@/assets/images/app/icon/ic_currency.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.currency"
          >
            <div class="information-item__title">Currency</div>
            <div class="" v-html="informationList.currency"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.climate">
            <img src="@/assets/images/app/icon/ic_climate.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.climate">
            <div class="information-item__title">Climate</div>
            <div class="" v-html="informationList.climate"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.local_time">
            <img src="@/assets/images/app/icon/ic_time.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.local_time"
          >
            <div class="information-item__title">Local Time</div>
            <div class="" v-html="informationList.local_time"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.electricity"
          >
            <img src="@/assets/images/app/icon/ic_electricity.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.electricity"
          >
            <div class="information-item__title">Electicity</div>
            <div class="" v-html="informationList.electricity"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.water">
            <img src="@/assets/images/app/icon/ic_water.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.water">
            <div class="information-item__title">Water</div>
            <div class="" v-html="informationList.water"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.telecommunications"
          >
            <img src="@/assets/images/app/icon/ic_telecommunication.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.telecommunications"
          >
            <div class="information-item__title">Telecommunications</div>
            <div class="" v-html="informationList.telecommunications"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.health_n_medical"
          >
            <img src="@/assets/images/app/icon/ic_health.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.health_n_medical"
          >
            <div class="information-item__title">
              HEALTH & MEDICAL FACILITIES
            </div>
            <div class="" v-html="informationList.health_n_medical"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.transportation"
          >
            <img src="@/assets/images/app/icon/ic_transport.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.transportation"
          >
            <div class="information-item__title">Transportation</div>
            <div class="" v-html="informationList.transportation"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.driving">
            <img src="@/assets/images/app/icon/ic_driving.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.driving">
            <div class="information-item__title">Driving</div>
            <div class="" v-html="informationList.driving"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.cooking">
            <img src="@/assets/images/app/icon/ic_cooking.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.cooking">
            <div class="information-item__title">Cooking</div>
            <div class="" v-html="informationList.cooking"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.shopping">
            <img src="@/assets/images/app/icon/ic_shopping.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.shopping"
          >
            <div class="information-item__title">Shopping</div>
            <div class="" v-html="informationList.shopping"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.tipping">
            <img src="@/assets/images/app/icon/ic_tipping.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.tipping">
            <div class="information-item__title">tipping</div>
            <div class="" v-html="informationList.tipping"></div>
          </div>

          <div class="information-item__icon" v-if="informationList.access">
            <img src="@/assets/images/app/icon/ic_plane.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.access">
            <div class="information-item__title">access</div>
            <div class="access">
              <ul>
                <li v-for="item in informationList.access" :key="item.id">
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="information-item__icon" v-if="informationList.visa">
            <img src="@/assets/images/app/icon/ic_visa.svg" />
          </div>
          <div class="information-item__content" v-if="informationList.visa">
            <div class="information-item__title">visa and passport</div>
            <div class="" v-html="informationList.visa"></div>
          </div>

          <div
            class="information-item__icon"
            v-if="informationList.before_going"
          >
            <img src="@/assets/images/app/icon/ic_travel.svg" />
          </div>
          <div
            class="information-item__content"
            v-if="informationList.before_going"
          >
            <div class="information-item__title">before going</div>
            <div class="" v-html="informationList.before_going"></div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    informationList: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      toggle: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.information-list {
  display: grid;
  grid-template-columns: 64px auto;
  grid-column-gap: 16px;
  grid-row-gap: 24px;

  .information-item {
    &__icon {
      img {
        width: 64px;
      }
    }

    &__content {
      font-size: 14px;
      line-height: 22px;
      color: $black;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }

      .access {
        ul {
          columns: 2;
          -webkit-columns: 2;
          -moz-columns: 2;
        }
      }

      ul {
        padding-left: 20px;
      }
    }

    &__title {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 10px;
      color: $dark-blue;
      text-transform: uppercase;

      @include breakpoint-down(tablet) {
        font-size: 14px;
      }
    }
  }
}
</style>
