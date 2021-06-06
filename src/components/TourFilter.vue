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
            <div class="search" v-if="toggle">
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
      <div class="filter-item collapse-custom">
        <label class="collapse-title mb-0">
          <input
            type="checkbox"
            v-on:change="toggle2 = !toggle2"
            :value="toggle2"
          />
          <span>Start from</span>
        </label>

        <div class="wrapper">
          <transition name="slide">
            <div class="filter-check-list" v-if="toggle2">
              <ul>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Hanoi, Vietnam</span>
                    <span class="count">22</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Da Nang, Vietnam</span>
                    <span class="count">1</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Hoi An, Vietnam</span>
                    <span class="count">2</span>
                  </label>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <div class="filter-item collapse-custom">
        <label class="collapse-title mb-0">
          <input
            type="checkbox"
            v-on:change="toggle3 = !toggle3"
            :value="toggle3"
          />
          <span>Travel Style</span>
        </label>

        <div class="wrapper">
          <transition name="slide">
            <div class="filter-check-list" v-if="toggle3">
              <ul>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Culture & Classic Tours</span>
                    <span class="count">22</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Family Tours</span>
                    <span class="count">1</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>Culinary Tours</span>
                    <span class="count">2</span>
                  </label>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <div class="filter-item collapse-custom">
        <label class="collapse-title mb-0">
          <input
            type="checkbox"
            v-on:change="toggle4 = !toggle4"
            :value="toggle4"
          />
          <span>Trip Duration</span>
        </label>

        <div class="wrapper">
          <transition name="slide">
            <div class="filter-check-list" v-if="toggle4">
              <ul>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>1 Day</span>
                    <span class="count">22</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>2 Days</span>
                    <span class="count">1</span>
                  </label>
                </li>
                <li class="check-list-item">
                  <label>
                    <input type="checkbox" />
                    <span>3 Days</span>
                    <span class="count">2</span>
                  </label>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <div class="filter-item collapse-custom">
        <label class="collapse-title mb-0">
          <input
            type="checkbox"
            v-on:change="toggle5 = !toggle5"
            :value="toggle5"
          />
          <span>Price</span>
        </label>

        <div class="wrapper">
          <transition name="slide">
            <div class="price-range" v-if="toggle5">
              <div class="track-container">
                <span class="range-value min">{{ minValue }} </span>
                <span class="range-value max">{{ maxValue }}</span>
                <div class="track" ref="_vpcTrack"></div>
                <div class="track-highlight" ref="trackHighlight"></div>
                <button class="track-btn track1" ref="track1"></button>
                <button class="track-btn track2" ref="track2"></button>
              </div>
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
      toggle: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      min: 10,
      max: 210,
      minValue: 40,
      maxValue: 150,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null
      }
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach(type => {
      document.body.addEventListener(type, ev => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    [
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchmove",
      "touchend"
    ].forEach(type => {
      document.querySelector(".track1").addEventListener(type, ev => {
        ev.stopPropagation();
        self[type](ev, "track1");
      });

      document.querySelector(".track2").addEventListener(type, ev => {
        ev.stopPropagation();
        self[type](ev, "track2");
      });
    });

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function(ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document
      .querySelector(".track-highlight")
      .addEventListener("click", function(ev) {
        ev.stopPropagation();
        self.setClickMove(ev);
      });
  },
  created() {},
  methods: {
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(
        this.$refs._vpcTrack.getBoundingClientRect().left
      );
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value =
        Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },

    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    mouseup() {
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.widget {
  &__body {
    gap: 0 !important;

    .collapse-custom {
      .collapse-title {
        text-transform: none;
        color: $dark-blue;

        &:after {
          right: 0;
        }
      }
    }
  }
}
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

.mb-0 {
  margin-bottom: 0px !important;
}

.filter-check-list {
  ul {
    padding: 0;
    list-style: none;

    .check-list-item {
      border-bottom: 1px solid $grey;
      padding: 18px 35px 18px 0;
      position: relative;

      label {
        margin-bottom: 0;
        line-height: 22px;
        font-size: 14px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }

      .count {
        display: inline-block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid $green;
        border-radius: 4px;
        height: 24px;
        min-width: 24px;
        text-align: center;
      }
    }
  }
}

.range-value {
  position: absolute;
  top: -2rem;

  &.min {
    left: 0;
  }

  &.max {
    right: 0;
  }
}
.track {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background-color: #f0f0f0;

  &-container {
    width: 100%;
    position: relative;
    cursor: pointer;
    height: 0.5rem;
  }

  &-highlight {
    display: block;
    position: absolute;
    width: 100%;
    height: 0.5rem;
    background-color: $green;
    z-index: 2;
  }

  &-btn {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 2;
    width: 1.5rem;
    height: 1.5rem;
    top: calc(-50% - 0.25rem);
    border-radius: 50%;
    margin-left: -1rem;
    border: none;
    background: linear-gradient(180deg, white 0%, #f8f8f8 100%);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
    -ms-touch-action: pan-x;
    touch-action: pan-x;
    transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
      -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
      background-color 0.3s ease;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
      background-color 0.3s ease, -webkit-transform 0.3s ease-out;
  }
}

.price-range {
  padding: 20px 20px;
}

::v-deep {
  .collapse-title {
    text-transform: none;
    color: $dark-blue;
  }
}
</style>
