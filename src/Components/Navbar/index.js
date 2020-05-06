import React, { useState } from "react";
import { Layout, Col, Row, Menu, Dropdown, Avatar, Drawer } from "antd";
import Icon from "../Icon/Icon";
import logo from "../../Assets/images/logo.png";
import "./style.min.css";

const { Header } = Layout;

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
  const [drawerVisible, setdrawerVisible] = useState(false)

  const showDrawer = () => {
    setdrawerVisible(true)
  };

  const onClose = () => {
    setdrawerVisible(false)
  };
  return (
    <Header className="nav-header">
    <Drawer
          title="Playlist & Group manager"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={drawerVisible}
        >
        
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
          
        </Drawer>
          <Row>
            <Col xs={4} sm={4} md={0} lg={0} xl={0} className="button-nav">
              <Icon onClick={showDrawer} name="menu_icon" extention="svg" />
            </Col>
            <Col xs={16} sm={16} md={4} lg={4} xl={3} className="logo-nav">
              <img src={logo} alt="logo tethyr" />
            </Col>
            <Col xs={0} sm={0} md={18} lg={18} xl={19}>
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
            <Col className="right" xs={4} sm={4} md={2} lg={2} xl={2}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Col>
            </Row>
        </Header>
  );
}
