<template>
  <div class="city-highlight-grid-section collapse-custom">
    <label class="collapse-title">
      <input type="checkbox" v-on:change="toggle = !toggle" :value="toggle" />
      <span>CITY HIGHLIGHTS</span>
    </label>

    <div class="wrapper">
      <transition name="slide">
        <div class="city-highlight-grid grid-container" v-if="toggle">
          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                The capital of Vietnam, Hanoi is the second most populous city
                in the country with approximately 4 million people. The history
                and culture of Vietnam is clearly on display.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>

          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                The capital of Vietnam, Hanoi is the second most populous city
                in the country with approximately 4 million people.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>
          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                Surrounded by lush green hills the valleys and villages West of
                Hanoi are home to several ethnic minority communities such as
                the H’mong, Zao and White Thai.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>
          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                A tour of North Vietnam is not complete without a visit to the
                spectacular views of more than 3,000 limestone karsts in Ha Long
                Bay. In 1994 UNESCO declared the bay a World Heritage Site and
                its emerald waters, magnificent caves.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>
          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                The capital of Vietnam, Hanoi is the second most populous city
                in the country with approximately 4 million people. The history
                and culture of Vietnam is clearly on display.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>
          <div class="city-highlight-item grid-item">
            <div class="city-highlight-item__image">
              <img src="@/assets/images/app/video-image.png" />
            </div>
            <div class="city-highlight-item__post">
              <div class="city-highlight-item__title">Hanoi</div>
              <div class="city-highlight-item__excerpt">
                The capital of Vietnam, Hanoi is the second most populous city
                in the country with approximately 4 million people. The history
                and culture of Vietnam is clearly on display.
              </div>
              <div class="city-highlight-item__explore">
                <a href="#"><span>Explore Now</span> →</a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      toggle: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.city-highlight-grid {
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 24px;

  .city-highlight {
    &-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;

      &__image {
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      &__post {
        display: flex;
        flex-direction: column;
      }

      &__title {
        font-size: 16px;
        line-height: 22px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 2px;
        color: $dark-blue;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      &__excerpt {
        font-size: 14px;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        flex-grow: 1;
      }

      &__explore {
        font-size: 13px;
        line-height: 18px;
        color: $ink;

        a {
          span {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
