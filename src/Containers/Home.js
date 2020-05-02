import React from "react";
import { Layout, Row, Col, Button } from "antd";
import Icon from "../Components/Icon/Icon";

const { Content } = Layout;

export default function Home() {
  return (
    <Content className="container-home" style={{ padding: "30px 75px" }}>
      <Row>
        <Col></Col>
        <Col span={18}>
          <h1 className="title white b">Foreign Press (Live Streams) C-19</h1>
        </Col>
        <Col span={6} style={{textAlign: 'right'}}>
          <Button className="btn-default" style={{ marginRight: 16}}>
          Open
            <svg
            className="btn-icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00066 5.98381L6.37641 2.60806L6.37641 13.5827L7.65447 13.5827L7.65447 2.60806L11.0302 5.98381L11.9193 5.09472L7.01544 0.190858L2.11158 5.09472L3.00066 5.98381Z"
                fill="white"
              />
            </svg>
            
          </Button>
          <Button type="primary" className="btn-success"> <Icon name="plist__white_add" /> Add to playlist</Button>
        </Col>
      </Row>
      <hr className="line"/>
      <Row style={{marginTop:16}}>
        <Col span={12}>
        <h3 className="white b">Last updates :</h3>
          
        </Col>
        <Col span={12}>

        </Col>
      </Row>
    </Content>
  );
}
