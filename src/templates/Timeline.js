import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { graphql, Link } from "gatsby";
import DealWithData from "../utils/DealWithData";

import {
  TimeeArticle
} from "../utils/Svgicons";

const TimeLinktext = ({ color, text }) => (
  <div className="Page-main"
    style={{
      color
    }}
  >
    {text}
  </div>
)

const TimeLink = ({ test, url, text }) => {
  if (!test) {
    return <TimeLinktext color="#7d7d7d" text={text} />
  }

  return (
    <Link to={`${url}`}>
      <TimeLinktext color="#66ccff" text={text} />
    </Link>
  );
}

class Timeline extends Component {

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const { currenttimePage, numtimePages } = this.props.pageContext;
    const isFirst = currenttimePage === 1
    const isLast = currenttimePage === numtimePages
    const prevPage = currenttimePage - 1 === 1 ? '/Timeline' : '/Timeline/' + (currenttimePage - 1).toString();
    const nextPage = '/Timeline/' + (currenttimePage + 1).toString();
    let datelist = []
    for (let i = 0; i < posts.length; i++) {
      let list = posts[i].node.frontmatter.date.split("-");
      let item = {
        title: posts[i].node.frontmatter.title,
        date: posts[i].node.frontmatter.date,
        year: list[0],
        month: list[1],
        day: list[2],
        slug: posts[i].node.fields.slug,
        excerpt: posts[i].node.excerpt,
        lable: posts[i].node.lable
      }
      datelist.push(item);
    }
    let sum = DealWithData(datelist, 'year');

    return (
      <div>
        {
          sum.map((node) => {
            return (
              <div key={node.year} className="Timeline">
                <h3
                  style={{
                    textAlign: 'center'
                  }}>{node.year}</h3>
                <VerticalTimeline >
                  {node.allData.map((item) => {
                    return (
                      <VerticalTimelineElement
                        key={item.title}
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgba(250, 250, 250, 1)', color: '#000', borderTop: "3px solid orange" }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                        date={item.date}
                        iconStyle={{ background: 'orange', color: '#fff' }}
                        icon={<TimeeArticle />}
                      >
                        <p className="vertical-timeline-element-title">
                          <Link style={{ boxShadow: `none` }} to={item.slug}>
                            {item.title}
                          </Link>
                        </p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt
                          }}
                        />
                      </VerticalTimelineElement>
                    )
                  })}
                </VerticalTimeline>
              </div>
            )
          })
        }
        <div className="goPage">
          <div className="prevPage"><TimeLink test={!isFirst} url={prevPage} text="Previous" /></div>
          <div className="nextPage"><TimeLink test={!isLast} url={nextPage} text="Next" /></div>
        </div>
      </div>
    );
  }
}



export default Timeline;

export const timepageQuery = graphql`
  query timePageQuery($tskip: Int!, $tlimit: Int!)  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $tlimit
      skip: $tskip
    ) {
      edges {
        node {
          excerpt(pruneLength: 25)
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
