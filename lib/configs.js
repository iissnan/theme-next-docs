/**
 * @overview Load Configurations.
 */

var parser = require('js-yaml');
var path = require('path');
var fs = require('fs');

var configFile = path.resolve(__dirname, '../app/config.yml');
var configs = {};

try {
  configs = parser.safeLoad( fs.readFileSync(configFile, 'utf-8') );
} catch (e) {
  throw new Error(e);
}

module.exports = configs;

