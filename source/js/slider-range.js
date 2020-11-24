'use strict';

// Ждем, когда загрузится DOM-дерево, а потовыполняем js-код
document.addEventListener('DOMContentLoaded', () => {


  const params = {
    min: 0,
    max: 100,
    //Отпустили ползунок слайдера
    change: function (e) {
      console.log("Change");
      if ($(this).slider('value') == 0) {
        const parent = $(this).closest(".sliders-settings__item");
        $('.sliders-settings__img', parent).removeClass('sliders-settings__img--active');

      }
    },

    //Тянем ползунок слайдера
    slide: function (e) {
      console.log("Slide");

      const parent = $(this).closest(".sliders-settings__item");
      $('.sliders-settings__img', parent).addClass('sliders-settings__img--active');
    }
  };

  $(".js-slider").slider(params);


  const sliderBtns = document.querySelectorAll(".sliders-settings__img");
  const sliders = document.querySelectorAll(".js-slider");


  function removeSliders() {
    sliders.forEach(function (item) {
      item.style.display = "none";
    });
  }

  function showSliders() {
    sliders.forEach(function (item) {
      item.style.display = "block";
    });
  }

  function removeActiveBtns() {
    sliderBtns.forEach(function (item) {
      item.classList.remove("sliders-settings__img--active");
    });
  }

  function initSlaider() {
    if (document.documentElement.clientWidth >= 660) {
      showSliders();
      removeActiveBtns();

    } else {

      removeActiveBtns();
      removeSliders();
      sliderBtns[0].classList.add('sliders-settings__img--active');
      sliders[0].style.display = "block";
      sliderBtns.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          removeActiveBtns();
          removeSliders();
          item.classList.add('sliders-settings__img--active');

          let sibling = item.nextElementSibling.style.display = "block";
        });
      });
    }
  }

  initSlaider();

  $(window).resize(function () {
    initSlaider();
  });


});
