import React, {useState} from "react";
import { Layout, Col, Row } from 'antd';

import logo from "../../Assets/images/logo.png"
import "./style.min.css";

const { Header, Content} = Layout;
export default function ButtonAppBar() {
  
  return (
    <div className="navbar">
    <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
          <Row>
           <Col span={4} className="logo-nav">
            <img src={logo} alt=""/>
           </Col>
          </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
          
          </Content>
        </Layout>
    </div>
  );
}
