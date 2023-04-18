const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");


// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: "http://www.baidu.com" });

const writeStream = createWriteStream("./public/sitemap.xml");
sitemap.pipe(writeStream);

const { routes } = require("./src/route");

routes.forEach(i=>{
    sitemap.write({
      url: i.path,
      changefreq: i.changefreq,
      priority: i.priority,
      lastmod: i.lastmod,
    });
})

sitemap.write({ url: "/page-1/", changefreq: "daily", priority: 0.3 });
sitemap.write({ url: "/page-3/", changefreq: "daily", priority: 0.3 });
sitemap.write("/page-2");
sitemap.end();






// const axios = require('axios');
// const instance = axios.create({
//   baseURL: 'https://routinost.com/api/',
//   timeout: 10000,
//   headers: {'Content-Type': 'application/json'}
// });
//   const topics = await instance.get('topics').then((resp) => {
//     if (resp.error) {
//       return;
//     }
//     return resp.data.data;
//   });
  // todo  for  resp.data.data  拼装所有动态地址