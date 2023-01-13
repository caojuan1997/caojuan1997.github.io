export default {
  title: "前端", //站点标题
  description: "dandelion's blog", //mate标签description，多用于搜索引擎抓取摘要
  base: '/docs',
  themeConfig: {
    siteTitle: "Dandelion",
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    nav: [
      { text: "博客", link: "/articles/npm/npm-i" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "npm相关",
          collapsible: true,
          items: [
            {
              text: "npm i",
              link: "/articles/npm/npm-i",
            },
            {
              text: "npm语义化版本控制",
              link: "/articles/npm/npm-version",
            },
          ],
        },
        {
          text: "this指向问题",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "setTimeout中this的指向",
              link: "/articles/this/setTimeout",
            },
            {
              text: "call apply和bind",
              link: "/articles/this/call-apply-bind",
            },
          ],
        },
        {
          text: "基础内容",
          items: [
            { text: "Commonjs和ESM", link: "/articles/modules" },
            { text: "webpack和vite", link: "/articles/pack/webpack-vite" },
            { text: "手写代码", link: "/articles/code/" },
            { text: "基础内容", link: "/articles/other" }
          ],
        },
        {
          text: "vue",
          items: [{ text: "vnode", link: "/articles/vue/vnode" }],
        },
      ],
    },
  },
};
