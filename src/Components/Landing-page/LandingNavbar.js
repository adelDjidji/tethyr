import React from "react";
import { Layout, Row, Col } from "antd";

import logo from "../../Assets/images/logo.png";
import login_icon from "../../Assets/landing-page/Login.svg";
import signup from "../../Assets/landing-page/Sign up.svg";

const { Header } = Layout;

export default function LandingNavbar({ white = false, ref1, ref2, ref3, ref4 }) {
  const scrollToPoint = (id) => {
    let dest=0;
    switch(id){
      case 1: dest = ref1
      break;
      case 2: dest = ref2
      break;
      case 3: dest = ref3
      break;
      case 4: dest = ref4
      break;
      default: dest= 0;
    }
    window.scrollTo({
      top: dest,
      behavior: 'smooth'  
  })
  }
  return (
    <Header className={`landing-nav-bar ${white ? "white-nav" : ""}`}>
      <Row>
        <Col xs={6} sm={6} md={6} lg={4} xl={6}>
          <img className="logo" src={logo} alt="logo tethyr" />
        </Col>
        <Col xs={0} sm={0} md={0} lg={11} xl={11}>
          <b onClick={scrollToPoint.bind(this,1)} className="menu-item">Video</b>
          <b onClick={scrollToPoint.bind(this,2)} className="menu-item">SlideShow</b>
          <b onClick={scrollToPoint.bind(this,3)} className="menu-item">Features</b>
          <b onClick={scrollToPoint.bind(this,4)} className="menu-item">Join now</b>
        </Col>
        <Col xs={0} sm={0} md={0} lg={9} xl={7} className="right">
          <span className="btn-login">
            <img src={login_icon} alt="" />
          </span>

          <button className="yellow-btn">
            <img src={signup} alt="" />
          </button>
        </Col>
      </Row>
    </Header>
  );
}
