import React, { useState } from 'react';
//import { Input } from 'antd';
import { Home, Archive, Message, About, Label, Menu } from "../../utils/Svgicons";
//import { Link } from 'react-router-dom';
import { Link, StaticQuery, graphql } from "gatsby";
import Progress from "../Progress";
import GithubCorner from 'react-github-corner';

//const { SubMenu } = Menu;
//const { Search } = Input;

function Header({ headerhide, location, scrollw }) {
  const [navshow, setNavshow] = useState(false);
  const rootPath = `${__PATH_PREFIX__}/`;
  let class1 = {
    backgroundColor: `${headerhide ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,0)'}`,
    boxShadow: `${headerhide ? '0 1px 40px -8px rgba(0, 0, 0, .5)' : 'unset'}`,
  }

  let class2 = {
    backgroundColor: `${headerhide ? 'rgba(255,255,255,.6)' : '#fff'}`,
    boxShadow: `${headerhide ? '0 1px 40px -8px rgba(0, 0, 0, .5)' : ''}`,
  }

  let linkstyle = headerhide ? 'linkstyleh' : 'linkstylen';

  const a = Math.random();

  let lowershow = () => {
    setNavshow(!navshow)
  }

  return (
    <StaticQuery
      query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
      render={data => (
        <header
          className='header'
          style={location.pathname === rootPath ? class1 : class2}
        >
          <Progress scrollw={scrollw} />
          <div className='site-branding'>
            <Link to={`/?random=${a}`}>
              <ruby>
                <span className="logo">SaoBear</span>
                <span>'is Blog</span>
              </ruby>
            </Link>
          </div>
          <button className="Menubut" onClick={lowershow}>
            <Menu />
          </button>
          <div className={`lower ${navshow ? 'lowers' : 'lowerh'}`}>
            <nav className={`${location.pathname === rootPath ? (headerhide ? 'fadeInRight animated ' : 'animated') : ''}`}>
              <ul className={`${location.pathname === rootPath ? linkstyle : ''} ${navshow ? 'Linkbutw' : ''}`}>
                <li className="Linkbut">
                  <Link to={`/?random=${a}`} className="hvr-underline-from-center ">
                    <Home />
                    首页
              </Link>
                </li>
                <li className="Linkbut">
                  <Link to={`/Timeline?random=${a}`} className="hvr-underline-from-center">
                    <Archive />
                    归档
                </Link>
                </li>
                <li className="Linkbut">
                  <Link to={`/Labellist?random=${a}`} className="hvr-underline-from-center">
                    <Label />
                    标签
                </Link>
                </li>
                <li className="Linkbut">
                  <Link to="/Comment" className="hvr-underline-from-center">
                    <Message />
                    留言薄
                </Link>
                </li>
                <li className="Linkbut">
                  <Link to="/Article/About/" className="hvr-underline-from-center">
                    <About />
                    关于
                </Link>
                </li>
              </ul>
            </nav>
          </div>
          <GithubCorner className="GithubCorner" href="https://github.com/PiccoloYu/SaoBear-is-Blog" />
        </header>
      )}
    />
  );
}


export default Header;