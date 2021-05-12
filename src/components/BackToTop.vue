<template>
  <div class="back-to-top" @click="scrollTop();" v-bind:style="{opacity: opacity}">
    <div class="to-top-border">
      <img class="to-top-arrow" src="@/assets/images/app/icon/top.svg">
    </div>
  </div>
</template>
<script>
// import $ from 'jQuery';
export default {
  data () {
    return {
      lastScrollPosition: 0,
      opacity: 1
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition > 0) {
        return this.opacity = 1;
      }

      return this.opacity = 0;
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  },
};
</script>
<style lang="scss" scoped>
  .back-to-top {
    position: fixed;
    transition: all 0.4s ease-in-out 0s;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
  }
</style>
<!-- var scrollTop = $('.back-to-top');
$(window).scroll(function() {
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css('opacity', '1');
    } else {
        $(scrollTop).css('opacity', '0');
    }
}); // scroll END

//animate hover scrolltop button
$(scrollTop).mouseenter(function() {
    $('.to-top-arrow').animate({
        marginBottom: '+=30px', //moves up
    });
}).mouseleave(function() {
    $('.to-top-arrow').animate({
        marginBottom: '-=30px', //moves down
    });
});

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0,
    }, 1500);

    return false;
}); // click() scroll top END -->
