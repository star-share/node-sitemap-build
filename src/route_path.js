// 项目path  和sitemap参数配置
const routes = {
  index: {
    path: "/",
    priority: 0.6, //优先级取值范围 0.1 至 1。 ----- 也是一个供搜索引擎参考的值
    changefreq: "daily", // 可以统一写死 看需求
    lastmod: "2017-01-14", // 可以build sitemap 动态写入
  },
  a: { path: "/a" },
  home: { path: "/home" },
  detail: { path: "/user/detail" },
};

module.exports = {
  routes,
};
