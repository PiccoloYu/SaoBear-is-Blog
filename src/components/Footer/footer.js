import React, {/* useState */ } from 'react';
//import { Input, Menu, Row, Col } from 'antd';
//import { Link } from 'react-router-dom';


//const { SubMenu } = Menu;
//const { Search } = Input;

function Footer() {
  //const [current, setCurrent] = useState('mail');


  return (
    <footer className={`footer animated slideInUp`}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">小骚熊</a>
    </footer>
  );
}


export default Footer;