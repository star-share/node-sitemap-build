
const routes = [
  {
    path: "/",
    component: "@/pages/index", //  todo  这个按照项目风格
    exact: true,
    name: "首页",
    priority: 0.6, //优先级取值范围 0.1 至 1。 ----- 也是一个供搜索引擎参考的值
    changefreq: "daily", // 可以统一写死 看需求
    lastmod: "2017-01-14", // 可以build sitemap 动态写入
  },
  { path: "/a", component: "@/pages/about", exact: true, name: "关于我" },
  { path: "/b", component: "@/pages/article", exact: true, name: "文章" },
];

module.exports = {
  routes,
};