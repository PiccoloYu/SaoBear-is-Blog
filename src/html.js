import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html manifest="./m.manifest" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="./live2d/css/live2d.css" />
        <link
          rel="shortcut icon"
          href="./favicons/Author192.png"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div id="landlord"
          style={{
            left: '0'
          }}>
          <div className="message"
            style={{
              opacity: '0'
            }}
          ></div>
          <canvas id="live2d" width="280" height="355" className="live2d"></canvas>
          <div className="home-button">主页</div>
          <div className="archive-button">归档</div>
          <div className="top-button">返回顶部</div>
          <div className="hide-button">隐藏</div>
        </div>
        {props.postBodyComponents}
        <script src="./live2d/js/jquery-3.1.1.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  var message_Path = './live2d/';
                  var home_Path = 'https://localhost:8000/';
                  `,
          }}
        />
        <script type="text/javascript" src={`./live2d/js/live2d.js?v=${new Date()}`}></script>
        <script type="text/javascript" src={`./live2d/js/message.js?v=${new Date()}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            loadlive2d("live2d", "./live2d/model/xiaomai/xiaomai.json");
                  `,
          }}
        />
        <script id='varsion' src={`./version.js?v=${new Date()}`}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
