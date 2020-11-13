import "slick-carousel";



$('.reviews__list').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: `<button type="button" class="slick-arrow slick-prev">
  <svg role="img" class ="reviews__arrow reviews__arrow--left" width="22" height="41" alt="arrow-left">
  <use xlink:href="/build/img/i-sprite.svg#arrow">
  </use>
  </svg>
  </button>`,
  nextArrow: `<button type="button" class="slick-arrow slick-next">
  <svg role="img" class ="reviews__arrow reviews__arrow--right" width="22" height="41" alt="arrow-right">
  <use xlink:href="/build/img/i-sprite.svg#arrow">
  </use>
  </svg>
  </button>`,
  /* arrows: false */
  /*  fade: true,
   cssEase: 'linear' */
  /*   autoplay: true,
    autoplaySpeed: 2000 */
  responsive: [{
    breakpoint: 1200,
    settings: {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false
    }
  }]
});

$('.tariffs__wrapper').slick({
  dots: false,
  arrows: false,
  responsive: [{
    breakpoint: 660,
    settings: {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      /*    asNavFor: '.slider-nav' */
    }
  }]
});

/* $('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
}); */

/* $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
}); */
