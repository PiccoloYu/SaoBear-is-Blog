import React, { Component } from 'react';
import { graphql, Link } from "gatsby"
import DealWithData from "../utils/DealWithData";

class Label extends Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    let Labellist = []
    for (let i = 0; i < posts.length; i++) {
      let item = {
        label: posts[i].node.frontmatter.label,
        title: posts[i].node.frontmatter.title
      }
      Labellist.push(item)
    }
    let sum = DealWithData(Labellist, 'label');

    return (
      <div className="tag">
        <div className="tag-header">
          目前共计 {sum.length} 个标签
        </div>
        <div className="tag-main">
          {sum.map((node) => {
            let test = node.allData.length > 2;
            return (
              <Link className="animated slideInDown" to={`Label/${node.label}`} key={node.label}
                style={{
                  color: `${test ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,.7)'}`,
                  fontSize: `${test ? '20px' : '15px'}`,
                }}
              >
                {node.label}   {node.allData.length}
              </Link>
            )
          })}
        </div>
      </div>
    );
  }
}

export default  Label;

export const pageQuery = graphql`
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
            label
          }
        }
      }
    }
  }
`