import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Luce",
  description: "Luce",
  // base: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "关于Luce", link: "/about/page" },
    ],
    sidebar: [
      {
        text: "",
        items: [{ text: "Luce介绍", link: "/about/page" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/fundgao/luce" }],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2024-${new Date().getFullYear()} Fund Gao`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
});
