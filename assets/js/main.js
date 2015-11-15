$(document).ready(function () {

  $('#nav').affix({
    offset: {
      top: $('header').height()
    }
  });

  $('header').css('background-image', getHeaderBackgroundImage());

  function getHeaderBackgroundImage () {
    var r = 1 + parseInt(Math.random() * 9, 10);
    return 'url("/assets/img/banner-' + r + '.jpg")';
  }
});
