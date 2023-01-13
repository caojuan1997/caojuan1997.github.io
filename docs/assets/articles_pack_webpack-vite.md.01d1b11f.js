import{_ as e,c as a,o as t,a as i}from"./app.cec2fdf8.js";const k=JSON.parse('{"title":"wepback\u548Cvite\u7684\u533A\u522B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981\u6253\u5305\u5DE5\u5177\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981\u6253\u5305\u5DE5\u5177\uFF1F"},{"level":2,"title":"\u4E24\u79CD\u6253\u5305\u65B9\u5F0F","slug":"\u4E24\u79CD\u6253\u5305\u65B9\u5F0F"}],"relativePath":"articles/pack/webpack-vite.md"}'),c={name:"articles/pack/webpack-vite.md"},r=i('<h1 id="wepback\u548Cvite\u7684\u533A\u522B" tabindex="-1">wepback\u548Cvite\u7684\u533A\u522B <a class="header-anchor" href="#wepback\u548Cvite\u7684\u533A\u522B" aria-hidden="true">#</a></h1><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981\u6253\u5305\u5DE5\u5177\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981\u6253\u5305\u5DE5\u5177\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981\u6253\u5305\u5DE5\u5177\uFF1F" aria-hidden="true">#</a></h2><ul><li>\u672A\u6253\u5305\u7684\u9879\u76EE\u6587\u4EF6\u5F88\u591A\uFF0C\u90FD\u4E0A\u4F20\u5230\u670D\u52A1\u5668\uFF0C\u7528\u6237\u8BF7\u6C42\u65F6\u4F1A\u53D1\u5927\u91CF\u7684http\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u538B\u529B\u5927\u4E14\u7528\u6237\u4F53\u9A8C\u4E0D\u597D\uFF1B</li><li>\u524D\u7AEF\u9700\u8981\u6A21\u5757\u5316\u5F00\u53D1\uFF0C\u6D4F\u89C8\u5668\u672C\u8EAB\u5E76\u4E0D\u652F\u6301\uFF0C\u6253\u5305\u5DE5\u5177\u53EF\u4EE5\u5C06\u6A21\u5757\u5316\u4EE3\u7801\u8F6C\u5316\u4E3A\u6D4F\u89C8\u5668\u652F\u6301\u7684\u4EE3\u7801</li><li>\u51CF\u5C11\u6E90\u7801\u66B4\u9732\u98CE\u9669\uFF0C\u6253\u5305\u53EF\u4EE5\u91CD\u7EC4\u5E76\u6DF7\u6DC6\u6E90\u7801</li><li>\u63D0\u4F9B\u5F00\u53D1\u670D\u52A1\u5668</li></ul><h2 id="\u4E24\u79CD\u6253\u5305\u65B9\u5F0F" tabindex="-1">\u4E24\u79CD\u6253\u5305\u65B9\u5F0F <a class="header-anchor" href="#\u4E24\u79CD\u6253\u5305\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>webpack\u548Cvite\u4E24\u4E2A\u6253\u5305\u5DE5\u5177\u7684\u4E3B\u8981\u5DEE\u522B\u5728\u4E8E\u542F\u52A8\u65B9\u5F0F\u4E0D\u540C\uFF1A\uFF08vite\u628A\u66F4\u591A\u7684\u4E8B\u60C5\u4EA4\u7ED9\u6D4F\u89C8\u5668\u53BB\u505A\uFF0C\u5F15\u5165\u4E86\u534F\u5546\u7F13\u5B58\u548C\u5F3A\u7F13\u5B58\uFF09</p><p>webpack\u5148\u6253\u5305\uFF0C\u518D\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42\u670D\u52A1\u5668\u65F6\u76F4\u63A5\u7ED9\u4E88\u6253\u5305\u540E\u7684\u7ED3\u679C\uFF08\u9010\u7EA7\u9012\u5F52\u5206\u6790\u4F9D\u8D56-&gt;\u6253\u5305-&gt;\u672C\u5730\u670D\u52A1\u5668\u6E32\u67D3\uFF09</p><p>vite\u76F4\u63A5\u542F\u52A8\u5F00\u53D1\u670D\u52A1\u5668\uFF0C\u8BF7\u6C42\u54EA\u4E2A\u6A21\u5757\u518D\u5BF9\u54EA\u4E2A\u6A21\u5757\u8FDB\u884C\u5B9E\u65F6\u7F16\u8BD1\u3002\u7531\u4E8E\u542F\u52A8\u65F6\u4E0D\u9700\u8981\u6253\u5305\uFF0C\u4E5F\u5C31\u4E0D\u9700\u8981\u5206\u6790\u6A21\u5757\u4F9D\u8D56\u3001\u7F16\u8BD1\uFF0C\u6240\u4EE5\u542F\u52A8\u8FC7\u7A0B\u975E\u5E38\u5FEB\u3002</p><p>\u5173\u4E8EHMR\uFF0C\u5F53\u6539\u52A8\u4E86\u67D0\u4E2A\u6A21\u5757\u540E\uFF0Cvite\u53EA\u9700\u8981\u91CD\u65B0\u8BF7\u6C42\u8BE5\u6A21\u5757\uFF0C\u800Cwebpack\u9700\u8981\u5C06\u8BE5\u6A21\u5757\u7684\u6240\u6709\u4F9D\u8D56\u91CD\u65B0\u7F16\u8BD1</p><p>\u7531\u4E8E\u73B0\u4EE3\u6D4F\u89C8\u5668\u672C\u8EAB\u5C31\u652F\u6301ESM\uFF0C\u4F1A\u4E3B\u52A8\u53D1\u8D77\u8BF7\u6C42\u53BB\u83B7\u53D6\u6587\u4EF6\u3002vite\u5C31\u662F\u5145\u5206\u5229\u7528\u4E86\u8FD9\u4E2A\u7279\u70B9\uFF0C\u5C06\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u6A21\u5757\u6587\u4EF6\uFF0C\u76F4\u63A5\u4F5C\u4E3A\u6D4F\u89C8\u5668\u8981\u6267\u884C\u7684\u6587\u4EF6\u3002\u7531\u4E8Evite\u4F7F\u7528\u7684\u662FESM\uFF0C\u6240\u4EE5\u4EE3\u7801\u4E2D\u4E0D\u53EF\u4EE5\u7528CommonJS</p>',9),p=[r];function l(s,d,n,_,o,h){return t(),a("div",null,p)}var b=e(c,[["render",l]]);export{k as __pageData,b as default};