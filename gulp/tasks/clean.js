'use strict';

const del = require('del');

module.exports = () => {
  return del.sync('dist');
};
