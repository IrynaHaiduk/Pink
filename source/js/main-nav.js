'use strict';

// Ждем, когда загрузится DOM-дерево, а потовыполняем js-код
document.addEventListener('DOMContentLoaded', () => {
  let navMenu = $('.js-main-nav');
  let navToggle = $('.js-main-nav__toggle');
  let pageHeader = $('.js-page-header');

  navMenu.removeClass('main-nav--nojs');
  pageHeader.removeClass('page-header--nojs');

  navToggle.on('click', function () {
    navToggle.toggleClass('main-nav__toggle--active');
    navMenu.toggleClass('main-nav--active');
    pageHeader.toggleClass('page-header--active');
  });
});


