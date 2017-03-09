var url = require('url');
var path = require('path');

var source = path.join(__dirname, '../app');

module.exports = {
  mappingRequestDocument: function (requestUrl) {
    var pathname = url.parse(requestUrl).pathname;

    pathname = pathname == '/' ? '/index.html' : pathname;

    if ( !/\.html$/.test(pathname) ) {
      return;
    }

    pathname = pathname.replace(/html$/, 'njk');

    return path.join(source, pathname);
  }
};
