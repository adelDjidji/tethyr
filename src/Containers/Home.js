import React from "react";
import { Layout, Row, Col, Button } from "antd";
import Icon from "../Components/Icon/Icon";
import Card from "../Components/Card/Card";
import Author from "../Components/Author/Author";
import AuthorCard from "../Components/AuthorCard/AuthorCard";

const { Content } = Layout;

export default function Home() {
  return (
    <Content className="container-home" style={{ padding: "30px 75px" }}>
      <Row>
        <Col></Col>
        <Col span={18}>
          <h1 className="title white b">Foreign Press (Live Streams) C-19</h1>
        </Col>
        <Col span={6} style={{ textAlign: "right" }}>
          <Button className="btn-outlined" style={{ marginRight: 16 }}>
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
          <Button type="primary" className="btn-success">
            {" "}
            <Icon name="plist__white_add" /> Add to playlist
          </Button>
        </Col>
      </Row>
      <hr className="line" />
      <Row style={{ marginTop: 16 }}>
        <Col className="left-col" span={12}>
          <section className="section">
            <h3 className="white b">Last updates :</h3>
            <Card
              title="Trump gives Corona virus updates alongside White House task Force"
              date="April 13, 2020"
              image="news.png"
            />
          </section>

          <section className="section">
            <h3 className="white b">Description</h3>
            <p className="white">
              A card can be used to display content related to a single subject.
              The content can consist of multiple elements of varying types and
              sizes. A card can be used to display content related to a single
              subject. The content can consist of multiple elements of varying
              types and sizes.
            </p>
          </section>
        </Col>
        <Col className="right-col" span={12}>
          <section className="section">
            <h3 className="white b">Playlist Authors</h3>
            <div className="list-authors">
              <Author className="white" name="name1" picture="person1.png" />
              <Author className="white" name="name2" picture="person2.png" />
              <Author className="white" name="name1" picture="person3.png" />
              <Author className="white" name="name1" picture="person4.png" />
              <Author className="white" name="name1" picture="person5.png" />
            </div>
          </section>
          <section className="section">
          <h3 className="white b">Hashtags</h3>
            <div className="list-hashtags">
              <span className="hashtag">#news</span>
              <span className="hashtag">#Covid</span>
              <span className="hashtag">#Bigresponse</span>
            </div>
          
          </section>
          <section className="section">
          <h3 className="white b">Video Authors</h3>
            <div className="list-authors-cards">
              <AuthorCard  />
            </div>
          
          </section>
        </Col>
      </Row>
    </Content>
  );
}
