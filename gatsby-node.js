const path = require(`path`);
const express = require('express');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('public'))
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions


  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tag
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    const tagSet = new Set();


    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const { tag } = post.node.frontmatter;

      if (tag) {
        tag.forEach(item => tagSet.add(item));
      }

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })


    // Create blog post list pages
    const postsPerPage = 8;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/Page/${i + 1}`,
        component: path.resolve('src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      });
    });


    tagSet.forEach((tag) => {
      createPage({
        path: `/Label/${tag}`,
        component: path.resolve('src/templates/tag.js'),
        context: {
          tag,
        },
      })
    })

    const timePage = 5;
    const numtimePages = Math.ceil(posts.length / timePage);

    Array.from({ length: numtimePages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/Timeline` : `/Timeline/${i + 1}`,
        component: path.resolve('src/templates/Timeline.js'),
        context: {
          tlimit: timePage,
          tskip: i * timePage,
          numtimePages,
          currenttimePage: i + 1
        },
      });
    });
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

//解决方案是自定义 Webpack配置，以在服务器渲染期间用虚拟模块替换有问题的模块。或者使用react-loadable
/*exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /APlayer/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}*/