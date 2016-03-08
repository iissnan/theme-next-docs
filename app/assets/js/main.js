$(document).ready(function () {

  affix('#nav', $('header').height());
  $('.next-docs-sidebar').size() > 0 && affix('.next-docs-sidebar', $('.next-docs-sections').offset().top);

  $('.home header').css('background-image', function getHeaderBackgroundImage() {
    var r = 1 + parseInt(Math.random() * 9, 10);
    return 'url("/assets/img/banner-' + r + '.jpg")';
  });

  function affix (target, offset) {
    $(target).affix({
      offset: {
        top: offset
      }
    });
  }
});
