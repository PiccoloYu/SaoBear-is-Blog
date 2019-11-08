---
path: build-a-modern-website-using-gatsbyJS
date: 2019-11-02T10:27:12.106Z
tag:
  - Gatsbyjs，react
title: Gatsbyjs react 创建博客（一）
description: Gatsbyjs react 创建博客（一）
---
\# Gatsbyjs react 创建博客（一）



\[GatsbyJS](https://www.gatsbyjs.org/)（“盖茨比”js）是基于React的免费开源框架



\## 前言



GatsbyJS 是一个现代化开发网站的网站产生系统，拥有完整、丰富且开源的生态圈。它利用 React + GraphQL 产生的多页面应用，让前端工程师，编辑，用户都感到满意。就让我们一步步地探索这个系统吧。



GatsbyJS 是一个拥有超过 2万 Stars，3500 forks 的 React 网站生成系统。



从技术的角度来说，GatsbyJS 就是混合了 \[React](https://github.com/facebook/react), \[react-router](https://github.com/ReactTraining/react-router), \[webpack](https://github.com/webpack/webpack), \[babel](https://github.com/babel/babel) 还有 \[GraphQL](https://github.com/graphql-go/graphql) 的系统，达到数据层和 UI 层彻底分离，打造快速网站，而不失 SEO 的现代前端开发模式。GatsbyJS 提供接口，让你可以轻鬆获取你的远端数据库。无论是传统的 Wordpress, 现代的 Contentful，突发奇想的 github CMS, 还是一个 json 档案，它都可以无痛地接入到这个系统裡面。



举个例子，博客系统现在是使用 Contentful CMS，让我可以从任意地方访问 Contentful 网站进行修改，无需本地改任何代码。透过系统提供的生命週期钩子，你可以在其中将数据加工，处理，拼接，然后生成你所需要的数据源。 然后，你可以使用 React 编写组件化的网站，加上自己的样式，预处理器，例如 SCSS，styled-components。



值得一提的是，你可以使用 React 的生命週期，例如，利用 lozad.js 懒加载图片。



它可以生成静态页面，也就是说生成的是完整的网站文件夹，直接上传文件夹到网站空间，例如 Github Pages, Netlify，就可以把网站跑起来了。 它已经广泛应用于一些知名的网站，例如： \[ReactJS](https://reactjs.org/)官网



\## 网站角色



以前，工程师需要负责开发前端视图层，维护后端数据库，优化网站性能等的工作，而现在，分工化让这些工序都可以由专门的人去负责，其中包括前端开发者，内容发布者，网站访问者，下面将会详细展开：



\### 前端工程师



作为一个前端工程师角度出发，我们追求速度，用户体验。如何可以提供一个更加快速，更加好的网站给全球各地的用户。



我们会利用一些网站性能调优开发工具，例如：Lighthouse, Puppeteer，来测试，改进网络应用质量。 这些用户可能来自远方，网络信号未必会很好，出现掉线和网络异常是经常有的事。他们对于网站的性能，加载速度就有更加高的需求。我们可能可以用PWA，又或者懒加载的工具，例如 lozad.js 来解决这个问题。



\### 编辑



为了最优化内容，一些公司会出现专门编写文案的编辑，内容管理者。 他们关心如何修改文章，挑选适合的图片，并使用简单容易的编辑器，例如富文本编辑器。 与其等待版本上线后才能看到效果，他们更加希望可以使用富文本编辑器，或者其他的可即时展示的编辑器，然后访问项目的地址。 这个时候，如果他们不满意效果，只需要重新修改文章，然后发布就行。



\### 访问用户



随著智能手机的普及，网站用户也开始使用不同的设备来访问网站。 就以我的博客为例，有四成的用户就是使用手机来访问网站的。



他们关心网站的加载速度，不愿意等待太长时间。 他们也会关心网站是否佔用太多流量，比如说图片加载太多，优化太少的话，他们会觉得流量没了有点伤心。。。 为了满足用户需求，前端工程师每天都在进化，提供更加好的网站。他们会使用更加受到社区认可，维护性好的项目，减少开发时的坑，例如如何使用 React 开发网站，而不失 SEO 的优势，又例如如何达到前后端分离，数据层和展示层分离。



\## 架构



GatsbyJS 打造了一个完整的生命週期，以及可以让开发者接入的插件模式。 如果我需要使用某些工具的话，我只需要在 gatsby-config.js 写入插件名称，然后 npm install 一下就好了。



GatsbyJS 拥有的丰富插件让开发者可以无痛地安装，移除插件，并且享受更加好的版本插件来避免版本过旧的版本特定问题。



 插件以 gatsby-plugin- 开头：

\|  插件   | 插件  |

\|  ----  | ----  |

\|  feed  | 制作 RSS Feed  |

\|  manifest  | 应用程序缓存  |

\|  netlify  | Netlify 网站空间最优化  |

\|  nprogress  | 进度条  |

\|  offline  | 离线应用  |

\|  react-helmet  | 修改 Head 部分  |

\|  sass  | Sentry 错误捕获平台  |

\|  sitemap  | 站点地图  |

\|  webpack-bundle-analyzer  | Webpack 版本的打包详细分析器  |

\|  link  | react-router 路由封装  |



\### React



为了避免大量的 DOM 操作而导致的网页性能问题，我们会使用 React 来操作虚拟 DOM，然后生成一个组件化的网站。 另外，为了避免重複造轮子，我们会使用组件化的开发方式。 



\### Storybook



Storybook 可以提供一个快速入门的网站，展示系统裡面的组件。 由于系统是使用 React，你可以快速地安装 Storybook 插件，例如在你的项目裡面使用 npx 命令：



npx -p @storybook/cli sb init



\### Webpack



这个在现代化前端工程裡面很常见，这裡简单说一下：它打包不同的 html, js, css 文件，然后把他们压缩，加密，劣化，让我们可以放到 CDN 上面。



\### Babel



为了兼容不同浏览器支持的 JavaScript 版本，我们可以使用 Babel。例如说将 async/await 向下兼容到 promise。



\### ESLint



我们可以使用代码风格检测，校正工具例如 ESLint，来统一团队的代码风格，不但可以避免 Git 操作上面的不必要更改，还可以避免犯下低级错误，例如拼写，函数变量创建但未使用。



\### 版本管理



我们会使用 Git 来达到版本管理，开分支，合拼分支，然后跑自动化测试，最后部署。 万一有问题，我们还可以快速的使用二分法排查版本错误，然后通知网站维护者（自己）进行版本回退。 我们可以使用 Webhooks 让编辑改完文章后发送请求到 Netlify 来达到自动测试，部署，发布的流程



\## 后记



如果你希望測試一下 GatsbyJS 為你帶來的速度體驗的話，其實你就已經體驗到了，因為，這個博客就是使用 GatsbyJS。



\## 参考链接



  1. \[SaoBear-is-Blog-GitHub](https://github.com/PiccoloYu/SaoBear-is-Blog)

  2. \[Rise of the Content Mesh: Webcast with Contentful and Gatsby](https://www.gatsbyjs.com/content-mesh-contentful/)

  3. \[GatsbyJS 官网](https://www.gatsbyjs.org/)
