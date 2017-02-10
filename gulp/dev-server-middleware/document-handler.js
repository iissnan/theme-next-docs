'use strict';

const utils = require('../../lib/utils');
const renderer = require ('../../lib/renderer');
const configs = require('../../lib/configs');

module.exports = (req, res, next) => {
  let doc = utils.mappingRequestDocument(req.url);
  if (doc) {
    res.end(renderer.render(doc, {
      config: configs
    }));
  }
  next();
};
