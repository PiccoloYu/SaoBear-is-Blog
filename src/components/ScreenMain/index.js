import React from "react";
import Screen from "../Screen";
import Focusinfo from "../Focusinfo";

const ScreenMain = ({ test, location, title, url ,screenTop}) => {



  return (
    <div className="screen animated slideInDown"
      style={{
        height: `${test ? '97vh' : '0'}`,//25rem
        position: `${test ? 'fixed' : 'relative'}`,
      }}
    >
      <Focusinfo screenTop={screenTop} test={test}/>
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