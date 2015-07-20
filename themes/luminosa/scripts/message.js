/* global hexo */
// Tag plugin for Semantic Message Collections(http://semantic-ui.com/collections/message.html)


// Usage: {% message class %} Something {% endmessage %}
// = <div class="ui message {extra-class}"></div>
hexo.extend.tag.register('message', function (args, content) {
  return (
    '<div class="ui message ' + args.join(' ') + '">' +
      hexo.render.renderSync({text: content, engine: 'markdown'}) +
    '</div>'
  );
}, {ends: true});
