import React, { useState, useEffect, createRef } from "react";
import { Layout, Row, Col } from "antd";
import Icon from "../Icon/Icon";

import logo from "../../Assets/images/logo.png";
import login_icon from "../../Assets/landing-page/Login.svg";
import signup from "../../Assets/landing-page/Sign up.svg";

const { Header } = Layout;

export default function LandingNavbar() {
  return (
    <Header className="landing-nav-bar">
      <Row>
        <Col xs={6} sm={6} md={6} lg={5} xl={6}>
          <img className="logo" src={logo} alt="logo tethyr" />
        </Col>
        <Col xs={0} sm={0} md={10} lg={11} xl={11}>
          <b className="menu-item">Video</b>
          <b className="menu-item">SlideShow</b>
          <b className="menu-item">Features</b>
          <b className="menu-item">Join now</b>
        </Col>
        <Col xs={0} sm={0} md={6} lg={8} xl={7} className="right">
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
