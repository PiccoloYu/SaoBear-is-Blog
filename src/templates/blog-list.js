import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo";
import Articlelist from "../components/Articlelist";
//import MyCanvas from "../components/Canvas/index";


const NavLinkText = ({ color, text }) => (
  <div className="Page-main"
    style={{
      color
    }}
  >
    {text}
  </div>
)

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <NavLinkText color="#7d7d7d" text={text} />;
  }

  return (
    <Link to={`${url}`}>
      <NavLinkText color="#66ccff" text={text} />
    </Link>
  );
}


class BlogIndex extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.bindScroll);
  }

  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', this.bindScroll);
  }

  bindScroll(e) {
    // const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
    let article = document.querySelectorAll('.articleList');
    for (let i = 0; i < article.length; i++) {
      let clientRect = article[i].getBoundingClientRect();
      if (clientRect.bottom > 0 && clientRect.top <= window.innerHeight) {
        article[i].classList.add('fadeInUp')
      }
    }
  }


  render() {
    const { data, location } = this.props;
    //const siteTitle = data.site.siteMetadata.title// location={this.props.location}
    const posts = data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : '/Page/' + (currentPage - 1).toString();
    const nextPage = '/Page/' + (currentPage + 1).toString();
    const rootPath = `${__PATH_PREFIX__}/`;
    return (
      <div className="article"
        style={{
          paddingTop: `${location.pathname === rootPath ? '170px' : ''} `,
          top: `${location.pathname === rootPath ? '0' : '-.9375rem'} `
        }}
      >
        <SEO title="SaoBear's blog" />
        {/*<Bio />*/}
        <Articlelist obj={posts}/>
        <div className="goPage">
          <div className="prevPage">
            <NavLink test={!isFirst} url={prevPage} text="Previous" />
          </div>
          {/*Array.from({ length: numPages }, (_, i) => (
              <li
                key={`pagination-number${i + 1}`}
                style={{
                  margin: 0,
                }}
              >
                <Link
                  to={`${i === 0 ? '/' : '/Page/'}${i === 0 ? '' : i + 1}`}
                  style={{
                    padding: rhythm(1 / 4),
                    textDecoration: 'none',
                    color: i + 1 === currentPage ? '#ffffff' : '',
                    background: i + 1 === currentPage ? '#007acc' : '',
                  }}
                >
                  {i + 1}
                </Link>
              </li>
                ))*/}
          <div className="nextPage">
            <NavLink test={!isLast} url={nextPage} text="Next" />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex
//(pruneLength: )
export const blogPageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!)  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
