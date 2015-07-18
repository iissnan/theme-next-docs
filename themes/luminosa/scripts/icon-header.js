/* global hexo */
// Usage: {% iconheader icon %} Something {% endiconheader %}

function iconHeader (args, content) {
  return (
    '<h1 class="ui center aligned icon header">' +
      '<i class=" ' + args.join(' ') + ' icon"></i>' +
      hexo.render.renderSync({text: content, engine: 'markdown'}) +
    '</h1>'
  );
}

hexo.extend.tag.register('iconheader', iconHeader, {ends: true});
