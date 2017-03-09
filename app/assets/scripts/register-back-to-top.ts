import * as $ from 'jquery';

export default () => {
  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop : 0 }, 800);
  });
}
