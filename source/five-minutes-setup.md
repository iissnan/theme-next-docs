title: Features
---
<h1 class="ui center aligned icon header"> <i class="circular checkered flag icon"></i>5 Minutes Setup</h1>

<br />
<br />


在 Hexo 中，通常有两份配置文件，一个是站点根目录下的 `_config.yml`；另外一个是主题目录下的 `_config.yml`。为了描述方便，在以下说明中，将前者称为 **站点配置文件**，后者称为 **主题配置文件**。

<h2 class="ui header"><i class="diamond icon"></i><div class="content">Installation<div class="sub header">Install NexT theme</div></div></h2>

Hexo 安装主题的方式非常简单，只需要将主题文件放置于站点目录的 `themes` 目录下，然后修改下配置文件即可。具体到 NexT 来说，安装步骤如下。

### 下载 NexT 主题

<div class="ui segment"><div class="ui top left attached label">Tips</div><div>可以选择 克隆 或者 [稳定的发布版本](https://github.com/iissnan/hexo-theme-next/releases)</div></div>


为了方便之后的更新，建议使用克隆的方式。克隆命令如下：

```shell
$ cd your-hexo-site
$ git clone https://github.com/iissnan/hexo-theme-next themes/next
```

### 启用 NexT 主题

克隆完成后，打开 站点配置文件，找到 `theme` 字段，并将其值更改为 `next`。

运行 `hexo s --debug`，并访问 `http://localhost:4000`，确保站点正确运行。

## 主题设定

### Mist
> Mist 是 NexT 主题的第一款主题中的主题

启用 Mist 仅需在 **主题配置文件** 中将 `#scheme: Mist` 前面的注释去掉即可。

### 语言

编辑 **站点配置文件**，将 `language` 设置成你所需要的语言。可用的语言如下：

- English (default)
- 中文简体 (zh-Hans)
- French (fr-FR)
- 正体中文 (zh-hk/zh-tw)
- Russian (ru)
- German (de)

例如选用正体中文，则配置为：

```yml
language: zh-hk
```


### 菜单

菜单配置在 **主题配置文件** 的 `menu`。 默认支持的菜单项有：

- `home` 
- `categories`
- `about`
- `archives`
- `tags`
- `commonweal`

若你的站点运行在子目录中，请将链接前缀的 `/` 去掉。

### 侧栏设置

默认情况下，侧栏仅在文章页面（拥有目录列表）时才显示。可以通过修改 **主题配置文件** 中的 `sidebar` 字段来控制侧栏的行为。
支持的选项有：

- `post`  - 默认行为
- `always`  - 在所有页面中都显示
- `hide`    - 在所有页面中都隐藏（可以手动展开）

### 作者头像

编辑 **站点配置文件** ，新增字段 `avatar`， 值设置成头像的链接地址。

其中，头像的链接地址可以是：

* 完整的互联网 URL，例如：`https://avatars1.githubusercontent.com/u/32269?v=3&s=460`
* 站点内的地址，例如：   <br />
`/uploads/avatar.jpg`  - 需要将你的头像图片放置在 站点的 `source/uploads/`（可能需要新建uploads目录）   <br />
`/images/avatar.jpg`   - 需要将你的头像图片放置在 主题的 `source/images/` 目录下。


### 作者名称

编辑 **站点配置文件**，设置 `author` 为你的昵称。


### 站点描述设置

编辑 **站点配置文件**，设置 `description` 字段为你的站点描述。站点描述可以是你喜欢的一句签名:)


## 第三方服务

### 多说

使用多说评论，仅需在 **站点配置文件** 中新增 `duoshuo_shortname` 字段，值设置成你的多说 `short-name`。
需要注意的是此处的 `shortname` 不是你的多说登录的 id，详细见 [设置多说与DISQUS](https://github.com/iissnan/hexo-theme-next/wiki/%E8%AE%BE%E7%BD%AE%E5%A4%9A%E8%AF%B4-DISQUS)

### DISQUS

DISQUS 的配置与多说类似，仅需提供 `shortname`，并添加 `disqus_shortname` 字段。


### Swiftype 搜索

使用 Swiftype 之前需要前往 Swiftype 配置一个搜索引擎。
然后，编辑 **站点配置文件**，新增 `swiftype_key` 字段，值为你的 swiftype 搜索引擎的 key。


### 百度统计

编辑 **站点配置文件**，新增字段 `baidu_analytics` 字段，值设置成你的百度统计脚本id。
需要注意的是，此 百度分析id 位于你百度统计脚本中，并非你的百度统计id。统计脚本类似于：

```js
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?50c15455e37f70aea674ff4a663eef27";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
```

其中 `hm.js?` 后面那串即是你的百度统计脚本id。

<div class="ui horizontal divider">参考</div>

[主题配置参考](https://github.com/iissnan/hexo-theme-next/wiki/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE%E5%8F%82%E8%80%83)