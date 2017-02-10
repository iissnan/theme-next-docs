'use strict';

const docHandler = require('./document-handler');
const assetHandler = require('./asset-handler');

module.exports = () => [docHandler, assetHandler()];
