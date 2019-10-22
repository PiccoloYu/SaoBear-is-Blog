import React, { Component } from 'react';
import ReactAplayer from 'react-aplayer';
import { connect } from "react-redux";
import { isPower } from "../../Redux/action";
import appData from './data';
import './index.scss';




class Aplayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
    this.bindaplyer = this.bindaplyer.bind(this);
  }

  componentDidMount() {
    let miniswitcher = document.querySelector('.aplayer-miniswitcher');
    let aplayerbody = document.querySelector('.aplayer-body');
    aplayerbody.classList.add('aplayer-body-hover');
    miniswitcher.addEventListener('click', this.bindaplyer)
  }

  bindaplyer() {
    const { test } = this.state;
    let aplayerbody = document.querySelector('.aplayer-body');
    if (test) {
      aplayerbody.style.left = 0;
      aplayerbody.classList.remove('aplayer-body-hover');
      this.setState({
        test: false
      })
    } else {
      aplayerbody.style.left = '-4.125rem';
      aplayerbody.classList.add('aplayer-body-hover');
      this.setState({
        test: true
      })
    }
  }


  // event binding example
  onPlay = () => {
    let screen = document.querySelector('#Screen');
    let botStatus = document.querySelector('#botStatus');
    if (botStatus !== null) {
      botStatus.click();
      botStatus.checked = true;
    }

    if (screen !== null) {
      let playpause = screen.contentWindow.document.querySelector('#impress-autoplay-playpause');
      if (playpause.innerText === '||') {
        this.props.isPower(true);
        playpause.click();
      }
    }
    let pic = document.querySelector('.aplayer-pic');
    pic.style.animation = "animal 2s infinite linear";
  };

  onPause = () => {
    /*let screen = document.querySelector('#Screen').contentWindow;
    let playpause = screen.document.querySelector('#impress-autoplay-playpause');
    if (playpause.innerText === '▶') {
      this.props.ispower(false);
      playpause.click();
    }*/
    let bug = document.querySelector('#options');
    if (bug !== null) {
      bug.click();
    }

    let botStatus = document.querySelector('#botStatus');
    if (botStatus !== null) {
      botStatus.click();
      botStatus.checked = false;
    }

    let pic = document.querySelector('.aplayer-pic');
    pic.style.animationPlayState = "paused";

  };

  // example of access aplayer instance
  initAp1 = ap => {
    this.ap1 = ap;
  };

  listshow = () => {
    console.log('打开了菜单')
  }

  lrcshow = () => {
    console.log('lrcshow')
  }

  destroy = () => {
    console.log('destroy')
  }

  test = () => {
    console.log('TEST')
  }
  renderReactLogo = () => {
    return (
      <img
        className="react-logo"
        alt="123"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      />
    );
  };

  render() {
    return (
      <div className="landing">
        <div className="aplayer-wrap">
          {/* example with detailed props */}
          {/*<ReactAplayer
            {...appData.apLrcList}
            onInit={this.initAp1}
            onPlay={this.onPlay}
            onPause={this.onPause}
          />*/}
          {/* example of access aplayer instance API           <span className="footer">

          </span>*/}

          {/*<button onClick={() => this.ap1.toggle()}>toggle()</button>*/}
        </div>

        {/* example with deconstructing props */}
        {<ReactAplayer
          {...appData.apFixedLrcList}
          className="AplayerFixed"
          onInit={this.initAp1}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onListshow={this.listshow}
          onLrcshow={this.lrcshow}
          onDestroy={this.test}
        />}
      </div>
    );
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
)(Aplayer);