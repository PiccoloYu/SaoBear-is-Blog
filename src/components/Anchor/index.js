import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby";
import { Github } from "../../utils/Svgicons";
import { Affix } from 'antd';

let Anchor = ({ pathname }) => {
  const rootPath = `${__PATH_PREFIX__}/`;


  return (
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
        )  {
          nodes {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
            }
          }
        }
      }
    `}
      render=
      {(data) => {
        const posts = data.allMarkdownRemark.nodes;
        let latestPost = posts.slice(0, 3);
        return (
          <div className={`Anchor-main ${pathname === rootPath ? 'Anchor_top' : 'Anchor_none'}`}
          >
            <Affix offsetTop={90}>
              <div className="Anchor">
                <img src="/imgs/Author.jpg" alt="Author" className="hvr-bounce-in Author" />
                <h4>Saobear</h4>
                <div className="Catalog">
                  <hr />
                  <a href="https://github.com/PiccoloYu/SaoBear-is-Blog" className="github_link" target="_black">
                    <Github />
                  </a>
                  <hr />
                  <p>共{posts.length}篇文章</p>
                  <hr />
                  <div className="latest-post">
                    <p>最新文章</p>
                    {latestPost.map((node, index) => {
                      return (
                        <Link
                          key={index}
                          style={{ boxShadow: `none` }} to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Affix>
          </div>
        )
      }
      }
    />
  );
}

export default Anchor;

