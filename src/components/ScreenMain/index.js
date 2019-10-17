import React from "react";
import Screen from "../Screen";

const ScreenMain = ({ test, location, title, url }) => {


  return (
    <div className="screen animated slideInDown"
      style={{
        height: `97vh`,//25rem
        top: `${test ? '0' : url === 'Article' ? '' : '-97vh'}`,//25rem
        position: `${test ? 'fixed' : 'relative'}`,
      }}
    >
      {test ?//<Screen location={location} title={title} />
        <Screen location={location} title={title} /> :
        url === 'Article' ?
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