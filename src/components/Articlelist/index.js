import React from 'react';
import { Link } from "gatsby";
import { rhythm } from "../../utils/typography";
import { Col, Row } from 'antd';
import MyTag from "../Tag";

let Articlelist = ({ obj }) => {
  return (
    <div>
      {obj.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article className="articleList animated " key={title}>
            <div className={`articlemain ${(index + 1) % 2 === 0 ? 'hvr-underline-from-left' : 'hvr-underline-from-right'}`}>
              {/*<div className={`content content-thumb ${(index + 1) % 2 === 0 ? 'content-left' : 'content-right'}`}>
                    <img src="./find.jpg" alt="Smiley face"></img>
            </div>style={/*{ boxShadow: `none` }*/}
              <div className={`content content-wrap ${(index + 1) % 2 === 0 ? '' : ''}`}>
                <Row>
                  <Col span={0}>
                    <div className="content-wrap-img">
                      <img src="/imgs/Author.jpg" alt={index} />
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="content-wrap-main">
                      <header>
                        <h4
                          className="button hvr-grow"
                          style={{
                            marginBottom: rhythm(1 / 4),
                          }}
                        >
                          <Link
                            to={node.fields.slug}>
                            {title}
                          </Link>
                        </h4>
                      </header>
                      <section className="article_section">
                        <MyTag label={node.frontmatter.tag} date={`发布于 ` + node.frontmatter.date} className='mytag' />
                      </section>
                      <footer>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: node.frontmatter.description || node.excerpt,
                          }}
                        />
                      </footer>
                      {/*<div className="more">
                    <Link
                      style={{ boxShadow: `none` }} to={node.fields.slug}>
                      <Icon type="ellipsis" />
                    </Link>
                    </div>*/}
                    </div>
                  </Col>
                </Row>

              </div>
            </div>
            {/*<hr size="1"
                  style={{
                    width: '50%',
                    height: '1px',
                    float: `${(index + 1) % 2 === 0 ? 'left' : 'right'}`
                  }} />*/}
          </article>
        )
      })}
    </div>
  );

}

export default Articlelist;