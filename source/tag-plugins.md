title: 主题内建样式
---

{% iconheader circular rocket%}
    主题内建样式
{% endiconheader %}

## 独立居中的引用

> 带上下分割线的引用，引用内文本将自动居中。适用于单行引用文本的场景。

### 示例

{% img ui fluid bordered image http://iissnan.com/nexus/next/blockquote-center.png %}

### 使用方式：

```html
<!-- HTML -->
<blockquote class="blockquote-center">blah blah blah</blockquote>

<!-- Built-in tag (Require NexT 0.4.5 or above) -->
{% centerquote %}blah blah blah{% endcenterquote %}
```


## 突破容器限制宽度的图片

> 图片将自动扩展 26%，突破文章宽度。

### 示例

{% img ui fluid bordered image http://iissnan.com/nexus/next/full-image.png %}

### 使用方式：

```html
<!-- HTML -->
<img src="/image-url" class="full-image" />

<!-- Built-in tag (Require NexT 0.4.5 or above) -->
{% fullimage /image-url, alt, title %}
```
