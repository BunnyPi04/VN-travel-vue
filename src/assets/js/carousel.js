$('.home-slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dotsClass: 'slick-dots',
    prevArrow: `<a class="slick-arrow__left" href="#tesmonial-slide" >
                    <span class="nsy-icon nsy-slide-arrow-left"></span>
                </a>`,
    nextArrow: `<a class="slick-arrow__right" href="#tesmonial-slide">
                    <span class="nsy-icon nsy-slide-arrow-right"></span>
                </a>`,
    responsive: [
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
    }
  ]
});
