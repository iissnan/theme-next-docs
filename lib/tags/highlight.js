module.exports = function HighlightExtension(nunjucks) {
  var hljs = require('highlight.js');

  this.tags = ['code'];

  this.parse = function (parser, nodes, lexer) {
    // get the tag token
    var tok = parser.nextToken();

    // parse the args and move after the block end. passing true
    // as the second arg is required if there are no parentheses
    var args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(tok.value);

    // parse the body and possibly the error block, which is optional
    var body = parser.parseUntilBlocks('endcode');

    parser.advanceAfterBlockEnd();

    // See above for notes about CallExtension
    return new nodes.CallExtension(this, 'run', args, [body]);
  };

  this.run = function(context, language, body) {
    var html = '';
    var languageMatched;

    // The language arg is not passed, then it is the body.
    if (!body) {
      body = language;
      language = '';
    }
    languageMatched = hljs.getLanguage(language);

    var spaces = 0;
    body = body().split('\n').map(function (line, index) {
      var matches;

      if (index === 0) {
        matches = line.match(/^(\s+)/);
        matches && (spaces = matches[1].length);
      }

      return line.replace(new RegExp('^\\s{' + spaces + '}'), '');
    }).join('\n');

    try {
      var result = languageMatched ? hljs.highlight(language, body) : hljs.highlightAuto(body);

      html = [
        '<pre><code class="' + result.language + ' hljs">',
        result.value,
        '</code></pre>'
      ];
      html = new nunjucks.runtime.SafeString(html.join(''));
    } catch (error) {
      throw new Error(error);
    }
    return html;
  };

};
