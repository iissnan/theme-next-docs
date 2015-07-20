/* global hexo */
// Tag plugin for Semantic Header Elements (http://semantic-ui.com/elements/header.html)

// Usage: {% iconheader icon %} Something {% endiconheader %}
// = <h1 class="ui aligned center icon header">
//     <i class="[icon-name]"></i>
//     {content}
//   </h1>
hexo.extend.tag.register('iconheader', function iconHeader (args, content) {
  return (
    '<h1 class="ui center aligned icon header">' +
      '<i class=" ' + args.join(' ') + ' icon"></i>' +
      hexo.render.renderSync({text: content, engine: 'markdown'}) +
    '</h1>'
  );
}, {ends: true});



// Usage: {% iconsubheader icon, subText %} Something {% endiconsubheader %}
// = <h2 class="ui header dividing">
//    <i class="{icon-name}"></i>
//    {content}
//   </h2>
hexo.extend.tag.register('iconsubheader', function iconSubHeader (args, content) {
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
}, {ends: true});
