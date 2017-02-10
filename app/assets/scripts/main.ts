/// <reference path="./main.d.ts" />

import * as $ from 'jquery';
import 'bootstrap-sass';
import 'slick-carousel';

import '../stylesheets/main.scss';

$(document).ready(function () {
  affix('.home #nav', { top: $('header').height() } );

  affixDocSidebarTOC();
  //randomHero();
  activateMenuItem();
  registerBackToTop();

  function randomHero () {
    $('.home header').css('background-image', () => {
      const BANNER_SIZE = 8;
      let banner = Math.ceil(Math.random() * BANNER_SIZE);
      return `url("/assets/img/banner-${banner}.jpg")`;
    });
  }


  $('#highlightSchemesSlider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    initialSlide: 4,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });

  function registerBackToTop () {
    $('.back-to-top').on('click', function (event){
      event.preventDefault();
      $('html, body').animate({scrollTop : 0}, 800);
    });
  }


  /**
   * Affix #{target}
   *
   * @param {String} target
   * @param {Object} offset
   */
  function affix (target, offset) {
    $(target).affix({
      offset: offset
    });
  }

  function affixDocSidebarTOC () {
    let SIDEBAR_SELECTOR = '.next-docs-sidebar';
    let hasSidebar = $(SIDEBAR_SELECTOR).length > 0;
    let offset: {
      top?: number,
      bottom?: number
    } = {};

    if (hasSidebar) {
      offset.top = $('.next-docs-sections').offset().top;
      offset.bottom = 120;

      affix(SIDEBAR_SELECTOR, offset);

      $('body').scrollspy({ target: SIDEBAR_SELECTOR });
    }
  }

  /**
   * Add `active` class to menu item by comparing location pathname with menu item's href.
   */
  function activateMenuItem () {
    let pathname = window.location.pathname;
    let menuItemSelector = '[href="' + pathname + '"]';

    $('#nav').find(menuItemSelector).parent().addClass('active');
  }
});
