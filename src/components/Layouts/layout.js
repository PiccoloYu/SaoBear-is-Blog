import React from "react";
import { rhythm } from "../../utils/typography";
//import { CSSTransitionGroup } from 'react-transition-group' // ES6
//import MyHeader from "../Header/header";
import { Row, Col } from 'antd';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import todoApp from '../../Redux/reducer';
//import Aplayer from "../Aplayer";
import Game from "../Game";
import Screen from "../Screen";
import Anchor from "../Anchor";

//import Impress from '../impress/impress';
import Header from "../Header/header";
import Transition from "../Transition";
import Footer from "../Footer/footer";
import Focusinfo from "../Focusinfo";
import Backtop from "../Backtop";
import Progress from "../Progress";
//import Live2d from "../live2d/index";

import Loadable from 'react-loadable';//解决 wondos 未定义

import "./index.scss";
import 'antd/dist/antd.css';
//import 'prismjs/themes/prism-COY.css';
import 'animate.css';
import { ContextProviderComponent } from "../../utils/Context";

let store = createStore(todoApp);

const loader = () => (<div>Loading...</div>)

const LoadableComponent = Loadable({
  loader: () => import('../Aplayer'),
  loading: loader,
});

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerhide: false,
      screenTop: '',
      scrollTop: '',
      scrollw: ''
    };
    this.bindScroll = this.bindScroll.bind(this);
  }

  componentDidMount() {
    let screenTop = document.querySelector('#main').offsetTop;
    this.setState({
      screenTop: (screenTop - 150)
    })
    window.addEventListener('scroll', this.bindScroll);
  }

  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', this.bindScroll);
  }

  bindScroll(e) {
    // 滚动的高度
    const scrollTop = (e.srcElement ? e.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (e.srcElement ? e.srcElement.body.scrollTop : 0);
    this.setState({
      scrollTop: scrollTop
    })
    // 视窗高度
    const clientHeight = (e.srcElement && e.srcElement.documentElement.clientHeight) || document.body.clientHeight;
    // 页面高度
    const scrollHeight = (e.srcElement && e.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
    // 距离页面底部的高度
    //const height = scrollHeight - scrollTop - clientHeight;
    //滚动的总1高度
    const rollinheight = scrollHeight - clientHeight;
    if (scrollTop >= 100) {
      this.setState({
        headerhide: true
      })
    } else {
      this.setState({
        headerhide: false
      })
    }
    let a = Math.round(Number(scrollTop) / Number(rollinheight) * 10000) / 100.00 + "%";
    /*let scrollbar = this.refs.scrollbar;
    scrollbar.style.width = a*/
    /*const { current } = this.refs.scrollbar.myRef;
    current.style.width = a;*/
    this.setState({
      scrollw: a
    })
  }


  topOver(e) {
    //let target=e.target||e.srcElement   // ES6的语法，用let声明一个变量
    let BackTop = document.querySelector('.BackTop');
    BackTop.style.backgroundPosition = '50% -75px'
  }

  topOut(e) {
    //let target=e.target||e.srcElement   // ES6的语法，用let声明一个变量
    let BackTop = document.querySelector('.BackTop');
    //BackTop.style.background = `url(./imgs/biaoq.png) center center / cover no-repeat border-box`
    BackTop.style.backgroundPosition = 'center center'
  }

  /*topClick() {
    let BackTop = document.querySelector('.BackTop');
    BackTop.style.backgroundPosition = '50% -10px'
  }*/



  render() {
    const { location, title, children } = this.props;
    const { headerhide, screenTop, scrollTop, scrollw } = this.state;
    const rootPath = `${__PATH_PREFIX__}/`;
    const lost = location.pathname.split("/");
    console.log(location.pathname)
    console.log(location.pathname === rootPath)
    console.log(rootPath)
    return (
      <Provider store={store}>
        <ContextProviderComponent>
          <div
            className="layout"
          >
            {location.pathname === rootPath ? <Focusinfo screenTop={screenTop} /> : ''}
            {<LoadableComponent />}
            <Progress ref="scrollbar" scrollw={scrollw} />
            <Header headerhide={headerhide} location={location} />
            <div className="screen animated slideInDown"
              style={{
                height: `${location.pathname === rootPath ? '97vh' : '25rem'}`,//25rem
                top: `${location.pathname === rootPath ? '0' : '0'}`,
                position: `${location.pathname === rootPath ? 'fixed' : 'relative'}`,
              }}
            >
              {location.pathname === rootPath ?//<Screen location={location} title={title} />
                <Screen location={location} title={title} /> :
                lost[1] === 'Article' ?
                  <div className="imgDiv animated slideInDown"
                    title={title}
                  >
                    <img src='/imgs/AK-04.jpg' className="animated slideInDown" alt="title"></img>
                  </div> : ''
              }
            </div>
            <main className="main"
              id="main"
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(100),
                padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
                top: `${location.pathname === rootPath ? '100vh' : lost[1] === 'Article' ? '25rem' : '0'}`,
                marginTop: `${location.pathname === rootPath ? '' : '4.7rem'}`//29.6875rem
              }}
            >
              <div className="children">
                <Row>
                  <Col span={24}>
                    {location.pathname === rootPath ? <Game /> : ''}
                  </Col>
                  <Col span={18}>
                    <Transition location={location}>
                      {children}
                    </Transition>
                  </Col>
                  <Col span={6}>
                    <Anchor pathname={location.pathname} />
                  </Col>
                </Row>
              </div>
            </main>
            <Backtop scrollTop={scrollTop} />
            <Footer />
          </div>
        </ContextProviderComponent>
      </Provider >
    )
  }
}


export default Layout
