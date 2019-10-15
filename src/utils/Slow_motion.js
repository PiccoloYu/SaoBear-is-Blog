/**
 * @param {*} A 是起始位置；
 * @param {*} B 是目标位置；
 * @param {*} rate 是缓动速率；
 * @param {*} callback 是变化的位置回调，支持两个参数，value和isEnding，表示当前的位置值（数值）以及是否动画结束了（布尔值）；
 */
let Scroll_top = (A, B, rate, callback) => {
  if (A === B || typeof A != 'number') {
    return;
  }
  B = B || 0;
  rate = rate || 2;
  var step = function () {
    A = Math.round(A + (B - A) / rate);
    if (A < 1) {
      callback(B, true);
      return;
    }
    callback(A, false);
    if (A > 10) {
      requestAnimationFrame(step);
    }
  };
  step();
};


/**
 * @param {numeber} currentY 需要移动的dom当前位置离网页顶端的距离
 * @param {number} targetY 需要移动的dom当前位置离要移到的位置的距离
 */
let Scroll_href = (currentY, targetY) => {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      Scroll_href(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 1)
}

let Scrollhref = (number = 0, time) => {
  if (!time) {
    document.body.scrollTop = document.documentElement.scrollTop = number;
    return number;
  }
  const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
  let spacingInex = time / spacingTime; // 计算循环的次数
  let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
  let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
  let scrollTimer = setInterval(() => {
    if (spacingInex > 0) {
      spacingInex--;
      Scrollhref(nowTop += everTop);
    } else {
      clearInterval(scrollTimer); // 清除计时器
    }
  }, spacingTime);
};

export {
  Scroll_top,
  Scroll_href,
  Scrollhref
};