/*! For license information please see 6446.675b772f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["6446"],{60485:function(s,n,a){"use strict";a.r(n);var t=a("80681");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>Overlay \u906E\u7F69\u5C42</h1>\n<div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3>\n<p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u7528\u4E8E\u5F3A\u8C03\u7279\u5B9A\u7684\u9875\u9762\u5143\u7D20\uFF0C\u5E76\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p>\n</div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3>\n<p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Overlay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Overlay</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2>\n<div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u663E\u793A\u906E\u7F69\u5C42&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">return</span> { show };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="qian-ru-nei-rong" tabindex="-1">\u5D4C\u5165\u5185\u5BB9</h3>\n<p>\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u5728\u906E\u7F69\u5C42\u4E0A\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">:show</span>=<span class="hljs-string">&quot;show&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;wrapper&quot;</span> @<span class="hljs-attr">click.stop</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-overlay</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.wrapper</span> {\n    <span class="hljs-attribute">display</span>: flex;\n    <span class="hljs-attribute">align-items</span>: center;\n    <span class="hljs-attribute">justify-content</span>: center;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;\n  }\n\n  <span class="hljs-selector-class">.block</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">120px</span>;\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">120px</span>;\n    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fff</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><div class="van-doc-card"><h3 id="she-zhi-z-index" tabindex="-1">\u8BBE\u7F6E z-index</h3>\n<p>Overlay \u7EC4\u4EF6\u9ED8\u8BA4\u7684 z-index \u5C42\u7EA7\u4E3A <code>1</code>\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>z-index</code> \u5C5E\u6027\u8BBE\u7F6E\u5B83\u7684 z-index \u5C42\u7EA7\u3002</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-overlay</span> <span class="hljs-attr">z-index</span>=<span class="hljs-string">&quot;100&quot;</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>\u53C2\u6570</th>\n<th>\u8BF4\u660E</th>\n<th>\u7C7B\u578B</th>\n<th>\u9ED8\u8BA4\u503C</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>\u662F\u5426\u5C55\u793A\u906E\u7F69\u5C42</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>z-index \u5C42\u7EA7</td>\n<td><em>number | string</em></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>duration</td>\n<td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u8BBE\u7F6E\u4E3A 0 \u53EF\u4EE5\u7981\u7528\u52A8\u753B</td>\n<td><em>number | string</em></td>\n<td><code>0.3</code></td>\n</tr>\n<tr>\n<td>class-name</td>\n<td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>custom-style</td>\n<td>\u81EA\u5B9A\u4E49\u6837\u5F0F</td>\n<td><em>object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>lock-scroll</td>\n<td>\u662F\u5426\u9501\u5B9A\u80CC\u666F\u6EDA\u52A8\uFF0C\u9501\u5B9A\u65F6\u8499\u5C42\u91CC\u7684\u5185\u5BB9\u4E5F\u5C06\u65E0\u6CD5\u6EDA\u52A8</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>lazy-render</td>\n<td>\u662F\u5426\u5728\u663E\u793A\u65F6\u624D\u6E32\u67D3\u8282\u70B9</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>\u4E8B\u4EF6\u540D</th>\n<th>\u8BF4\u660E</th>\n<th>\u56DE\u8C03\u53C2\u6570</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>\u70B9\u51FB\u65F6\u89E6\u53D1</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u8BF4\u660E</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u7528\u4E8E\u5728\u906E\u7F69\u5C42\u4E0A\u65B9\u5D4C\u5165\u5185\u5BB9</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3>\n<p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">OverlayProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vant&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2>\n<div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3>\n<p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p>\n<table>\n<thead>\n<tr>\n<th>\u540D\u79F0</th>\n<th>\u9ED8\u8BA4\u503C</th>\n<th>\u63CF\u8FF0</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--van-overlay-z-index</td>\n<td><em>1</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--van-overlay-background</td>\n<td><em>rgba(0, 0, 0, 0.7)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);