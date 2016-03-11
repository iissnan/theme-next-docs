$(document).ready(function () {

  affix('#nav', $('header').height());
  $('.next-docs-sidebar').size() > 0 && affix('.next-docs-sidebar', $('.next-docs-sections').offset().top);

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

  function affix (target, offset) {
    $(target).affix({
      offset: {
        top: offset
      }
    });
  }
});
