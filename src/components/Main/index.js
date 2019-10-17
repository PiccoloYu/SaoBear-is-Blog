import React, { Component } from 'react';
import { rhythm } from "../../utils/typography";
import { Row, Col } from 'antd';
import Game from "../Game";
import Anchor from "../Anchor";
import Transition from "../Transition";

class Main extends Component {

  componentDidUpdate() {
    const { test } = this.props;
    if (test) {
      let main = document.querySelector('#main');
      if (main.classList[1] !== 'main_sreen') {
        main.classList.remove(main.classList[1]);
        main.classList.add('main_sreen')
      }

      let Anchor = document.querySelector('.Anchor-main');
      if (Anchor.classList[1] !== 'Anchor_top') {
        Anchor.classList.remove(Anchor.classList[1]);
        Anchor.classList.add('Anchor_top')
      }

      let focusinfo = document.querySelector('.focusinfo');
      if (focusinfo.classList[1] !== 'focusinfoh') {
        focusinfo.classList.remove(Anchor.classList[1]);
        focusinfo.classList.add('focusinfoh')
      }
    }
  }

  render() {
    const { test, location, url, children } = this.props;
    const a = test ? 'main_sreen' : (url === 'Article' ? 'main_img' : 'main_none');
    return (
      <main className={`main ${a}`}
        id="main"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(100),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
          // top: `${location.pathname === rootPath ? '100vh!important' : lost[1] === 'Article' ? '25rem!important' : '0'}`,
          marginTop: `${test ? '0' : '4.7rem'}`//29.6875rem
        }}
      >
        <div className="children">
          <Row>
            <Col span={24}>
              {test ? <Game /> : ''}
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
    );
  }
}

export default Main;