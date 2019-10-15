import React, { useState } from 'react';
import { Link } from "gatsby"

const MyCanvas = ({ lable, title, linkto }) => {
  const [ctxs, setCtxs] = useState('');

  let className = title.split(" ").join("");
  let mycalss = document.getElementsByClassName(className);
  setTimeout(() => {
    //准备画笔
    var ctx = mycalss[0].getContext("2d");
    ctx.clearRect(0, 0, mycalss[0].width, mycalss[0].height);
    ctx.fillStyle = 'red';
    ctx.font = "15px Georgia";
    // Create gradient
    ctx.fillText(lable, 250, 140);
    var gradient = ctx.createLinearGradient(0, 0, mycalss[0].width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    ctx.font = "30px Arial";
    ctx.fillStyle = '#1890ff';
    ctx.fillText(`${title}`, 10, 50);
    //ctx.strokeText(`${title}`, 10, 50);
    ctx.save();
    var img = new Image();
    img.src="./find.jpg";
    ctx.drawImage(img,0,0,mycalss[0].width,mycalss[0].height);
    setCtxs(ctx);
  }, 1);



  let canvasOver = () => {
    ctxs.beginPath();
    ctxs.font = "20px Georgia";
    ctxs.fillText('鼠标进入', 200, 100);

    //ctxs.clearRect(0, 0, mycalss[0].width, mycalss[0].height);
  }

  let canvasOut = () => {
    ctxs.restore();
  }

  return (
    <Link to={linkto}
      style={{
        boxShadow: 'unset'
      }}
    >
      <canvas
        title={title}
        className={`myCanvas ${className}`}
        onMouseOver={canvasOver}
        onMouseOut={canvasOut}
        style={{
          border: '1px solid #d3d3d3',
          width: '100%',
          height: '100%'
        }}>
        Your browser does not support the HTML5 canvas tag.
    </canvas>
    </Link>
  )
}

export default MyCanvas;