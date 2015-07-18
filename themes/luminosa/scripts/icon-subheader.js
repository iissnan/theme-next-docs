/* global hexo */
// Usage: {% iconsubheader icon, subText %} Something {% endiconsubheader %}

function iconSubHeader (args, content) {
  args = args.join(' ').split(',');

  return (
    '<h2 class="ui header dividing">' +
      '<i class="' + args[0] + ' icon"></i>' +
      '<div class="content">' +
        content +
        (args[1] ? '<div class="sub header">' + args[1] + '</div>' : '') +
      '</div>' +
    '</h2>'
  );
}

hexo.extend.tag.register('iconsubheader', iconSubHeader, {ends: true});
