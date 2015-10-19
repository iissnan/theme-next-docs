title: 第三方服务
---

{% iconheader circular checkered plug %}
    第三方服务
{% endiconheader %}



{% tableheadless celled striped very compact small %}
| | |
|-------------|--------|
|[多说](#多说)        |[DISQUS](#DISUQS)        |[百度统计](#百度统计)       |[Google 分析](#Google_分析)|
|[JiaThis](#JiaThis) |[百度分享](#百度分享)      |[多说分享](#多说分享)       |[Swiftype](#Swiftype)|
|[微搜索](#微搜索)     |[Google Webmaster tools](#Google_Webmaster_tools)|[多说热评文章](#多说热评文章)||
{% endtableheadless %}

{% icongroup inverted green life ring, inverted add %}
[文档问题反馈](https://github.com/iissnan/theme-next/issues)
{% endicongroup %}

<!-- # 用户评论 -->
{% iconsubheader comments, 第三方评论系统 %}
  用户评论
{% endiconsubheader %}


NexT 支持 [多说](http://duoshuo.com) 和 [DISQUS](https://disqus.com/) 评论系统。当同时设置了 多说 和 DISQUS 时，优先选择多说。 NexT 内置了一套 多说 的样式。


{% message info small %}
如需取消某个 页面/文章 的评论，在 md 文件的 [front-matter](https://hexo.io/docs/front-matter.html) 中增加 `comments: false`
    
{% endmessage %}


### 多说

使用多说前需要先在 [多说](http://duoshuo.com) 创建一个站点。具体步骤如下：

1. 登录后在首页选择 “我要安装”。
1. 创建站点，填写表单。**多说域名** 这一栏填写的即是你的 `duoshuo_shortname`，如图：
    {% img ui fluid bordered image /uploads/five-minutes-setup/duoshuo-create-site.png %}

1. 创建站点完成后在 站点配置文件 中新增 `duoshuo_shortname` 字段，值设置成上一步中的值。


### DISUQS

编辑 站点配置文件，添加 `disqus_shortname` 字段，设置如下

    disqus_shortname: your-disqus-shortname



<!-- # 数据统计 -->
{% iconsubheader bar chart, 第三方统计系统 %}
  数据统计
{% endiconsubheader %}


### 百度统计

1.登录 [百度统计](http://tongji.baidu.com/)，定位到站点的代码获取页面。

2.复制 `hm.js?` 后面那串统计脚本 id，如：
{% img ui centered image /uploads/five-minutes-setup/analytics-baidu-id.png %}
    
3.编辑 站点配置文件，新增字段 `baidu_analytics`，值设置成你的百度统计脚本 id。


### Google 分析

编辑 站点配置文件，新增字段 `google_analytics`，值设置成你的 Google 跟踪 ID。跟踪 ID 通常是以 `UA-` 开头。
  
{% img ui centered bordered image /uploads/analytics-google.png %}




<!-- # 分享扩展 -->
{% iconsubheader share alternate, 第三方分享扩展 %}
  分享扩展
{% endiconsubheader %}

分享服务优先选择 [JiaThis](http://www.jiathis.com/)，也就是说，当同时开启了 JiaThis、多说分享，将仅启用 JiaThis。

### JiaThis

编辑 站点/主题配置文件，添加字段 `jiathis`，值为 `true`。

    # JiaThis 分享服务
    jiathis: true
    
### [百度分享](http://share.baidu.com/)

编辑 站点/主题配置文件，添加字段 `baidushare`，值为 `true`。

    # 百度分享服务
    baidushare: true
    
### 多说分享

编辑 站点/主题配置文件，添加字段 `duoshuo_share`，值为 `true`。
多说分享必须与多说评论同时使用。

    # 多说分享服务
    duoshuo_share: true
    
    
<!-- # 搜索服务 -->
{% iconsubheader search, 第三方搜索服务 %}
  站内搜索
{% endiconsubheader %}

NexT 支持集成 [Swiftype](https://swiftype.com/) 和 [微搜索](http://tinysou.com/) 

### Swiftype

{% tabmenu tabular %}
  {% tabmenuitem swiftype-step-1 activate %} 步骤一 {% endtabmenuitem %}
  {% tabmenuitem swiftype-step-2 %} 步骤二 {% endtabmenuitem %}
  {% tabmenuitem swiftype-step-3 %} 步骤三 {% endtabmenuitem %}
  {% tabmenuitem swiftype-step-4 %} 步骤四 {% endtabmenuitem %}
  {% tabmenuitem swiftype-step-5 %} 步骤五 {% endtabmenuitem %}
{% endtabmenu %}

{% tabcontent swiftype-step-1 activate %}
前往 [Swiftype 注册页面](https://swiftype.com/users/sign_up)，注册一个新账户。

{% img ui centered bordered image /uploads/swiftype/step-1.png %}
{% endtabcontent %}

{% tabcontent swiftype-step-2 %}
注册完成后，创建一个新的搜索引擎，并按照提示完成创建步骤。

{% img ui centered bordered image /uploads/swiftype/step-1.png %}
{% endtabcontent %}

{% tabcontent swiftype-step-3 %}
搜索引擎创建完成后，在菜单中选择 `Integrate -> Install Search` 开启搜索定制，安装步骤完成定制。最后一步记得点击 `Activate` 按钮。

{% img ui centered bordered image /uploads/swiftype/step-3.png %}
{% endtabcontent %}

{% tabcontent swiftype-step-4 %}
返回定制引擎的第二个步骤 `INSTALL CODE`，复制出你的 `swiftype_key`。

{% img ui centered bordered image /uploads/swiftype/step-4.png %}
{% endtabcontent %}

{% tabcontent swiftype-step-5 %}
编辑站点配置文件，新增字段 `swiftype_key`，值设置成第四步中赋值出来的 key

    # Swiftype Search Key
    swiftype_key: xxxxxxxxx
{% endtabcontent %}


### 微搜索

TBD



<!-- # 其他 -->
{% iconsubheader wizard, 第三方其他服务 %}
  其他服务
{% endiconsubheader %}

### Google Webmaster tools 

设置 [Google站点管理工具](https://www.google.com/webmasters/tools/) 的验证字符串，用于提交 sitemap

1. 获取 google site verification code
    登录 Google Webmaster Tools，导航到验证方法，并选择 `HTML Tag`。将会获取到一段代码： 
    
        <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXX" />
        
    将 `content` 里面的 `XXXXXXXXXXXXXXXXXXXXXXX` 复制出来。

2. 设置主题。编辑 站点配置，新增字段 `google_site_verification`。

        google_site_verification: XXXXXXXXXXXXXXXXXXXXXXX
        
        
### 多说热评文章

多说评论组件提供 **热评文章** 功能，详情见 [多说官网说明](http://xirong.duoshuo.com/admin/tools/top-threads/)，仅在文章页面显示。

站点/主题配置文件 中设置：

    # 多说热评文章 true 或者 false
    duoshuo_hotartical: true

使用效果如下图：

{% img ui centered bordered image /uploads/duoshuo-hot.png %}



