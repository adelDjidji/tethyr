import React, { useState } from "react";
import { Layout, Col, Row, Menu, Dropdown, Avatar } from "antd";

import logo from "../../Assets/images/logo.png";
import "./style.min.css";

const { Header, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default function ButtonAppBar() {
  return (
    <Header className="nav-header">
          <Row>
            <Col span={4} className="logo-nav">
              <img src={logo} alt="" />
            </Col>
            <Col span={18}>
              <span className="nav-middle-menu">
                <span> Menu: </span>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <b className="btn-default">
                    Playlist & Group manager
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6567 8L7.99988 13.6569L2.34303 8"
                        stroke="#56B05B"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </b>
                </Dropdown>
              </span>
            </Col>
            <Col span={2}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Col>
            </Row>
        </Header>
  );
}
