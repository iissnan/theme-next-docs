/**
 * @overview Render `.nun` files with Nunjucks.
 */

const nunjucks = require('nunjucks');
const HighlightExtension = require('./tags/highlight');
const configs = require('./configs');

const loader = new nunjucks.FileSystemLoader(__dirname + '/../app', {
  noCache: true
});
const env = new nunjucks.Environment(loader, {
  lstripBlocks: true,
  trimBlocks: true
});

env.addExtension('HighlightExtension', new HighlightExtension(nunjucks));

module.exports = {
  render: function (template, context) {
    context = context || { config: configs };
    return env.render(template, context);
  }
};
