import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
//import DealWithData from "../utils/DealWithData";

class Label extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const mapping = {};

    posts.forEach(({ node }) => {
      const { tag } = node.frontmatter
      tag.forEach((name) => {
        if (mapping[name]) {
          mapping[name] += 1;
        } else {
          mapping[name] = 1;
        }
      })
    })


    const tag = Array.from(Object.keys(mapping)).sort(
      (b, a) => mapping[a] - mapping[b]
    );//数量按顺序排序


    return (
      <div className="tag">
        <div className="tag-header">
          目前共计 {tag.length} 个标签
        </div>
        <div className="tag-main">
          {tag.map((node) => {
            let test = mapping[node] > 2;
            return (
              <Link className="animated slideInDown" to={`Label/${node}`} key={node}
                style={{
                  color: `${test ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.7)'}`,
                  fontSize: `${test ? '20px' : '15px'}`,
                }}
              >
                {node}   {mapping[node]}
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Label;

export const tagQuery = graphql`
  query labelPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tag
          }
        }
      }
    }
  }
`