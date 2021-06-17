<template>
  <div id="plan-your-trip">
    <SubBanner
      title="Contact us"
      quote="Please leave a message for us. We will reply to you as soon as possible."
      img="app/bg-contact.png"
    />
    <div class="heri-container">
      <div class="contact-container">
        <div class="contact__form">
          <div class="contact__form__row-3">
            <div class="form-item">
              <label>Your full name <span class="required">*</span></label>
              <input type="text" placeholder="Please enter your full name" />
            </div>
            <div class="form-item">
              <label>Your phone number <span class="required">*</span></label>
              <div class="phone">
                <input type="text" />
              </div>
            </div>
            <div class="form-item">
              <label>Email address <span class="required">*</span></label>
              <input
                type="email"
                placeholder="Please enter your email address"
              />
            </div>
          </div>

          <div class="contact__form__row">
            <div class="form-item">
              <label>Message title</label>
              <input type="email" placeholder="Please enter message title" />
            </div>
          </div>

          <div class="contact__form__row">
            <div class="form-item">
              <label>Your message</label>
              <textarea placeholder="Please enter your message"></textarea>
            </div>
          </div>
          <div class="contact__form__row text-center mb-0 action">
            <button class="golden-gradient-button">Send</button>
            <button class="">Reset</button>
          </div>
        </div>
        <hr class="my-0" />
        <div class="map">
          <div class="map__title">HERITAGE VIETNAM TRAVEL</div>
          <div class="map__add">
            18 Floor, Keangnam Landmark 72, Pham Hung, My Dinh, Hanoi, Vietnam
          </div>
          <div class="map__add">091 234 5678</div>
          <div class="map__mail">heritage.vietnamtravel@gmail.com</div>
          <div class="map__mail">
            <a href="#">http://heritagevietnamtravel.com</a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7448.913836333783!2d105.78063733423552!3d21.014395980692907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ab43c0c4db%3A0xdb6effebd6991106!2sKeangnam%20Landmark%20Tower%2072!5e0!3m2!1sen!2s!4v1623925594248!5m2!1sen!2s"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <PlanTrip />
    <BackToTop />
  </div>
</template>

<script>
import SubBanner from "@/components/SubBanner";
import PlanTrip from "@/components/home/PlanTrip";
import TravelTips from "@/components/planTrip/TravelTips";
import BackToTop from "@/components/BackToTop";

export default {
  components: {
    SubBanner,
    TravelTips,
    BackToTop,
    PlanTrip
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.contact-container {
  width: 752px;
  margin: 0 auto;

  @include breakpoint-down(tablet) {
    width: 100%;
  }

  .contact {
    &__form {
      margin-top: 64px;
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

      .action {
        display: flex;
        justify-content: center;
        gap: 24px;

        button {
          padding: 14px 60px;
          border-radius: 4px;

          &:not(.golden-gradient-button) {
            background-color: white;
            border: 1px solid $grey;
            color: $grey-2;
            transition-duration: 0.3s;

            &:hover {
              box-shadow: $box-shadow;
            }
          }
        }
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

  .map {
    padding: 64px 0;
    text-align: center;

    @include breakpoint-down(tablet) {
      padding: 40px 0;
    }

    &__title {
      font-size: 32px;
      line-height: 46px;
      font-family: Antonio;
      color: $ink;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 18px;
      font-weight: 700;

      @include breakpoint-down(tablet) {
        font-size: 24px;
        line-height: 35px;
      }
    }

    &__add {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-bottom: 8px;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }
    }

    &__mail {
      color: $dark-blue;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-bottom: 8px;

      @include breakpoint-down(tablet) {
        font-size: 13px;
      }
    }

    iframe {
      width: 100%;
      height: 440px;
      margin-top: 16px;
    }
  }
}
</style>
