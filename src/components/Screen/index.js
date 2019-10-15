import React, {/* useState */ } from 'react';
//import { Input, Menu, Row, Col } from 'antd';
import Iframe from "./Iframe";
//import { Link } from "gatsby";
//import ContextConsumer from "../../utils/Context";
//const { SubMenu } = Menu;
//const { Search } = Input;



function Screen({ location, title }) {
  //const [current, setCurrent] = useState('mail');
  //const rootPath = `${__PATH_PREFIX__}/`

  /*const ComponentThatReadState = () => (
    <ContextConsumer>
      {({ a }) => {
        console.log(a)
      }}
    </ContextConsumer>
  )*/

  return (
    <div className="screen_main">
      {/*<ComponentThatReadState />*/}
      {
        <Iframe source="impress/impress.html" />
        /*location.pathname === rootPath ?`
          <Iframe source="impress/impress.html" /> :
          <h3>123123</h3>*/
      }
    </div>
  );
}


export default Screen;