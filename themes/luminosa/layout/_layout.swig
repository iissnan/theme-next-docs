{% import '_macros/_menu.swig' as menu_template %}
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
    <title>{% block title %}{% endblock %}</title>
  </head>

  <body>
    <div class="luminosa">

      <header class="ui fixed inverted menu stackable">
        <div class="ui container">
          <a href="/" class="header item">Something</a>
          {{ menu_template.render(site.data.menu.main) }}

          <div class="right menu">
            {{ menu_template.render(site.data.menu.aside) }}
          </div>
        </div>
      </header>

      <main class="ui main text container">
        test
      </main>

    </div>

    <script src="{{ url_for(theme.assets.vendors) }}/jquery/dist/jquery.min.js"></script>
    <script src="{{ url_for(theme.assets.vendors) }}/semantic/dist/semantic.min.js"></script>
    <script>
      $('.ui.dropdown').dropdown();
    </script>
  </body>
</html>
