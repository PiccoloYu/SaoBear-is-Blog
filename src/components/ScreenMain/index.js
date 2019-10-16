import React from "react";
import Screen from "../Screen";

const ScreenMain = ({test,location,title}) => {

  retunr(
    <div className="screen animated slideInDown"
      style={{
        height: `${test ? '97vh' : '0'}`,//25rem
        position: `${test ? 'fixed' : 'relative'}`,
      }}
    >
      {test ?//<Screen location={location} title={title} />
        <Screen location={location} title={title} /> :
        lost[1] === 'Article' ?
          <div className="imgDiv animated slideInDown"
            title={title}
          >
            <img src='/imgs/AK-04.jpg' className="animated slideInDown" alt="title"></img>
          </div> : ''
      }
    </div>
  )

}

export default ScreenMain