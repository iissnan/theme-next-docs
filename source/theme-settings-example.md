title: 主题配置参考
---

{% iconheader circular file text outline %}
    主题配置参考
{% endiconheader %}


## 放置在 站点配置文件 中的选项

    # =============================================================================
    # NexT Theme configuration
    # =============================================================================

    # 多说帐号
    duoshuo_shortname: your-duoshuo-shortname

    # DISQUS 帐号 （如果已经设置 多说 帐号，此选项将被跳过）
    disqus_shortname: your-disqus-shortname

    # JiaThis 分享服务
    jiathis: true

    # 多说 分享服务（必须启用多说）
    duoshuo_share:

    # 社交链接，将在侧栏中显示
    social:
      GitHub: your-github-url
      Twitter: your-twitter-url
      Weibo: your-weibo-url
      DouBan: your-douban-url
      ZhiHu: your-zhihu-url
      # 等等


    # Creative Commons 4.0 International License.
    # http://creativecommons.org/
    # Available: by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero
    creative_commons: by-nc-sa

    # Google 站长工具验证，请选择 `HTML Meta` 验证方式
    # See: https://www.google.com/webmasters/
    google_site_verification: VvyjvVXcJQa0QklHipu6pwm2PJGnnchIqX7s5JbbT_0


    # Google 分析 ID
    google_analytics:


    # 百度统计 ID，此 ID 是百度统计提供脚本中 hm.js? 后面那串字符，非百度统计帐号
    baidu_analytics: 50c15455e37f70aea674ff4a663eef27

    # 站点起始时间
    since: 2011

    # =============================================================================
    # End NexT Theme configuration
    # =============================================================================


## 放置在 主题配置文件 中的选项

    # 菜单配置
    menu:
      home: /
      archives: /archives
      #categories: /categories
      tags: /tags
      #about: /about


    # Favicon
    # 从`Next 0.2`起，favicon将不再放置于主题之内。
    # 请将你的favicon放置在`hexo-site/source/`目录下。
    favicon: /favicon.ico


    # 设置为`false`不显示`rss`链接
    # 留空，并且通过`hexo-site-feed`插件配置使用默认的feed
    # 设置成特定的`url`，适用于通过第三方服务定制feed的情况。
    rss: false

    # 图标字体
    # NexT内建四种图标: default | linecons | fifty-shades | feather
    icon_font: default
    #icon_font: fifty-shades
    #icon_font: feather
    #icon_font: linecons


    # 代码高亮主题
    # available: normal | night | night eighties | night blue | night bright
    highlight_theme: normal


    # MathJax support
    # 开启数学公式渲染支持，默认关闭。设置为 `true` 开启。
    mathjax:


    # Mist
    # 使用 Mist 主题
    #scheme: Mist


    # Sidebar 侧栏行为，可选值有
    #  - post   默认值，在文章页面自动展开侧栏
    #  - always 在所有页面自动展开侧栏
    #  - hide   在手动点击侧栏的开关按钮时展开
    sidebar: post
    #sidebar: always
    #sidebar: hide


    # `阅读全文` 按钮跳转之后是否自动滚动页面到设置 `<!-- more -->` 的地方。
    scroll_to_more: true


    # 是否为侧边栏文章的目录自动添加索引，默认开启。设置为 `false` 关闭。
    toc_list_number: true