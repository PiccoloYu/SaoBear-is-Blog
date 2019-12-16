<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1>
  Gatsbyjs - Saobear's Blog
</h1>

[![GitHub license](https://img.shields.io/github/license/calpa/gatsby-starter-calpa-blog.svg)](https://github.com/PiccoloYu/SaoBear-is-Blog/blob/master/LICENSE)
[![Accept Pull Requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/PiccoloYu/SaoBear-is-Blog/pulls)
[![Netlify Status](https://api.netlify.com/api/v1/badges/69c4fc63-9bed-44e4-aee4-77ceb456f770/deploy-status)](https://app.netlify.com/sites/kind-montalcini-40fdf1/deploys)

![Home Page](https://saobear.xyz/Exhibition/one.png)

![Home Page](https://saobear.xyz/Exhibition/two.png)

>基于Gatsbyjs和react的个人博客页面

_如果你喜欢这个网站，请给我一个star，非常感谢。

If you like this website, please give me a star, thank you very much.

## 🎓 前提

1. Git
2. Node：从 8.5.0 或更高版本开始的任何 8.x 版本
3. fork 本项目 （想要贡献的话）
4. 在本地计算机上克隆本项目


## 🚀 开发 Develop


如何运行？

1. 安装 Gatsby-CLI

```
npm install --global gatsby-cli
```

2. 使用 Gatsby 启动器创建新的 Gatsby 项目，`my-blog`是您博客的文件夹

```
gatsby new my-blog https://github.com/PiccoloYu/SaoBear-is-Blog
```

3. 打开文件夹

```
cd awesome-blog
```

4. 运行开发服务器

   1. `npm start` 启动热重载开发服务器 (基于[Gatsby](https://www.gatsbyjs.org/))
   2. `open http://localhost:8000` 在您喜欢的浏览器中打开

## 🧐 What's inside?
    |—— content
    |—— docs
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

[SaoBear 的博客](https://calpa.me) 的博客 目前正在使用Netlify，当然，您可以使用 Github Pages 作为替代方案。

Github Pages

npm run deploy 将博客部署到 Github Pages

Netlify

## 故障排除

- 对于 `window is defined`, 引包前检查 window :

  ```JavaScript
  if (typeof window !== `undefined`) {
    const module = require("module");
  }
  ```

- `npm run reset` 清除本地缓存
- 查 [GatsbyJS 调试文档](https://www.gatsbyjs.org/docs/debugging-html-builds/)

自动部署
<!-- AUTO-GENERATED-CONTENT:END -->
