{% macro render(menu) %}
  {% for item in menu %}
    {% if item.multiple %}
      <div class="ui dropdown item">
        <i class="icon {{ item.icon }}"></i>
        {{ __('menu.' + loop.key) }}
        <i class="dropdown icon"></i>
        <div class="menu">
          {% for sub_item in item.items %}
            <a href="{{ sub_item }}" class="item">{{ __('menu.' + loop.key) }}</a>
          {% endfor %}
        </div>
      </div>
    {% else %}
      <a href="{{ item.link }}" class="item">
        {% if item.icon %}
          <i class="icon {{ item.icon }}"></i>
        {% endif %}
        {{ __('menu.' + loop.key) }}
      </a>
    {% endif %}
  {% endfor %}
{% endmacro %}
