import React from "react";
import { Scrollhref } from "../../utils/Slow_motion";

let Backtop = ({ scrollTop }) => {

  let Backtop = (e) => {
    /* var doc = document.body.scrollTop ? document.body : document.documentElement;
     Scroll_top(doc.scrollTop, 0, 4, function (value) {
       doc.scrollTop = value;
     });*/
    e.preventDefault();
    Scrollhref(0, 200);
  }

  return (
    <img src='/imgs/top.png' alt=' ' className={`BackTop ${scrollTop > 200 ? 'topshow' : 'tophide'}`} onClick={(e) => { Backtop(e) }}></img>
  )
}

export default Backtop;