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
//var tariffsSlider = document.querySelector('.tariffs__wrapper');
var tariffsSliderCloned = $('.tariffs__wrapper').clone(true);
var tariffsSection = $('.page-main__tariffs');
var tariffsItemMarkup = `<div class="tariffs__item tariffs__item--first">
                         <div class="tariffs__header"></div>
                         <div class="tariffs__cell">
                           Розовый фильтр
                         </div>
                         <div class="tariffs__cell">
                           Смайлики
                         </div>
                         <div class="tariffs__cell">
                           Комментарии
                         </div>
                         </div>`;

var tariffsWrapper = document.querySelector('.tariffs__wrapper');
if (tariffsWrapper) {
  tariffsWrapper.insertAdjacentHTML("afterbegin", tariffsItemMarkup);
}


function initSlick() {

  if (document.documentElement.clientWidth >= 660) {
    if (!createSlider) {
      createSlider = true;

      $('.tariffs__wrapper').slick('unslick');
      tariffsSection.html('');
      tariffsSection.append(tariffsSliderCloned.clone(true));
      document.querySelector('.tariffs__wrapper').insertAdjacentHTML("afterbegin", tariffsItemMarkup);
    }
  } else if (createSlider) {
    createSlider = false;
    var firstItem = document.querySelector('.tariffs__item--first');
    if (firstItem) {
      firstItem.remove();
    }
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
