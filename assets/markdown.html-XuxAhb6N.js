import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as l,c,a as n,b as s,d as e,e as t}from"./app-hlIcfMzO.js";const o={},p=t(`<h1 id="文档风格指南" tabindex="-1"><a class="header-anchor" href="#文档风格指南" aria-hidden="true">#</a> 文档风格指南</h1><h2 id="文件命名" tabindex="-1"><a class="header-anchor" href="#文件命名" aria-hidden="true">#</a> 文件命名</h2><p>文档网站根据每个 Markdown 源文件的路径确定每个页面的路由。因而，确定文件名时应慎重，一旦确定，尽量不要再改动。<br> 由于 Windows 不区分文件名大小写，故而 <code>option-B.md</code> 和 <code>option-b.md</code> 在 Windows 下会出现冲突。</p><p>我们使用的文件的命名规则是：</p><ul><li>文件名一律采用小写字母</li><li>文件名应尽量使用单词全称，避免使用各种形式的简写</li><li>若文件名中含多个单词，应使用连字符 (hyphen) <code>-</code> 连接</li></ul><h2 id="文档-frontmatter-规范" tabindex="-1"><a class="header-anchor" href="#文档-frontmatter-规范" aria-hidden="true">#</a> 文档 Frontmatter 规范</h2><p>通过 Frontmatter 为每个 Markdown 页面引入配置。</p><p>Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">icon</span><span class="token punctuation">:</span> markdown
<span class="token key atrule">author</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者1
      <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/windingwind
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者2
      <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//northword.cn
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者3
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2023-07-20 23:46:54</span>
<span class="token key atrule">updated</span><span class="token punctuation">:</span> <span class="token datetime number">2023-07-21 18:39:41</span></span>
<span class="token punctuation">---</span></span>

<span class="token comment">&lt;!-- 这里是 Markdown 内容 --&gt;</span>

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些常用的 Frontmatter 键：</p><table><thead><tr><th>键</th><th>类型</th><th>必填</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>否</td><td>第一个一级标题</td><td>页面的标题。如果你不在 Frontmatter 中设置 title ，那么页面中第一个一级标题（即 # title）的内容会被当作标题使用。</td></tr><tr><td>shortTitle</td><td>string</td><td>否</td><td>标题</td><td>当前页面的短标题，会在导航栏、侧边栏和路径导航中作为首选。</td></tr><tr><td>icon</td><td>string</td><td>否</td><td>无</td><td>当前页面的图标</td></tr><tr><td>author</td><td>-</td><td>否</td><td>-</td><td>见下述</td></tr><tr><td>data</td><td>string</td><td>否</td><td>文件的创建日期</td><td>文档的创建日期</td></tr><tr><td>update</td><td>string</td><td>否</td><td>文件的更新日期</td><td>该值其实无用，页面显示的最后更新时间是 Git 提交时间</td></tr></tbody></table><div class="hint-container note"><p class="hint-container-title">\`author\` 详解</p><p><code>author</code> 由一组 <code>author.name</code> 和 <code>author.url</code> / <code>author.email</code> 组成，其中 <code>url</code> 和 <code>email</code> 都是可选的。</p><p>尤其需要注意的是缩进，name 前空二格，加一个短横线 <code>-</code>，空一格。<code>url</code> 或 <code>email</code> 与 <code>name</code> 保持对齐，不需要加 <code>-</code>。</p></div>`,12),r={class:"hint-container details"},u=n("summary",null,"更多的 Frontmatter 可以参考框架的文档",-1),v={href:"https://theme-hope.vuejs.press/zh/config/frontmatter/info.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://theme-hope.vuejs.press/zh/config/frontmatter/layout.html#dir",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="文档语法风格" tabindex="-1"><a class="header-anchor" href="#文档语法风格" aria-hidden="true">#</a> 文档语法风格</h2><p>所有教程均采用 Markdown 语言编写，下面列出了一些本文档中可能用到的语法和注意事项。</p><h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题" aria-hidden="true">#</a> 标题</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 一级标题</span>
<span class="token title important"><span class="token punctuation">##</span> 二级标题</span>
<span class="token title important"><span class="token punctuation">###</span> 三级标题</span>
<span class="token title important"><span class="token punctuation">####</span> 四级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>一级标题是文档名，对应页面标题。一篇文档应有且只有一个一级标题</p></div><ul><li>文档内容从二级标题开始。</li><li>文档中标题级别应逐级递增，例如：二级标题内应跟随三级标题，而不能越过三级标题直接使用四级标题</li><li>标题不应含有特殊字符：如 latex 公式，代码块，数字编号等，不应以标点符号结尾</li><li>标题前后空一行。</li></ul><h3 id="正文文本" tabindex="-1"><a class="header-anchor" href="#正文文本" aria-hidden="true">#</a> 正文文本</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>正文段落 1
(空行)
正文段落 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>中文字符与英文字符和数字之间应加上空格，如 <code>中文 ABC 中文</code> 而非 <code>中文ABC中文</code><br><code>中文 123 中文</code> 而非 <code>中文123中文</code></li><li>标点符号采用全角，如 <code>，</code>、<code>。</code>、<code>：</code>、<code>、</code>、<code>？</code> 等<br> 标点符号与中文字符、英文字符以及数字之间不需加空格</li><li>大小写应正确，如：<code>Zotero</code> 不是 <code>zotero</code>，<code>GitHub</code> 不是 <code>github</code></li><li>正文中部分专有词和特殊符号，可以放入 <a href="#%E4%BB%A3%E7%A0%81"><code>行内代码</code></a> 来表示，美观且不容易发生错误，例如：<br> 操作步骤：<code>编辑</code> - <code>首选项</code> - <code>引用</code> 。</li></ul></div><h3 id="文字样式" tabindex="-1"><a class="header-anchor" href="#文字样式" aria-hidden="true">#</a> 文字样式</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是一段文本，
<span class="token bold"><span class="token punctuation">**</span><span class="token content">用两对星号包裹的内容会被加粗</span><span class="token punctuation">**</span></span>，
而<span class="token italic"><span class="token punctuation">*</span><span class="token content">只用一对星号包裹的内容会显示为斜体</span><span class="token punctuation">*</span></span>，
用<span class="token strike"><span class="token punctuation">~~</span><span class="token content">两对波浪线包裹的内容会显示为删除</span><span class="token punctuation">~~</span></span>，
上下标：19^th^ H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O，
你可以标记 ==重要的内容== 。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预览：<br> 这是一段文本，<br><strong>用两对星号包裹的内容会被加粗</strong>，<br> 而<em>只用一对星号包裹的内容会显示为斜体</em>，<br> 用<s>两对波浪线包裹的内容会显示为删除</s>，<br> 上下标：19<sup>th</sup> H<sub>2</sub>O，<br> 你可以标记 <mark>重要的内容</mark> 。</p><h3 id="无序列表和有序列表" tabindex="-1"><a class="header-anchor" href="#无序列表和有序列表" aria-hidden="true">#</a> 无序列表和有序列表</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">####</span> 无序列表</span>

<span class="token list punctuation">-</span> item 1
  <span class="token list punctuation">-</span> 更多的列表项
  <span class="token list punctuation">-</span> 更多的列表项
  <span class="token list punctuation">-</span> 更多的列表项
<span class="token list punctuation">-</span> item 2
<span class="token list punctuation">-</span> item 3

<span class="token title important"><span class="token punctuation">####</span> 有序列表</span>

<span class="token list punctuation">1.</span> item 1
<span class="token list punctuation">2.</span> item 2
<span class="token list punctuation">3.</span> item 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> 链接</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">相对路径访问主页</span>](<span class="token url">../README.md</span>)</span>

<span class="token url">[<span class="token content">相对路径访问贡献指南</span>](<span class="token url">./contributing.md</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">图片描述</span>](<span class="token url">../.vuepress/public/assets/icon/chrome-192.png</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所有的图片资源都应放入 <code>src/assets</code> 内，尽量以通俗的方式描述图片内容。</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>我们不使用 HTML 语法 <code>&lt;img&gt;</code> 标签来引入图片，请使用标准的 Markdown 语法。</p></div><h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>一个 B 站视频:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BiliBili</span> <span class="token attr-name">bvid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BV1kt411o7C3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

一个自定义空降地址的 B 站视频:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BiliBili</span> <span class="token attr-name">aid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>34304064<span class="token punctuation">&quot;</span></span> <span class="token attr-name">cid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>109293122<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>9:16<span class="token punctuation">&quot;</span></span> <span class="token attr-name">time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>60<span class="token punctuation">&quot;</span></span> <span class="token attr-name">page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>受限于存储空间，文档不支持插入本地视频，引入视频请上传 bilibili，然后以以上语法引入视频。</p></div><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3><p>使用 GitHub 风格表格：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">     居中      </span><span class="token punctuation">|</span><span class="token table-header important">         右对齐 </span><span class="token punctuation">|</span><span class="token table-header important"> 左对齐         </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:-----------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 居中使用<span class="token code-snippet code keyword">\`:-:\`</span> </span><span class="token punctuation">|</span><span class="token table-data"> 右对齐使用<span class="token code-snippet code keyword">\`-:\`</span> </span><span class="token punctuation">|</span><span class="token table-data"> 左对齐使用<span class="token code-snippet code keyword">\`:-\`</span> </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">       b       </span><span class="token punctuation">|</span><span class="token table-data">      aaaaaaaaa </span><span class="token punctuation">|</span><span class="token table-data"> aaaa           </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data">       c       </span><span class="token punctuation">|</span><span class="token table-data">           aaaa </span><span class="token punctuation">|</span><span class="token table-data"> a              </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>第二行表示对其方式的 <code>:</code> 不是必须的，当没有时，会默认为居左。</p></div><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><h4 id="行内代码" tabindex="-1"><a class="header-anchor" href="#行内代码" aria-hidden="true">#</a> 行内代码</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>行内代码效果: <span class="token code-snippet code keyword">\`code\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>行内代码效果: <code>code</code></p><h4 id="块级代码" tabindex="-1"><a class="header-anchor" href="#块级代码" aria-hidden="true">#</a> 块级代码</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个反引号后跟随代码块语言：<code>md</code>、<code>js</code>、<code>plain</code>（纯文本） 等。</p><p>预览：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bar</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> bar<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="告示块" tabindex="-1"><a class="header-anchor" href="#告示块" aria-hidden="true">#</a> 告示块</h3><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip

这是一个提示

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一个提示</p></div><h4 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: note

这是一个备注

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note"><p class="hint-container-title">注</p><p>这是一个备注</p></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: warning

这是一个警告

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一个警告</p></div><h4 id="警告" tabindex="-1"><a class="header-anchor" href="#警告" aria-hidden="true">#</a> 警告</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger

这是一个警告

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这是一个警告</p></div><h4 id="详情" tabindex="-1"><a class="header-anchor" href="#详情" aria-hidden="true">#</a> 详情</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: details

这是一个折叠可见内容

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>详情</summary><p>这是一个折叠可见内容</p></details><h4 id="自定义标题" tabindex="-1"><a class="header-anchor" href="#自定义标题" aria-hidden="true">#</a> 自定义标题</h4><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>通过在 <code>tip</code>、<code>warning</code>、<code>danger</code>、<code>details</code> 后添加文字，可以自定义块标题，例如：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip 自定义标题

通过在 <span class="token code-snippet code keyword">\`tip\`</span>、<span class="token code-snippet code keyword">\`warning\`</span>、<span class="token code-snippet code keyword">\`danger\`</span>、<span class="token code-snippet code keyword">\`details\`</span> 后添加文字

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="嵌套显示" tabindex="-1"><a class="header-anchor" href="#嵌套显示" aria-hidden="true">#</a> 嵌套显示</h4><p>支持两级嵌套，第一级的标志使用四个冒号<code>::::</code>，例如：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: details 嵌套显示

::: tip

这是第二级提示。

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>嵌套显示</summary><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是第二级提示。</p></div></details><h3 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是一段文本[^1]

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> 这是一个脚注</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚注内容就近放置，以方便阅读源文本。</p><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>这是一段正文文本

<span class="token blockquote punctuation">&gt;</span> 这是一段引用文本

这是另一段正文文本

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>除上述文字样式外，不使用 html 语法改变文字样式，仅在特殊情况下使用 html 语法增添文档的趣味性。</p></div>`,64);function h(b,g){const a=d("ExternalLinkIcon");return l(),c("div",null,[p,n("details",r,[u,n("ul",null,[n("li",null,[n("a",v,[s("信息 Frontmatter 配置 | vuepress-theme-hope (vuejs.press)"),e(a)])]),n("li",null,[n("a",m,[s("布局 Frontmatter 配置 | vuepress-theme-hope (vuejs.press)"),e(a)])])])]),k])}const x=i(o,[["render",h],["__file","markdown.html.vue"]]);export{x as default};
