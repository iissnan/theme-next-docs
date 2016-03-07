/**
 * @overview Render `.nun` files with Nunjucks.
 */

var renderer = require('nunjucks');

renderer.configure({
  lstripBlocks: true,
  trimBlocks: true,
  noCache: true
});

module.exports = {
  render: function (template) {
    return renderer.render(template);
  }
};
