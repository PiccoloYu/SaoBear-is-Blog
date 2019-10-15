import React from 'react';
import "./css/impress-demo.css";
class impress extends React.Component {

  render() {
    return (
      <div id="impress" data-autoplay="7">
        <div id="bored" className="step slide" data-x="-1000" data-y="-1500" data-autoplay="10">
          <q>你不是对那些以 <b>幻灯片</b> 为基础的演讲感到厌烦吗</q>
        </div>
        <div className="step slide" data-x="0" data-y="-1500">
          <q>你不认为<strong>在现代浏览器中</strong> 不应该 <strong>复制限制
                </strong> “经典”滑动的？</q>
        </div>
        <div className="step slide" data-x="1000" data-y="-1500">
          <q>你愿意吗 <strong>给观众留下深刻印象</strong> 具有 <strong>惊人的视觉效果</strong>
            关于你的谈话？</q>
        </div>
        <div id="title" className="step" data-x="0" data-y="0" data-scale="4">
          <span className="try">那你应该试试</span>
          <h1>impress.js<sup>*</sup></h1>
          <span className="footnote"><sup>*</sup> 无意押韵</span>
        </div>
        <div id="its" className="step" data-x="850" data-y="3000" data-rotate="90" data-scale="5">
          <p>这是一个 <strong>演示工具</strong> <br />
            灵感来自背后的想法<a href="http://prezi.com">prezi.com</a> <br />
            基于 <strong>css3变换和变换的能力</strong> 在现代浏览器中。</p>
        </div>
        <div id="big" className="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">
          <p>想象你的 <b>big</b> <span className="thoughts">思想</span></p>
        </div>
        <div id="tiny" className="step" data-x="2825" data-y="2325" data-z="-3000" data-rotate="300" data-scale="1">
          <p>和 <b>微小的</b> ideas</p>
        </div>
        <div id="ing" className="step" data-x="3500" data-y="-850" data-z="0" data-rotate="270" data-scale="6">
          <p>通过 <b className="positioning">定位</b>, <b className="rotating">旋转</b> 和 <b className="scaling">缩放比例</b> 它们在无限的画布上
            </p>
        </div>
        <div id="imagination" className="step" data-x="6700" data-y="-300" data-scale="6">
          <p>唯一的<b>限制</b>你的 <b className="imagination">想象力</b></p>
        </div>
        <div id="source" className="step" data-x="6300" data-y="2000" data-rotate="20" data-scale="4">
          <p>想知道更多吗？</p>
          <q><a href="http://github.com/impress/impress.js">使用源</a>, Luke!</q>
        </div>
        <div id="one-more-thing" className="step" data-x="6000" data-y="4000" data-scale="2">
          <p>还有一件事…</p>
        </div>
        <div id="its-in-3d" className="step" data-x="6200" data-y="4300" data-z="-100" data-rotate-x="-40"
          data-rotate-y="10" data-scale="2">
          <p>
            <span className="have">你</span>
            <span className="you">有</span>
            <span className="noticed">注意到</span>
            <span className="its">它</span>
            <span className="in">是</span> <b>3D<sup>*</sup></b>?
          </p>
          <span className="footnote">* 别这样, prezi ;)</span>
        </div>
        <div id="overview" className="step" data-x="3000" data-y="1500" data-z="0" data-scale="10">
        </div>
      </div>
    )
  }
}


export default impress;