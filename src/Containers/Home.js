import React, {useState} from "react";
import { Layout, Row, Col, Button } from "antd";
import Icon from "../Components/Icon/Icon";
import Card from "../Components/Card/Card";
import Author from "../Components/Author/Author";
import AuthorCard from "../Components/AuthorCard/AuthorCard";
import Caroussel from "../Components/Caroussel/Caroussel";
import Toggle from "../Components/Toggle/Toggle";
import Navbar from "../Components/Navbar/index";


import "../Styles/App.min.css";

const { Content } = Layout;

export default function Home() {

  const [darkMode, setdarkMode] = useState(true)
  
  const onToggleView = (isDark) => {
    setdarkMode(isDark)
  }
  return (
    <>
    <Navbar />
    <Content className={`container container-home ${darkMode?"":"white-mode"}`}>
      <Row >
        <Col xs={24} sm={24} md={24} lg={16} xl={18}>
          <h1 className="title white b L-1">
            Foreign Press (Live Streams) C-19
          </h1>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={6}
          style={{ textAlign: "right" }}
          className="btns-top-right"
        >
        <Toggle onChange={onToggleView} isDarkMode />
          <Button className="btn-outlined btn-open" style={{ marginRight: 16 }}>
            Open
            <Icon name={darkMode ?"arrow_top_right":"arrow_top_right_dark"} extention="svg" />
          </Button>
          <Button type="primary btn-add-playlist" className="btn-success">
            <Icon name="plist__white_add" /> Add to playlist
          </Button>
        </Col>
      </Row>
      <hr className="line" />
      <Row style={{ marginTop: 16 }} type="flex" justify="space-between">
        <Col className="left-col" xs={24} sm={24} md={12} lg={11} xl={12}>
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

          <section className="section">
            <Caroussel isDarkMode={darkMode} />
          </section>
        </Col>

        <Col className="right-col" xs={24} sm={24} md={12} lg={12} xl={10}>
          <section className="">
            <h3 className="white b">Playlist Authors</h3>
            <Row className="list-authors">
              
              <Author className="white" name="name1" picture="person1.png" />
              <Author className="white" name="name2" picture="person2.png" />
              <Author className="white" name="name1" picture="person3.png" />
              <Author className="white" name="name1" picture="person4.png" />
              <Author className="white" name="name1" picture="person5.png" />
              <Author className="white" name="name1" picture="person5.png" />
              <Author className="white" name="name1" picture="person5.png" />
            </Row>
          </section>
          <section className="section">
            <h3 className="white b">Hashtags</h3>
            <div className="list-hashtags">
              <span className="hashtag">#news</span>
              <span className="hashtag">#Covid</span>
              <span className="hashtag">#Bigresponse</span>
              <span className="hashtag">#Bigresponse</span>
              <span className="hashtag">#Bigresponse</span>
              <span className="hashtag">#Bigresponse</span>
              <span className="hashtag">#Bigresponse</span>
            </div>
          </section>
          <section className="section">
            <h3 className="white b">Video Authors</h3>
            <div className="list-authors-cards">
              <Col sm={24} lg={18}>
                <AuthorCard
                  AuthorName="Marvin Steward"
                  AuthorImage="person1.png"
                  youtube
                />
              </Col>
              <Col sm={24} lg={18}>
                <AuthorCard
                  AuthorName="Ann Mckinney"
                  AuthorImage="person2.png"
                  viemeo
                />
              </Col>
              <Col sm={24} lg={18}>
                <AuthorCard
                  AuthorName="Cammeron Howard"
                  AuthorImage="person3.png"
                  youtube
                />
              </Col>
              <Col sm={24} lg={18}>
                <AuthorCard
                  AuthorName="Brooklyn Ngyen"
                  AuthorImage="person4.png"
                  viemeo
                />
              </Col>
            </div>
          </section>
        </Col>
      </Row>
    </Content>
    </>
  );
}
