<!doctype html>
<html>
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
  <meta http-equiv="Cache-Control" content="no-transform" />
  <meta http-equiv="Cache-Control" content="no-siteapp" />
  <link rel="stylesheet" type="text/css" href="{{ url_for(theme.assets.vendors) }}/semantic/dist/semantic.min.css"/>
  <link rel="stylesheet" type="text/css" href="{{ url_for(theme.assets.css) }}/main.css?v={{ theme.version }}"/>
  <meta name="description" content="{{ config.description }}" />
  <title>NexT - an elegant theme for Hexo.</title>
  <script src="{{ url_for(theme.assets.vendors) }}/jquery/dist/jquery.min.js"></script>
  <script src="{{ url_for(theme.assets.vendors) }}/semantic/dist/semantic.min.js"></script>
  <style>
    body { padding: 100px; }
    h1.ui.header { margin-bottom: 80px; }
    .logo a { color: rgba(0,0,0,.87); }

    a:hover { text-decoration: none; }
    .navigation a {
      display: block;
      padding: 10px;
    }
    .navigation a:hover { background: #f4f4f4; }
    a .ui.header {
      font-family: Lato,"Segoe UI", Tahoma, "Microsoft YaHei", Verdana, arial, sans-serif;
    }
    a .ui.header>.icon { font-size: 30px; }
    a .ui.header .content { font-size: 18px; }
    a h2.ui.header .sub.header { font-size: 14px; }

  </style>
</head>

<body>
  <div class="ui container text">
    <h1 class="ui center ui header logo">
      <a href="http://theme-next.iissnan.com">NexT</a>
    </h1>
    <div class="ui internally grid navigation">
      <div class="row">
        <div class="eight wide column">
          <a href="/five-minutes-setup.html">
            <h2 class="ui header">
              <i class="checkered flag icon"></i>
              <div class="content">
                {{ _p('home.getting_stated.header') }}
                <div class="sub header">{{ _p('home.getting_stated.sub_header') }}</div>
              </div>
            </h2>
          </a>
        </div>
        <div class="eight wide column">
          <a href="/theme-settings.html">
            <h2 class="ui header">
              <i class="checkered star icon"></i>
              <div class="content">
                {{ _p('home.configurations.header') }}
                <div class="sub header">{{ _p('home.configurations.sub_header') }}</div>
              </div>
            </h2>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <a href="/third-party-services.html">
            <h2 class="ui header">
              <i class="plug icon"></i>
              <div class="content">
                {{ _p('home.third_party.header') }}
                <div class="sub header">{{ _p('home.third_party.sub_header') }}</div>
              </div>
            </h2>
          </a>
        </div>
        <div class="eight wide column">
          <a href="/faqs.html">
            <h2 class="ui header">
              <i class="life ring icon"></i>
              <div class="content">
                {{ _p('home.faq.header') }}
                <div class="sub header">{{ _p('home.faq.sub_header') }}</div>
              </div>
            </h2>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="eight wide column">
          <a href="/tag-plugins.html">
            <h2 class="ui header">
              <i class="icon rocket"></i>
              <div class="content">
                {{ _p('home.tag_plugins.header') }}
                <div class="sub header">{{ _p('home.tag_plugins.sub_header') }}</div>
              </div>
            </h2>
          </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
