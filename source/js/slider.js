import "slick-carousel";

//Слайдер для отзывов
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

let createSlider = true;
var $before = $('.tariffs__wrapper').clone(true);
var parent = $('.page-main__tariffs');


function initSlick() {

  if (document.documentElement.clientWidth >= 660) {
    if (!createSlider) {
      createSlider = true;

      $('.tariffs__wrapper').slick('unslick');
      parent.html('');
      parent.append($before.clone(true));
      parent.append($before.clone(true));
    }
  } else if (createSlider) {
    createSlider = false;
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
          centerMode: true,
          variableWidth: true
        }
      }]
    });
  }

  //Слайдер для тарифов

}
initSlick();
//Отключаем слайдер для тарифов на планшетной версии (>= 660px)


$(window).resize(function () {
  initSlick();
});
