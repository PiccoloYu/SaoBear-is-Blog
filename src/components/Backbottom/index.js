import React from "react";
import { Icon } from 'antd';
import { Scrollhref } from "../../utils/Slow_motion";

let Backbottom = ({ screenTop }) => {

  let tobottom = () => {
    /* let screen = document.querySelector('#Screen').contentWindow;
     screen.document.querySelector('#impress-autoplay-playpause').click();*/
    // 挂载滚动监听
    //let scrollto = scrollTop !== '' ? scrollTop : 0;
    //scroll(scrollto, 870)
    Scrollhref(screenTop, 300);
    /*let screen = document.querySelector('.screen');
    let main = document.querySelector('.main');
    scrollToView(screen, main);*/
  }



  /**
 * 缓动函数
 * @param t 动画已消耗时间
 * @param b 原始值
 * @param c 目标值
 * @param d 持续时间
 */
  /*let sineaseOut = (t, b, c, d) => {
    return c * ((t = t / d - 1) * t * t + 1) + b
  }*/

  return (
    <div className="Backbottom" onClick={tobottom}>
      <Icon type="down" />
    </div>
  )
}

export default Backbottom;