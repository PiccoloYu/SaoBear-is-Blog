/* eslint-disable react/prop-types */
import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

//import { config } from '../../../data';
// 这个变量将负责我们的动画持续时间
const transitionDelay = 100;

const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${transitionDelay}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${transitionDelay}ms ease-in-out`,
    opacity: 0,
  },
};

class Transition extends React.PureComponent {
  render() {
    // 解构道具以避免垃圾。道具…回报表
    const { children, location } = this.props;
    //key是必需的
    //reacttransition需要知道页面何时进入/退出dom
    return (
      <TransitionGroup className="TransitionGroup">
        <ReactTransition
          key={location.pathname}
          timeout={
            { enter: transitionDelay, exit: transitionDelay } // duration of transition
          }
        >
          {//样式取决于dom中页面的状态（进入、退出、进入）
            status => (
              <div style={{ ...getTransitionStyles[status] }} className="Transition">{children}</div>
            )}
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

export default Transition;
