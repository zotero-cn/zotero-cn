import{ai as s,x as l,aE as i,L as t,aa as o,v as n}from"./chunks/framework.DNV5qdj1.js";const p="/assets/zotero-%E8%8E%B7%E5%8F%96%E6%9B%B4%E5%A4%9A%E5%BC%95%E6%96%87%E6%A0%BC%E5%BC%8F.CgEDJ1UB.png",c="/assets/zotero-%E5%AE%98%E6%96%B9%E5%BC%95%E6%96%87%E6%A0%BC%E5%BC%8F.DYOVe2mf.png",h="/assets/zotero-%E4%BB%8Econnector%E6%B7%BB%E5%8A%A0csl%E6%A0%B7%E5%BC%8F.7rQjf4cA.png",d="/assets/%E5%8F%A6%E5%AD%98%E4%B8%BAcsl%E6%96%87%E4%BB%B6.BwWAULb3.png",u="/assets/zotero-%E4%BB%8E%E6%96%87%E4%BB%B6%E5%AE%89%E8%A3%85csl%E6%A0%B7%E5%BC%8F.fEQ-ds0e.png",E="/assets/%E5%AE%89%E8%A3%85%E5%BC%95%E6%96%87%E6%A0%BC%E5%BC%8F-%E4%B8%8D%E6%98%AF%E6%9C%89%E6%95%88csl%E8%AD%A6%E5%91%8A.BV9yY2uh.png",A=JSON.parse('{"title":"引文的格式","description":"","frontmatter":{"title":"引文的格式","icon":"wand-magic-sparkles","date":"2023-06-28T21:17:47.000Z","outline":"deep"},"headers":[],"relativePath":"user-guide/citation-styles.md","filePath":"wiki/user-guide/citation-styles.md"}'),m={name:"user-guide/citation-styles.md"};function g(b,e,C,B,f,_){const a=o("NolebaseGitContributors"),r=o("NolebaseGitChangelog");return n(),l("div",null,[e[0]||(e[0]=i('<h1 id="引文的格式" tabindex="-1">引文的格式 <a class="header-anchor" href="#引文的格式" aria-label="Permalink to &quot;引文的格式&quot;">​</a></h1><p>Zotero 使用 Citation Style Language 来生成引文格式，Zotero 官方提供了一组 CSL 样式，可以在 Zotero 内下载安装。</p><p>但是官方的 CSL 样式对国内期刊支持不全，且目前（CSL 1.0.2）仍未支持双语排版（「et al」与「等」混排），所以国内有热心开发者维护了一份第三方 CSL 样式，读者可以按需下载使用。</p><h2 id="安装样式-从官方存储库" tabindex="-1">安装样式：从官方存储库 <a class="header-anchor" href="#安装样式-从官方存储库" aria-label="Permalink to &quot;安装样式：从官方存储库&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>适用于外文期刊、SCI 期刊等。</p><p>不支持双语排版。</p></div><ol><li><p>打开 Zotero 软件，选择「编辑」-&gt;「设置」，在弹出窗口中选择「引用」。</p></li><li><p>若样式管理器中无符合的样式，可以通过「获取更多样式」，搜索期刊名，点击符合要求的样式名，即可导入样式。</p><p><img src="'+p+'" alt="获取更多引文格式" loading="lazy"></p><p><img src="'+c+'" alt="官方引文格式下载" loading="lazy"></p></li></ol><h2 id="安装样式-从第三方存储库" tabindex="-1">安装样式：从第三方存储库 <a class="header-anchor" href="#安装样式-从第三方存储库" aria-label="Permalink to &quot;安装样式：从第三方存储库&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>适用于中文期刊、国内学位论文等。</p><p>支持双语排版。</p></div><p>如果上述 CSL 样式不符合你的要求，可到 <a href="/styles/">中文 CSL 样式</a> 下载更多 CSL 样式。</p><h3 id="_1-查找样式" tabindex="-1">1. 查找样式 <a class="header-anchor" href="#_1-查找样式" aria-label="Permalink to &quot;1. 查找样式&quot;">​</a></h3><p>首先你需要在 <a href="/styles/">中文 CSL 样式</a> 页面上找到合适的 CSL 样式。</p><ul><li>通过搜索和筛选快速找到你需要的样式</li><li>把鼠标放在样式的名称上可以预览其引注和参考文献表</li><li>点击样式名称进入详情页可以查看更多条目的显示效果</li></ul><p>如果没有你想要的样式，可以点击页首的 「请求新样式 / 报告 CSL 样式问题」 来获取社区帮助。</p><h3 id="_2-安装样式" tabindex="-1">2. 安装样式 <a class="header-anchor" href="#_2-安装样式" aria-label="Permalink to &quot;2. 安装样式&quot;">​</a></h3><p>单击样式名进入样式详情页，然后下滑找到 「下载链接」 小节，你可以看到很多安装链接。根据「下载链接」小节的描述，我们有两类安装样式的方法：</p><div class="tip custom-block"><p class="custom-block-title">自行选择可用链接</p><p>网站为每一个样式提供了多个下载链接，请自行选择可用的链接。</p></div><h4 id="_2-1-通过-zotero-connector-直接安装样式" tabindex="-1">2.1 通过 Zotero Connector 直接安装样式 <a class="header-anchor" href="#_2-1-通过-zotero-connector-直接安装样式" aria-label="Permalink to &quot;2.1 通过 Zotero Connector 直接安装样式&quot;">​</a></h4><p>有的链接已经被 Zotero Connector 适配，因此可以直接安装，对于这类链接：</p><p>在确保 <strong>Zotero 处于启动状态</strong>时，<strong>直接点击链接</strong>，浏览器打开了一个新的网页，Zotero Connector 会在新的网页中显示一个「确认安装」的弹窗，直接点击「OK」即可：</p><p><img src="'+h+'" alt="确认安装引文格式" loading="lazy"></p><div class="warning custom-block"><p class="custom-block-title">确保 Zotero 启动</p></div><p>有小概率情况无法弹出这个「确认安装」的弹窗，可以尝试关闭页面重新打开。如果仍然不行，请尝试下面的「先下载文件后安装」。</p><h4 id="_2-2-先下载文件后安装" tabindex="-1">2.2 先下载文件后安装 <a class="header-anchor" href="#_2-2-先下载文件后安装" aria-label="Permalink to &quot;2.2 先下载文件后安装&quot;">​</a></h4><p>根据「下载链接」部分里的提示，有的链接直接单击就可以下载文件，有的链接需要你手动 「右击」-「另存为」，按照提示的方法，将其保存为 <code>.csl</code> 文件：</p><p><img src="'+d+'" alt="另存为csl文件" loading="lazy"></p><p>然后双击打开 CSL 文件，在弹出窗口中选择「安装」。</p><p><img src="'+u+'" alt="从文件安装csl样式" loading="lazy"></p><h4 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h4><p>由于这些 CSL 样式使用了 <code>citeproc-js</code> 提供了 CSL-M 扩展功能，因此安装时会出现「xxx.csl 不是一个有效的 CSL 1.0.2 样式文件，可能不能和 Zotero 一起正常工作」的警告，<strong>属于正常现象，选择「OK」即可</strong>。</p><p><img src="'+E+'" alt="安装引文格式 不是有效csl警告" loading="lazy"></p><p>随后，你就可以在字处理软件中将样式切换为刚刚安装的，请参阅 <a href="./ms-word-plugin">在 Word 中使用</a> 了解详情。</p><h2 id="管理和编辑样式" tabindex="-1">管理和编辑样式 <a class="header-anchor" href="#管理和编辑样式" aria-label="Permalink to &quot;管理和编辑样式&quot;">​</a></h2><p>您可以通过单击 Zotero 样式管理器中的「-」按钮来删除已安装的样式。在此选项卡中，您还可以预览 Zotero 中所选项目的样式输出并编辑已安装的样式。</p><h2 id="报告样式错误" tabindex="-1">报告样式错误 <a class="header-anchor" href="#报告样式错误" aria-label="Permalink to &quot;报告样式错误&quot;">​</a></h2><p>如果 CSL 样式未提供预期输出，请首先确保您正在运行最新（稳定）版本的 Zotero，并从安装最新版本的样式。</p><p>一旦您确定样式偏离了样式指南、作者说明或已发布的示例，请报告该错误：</p><ul><li><p>对于从官方存储库安装的样式</p><p>请向 <a href="https://www.zotero.org/forum" target="_blank" rel="noreferrer">Zotero 论坛</a> 报告错误。您的帖子应使用标题 <code>Style Error: [Name of style]</code>，并提供样式指南的链接或摘录。</p></li><li><p>对于从中文存储库安装的样式</p><p>请向 <a href="https://github.com/zotero-chinese/styles" target="_blank" rel="noreferrer">中文 CSL 样式存储库</a> 报告错误。</p></li></ul><p>此外，您也可以尝试自己编辑样式。</p><h2 id="请求新样式" tabindex="-1">请求新样式 <a class="header-anchor" href="#请求新样式" aria-label="Permalink to &quot;请求新样式&quot;">​</a></h2><ul><li>对于外文期刊或样式，请参阅：<a href="https://www.zotero.org/support/styles#requesting_new_styles" target="_blank" rel="noreferrer">Requesting New Styles - Zotero Documentation</a>。</li><li>对于中文期刊或高校等的样式，请参阅：<a href="https://github.com/zotero-chinese/styles?tab=readme-ov-file#%E6%B2%A1%E6%9C%89%E6%89%BE%E5%88%B0%E7%AC%A6%E5%90%88%E9%9C%80%E8%A6%81%E7%9A%84%E6%A0%B7%E5%BC%8F" target="_blank" rel="noreferrer">Zotero 中文样式仓库</a>。</li></ul><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>无论是何种方式请求社区的帮助，响应时间都取决于社区贡献者的时间安排。Zotero 官方支持和我们（中文社区）均不对响应时间作出承诺，请耐心等待志愿者的更新。</p><p>如有条件，欢迎自行修改并将成果贡献到上游仓库。</p></div><p>对于 CSL 样式方面的问题，可以参阅：<a href="https://www.zotero.org/support/styles#questions" target="_blank" rel="noreferrer">Questions - Styles - Zotero Documentation</a>。</p>',43)),t(a),t(r)])}const q=s(m,[["render",g]]);export{A as __pageData,q as default};
