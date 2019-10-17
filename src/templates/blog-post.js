/**
 * 文章显示页
 */
import React from "react"
import { Link, graphql } from "gatsby"
//import { Icon } from 'antd';
import MyTag from "../components/Tag/";
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogLinktext = ({ text, color }) => (
  <div className="Page-main"
    style={{
      color
    }}
  >
    {text}
  </div>
)

const BlogLink = ({ text, url, test }) => {
  if (!test) {
    return <BlogLinktext color="#7d7d7d" text={text} />;
  }
  return (
    <Link to={url} rel="next">
      <BlogLinktext color="#66ccff" text={text} />
    </Link>
  );
}


class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevgo: '',
      nextgo: '',
    };
  }



  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;
    const html = post.html;
    return (
      <div className={`blog-post animated fadeInUp`}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article id="essay">
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <span
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              <MyTag
                label={post.frontmatter.tag} date={post.frontmatter.date} className='mytag' />
            </span>
          </header>

          <section id="section" dangerouslySetInnerHTML={{ __html: html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>

          </footer>
        </article>
        <nav className="page_main">
          <div className="page nextpage">
            {previous && (
              <BlogLink test={previous} url={previous.fields.slug} text={previous.frontmatter.title} />
            )}
          </div>
          <div className="page prevpage">
            {next && (
              <BlogLink test={next} url={next.fields.slug} text={next.frontmatter.title} />
            )}
          </div>
        </nav>
      </div>
    )
  }
}

export default BlogPostTemplate

export const BlogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tag
      }
    }
  }
`
