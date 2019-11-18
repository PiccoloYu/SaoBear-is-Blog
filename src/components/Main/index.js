import React, { Component } from 'react';
import { rhythm } from "../../utils/typography";
import { Row, Col } from 'antd';
import Game from "../Game";
import Anchor from "../Anchor";
import Transition from "../Transition";

class Main extends Component {
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
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            {test ? <Game /> : ''}
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                            <Transition location={location}>
                                {children}
                            </Transition>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <Anchor pathname={location.pathname} />
                        </Col>
                    </Row>
                </div>
            </main>
        );
    }
}

export default Main;