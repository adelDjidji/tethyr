import React, { useState, useEffect, createRef } from "react";
import { Layout, Row, Col } from "antd";
import Carousel, { consts } from "react-elastic-carousel";
import LandingNavbar from "../Components/Landing-page/LandingNavbar";
import Icon from "../Components/Icon/Icon";
import MobileCaroussel from "../Components/Landing-page/MobileCaroussel";

import "../Styles/landing.scss";

const main_svg = require("../Assets/landing-page/main-illustration.svg");
const check = require("../Assets/landing-page/check.svg");
const LIMIT_IS_MOBILE= 500
export default function Landing() {
  const [navBarWhite, setnavBarWhite] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const Refcarousel = createRef()

  useEffect(() => {
    setisMobile(window.innerWidth < LIMIT_IS_MOBILE)
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  });

  const updateDimensions = () => {
    if (window.innerWidth <LIMIT_IS_MOBILE) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  var lastScrollTop = 0;
  const handleScroll = (e) => {
    console.log("e =", e.target.scrollingElement.scrollTop);

    const currentScrollTop = e.target.scrollingElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      console.log("Going DOWN");
      if (currentScrollTop >= 90 && !navBarWhite) {
        setnavBarWhite(true);
      }
    } else {
      console.log("Going UP");
      if (currentScrollTop <= 90 && navBarWhite) {
        setnavBarWhite(false);
      }
    }
    lastScrollTop = currentScrollTop;
  };

  const customArrow = ({ type, onClick }) => {
    const arrow =
      type === consts.PREV ? (
        <div className="slideshow-btn left-arrow">
          <Icon name="shevrone_navigation_left_dark" extention="svg" />
        </div>
      ) : (
        <div className="slideshow-btn right-arrow">
          <Icon name="shevrone_navigation_right_dark" extention="svg" />
        </div>
      );
    return <span onClick={onClick}>{arrow}</span>;
  };

  const moveLeft = () => {
    Refcarousel.current.slidePrev();
  };
  const moveRight = () => {
    Refcarousel.current.slideNext();
  };

  return (
    <div className="landing">
      <LandingNavbar white={navBarWhite} />
      <div className="landing-page-container">
        <section className="section1">
          <Row>
            <Col
              className="description"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <h1 className="big-title sm-title1">
                STREAM IT ALL TOGETHER IN ONE PLACE
              </h1>
              <p>
                <img src={check} alt="" />
                The future of multi-tasking is her. <br />
                Keep doing everything you love to do, at once.
              </p>
              <p>
                <img src={check} alt="" />
                Watch videos, listen to music, and write <br />
                reports without changing screens.
              </p>
              <p>
                <img src={check} alt="" />
                No more link clicking or multi-window
                <br />
                madness.
              </p>
              <p>
                <img src={check} alt="" />
                Tethyr's interface brings all of your favorites <br />
                into one, convenient application.
              </p>
              <button style={{ marginTop: 21 }} className="yellow-btn">
                Join now for free
              </button>
            </Col>
            <Col
              xs={23}
              sm={23}
              md={10}
              lg={11}
              xl={11}
              className="main-svg-bg"
              style={
                {
                  // height: 397,
                  // backgroundImage: "url(/landing-page/main-illustration.svg)",
                }
              }
            >
              {
                <img
                  className="main-svg"
                  src={main_svg}
                  alt="main illustration"
                />
              }
            </Col>
          </Row>
        </section>

        <section className="section2 center">
          <h1 className="big-title center sm-title2">
            all streaming media in one site
          </h1>
          <p className="title-description">Tethyr features video.</p>
          <img src="/landing-page/laptop-video.png" alt="" />
        </section>

        <section className="section3 center">
          <h1 className="big-title center sm-title2">product slideshow</h1>
          <p className="title-description">
            Sign up to use these features now.
          </p>
          


          <MobileCaroussel />
        </section>

        <section className="section4">
          <Carousel
            ref={Refcarousel}
            className={`slide-show-caroussel`}
            breakPoints={[{ itemsToShow: 1, itemsToScroll: 1 }]}
            showArrows={!isMobile}
            pagination={false}
            renderArrow={customArrow}
          >
            <item>
              <h1 className="big-title center sm-title2 no-padding">
                welcome to the future. watch the future
              </h1>
              <p className="title-description">premium interface</p>
              <Row className="item-row" type="flex" justify="space-between">
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-1.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Multi-Source Playlists</b>
                  </div>
                  <p>
                    Create, Eedit, share and watch playlists featuring items
                    from different platforms including streaming video sites,
                    podcasts and web pages.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    {" "}
                    <img
                      src={require("../Assets/landing-page/features-icon-2.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Display Manager</b>
                  </div>
                  <p>
                    Toggle the video of up to eight video sources at once with
                    the Multi-Viewer, or navigate the playlists in a simple,
                    single-view displays.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    {" "}
                    <img
                      src={require("../Assets/landing-page/features-icon-3.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Audio</b>
                  </div>
                  <p>
                    Toggle the audio in the Multi-Viewer and monitor any of the
                    sources in your display - including podcasts.
                  </p>
                </Col>
              </Row>
              <Row className="item-row" type="flex" justify="space-between">
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-4.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Collaborate</b>
                  </div>
                  <p>
                    Collaborate on shared playlists with a team, or podcast a
                    playlist to subscribers. Share with Tethyr and non-Tethyr
                    users instantly and effortlessly.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-5.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Layouts</b>
                  </div>
                  <p>
                    Different layouts are provided to get the most use of your
                    display - from mobile to desktop 4K.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-6.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Mobile</b>
                  </div>
                  <p>
                    Extend the TYR experience to your smartphone or tablet
                    without expensive hardware.
                  </p>
                </Col>
              </Row>
            </item>
            <item>
              <h1 className="big-title center sm-title2">
                welcome to the future. watch the future
              </h1>
              <p className="title-description">premium interface</p>
              <Row>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    {" "}
                    <img
                      src={require("../Assets/landing-page/features-icon-1.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Multi-Source Playlists</b>
                  </div>
                  <p>
                    Create, Eedit, share and watch playlists featuring items
                    from different platforms including streaming video sites,
                    podcasts and web pages.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    {" "}
                    <img
                      src={require("../Assets/landing-page/features-icon-2.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Display Manager</b>
                  </div>
                  <p>
                    Toggle the video of up to eight video sources at once with
                    the Multi-Viewer, or navigate the playlists in a simple,
                    single-view displays.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    {" "}
                    <img
                      src={require("../Assets/landing-page/features-icon-3.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Audio</b>
                  </div>
                  <p>
                    Toggle the audio in the Multi-Viewer and monitor any of the
                    sources in your display - including podcasts.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-4.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Collaborate</b>
                  </div>
                  <p>
                    Collaborate on shared playlists with a team, or podcast a
                    playlist to subscribers. Share with Tethyr and non-Tethyr
                    users instantly and effortlessly.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-5.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Layouts</b>
                  </div>
                  <p>
                    Different layouts are provided to get the most use of your
                    display - from mobile to desktop 4K.
                  </p>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={6} className="center item-col">
                  <div className="feature-icon">
                    <img
                      src={require("../Assets/landing-page/features-icon-6.svg")}
                      alt=""
                    />
                  </div>
                  <div>
                    <b>Mobile</b>
                  </div>
                  <p>
                    Extend the TYR experience to your smartphone or tablet
                    without expensive hardware.
                  </p>
                </Col>
              </Row>
            </item>
          </Carousel>
        
          <Row type="flex" justify="center" className="bottom-navigation">
          <Col xs={4} sm={4} md={0} lg={0} xl={0}>
            <div className="slideshow-btn no-margin left" onClick={moveLeft}>
              <Icon name="shevrone_navigation_left_dark" extention="svg" />
            </div>
          </Col>
          <Col xs={4} sm={4} md={0} lg={0} xl={0}>
            <div className="slideshow-btn no-margin" onClick={moveRight}>
              <Icon name="shevrone_navigation_right_dark" extention="svg" />
            </div>
          </Col>
        </Row>
          </section>

        <section className="section5">
          <h1 className="big-title center white sm-title2">
            membership title here
          </h1>
          <p className="title-description white">
            <b>Premium interface</b>{" "}
          </p>

          <Row type="flex" justify="center" style={{ marginTop: 70 }}>
            <Col sm={24} md={7} lg={7} xl={7}>
              <div className="card-price" style={{ float: "right" }}>
                <h1 className="title">Free</h1>
                <b className="price">$0/month</b>
                <div className="features">
                  <p>feature 1</p>
                  <p>feature 1</p>
                  <p>feature 1</p>
                </div>
                <div className="price-footer">
                  <button className="yellow-btn">Join now</button>
                </div>
              </div>
            </Col>
            <Col  sm={24} md={7}  lg={7} xl={7}>
              <div className="card-price middle">
                <h1 className="title">Verified</h1>
                <b className="price">$0/month</b>
                <div className="features">
                  <p>feature 1</p>
                  <p>feature 1</p>
                  <p>feature 1</p>
                </div>
                <div className="price-footer">
                  <button className="yellow-btn">Join now</button>
                </div>
              </div>
            </Col>
            <Col sm={24} md={7} lg={7} xl={7}>
              <div className="card-price">
                <h1 className="title">Pro</h1>
                <b className="price">$0/month</b>
                <div className="features">
                  <p>feature 1</p>
                  <p>feature 1</p>
                  <p>feature 1</p>
                </div>
                <div className="price-footer">
                  <button className="yellow-btn">Join now</button>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <footer className="footer-landing">
          <Row>
            <Col className="center" xs={24} sm={24} ms={24} lg={8} xl={8}>
              <img src="/landing-page/logo-footer.png" alt="" />
            </Col>
            <Col className="center" xs={24} sm={24} ms={24} lg={8} xl={8}>
              <b>Future Realities Inc.©2020. All rights reserved. </b>
            </Col>
            <Col className="center" xs={24} sm={24} ms={24} lg={8} xl={8}>
              <a href="#">Privacy Policy</a>
            </Col>
          </Row>
        </footer>
      </div>
    </div>
  );
}
