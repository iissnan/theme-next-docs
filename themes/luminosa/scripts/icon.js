//
/* global hexo */
// Tag plugin for Semantic Icon (http://semantic-ui.com/elements/icon.html)

hexo.extend.tag.register('icongroup', function (args, content) {
  args = args.join(' ').split(',');

  return (
    '<i class="icons">' +
      '<i class="' + args[0] + ' icon"></i>' +
      '<i class="corner ' + args[1] + ' icon"></i>' +
    '</i> ' +
    hexo.render.renderSync({
      text: content,
      engine: 'markdown'
    }).replace(/^<p>/, '').replace(/<\/p>$/, '')
  );
}, true);
