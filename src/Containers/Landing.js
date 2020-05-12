import React, { useState, useEffect, createRef } from "react";
import { Layout, Row, Col, Drawer } from "antd";
import * as Antd from "antd";
import Carousel, { consts } from "react-elastic-carousel";
import LandingNavbar from "../Components/Landing-page/LandingNavbar";
import Icon from "../Components/Icon/Icon";
import MobileCaroussel from "../Components/Landing-page/MobileCaroussel";

import "../Styles/landing.scss";

import logo from "../Assets/images/logo.png";
import login_icon from "../Assets/landing-page/Login.svg";
import signup from "../Assets/landing-page/Sign up.svg";

const { Header } = Layout;

const main_svg = require("../Assets/landing-page/main-illustration.svg");
const check = require("../Assets/landing-page/check.svg");

const LIMIT_IS_MOBILE = 500;

export default function Landing() {
  const [navBarWhite, setnavBarWhite] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const [draweOpen, setdraweOpen] = useState(false);
  const Refcarousel = createRef();
  const Ref1 = createRef();
  const Ref2 = createRef();
  const Ref3 = createRef();
  const Ref4 = createRef();

  useEffect(() => {
    setisMobile(window.innerWidth < LIMIT_IS_MOBILE);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  });

  const updateDimensions = () => {
    if (window.innerWidth < LIMIT_IS_MOBILE) {
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

  const scrollToPoint = (id) => {
    let dest = 0;
    switch (id) {
      case 1:
        dest = Ref1;
        break;
      case 2:
        dest = Ref2;
        break;
      case 3:
        dest = Ref3;
        break;
      case 4:
        dest = Ref4;
        break;
      default:
        dest = 0;
    }
    window.scrollTo({
      top: dest.current.offsetTop,
      behavior: "smooth",
    });
    onCloseDrawer();
  };
  const openDrawer = () => {
    setdraweOpen(true);
  };
  const onCloseDrawer = () => {
    setdraweOpen(false);
  };
  const LandingNavbar = () => {
    return (
      <Header className={`landing-nav-bar ${navBarWhite ? "white-nav" : ""}`}>
        <Drawer
          title={
            <img
              style={{ width: "62%" }}
              className="logo"
              src={logo}
              alt="logo tethyr"
            />
          }
          placement="left"
          closable={false}
          onClose={onCloseDrawer}
          visible={draweOpen}
        >
          <p onClick={scrollToPoint.bind(this, 1)}>Video</p>
          <p onClick={scrollToPoint.bind(this, 2)}>SlideShow</p>
          <p onClick={scrollToPoint.bind(this, 3)}>Features</p>
          <p onClick={scrollToPoint.bind(this, 4)}>Join now</p>
        </Drawer>
        <Row>
          <Col xs={21} sm={21} md={21} lg={4} xl={6}>
            <img className="logo" src={logo} alt="logo tethyr" />
          </Col>
          <Col xs={0} sm={0} md={0} lg={11} xl={11}>
            <b onClick={scrollToPoint.bind(this, 1)} className="menu-item">
              Video
            </b>
            <b onClick={scrollToPoint.bind(this, 2)} className="menu-item">
              SlideShow
            </b>
            <b onClick={scrollToPoint.bind(this, 3)} className="menu-item">
              Features
            </b>
            <b onClick={scrollToPoint.bind(this, 4)} className="menu-item">
              Join now
            </b>
          </Col>
          <Col xs={0} sm={0} md={0} lg={9} xl={7} className="right">
            <span className="btn-login">
              <img src={login_icon} alt="" />
            </span>

            <button className="yellow-btn">
              <img src={signup} alt="" />
            </button>
          </Col>
          <Col xs={3} sm={3} md={3} lg={0} xl={0}>
            <Icon onClick={openDrawer} name="burger_menu" extention="svg" />
          </Col>
        </Row>
      </Header>
    );
  };
  return (
    <div className="landing">
      <LandingNavbar />
      <div className="landing-page-container">
        <section className="section1">
          <img
            style={{ position: "absolute", top: 0, right: 0 }}
            src="/landing-page/first-screen-ellipse.png"
            alt=""
          />
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
                The future of multi-tasking is here. <br />
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
              <button
                style={{ marginTop: 21 }}
                className="yellow-btn"
                data-aos="fade-up-right"
              >
                Join now for free <Antd.Icon type="right" />
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
                  data-aos="fade-down"
                />
              }
            </Col>
          </Row>
        </section>

        <section ref={Ref1} className="section2 center">
          <div data-aos="fade-down">
            <h1 className="big-title center sm-title2">
              all streaming media in one site
            </h1>
            <p className="title-description">Tethyr features video.</p>
            <iframe
              className="youtube-iframe"
              src="https://www.youtube.com/embed/2I5OdBLbyyM"
            ></iframe>
            {
              // <img src="/landing-page/laptop-video.png" alt="" />
            }
          </div>
        </section>

        <section ref={Ref2} className="section3 center" data-aos="fade-down">
          <h1 className="big-title center sm-title2">product slideshow</h1>
          <p className="title-description">
            Sign up to use these features now.
          </p>

          <MobileCaroussel />
        </section>

        <section ref={Ref3} className="section4">
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
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-1"></div>
                  <div>
                    <b>Multi-Source Playlists</b>
                  </div>
                  <p>
                    Create, Edit, share and watch playlists featuring items from
                    different platforms including streaming video sites,
                    podcasts and web pages.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-2"></div>
                  <div>
                    <b>Display Manager</b>
                  </div>
                  <p>
                    Toggle the video of up to eight video sources at once with
                    the Multi-Viewer, or navigate the playlists in a simple,
                    single-view displays.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-3"></div>
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
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-4"></div>
                  <div>
                    <b>Collaborate</b>
                  </div>
                  <p>
                    Collaborate on shared playlists with a team, or podcast a
                    playlist to subscribers. Share with Tethyr and non-Tethyr
                    users instantly and effortlessly.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-5"></div>
                  <div>
                    <b>Layouts</b>
                  </div>
                  <p>
                    Different layouts are provided to get the most use of your
                    display - from mobile to desktop 4K.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-6"></div>
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
              <h1 className="big-title center sm-title2 no-padding">
                Value prop for users
              </h1>
              <p className="title-description">Subtitle here</p>
              <Row className="item-row" type="flex" justify="space-between">
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-1"></div>
                  <div>
                    <b>Multi-Source Playlists</b>
                  </div>
                  <p>
                    Create, Edit, share and watch playlists featuring items from
                    different platforms including streaming video sites,
                    podcasts and web pages.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-2"></div>
                  <div>
                    <b>Display Manager</b>
                  </div>
                  <p>
                    Toggle the video of up to eight video sources at once with
                    the Multi-Viewer, or navigate the playlists in a simple,
                    single-view displays.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-3"></div>
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
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-4"></div>
                  <div>
                    <b>Collaborate</b>
                  </div>
                  <p>
                    Collaborate on shared playlists with a team, or podcast a
                    playlist to subscribers. Share with Tethyr and non-Tethyr
                    users instantly and effortlessly.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-5"></div>
                  <div>
                    <b>Layouts</b>
                  </div>
                  <p>
                    Different layouts are provided to get the most use of your
                    display - from mobile to desktop 4K.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-6"></div>
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
              <h1 className="big-title center sm-title2 no-padding">
                Value proposed for streamers
              </h1>
              <p className="title-description">Subtitle here</p>
              <Row className="item-row" type="flex" justify="space-between">
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-1"></div>
                  <div>
                    <b>Multi-Source Playlists</b>
                  </div>
                  <p>
                    Create, Edit, share and watch playlists featuring items from
                    different platforms including streaming video sites,
                    podcasts and web pages.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-2"></div>
                  <div>
                    <b>Display Manager</b>
                  </div>
                  <p>
                    Toggle the video of up to eight video sources at once with
                    the Multi-Viewer, or navigate the playlists in a simple,
                    single-view displays.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-3"></div>
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
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-4"></div>
                  <div>
                    <b>Collaborate</b>
                  </div>
                  <p>
                    Collaborate on shared playlists with a team, or podcast a
                    playlist to subscribers. Share with Tethyr and non-Tethyr
                    users instantly and effortlessly.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-5"></div>
                  <div>
                    <b>Layouts</b>
                  </div>
                  <p>
                    Different layouts are provided to get the most use of your
                    display - from mobile to desktop 4K.
                  </p>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={8}
                  xl={6}
                  className="center item-col"
                >
                  <div className="feature-icon bg-6"></div>
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

        <section ref={Ref4} className="section5">
          <h1 className="big-title center white sm-title2">
            membership title here
          </h1>
          <p className="title-description white">
            <b>Premium interface</b>{" "}
          </p>

          <Row type="flex" justify="center" style={{ marginTop: 70 }}>
            <Col className="card-col" sm={24} md={7} lg={7} xl={7}>
              <div
                className="card-price"
                style={{ float: "right" }}
                data-aos="fade-up-left"
              >
                <h1 className="title">Verified</h1>
                <b className="price">$1 / month</b>
                <div className="description">
                  <p>
                    {" "}
                    <b>
                      Prove you are are a real person and unlock features.{" "}
                    </b>{" "}
                  </p>
                </div>
                <div className="features">
                  <p>
                    <Icon name="feature_anchor" extention="svg" />
                    Import Content
                  </p>
                  <p>
                    <Icon name="feature_anchor" extention="svg" /> Link your
                    external accounts
                  </p>
                  <p>
                    <Icon name="feature_anchor" extention="svg" /> Buy and
                    redeem ad credits{" "}
                  </p>
                </div>
                <div className="price-footer">
                  <button className="yellow-btn disabled">Coming soon !</button>
                </div>
              </div>
            </Col>
            <Col className="card-col" sm={24} md={7} lg={7} xl={7}>
              <div className="card-price middle" data-aos="fade-up">
                <h1 className="title">Free</h1>
                <b className="price">$0 / month</b>
                <div className="description">
                  <p>
                    {" "}
                    <b>
                      Tethyr is currently in Beta mode. All features and
                      memberships are currently free.{" "}
                    </b>{" "}
                  </p>

                  <p>
                    {" "}
                    <b>
                      Join the Beta now to clam your username and use Tethyr
                      now.{" "}
                    </b>{" "}
                  </p>
                </div>
                <div className="features"></div>
                <div className="price-footer">
                  <button className="yellow-btn">Join now</button>
                </div>
              </div>
            </Col>
            <Col className="card-col" sm={24} md={7} lg={7} xl={7}>
              <div className="card-price" data-aos="fade-up-right">
                <h1 className="title">Pro</h1>
                <b className="price">$4 / month</b>
                <p>
                  {" "}
                  <b>
                    Designed for streamers and media professionals and Brands.{" "}
                  </b>{" "}
                </p>
                <div className="features">
                  <p>
                    <Icon name="feature_anchor" extention="svg" /> Advanced
                    interface & control options
                  </p>
                  <p>
                    <Icon name="feature_anchor" extention="svg" /> Brand
                    Management tools
                  </p>
                </div>
                <div className="price-footer">
                  <button className="yellow-btn disabled">Coming soon !</button>
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
