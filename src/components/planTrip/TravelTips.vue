<template>
  <div class="travel-tips-section">
    <div class="page-section-head">
      <div class="page-section__title">
        Travel Tips
      </div>
      <div class="page-section__comment">
        To make traveling light easier, start to change your everyday routine.
      </div>
    </div>
    <div class="tips heri-container">
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_visa.svg" />
        </div>
        <div class="tips-item__title">Visa</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_transport.svg" />
        </div>
        <div class="tips-item__title">Transport</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_climate.svg" />
        </div>
        <div class="tips-item__title">Weather</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_health.svg" />
        </div>
        <div class="tips-item__title">Safety</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_history.svg" />
        </div>
        <div class="tips-item__title">History</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_plane.svg" />
        </div>
        <div class="tips-item__title">Airports</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_itineraries.svg" />
        </div>
        <div class="tips-item__title">Itineraries</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_lantern.svg" />
        </div>
        <div class="tips-item__title">Festivals</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_etiquette.svg" />
        </div>
        <div class="tips-item__title">Etiquette</div>
      </div>
      <div class="tips-item">
        <div class="tips-item__icon">
          <img src="@/assets/images/app/golden-icon/ic_tipping.svg" />
        </div>
        <div class="tips-item__title">Payments</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.page-section__title {
  text-transform: uppercase;
}
.tips {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 42px;
  padding-bottom: 66px;

  @include breakpoint-down(tablet) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include breakpoint-down(phone) {
    grid-template-columns: repeat(2, 1fr);
  }

  &-item {
    text-align: center;

    &:nth-last-child(2) {
      @include breakpoint-down(tablet) {
        grid-column: 2 / 2;
      }

      @include breakpoint-down(phone) {
        grid-column: unset;
      }
    }

    &__title {
      color: $ink;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      margin-top: 16px;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }
    }
  }
}
</style>
