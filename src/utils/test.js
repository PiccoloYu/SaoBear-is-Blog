import { TimelineMax } from 'gsap'
let test = (entry, node) => {//文字动画
  return new TimelineMax().staggerFrom(
    node.querySelectorAll('#essay'),
    1,
    { opacity: 0, y: '+=50' },
    0.1
  )
}

export default test