import * as $ from 'jquery';

export default () => {
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
}
