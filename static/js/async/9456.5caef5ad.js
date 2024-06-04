/*! For license information please see 9456.5caef5ad.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["9456"],{52238:function(s,n,a){"use strict";a.r(n);var t=a("80681");let l=["innerHTML"];n.default={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"van-doc-markdown-body",innerHTML:'<h1>useCountDown</h1>\n<div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3>\n<p>Used to manage the countdown.</p>\n</div><h2 id="usage" tabindex="-1">Usage</h2>\n<div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Total time\uFF1A{{ current.total }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain days\uFF1A{{ current.days }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain hours\uFF1A{{ current.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain minutes\uFF1A{{ current.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain seconds\uFF1A{{ current.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>Remain milliseconds\uFF1A{{ current.milliseconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({\n      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,\n    });\n\n    countDown.<span class="hljs-title function_">start</span>();\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,\n    };\n  },\n};\n</code></pre>\n</div><div class="van-doc-card"><h3 id="millisecond" tabindex="-1">Millisecond</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useCountDown } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@vant/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">useCountDown</span>({\n      <span class="hljs-attr">time</span>: <span class="hljs-number">24</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>,\n      <span class="hljs-attr">millisecond</span>: <span class="hljs-literal">true</span>,\n    });\n    countDown.<span class="hljs-title function_">start</span>();\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">current</span>: countDown.<span class="hljs-property">current</span>,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="van-doc-card"><h3 id="type-declarations" tabindex="-1">Type Declarations</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CurrentTime</span> = {\n  <span class="hljs-attr">days</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">hours</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">total</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">minutes</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">seconds</span>: <span class="hljs-built_in">number</span>;\n  <span class="hljs-attr">milliseconds</span>: <span class="hljs-built_in">number</span>;\n};\n\n<span class="hljs-keyword">type</span> <span class="hljs-title class_">CountDown</span> = {\n  <span class="hljs-attr">start</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">pause</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">reset</span>: <span class="hljs-function">(<span class="hljs-params">totalTime: <span class="hljs-built_in">number</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n  <span class="hljs-attr">current</span>: <span class="hljs-title class_">ComputedRef</span>&lt;<span class="hljs-title class_">CurrentTime</span>&gt;;\n};\n\n<span class="hljs-keyword">type</span> <span class="hljs-title class_">UseCountDownOptions</span> = {\n  <span class="hljs-attr">time</span>: <span class="hljs-built_in">number</span>;\n  millisecond?: <span class="hljs-built_in">boolean</span>;\n  onChange?: <span class="hljs-function">(<span class="hljs-params">current: CurrentTime</span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n  onFinish?: <span class="hljs-function">() =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useCountDown</span>(<span class="hljs-params">options: UseCountDownOptions</span>): <span class="hljs-title class_">CountDown</span>;\n</code></pre>\n</div><div class="van-doc-card"><h3 id="params" tabindex="-1">Params</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default Value</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>time</td>\n<td>Total time, unit milliseconds</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>millisecond</td>\n<td>Whether to enable millisecond render</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>Triggered when count down changed</td>\n<td><em>(current: CurrentTime) =&gt; void</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>onFinish</td>\n<td>Triggered when count down finished</td>\n<td><em>() =&gt; void</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="return-value" tabindex="-1">Return Value</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>Current remain time</td>\n<td><em>CurrentTime</em></td>\n</tr>\n<tr>\n<td>start</td>\n<td>Start count down</td>\n<td><em>() =&gt; void</em></td>\n</tr>\n<tr>\n<td>pause</td>\n<td>Pause count down</td>\n<td><em>() =&gt; void</em></td>\n</tr>\n<tr>\n<td>reset</td>\n<td>Reset count down</td>\n<td><em>(time?: number): void</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="van-doc-card"><h3 id="currenttime-structure" tabindex="-1">CurrentTime Structure</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n<th>Type</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>total</td>\n<td>Total time, unit milliseconds</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>days</td>\n<td>Remain days</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>hours</td>\n<td>Remain hours</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>minutes</td>\n<td>Remain minutes</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>seconds</td>\n<td>Remain seconds</td>\n<td><em>number</em></td>\n</tr>\n<tr>\n<td>milliseconds</td>\n<td>Remain milliseconds</td>\n<td><em>number</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);