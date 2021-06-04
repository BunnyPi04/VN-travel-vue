<template>
  <div class="review-form">
    <div class="review__title">Submit your review</div>
    <div class="review__rate">
      <div>Rate this tour</div>
      <StarRate name="rate-star" />
    </div>
    <div class="review__form">
      <div class="form-item">
        <div class="label">
          Your Name
        </div>
        <div class="input">
          <input type="text" placeholder="Please enter your name here" />
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          Your Email
        </div>
        <div class="input">
          <input type="text" placeholder="Please enter your mail here" />
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          Review Title
        </div>
        <div class="input">
          <input type="text" placeholder="Please enter the review title" />
        </div>
      </div>

      <div class="form-item">
        <div class="label">
          Your Review
        </div>
        <div class="input">
          <textarea placeholder="What do you think about this tour"></textarea>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button class="golden-gradient-button">Submit</button>
    </div>
  </div>
</template>
<script>
import StarRate from "@/components/StarRate";
export default {
  components: {
    StarRate
  },
  data() {
    return {
      star: 3
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.review-form {
  background-color: $light-blue-bg;
  padding: 24px;
  border-radius: 4px;

  .review {
    &__title {
      color: $dark-blue;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 18px;
    }

    &__rate {
      display: flex;
      gap: 12px;
      font-size: 14px;
    }

    &__form {
      margin-top: 16px;
      font-size: 14px;
      line-height: 22px;
      display: grid;
      grid-gap: 24px;
      margin-bottom: 24px;
      grid-template-areas:
        "name mail"
        "title title"
        "review_content review_content";

      .form-item {
        &:nth-child(1) {
          grid-area: name;
        }

        &:nth-child(2) {
          grid-area: mail;
        }

        &:nth-child(3) {
          grid-area: title;
        }

        &:nth-child(4) {
          grid-area: review_content;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid $grey;
          border-radius: 4px;
          padding: 9px 16px;
          font-size: 14px;
          line-height: 22px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
