title: 5 分钟快速安装
---

{% iconheader circular checkered flag %}
  5 分钟快速安装
{% endiconheader %}


Hexo 有两份主要的配置文件（`_config.yml`），一份位于站点根目录下，另一份位于主题目录下。为了描述方便，在以下说明中，将前者称为 **站点配置文件**，后者称为 **主题配置文件**。

{% tableheadless celled striped very compact small %}
| | |
|-------------|--------|
|[下载 NexT 主题](#下载_NexT_主题)        |[启用 NexT 主题](#启用_NexT_主题)        |[验证主题是否启用](#验证主题是否启用)       |[选择 Scheme](#选择_Scheme)|
|[语言设置](#语言设置)|[菜单设置](#菜单设置)|[侧栏设置](#侧栏设置)|[头像设置](#头像设置)|
|[作者名称](#作者名称)|[站点描述设置](#站点描述设置)|[多说评论系统](#多说评论系统)|[百度统计](#百度统计)|
|[Swiftype 搜索](#Swiftype_搜索)||||
{% endtableheadless %}

{% icongroup inverted green life ring, inverted add %}
[文档问题反馈](https://github.com/iissnan/theme-next/issues)
{% endicongroup %}

{% iconsubheader diamond, 安装 NexT 主题 %}
  安装
{% endiconsubheader %}

Hexo 安装主题的方式非常简单，只需要将主题文件放置于站点目录的 `themes` 目录下，然后修改下配置文件即可。具体到 NexT 来说，安装步骤如下。

### 下载 NexT 主题

如果你熟悉 [Git](http://git-scm.com/)，建议你使用 克隆最新版本 的方式，方便之后的主题更新。

{% tabmenu tabular %}
  {% tabmenuitem clone active %} 克隆最新版本 {% endtabmenuitem %}{% tabmenuitem stable %} 下载稳定版本 {% endtabmenuitem %}
{% endtabmenu %}

{% tabcontent clone active %}

在终端窗口下，定位到 Hexo 站点目录下

    $ cd your-hexo-site
    $ git clone https://github.com/iissnan/hexo-theme-next themes/next
 
{% endtabcontent %}

{% tabcontent stable %}
1. 前往 NexT 版本 [发布页面](https://github.com/iissnan/hexo-theme-next/releases)
1. 选择你所需要的版本，下载 Download 下的 Source Code (zip) 到本地。
    例如，下载 v0.4.0 版本：
    {% img ui fluid bordered image /uploads/five-minutes-setup/download-stable-version.png %}
1. 解压所下载的压缩包至站点的 themes 目录下，并将 解压后的文件夹名称（`hexo-theme-next-0.4.0`）更改为 `next`
{% endtabcontent %}
  


### 启用 NexT 主题

克隆/下载 完成后，打开 站点配置文件，找到 `theme` 字段，并将其值更改为 `next`。


### 验证主题是否启用
 
运行 `hexo s --debug`，并访问 `http://localhost:4000`，确保站点正确运行。





{% iconsubheader settings, 主题参数设定 %}
  主题设定
{% endiconsubheader %}

### 选择 Scheme

NexT 通过 Scheme 提供主题中的主题。 Mist 是 NexT 的第一款 Scheme。启用 Mist 仅需在 主题配置文件 中将 `#scheme: Mist` 前面的 `#` 注释去掉即可。

### 语言设置

编辑 站点配置文件，将 `language` 设置成你所需要的语言。
例如选用正体中文，则配置为：

    language: zh-hk


可用的语言如以下表格所示：

{% table celled very compact striped selectable small %}
语言   |    代码 |       设定值
-------|--------|----------------
English| `en`      | `language: en`
简体中文| `zh-Hans` | `language: zh-Hans`
French | `fr-FR`   | `language: fr-FR`
正体中文| `zh-hk`/`zh-tw` | `language: zh-hk`
Russian| `ru`      | `language: ru`
German | `de`      | `language: de`
{% endtable %}




### 菜单设置

菜单配置在 主题配置文件 的 `menu`。 若你的站点运行在子目录中，请将链接前缀的 `/` 去掉。默认支持的菜单项有：

{% table celled very compact striped selectable small %}
键值         |  设定值     | comment
------------|-------------|--------
home        | `home: /`                  | 主页
archives    | `archives: /archives`      | 归档页
categories  | `categories: /categories`  | 分类页（需手动创建）
tags        | `tags: /tags`              | 标签页（需手动创建）
about       | `about: /about`            | 关于页面 （需手动创建）
commonweal  | `commonweal: /404.html`   | 公益 404 （需手动创建）
{% endtable %}

菜单示例配置：

    menu:
      home: /
      archives: /archives
      #about: /about
      #categories: /categories
      tags: /tags
      #commonweal: /404.html



### 侧栏设置

默认情况下，侧栏仅在文章页面（拥有目录列表）时才显示。可以通过修改 主题配置文件 中的 `sidebar` 字段来控制侧栏的行为。

支持的选项有：

- `post`    - 默认行为，在文章页面（拥有目录列表）时显示
- `always`  - 在所有页面中都显示
- `hide`    - 在所有页面中都隐藏（可以手动展开）


侧栏示例配置：

    sidebar: post

### 头像设置

编辑 站点配置文件，新增字段 `avatar`， 值设置成头像的链接地址。

其中，头像的链接地址可以是：

{% table celled very compact striped selectable small %}
地址 | 值
----------------| -------------
完整的互联网 URL | `https://avatars1.githubusercontent.com/u/32269?v=3&s=460`
站点内的地址     | `/uploads/avatar.jpg`  - 需要将你的头像图片放置在 站点的 `source/uploads/`（可能需要新建uploads目录）
 | `/images/avatar.jpg`   - 需要将你的头像图片放置在 主题的 `source/images/` 目录下 
{% endtable %}


头像设置示例： 

    avatar: https://avatars1.githubusercontent.com/u/32269?v=3&s=460


### 作者名称

编辑 站点配置文件，设置 `author` 为你的昵称。


### 站点描述设置

编辑 站点配置文件，设置 `description` 字段为你的站点描述。站点描述可以是你喜欢的一句签名:)





{% iconsubheader cubes, 第三方服务集成 %}
  第三方服务
{% endiconsubheader %}

### 多说评论系统

{% message info small %}
**注意**：`duoshuo_shortname` 不是你的多说登录的 id
{% endmessage %}

使用多说前需要先在 多说 创建一个站点。具体步骤如下：

1. 登录后在首页选择 “我要安装”。
1. 创建站点，填写站点相关信息。**多说域名** 这一栏填写的即是你的 `duoshuo_shortname`，如图：
    {% img ui fluid bordered image /uploads/five-minutes-setup/duoshuo-create-site.png %}

1. 创建站点完成后在 站点配置文件 中新增 `duoshuo_shortname` 字段，值设置成上一步中的值。

多说设置示例：

    duoshuo_shortname: iissnan-notes


### 百度统计

{% message info small %}
**注意**： `baidu_analytics` 不是你的百度 id 或者 百度统计 id
{% endmessage %}

1. 登录 [百度统计](http://tongji.baidu.com/)，定位到站点的代码获取页面
1. 复制 `hm.js?` 后面那串统计脚本 id，如：
    {% img ui fluid bordered image /uploads/five-minutes-setup/analytics-baidu-id.png %}
1. 编辑 站点配置文件，新增字段 `baidu_analytics` 字段，值设置成你的百度统计脚本 id。


### Swiftype 搜索

使用 Swiftype 之前需要前往 Swiftype 配置一个搜索引擎。
然后，编辑 **站点配置文件**，新增 `swiftype_key` 字段，值为你的 swiftype 搜索引擎的 key。


{% dividerhorizontal %}下一步{% enddividerhorizontal %}

- [主题配置](/theme-settings.html)