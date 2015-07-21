/* global hexo */
// Tag plugin for Semantic divider Elements(http://semantic-ui.com/elements/divider.html)


// Usage: {% dividerhorizontal class %} Something {% enddividerhorizontal %}
// = <div class="ui horizontal divider {extra-class}"></div>
hexo.extend.tag.register('dividerhorizontal', function (args, content) {
  return (
  '<div class="ui horizontal divider ' + args.join(' ') + '">' +
    hexo.render.renderSync({text: content, engine: 'markdown'}) +
  '</div>'
  );
}, {ends: true});
