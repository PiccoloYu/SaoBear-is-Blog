import React, { Component } from 'react';
import { graphql, Link } from "gatsby";
import Articlelist from "../components/Articlelist";
class tag extends Component {

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <div className="label">
        <Articlelist obj={posts} />
      </div>
    );
  }
}

export default tag;

export const pageQuery = graphql`
  query tagPageQuery($tag: [String!]) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: $tag } } }
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
