title: 常见问题
---

{% iconheader circular life ring %}
  常见问题
{% endiconheader %}


{% tableheadless celled striped very compact small %}
| | |
|-------------|--------|
|[首页显示文章摘录](#首页显示文章摘录)        |[设定归档页面文章的篇数](#设定归档页面文章的篇数)        |[设置 favicon](#设置_favicon)       |[自定义字体](#自定义字体)|
|[自定义页面内容区域的宽度](#自定义页面内容区域的宽度) |[标签和分类页面的统计数据不正确](#标签和分类页面的统计数据不正确)      |[语言显示不正确](#语言显示不正确)       ||
{% endtableheadless %}


<i class="icons"><i class="inverted green life ring icon"></i><i class="corner inverted add icon"></i></i> [问题反馈](https://github.com/iissnan/theme-next/issues)


### 首页显示文章摘录

NexT 支持三种方式来控制首页文章的显示方式。若需要在首页显示摘录，可以通过以下方法：

1. 在文章中使用 `<!-- more -->` 手动进行截断
1. 在文章的 [front-matter](https://hexo.io/docs/front-matter.html) 中添加 `description`，并提供文章摘录
1. 自动形成摘要，在 主题配置文件 中添加：
        auto_excerpt:
          enable: true
          length: 150
   默认截取的长度为 `150` 字符，可以根据需要自行设定

### 设定归档页面文章的篇数

若要实现首页显示 M 篇文章，而归档页面显示 N 篇文章的需求，需要两个设定：

{% tabmenu tabular %}
  {% tabmenuitem page-size-step-1 active %} 步骤一 {% endtabmenuitem %}
  {% tabmenuitem page-size-step-2 %} 步骤二 {% endtabmenuitem %}
{% endtabmenu %}

{% tabcontent page-size-step-1 active %}
安装 Hexo 插件。在站点目录下使用 `npm install --save` 安装如下扩展：

- [hexo-generator-index](https://github.com/hexojs/hexo-generator-index)
- [hexo-generator-archive](https://github.com/hexojs/hexo-generator-archive)
- [hexo-generator-tag](https://github.com/hexojs/hexo-generator-tag)
{% endtabcontent %}

{% tabcontent page-size-step-2 %}
安装完成后，在 站点配置文章 中，设定：

    index_generator:
      per_page: 5

    archive_generator:
      per_page: 20
      yearly: true
      monthly: true

    tag_generator:
      per_page: 10

将 `per_page` 设定成所需要的篇数
{% endtabcontent %}


### 设置 favicon

将 `favicon` 放置到站点的 `source` 目录下即可

### 自定义字体

编辑主题的 `source/css/_custom/variables.styl` 文件，新增两个变量：

    $font-family-headings = Georgia, sans // 标题，修改成你期望的字体族
    $font-family-base = "Microsoft YaHei", Verdana, sans-serif // 修改成你期望的字体族


### 自定义页面内容区域的宽度

编辑主题的 `source/css/_custom/variables.styl` 文件，新增变量：

    $content-desktop = 700px  // 修改成你期望的宽度

### 标签和分类页面的统计数据不正确

按照以下步骤更新数据：

1. 删除站点目录下的 `db.json` 文件
1. 执行 `hexo clean`
1. 重新生成 `hexo g`


### 语言显示不正确

为了确保语言正确显示，建议明确指定所使用的语言。编辑 站点配置文件， 将 `language` 字段设置成明确的语言代码。例如：

    language: zh-Hans

可用的语言有：

- English (`en`)
- 中文简体 (`zh-Hans`)
- French (`fr-FR`)
- 正体中文 (`zh-hk`/`zh-tw`)
- Russian (`ru`)
- German (`de`)