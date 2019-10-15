import React, {/* useState */ } from 'react';
//import { Input } from 'antd';
import { Home, Archive, Message, About, Label } from "../../utils/Svgicons";
//import { Link } from 'react-router-dom';
import { Link } from "gatsby";
import './index.scss'

//const { SubMenu } = Menu;
//const { Search } = Input;

function Header({ headerhide, location }) {
  //const [current, setCurrent] = useState('mail');
  const rootPath = `${__PATH_PREFIX__}/`;

  let class1 = {
    backgroundColor: `${headerhide ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,0)'}`,
    boxShadow: `${headerhide ? '0 1px 40px -8px rgba(0, 0, 0, .5)' : 'unset'}`,
  }

  let class2 = {
    backgroundColor: `${headerhide ? 'rgba(255,255,255,.6)' : '#fff'}`,
    boxShadow: `${headerhide ? '0 1px 40px -8px rgba(0, 0, 0, .5)' : '0 1px 10px -2px rgba(0, 0, 0, .5)'}`,
  }

  /* let handleClick = e => {
     setCurrent(e.key)
   };*/


  return (
    <header className='header'
      style={location.pathname === rootPath ? class1 : class2}
    >
      <div className="lower animated slideInLeft">
        <nav>
          <ul>
            <li>
              <Link to="/" className="hvr-underline-from-center ">
                <Home />
                首页
              </Link>
            </li>
            <li>
              <Link to="/Timeline" className="hvr-underline-from-center">
                <Archive />
                归档
                </Link>
            </li>
            <li>
              <Link to="/Labellist" className="hvr-underline-from-center">
                <Label />
                标签
                </Link>
            </li>
            <li>
              <Link to="/" className="hvr-underline-from-center">
                <Message />
                留言
                </Link>
            </li>
            <li>
              <Link to="/" className="hvr-underline-from-center">
                <About />
                关于
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Header;