import React from "react"
import './index.css'

class Live2d extends React.Component {

  componentDidMount() {
    const config = document.createElement("script")
    config.src = "/live2d/js/config.js"
    config.async = true
    document.body.appendChild(config)

    const jqscript = document.createElement("script")
    jqscript.src = "/live2d/js/jquery-3.1.1.min.js"
    jqscript.async = true
    document.body.appendChild(jqscript)

    const live2d = document.createElement("script")
    live2d.src = "/live2d/js/live2d.js"
    live2d.async = true
    document.body.appendChild(live2d)

    const message = document.createElement("script")
    message.src = "/live2d/js/message.js"
    message.async = true
    document.body.appendChild(message)

    const init = document.createElement("script")
    init.src = "/live2d/js/init.js"
    init.async = true
    document.body.appendChild(init)

  }

  render() {
    return (
      <div id="landlord" style={{ left: 0 }}>
        <div className="message" style={{ opacity: 0 }}></div>
        <canvas id="live2d" width="280" height="355" className="live2d"></canvas>
        <div className="home-button">主页</div>
        <div className="archive-button">归档</div>
        <div className="top-button">返回顶部</div>
        <div className="hide-button">隐藏</div>
      </div>
    )
  }
}

export default Live2d