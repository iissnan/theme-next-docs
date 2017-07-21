/**
 * @overview Load Configurations.
 */

const parser = require('js-yaml');
const path = require('path');
const fs = require('fs');

const configFile = path.resolve(__dirname, '../app/config.yml');
var configs = {};

try {
  configs = parser.safeLoad( fs.readFileSync(configFile, 'utf-8') );
} catch (e) {
  throw new Error(e);
}

module.exports = configs;

