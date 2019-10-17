import React from 'react';
import Backbottom from "../Backbottom";
import { connect } from "react-redux";
import { isPower } from "../../Redux/action";
import { Row, Col, } from 'antd';
import {
  Pre,
  Next,
  Stop,
  Play
} from "../../utils/Svgicons";

class Focusinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  poweroff = () => {
    let screen = document.querySelector('#Screen').contentWindow;
    let playpause = screen.document.querySelector('#impress-autoplay-playpause');
    playpause.click();
    let play = document.querySelector('.aplayer-play');
    //let pause = document.querySelector('.aplayer-pause');
    if (playpause.innerText === '||') {
      /*if (pause !== null) {
        pause.click();
      }*/
      this.props.isPower(false);//暂停状态
    } else {
      if (play !== null) {
        play.click();
      }
      this.props.isPower(true);
    }

  }

  pre = () => {
    let screen = document.querySelector('#Screen').contentWindow;
    screen.document.querySelector('#impress-navigation-ui-prev').click();
    let pre = document.querySelector('.aplayer-icon-back')
    pre.click();
  }

  next = () => {
    let screen = document.querySelector('#Screen').contentWindow;
    screen.document.querySelector('#impress-navigation-ui-next').click();
    let next = document.querySelector('.aplayer-icon-forward')
    next.click();
  }

  render() {
    const { screenTop, power, test } = this.props;
    return (
      <div className={`focusinfo animated slideInRight `}>
        <div className="header-info">
          <p>Keep trying no matter how hard it seems. it will get easier.</p>
          <div className="control">
            <Row>
              <Col span={8}>
                <div className="bg-pre bg" onClick={this.pre}>
                  <Pre />
                </div>
              </Col>
              <Col span={8}>
                <div className="power bg"
                  onClick={this.poweroff}>
                  {
                    power ?
                      <Play /> :
                      <Stop />
                  }
                </div>
              </Col >
              <Col span={8}>
                <div className="bg-next bg" onClick={this.next}>
                  <Next />
                </div>
              </Col>
            </Row>
            {/*<ul>
              <li id="bg-pre" className="bg" onClick={this.pre}><Icon type="vertical-right" /></li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li id="bg-next" className="bg" onClick={this.next}><Icon type="vertical-left" /></li>
            </ul>*/}
          </div>
        </div>
        <Backbottom screenTop={screenTop} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    power: state.power
  }
}

export default connect(
  mapStateToProps,
  { isPower }
)(Focusinfo);