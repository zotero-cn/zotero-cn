import{_ as p}from"./chunks/添加条目后信息窗格.DDCNhCIW.js";import{ai as r,x as d,A as a,a2 as i,L as t,aE as h,aa as e,v as c}from"./chunks/framework.DNV5qdj1.js";const C=JSON.parse('{"title":"编辑条目","description":"","frontmatter":{"icon":"edit"},"headers":[],"relativePath":"user-guide/edit-items.md","filePath":"wiki/user-guide/edit-items.md"}'),k={name:"user-guide/edit-items.md"},g={id:"重复条目",tabindex:"-1"};function u(b,s,E,m,f,y){const l=e("Badge"),o=e("NolebaseGitContributors"),n=e("NolebaseGitChangelog");return c(),d("div",null,[s[3]||(s[3]=a("h1",{id:"编辑条目",tabindex:"-1"},[i("编辑条目 "),a("a",{class:"header-anchor",href:"#编辑条目","aria-label":'Permalink to "编辑条目"'},"​")],-1)),t(l,{text:"中级"}),s[4]||(s[4]=a("div",{class:"tip custom-block"},[a("p",{class:"custom-block-title"},"始终及时校准条目"),a("p",null,"使用 Zotero（或任何其他参考文献管理器）进行引用时，在将项目保存到库中后，应始终检查项目的准确性。"),a("p",null,"Zotero 并不能保证自动抓取的数据 100% 正确，有时 Zotero 收到的元数据是不完整或不正确的。"),a("p",null,"我们应始终意识到这个问题，养成导入后随手校正的习惯。")],-1)),a("h2",g,[s[0]||(s[0]=i("重复条目 ")),t(l,{text:"中级"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#重复条目","aria-label":'Permalink to "重复条目 <Badge text="中级" />"'},"​",-1))]),s[5]||(s[5]=h('<div class="info custom-block"><p class="custom-block-title">Todo：待完善</p><p>参考：<a href="https://www.zotero.org/support/duplicate_detection" target="_blank" rel="noreferrer">https://www.zotero.org/support/duplicate_detection</a></p></div><p>由于各种原因，您可能会导入一些重复的项目。例如，您可能从同一网页保存同一项目多次，或者以前看的文献没印象了又新导入了一次。当你写论文插入参考文献时，重复条目会严重影响正确性，例如，你可能在不同地方引入同一文献的不同副本，而 Zotero 会认为它们是两个不同的文献。幸运的是，Zotero 可以帮助您识别可能的重复项并允许您合并它们。</p><div class="tip custom-block"><p class="custom-block-title">插件推荐</p><p>插件 <a href="./plugins/linter">Linter for Zotero</a> 和 <a href="https://github.com/ChenglongMa/zoplicate" target="_blank" rel="noreferrer">Zopliacte</a> 提供了对新增条目提醒重复的功能。</p></div><h2 id="条目字段" tabindex="-1">条目字段 <a class="header-anchor" href="#条目字段" aria-label="Permalink to &quot;条目字段&quot;">​</a></h2><p>从以上方法导入的数据并不一定是完全正确的，最好养成导入条目后随手校正的习惯。</p><p>如下图所示，在中心窗格中选择一个条目后，右侧（标准视图）或下侧（堆栈视图）会显示该条目的书目信息。多数条目都可以直接单击进行编辑，更改自动保存。</p><p><img src="'+p+`" alt="添加条目后信息窗格" loading="lazy"></p><p>以下是一些比较特殊的字段，拿出来单独介绍：</p><h3 id="条目类型" tabindex="-1">条目类型 <a class="header-anchor" href="#条目类型" aria-label="Permalink to &quot;条目类型&quot;">​</a></h3><p>请尤其注意这一个选项，这直接决定在引用时，该条目以什么方式出现。且该项在通过浏览器导入时非常容易出错。</p><p>最典型的错误就是将「期刊文章/学位论文」等识别为「网页」。这会导致部分引文格式后出现 <code>[EB/OL]</code> 等文献标识符。</p><p>这时我们应该重新导入或手动更正。</p><h3 id="期刊缩写" tabindex="-1">期刊缩写 <a class="header-anchor" href="#期刊缩写" aria-label="Permalink to &quot;期刊缩写&quot;">​</a></h3><p>部分期刊要求使用「期刊标题的缩写」进行引用，Zotero 将「期刊名全称」和「期刊名缩写」分别保存在「期刊」和「期刊缩写」两个字段中。</p><p>抓取时不一定能准确获得期刊缩写，写论文引用前最好校正一下。</p><p>通常期刊缩写的差别多数在于加不加 <code>.</code>，例如「Applied Surface Science」可以缩写为「Appl Surf Sci」或「Appl. Surf. Sci.」。我们建议总是存储为加 <code>.</code> 的格式。因为去掉 <code>.</code> 总是比加上 <code>.</code> 更方便，在引用时，对于需要不加 <code>.</code> 的期刊就可以通过 CSL 直接去掉 <code>.</code>。</p><div class="tip custom-block"><p class="custom-block-title">插件推荐</p><p>插件 <a href="./plugins/linter">Linter for Zotero</a> 提供了自动获取期刊的 ISO 4 缩写的功能，可前往 <a href="/plugins/">插件商店</a>下载安装。</p></div><h3 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-label="Permalink to &quot;标题&quot;">​</a></h3><h4 id="标题中的上下标" tabindex="-1">标题中的上下标 <a class="header-anchor" href="#标题中的上下标" aria-label="Permalink to &quot;标题中的上下标&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;下标内容&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;上标内容&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;斜体&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;粗体&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>详细请参阅：<a href="./faqs/word-addon#设置斜体及上下标等">在 Word 参考文献表中实现斜体及上下标效果</a>。</p><div class="tip custom-block"><p class="custom-block-title">插件推荐</p><p>插件 <a href="./plugins/linter">Linter for Zotero</a> 提供了辅助输入这些富文本标签的功能，可前往 <a href="/plugins/">插件商店</a>下载安装。</p></div><h4 id="标题的大小写" tabindex="-1">标题的大小写 <a class="header-anchor" href="#标题的大小写" aria-label="Permalink to &quot;标题的大小写&quot;">​</a></h4><p>我们建议您始终将标题以「句子大小写」的形式存储在 Zotero 库中，这有利于 CSL 进行格式转换。</p><p>什么是「句子大小写」？</p><div class="language-plain vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- 标题大小写：Mechanism of Ce-Modified Birnessite-MnO&lt;sub&gt;2&lt;/sub&gt; in Promoting SO&lt;sub&gt;2&lt;/sub&gt; Poisoning Resistance for Low-Temperature NH&lt;sub&gt;3&lt;/sub&gt;-SCR</span></span>
<span class="line"><span>- 句子大小写：Mechanism of Ce-Modified Birnessite-MnO&lt;sub&gt;2&lt;/sub&gt; in promoting SO&lt;sub&gt;2&lt;/sub&gt; poisoning resistance for low-temperature NH&lt;sub&gt;3&lt;/sub&gt;-SCR</span></span></code></pre></div><h3 id="其他-extra" tabindex="-1">其他 extra <a class="header-anchor" href="#其他-extra" aria-label="Permalink to &quot;其他 extra&quot;">​</a></h3><p>所有其他自定义字段均应保存在「其他（extra）」字段，保存在该字段的数据应为若干个键值对，每行一个。CSL 引用时可以通过键来调用值。</p>`,28)),t(o),t(n)])}const S=r(k,[["render",u]]);export{C as __pageData,S as default};