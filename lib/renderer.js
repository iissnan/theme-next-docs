/**
 * @overview Render `.nun` files with Nunjucks.
 */

var nunjucks = require('nunjucks');
var HighlightExtension = require('./tags/highlight');

var loader = new nunjucks.FileSystemLoader(__dirname + '/../app', {
  noCache: true
});
var env = new nunjucks.Environment(loader, {
  lstripBlocks: true,
  trimBlocks: true
});

env.addExtension('HighlightExtension', new HighlightExtension(nunjucks));

module.exports = {
  render: function (template, context) {
    return env.render(template, context);
  }
};
