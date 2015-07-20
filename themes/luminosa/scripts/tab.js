/* global hexo */
// Tag plugin for Semantic Tab Module(http://semantic-ui.com/modules/tab.html)


// Usage: {% tabmenu class %} Something {% endtabmenu %}
// = <div class="ui menu top attached {extra-class}"></div>
hexo.extend.tag.register('tabmenu', function tabMenu (args, content) {
  return (
  '<div class="ui ' + args[0] + ' menu top attached">' +
  hexo.render.renderSync({text: content, engine: 'markdown'}) +
  '</div>'
  );
}, {ends: true});



// Usage: {% tabmenuitem content_reference active %} Something {% endtabmenuitem %}
// = <div class="item {active}" data-tab="{tab-name}"></div>
hexo.extend.tag.register('tabmenuitem', function tabMenu (args, content) {
  var active = args[1] ? 'active' : '';
  return '<div class="item ' + active + '" data-tab="' + args[0] + '"> ' + content + ' </div>';
}, {ends: true});



// Usage: {% tabcontent name active %} Something {% endtabcontent %}
// = <div class="ui tab bottom attached segment {active}" data-tab="{tab-name}"></div>
hexo.extend.tag.register('tabcontent', function tabMenu (args, content) {
  var active = args[1] ? 'active' : '';
  return (
  '<div class="ui tab bottom attached segment ' + active + '" data-tab="' + args[0] +'">' +
  hexo.render.renderSync({text: content, engine: 'markdown'}) +
  '</div>'
  );
}, {ends: true});
