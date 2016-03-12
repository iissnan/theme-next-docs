$(document).ready(function () {

  affix('.home #nav', { top: $('header').height() } );

  affixDocSidebarTOC();


  $('.home header').css('background-image', function getHeaderBackgroundImage() {
    var r = 1 + parseInt(Math.random() * 8, 10);
    return 'url("/assets/img/banner-' + r + '.jpg")';
  });

  $('#highlightSchemesSlider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    initialSlide: 2,
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

  $('.back-to-top').on('click', function (event){
    event.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800);
  });

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
    var SIDEBAR_SELECTOR = '.next-docs-sidebar';
    var hasSidebar = $(SIDEBAR_SELECTOR).size() > 0;
    var offset = {};

    if (hasSidebar) {
      offset.top = $('.next-docs-sections').offset().top;
      offset.bottom = 120;

      affix(SIDEBAR_SELECTOR, offset);

      $('body').scrollspy({ target: SIDEBAR_SELECTOR });
    }
  }

  activateMenuItem();

  /**
   * Add `active` class to menu item by comparing location pathname with menu item's href.
   */
  function activateMenuItem () {
    var pathname = window.location.pathname;
    var menuItemSelector = '[href="' + pathname + '"]';

    $('#nav').find(menuItemSelector).parent().addClass('active');
  }
});
