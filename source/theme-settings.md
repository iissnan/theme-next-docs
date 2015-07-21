title: 主题设定
---

{% iconheader circular checkered star %}
  主题设定
{% endiconheader %}

NexT 坚持将复杂的细节隐藏，提供尽量少并且简便的设置，保持最大限度的易用性。

<div class="ui sticky">{% tableheadless celled striped very compact selectable small %}
| | |
|-------------|--------|
|[自定义 LOGO 以及主题图标](#自定义_LOGO_以及主题图标) | [多语言](#多语言) | [RSS 链接](#RSS_链接)          | [标签云 页面](#标签云页面) | [分类 页面](#分类页面)        | 
|[代码高亮主题](#代码高亮主题)                  | [站点建立时间](#站点建立时间)          | [数学公式显示](#数学公式显示)       | [侧边栏头像](#侧边栏头像)  | [侧边栏社交链接](#侧边栏社交链接)   | 
|[About 页面](#About页面)                   | [友情链接](#友情链接)        | [腾讯公益404页面](#腾讯公益404页面) |  | |
{% endtableheadless %}
</div>


## 自定义 LOGO 以及主题图标 

NexT 使用 [IcoMoon](http://icomoon.io) 的服务为主题提供四套内建的图标。

借助于这个特性，你可以定制自己的`LOGO`以及主题的图标。自定义图标需要手工处理：

1. 在 [IcoMoon](http://icomoon.io) 挑选图标，并生成对应的字体文件。假设你的字体文件命名为 `foo` 。需要注意的是，生成字体的文件名 `icomoon` 不要更改。
1. 在 `source/fonts/` 目录下新建一个目录，名称以 `icon-` 开头加上 `foo` ，即 `source/fonts/icon-foo`。
1. 在 `source/css/_fonts/` 目录下新建一个 `styl` 文件，名字为 `icon-foo.styl`。将 IcoMoon 提供的样式文件迁移到这个 `styl` 文件中。请参看内置的文件。

    {% table celled very compact striped small %}
    |class name          | usage                |
    |--------------------|---------------------|
    |`icon-logo`           | 指定Logo图标          |
    |`icon-home`           | 指定菜单中Home链接图标  |
    |`icon-archives`       | 指定菜单中Archives链接图标    |
    |`icon-tags`           | 指定菜单中Tags链接图标    |
    |`icon-feed`           | 指定菜单中RSS链接图标   |
    |`icon-about`          | 指定菜单中About链接图标    |
    |`icon-heart`          | 指定菜单中底部心的图标      |
    |`icon-external-link`  | 指定菜单中外链的链接图标  |
    {% endtable %}

1. 在主题中将 `icon_font` 设置为 `foo`，即：

        icon_font: foo
        
        
## 多语言

NexT 目前支持六种语言版本：

- English (`en`)
- 中文简体 (`zh-Hans`)
- French (`fr-FR`)
- 正体中文 (`zh-hk`/`zh-tw`)
- Russian (`ru`)
- German (`de`)

默认语言是英文。编辑 站点配置文件 的 `_config.yml` ，将 `language` 字段更改为你所需要的语言版本代号：


    language: en
    # language: zh-Hans
    # language: fr-FR
    # language: zh-hk
    # language: zh-tw
    # language: ru
    # language: de


Thanks to:

- [@karlito40](https://github.com/karlito40) for the French translation。
- [@goodseller](https://github.com/goodseller) 提供 正体（台湾/香港） 翻译。
- [@lkatartn](https://github.com/lkatartn) for the Russian translation。
- [@jacksgt](https://github.com/jacksgt) for the German translation。


## RSS 链接

编辑 主题配置文件，将 `rss` 字段设置为：

1. `rss: false`，这将会禁用Feed链接。
2. `rss:  `，当值为空的时候，默认会使用站点的 Feed 链接。在此之前需要使用 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 插件生成 Feed。

    依照 `hexo-generator-feed` 插件的安装说明进行 Feed 生成，当配件配置完毕后，主题将自动显示 Feed 链接。

3. `rss: http://your-feed-url`，指定特定的链接地址，适用于已经烧制过 Feed 的情形。


## 标签云页面

添加一个标签云页面，并在菜单中显示页面链接。

1. 新建一个页面，命名为 `tags` 。命令如下：

        hexo new page "tags"

1. 编辑刚新建的页面，将页面的类型设置为 `tags` ，主题将自动为这个页面显示标签云。

        title: All tags
        date: 2014-12-22 12:39:04
        type: "tags"
        ---

    注意：如果有启用多说 或者 Disqus 评论，默认页面也会带有评论。需要关闭的话，请添加字段 comments 并将值设置为 false，如：

        title: All tags
        date: 2014-12-22 12:39:04
        type: "tags"
        comments: false
        ---

1. 在菜单中添加链接。编辑主题的 `_config.yml` ，添加 `tags` 到 `menu` 中，如下:

        menu:
          home: /
          archives: /archives
          tags: /tags


## 分类页面

添加一个 分类 页面，并在菜单中显示页面链接。

1. 新建一个页面，命名为 `categories` 。命令如下：

        hexo new page categories

1. 编辑刚新建的页面，将页面的类型设置为 `categories` ，主题将自动为这个页面显示所有分类。

        title: 分类
        date: 2014-12-22 12:39:04
        type: "categories"
        ---

    注意：如果有启用多说 或者 Disqus 评论，默认页面也会带有评论。需要关闭的话，请添加字段 `comments` 并将值设置为 `false`，如：

        title: 分类
        date: 2014-12-22 12:39:04
        type: "categories"
        comments: false
        ---

1. 在菜单中添加链接。编辑主题的 `_config.yml` ，将 `menu` 中的 `categories: /categories` 注释去掉，如下:

        menu:
          home: /
          categories: /categories
          archives: /archives
          tags: /tags


## 代码高亮主题

NexT 使用 [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) 作为代码高亮，共有5款主题供你选择。

默认使用的是白色的 `normal`，以下是 `normal` 与 `night` 的预览：

{% tableheadless very compact %}

|||
|---|---|
|![Tomorrow Normal Preview](http://iissnan.com/nexus/next/tomorrow-normal.png)|![Tomorrow Night Preview](http://iissnan.com/nexus/next/tomorrow-night.png)|
{% endtableheadless %}


请访问 [Tomorrow Theme](https://github.com/chriskempson/tomorrow-theme) 查看更多主题。


## 站点建立时间

这个时间将在站点的底部显示，例如 `© 2013 - 2015`

编辑**站点**的 `_config.yml`，新增字段 `since`。

    since: 2013


## 数学公式显示

NexT 借助于 MathJax 来显示数学公式。默认是关闭的。

编辑**主题**的 `_config.yml`，将 `mathjax` 设定为 `true` 即可。

    # MathJax Support
    mathjax:


## 侧边栏头像


编辑**站点**的 `_config.yml`，新增字段 `avatar`， 值设置成头像的链接地址。

其中，头像的链接地址可以是：

1. 完整的互联网 URL，例如：`https://avatars1.githubusercontent.com/u/32269?v=3&s=460`
1. 站点内的地址，例如：
  
    - `/uploads/avatar.jpg`  需要将你的头像图片放置在 `站点的 source/uploads/`（可能需要新建`uploads`目录）
    - `/images/avatar.jpg`   需要将你的头像图片放置在 `主题的 source/images/` 目录下。
    
    
## 侧边栏社交链接


编辑**站点**的 `_config.yml`，新增字段 `social`，然后添加社交站点名称与地址即可。例如：

    # Social links
    social:
      github: https://github.com/your-user-name
      twitter: https://twitter.com/your-user-name
      weibo: http://weibo.com/your-user-name
      douban: http://douban.com/people/your-user-name
      zhihu: http://www.zhihu.com/people/your-user-name
      # 等等

## About页面


新建一个 `about` 页面：


    hexo new page "about"


菜单显示 `about` 链接，在主题的 `_configy.yml` 设置中将 `menu` 中 `about` 前面的注释去掉即可。

    menu:
      home: /
      archives: /archives
      tags: /tags
      about: /about


## 友情链接

编辑站点的 `_config.yml` 添加：

    # title, chinese available
    links_title: Links
    # links
    links:
      MacTalk: http://macshuo.com/


## 腾讯公益404页面

简体中文增加腾讯公益404页面，寻找丢失儿童，让大家一起关注此项公益事业！效果如下 [http://www.ixirong.com/404.html](http://www.ixirong.com/404.html)

使用方法，新建404.html页面，放到主题的`source`目录下，内容如下：

    <!DOCTYPE HTML>
    <html>
    <head>
      <meta http-equiv="content-type" content="text/html;charset=utf-8;"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="all" />
      <meta name="robots" content="index,follow"/>
    </head>
    <body>
    
    <script type="text/javascript" src="http://www.qq.com/404/search_children.js" charset="utf-8" homePageUrl="your site url " homePageName="回到我的主页"></script>
      
    </body>
    </html>