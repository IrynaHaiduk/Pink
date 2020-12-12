'use strict';

// Ждем, когда загрузится DOM-дерево, а потовыполняем js-код
document.addEventListener('DOMContentLoaded', () => {

  //Описываем параметры для слайдера
  const params = {
    //Диапазон значений ползунка
    min: 0,
    max: 100,
    //Отпустили ползунок слайдера
    change: function (e) {
      // Когда ползунок доходит до левого края, делаем кнопку неактивной
      if ($(this).slider('value') == 0) {
        const parent = $(this).closest(".sliders-settings__item");
        $('.sliders-settings__img', parent).removeClass('sliders-settings__img--active');

      }
    },

    //Тянем ползунок слайдера
    slide: function (e) {
      // Когда мы тянем ползунок, соответствующая ему кнопка становится активной
      const parent = $(this).closest(".sliders-settings__item");
      $('.sliders-settings__img', parent).addClass('sliders-settings__img--active');
    }
  };

  //Запускаем слайдер
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

  //Описываем поведение слайдера на различной ширине экрана устройства
  function initSlaider() {
    if (document.documentElement.clientWidth >= 660) {
      // На планшетной версии и выше отображаем все слайдеры и делаем кнопки неактивными
      showSliders();
      removeActiveBtns();
    } else {
      //При загрузке страницы на мобильной версии оставляем активной первую кнопку и слайдер к ней
      removeActiveBtns();
      removeSliders();
      if (sliderBtns[0]) {
        sliderBtns[0].classList.add('sliders-settings__img--active');
      }

      if (sliders[0]) {
        sliders[0].style.display = "block";
      }

      //При клике на кнопку, делаем ее активной и отображаем соответствующий ей слайдер
      sliderBtns.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          removeActiveBtns();
          removeSliders();
          item.classList.add('sliders-settings__img--active');
          item.nextElementSibling.style.display = "block";
        });
      });
    }
  }

  initSlaider();

  $(window).resize(function () {
    initSlaider();
  });


});
