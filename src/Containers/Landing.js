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

const { Header, Content } = Layout;

const main_svg = require("../Assets/landing-page/main-illustration.svg");
const check = require("../Assets/landing-page/check.svg");

const LIMIT_IS_MOBILE = 610;
const allowScrollEvent = false;
const FIRST_SECTION_OFFSET = 720;
const SECOND_SECTION_OFFSET = 1400;
const THIRD_SECTION_OFFSET = 2100;
const FOURTH_SECTION_OFFSET = 3000;

export default function Landing() {
  const [navBarWhite, setnavBarWhite] = useState(false);
  const [isMobile, setisMobile] = useState(window.innerWidth < LIMIT_IS_MOBILE);
  const [draweOpen, setdraweOpen] = useState(false);
  const [indexSlideshow, setindexSlideshow] = useState(1)
  const Refcarousel = createRef();
  const Refcarousel2 = createRef();
  const Ref1 = createRef();
  const Ref2 = createRef();
  const Ref3 = createRef();
  const Ref4 = createRef();

  useEffect(() => {
    console.log(
      "inner width = ", window.innerWidth
    )
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

  const nextSectionOffset = (currentoffset) => {
    if (currentoffset < 760 && currentoffset > 700) return 1440;
    // if(currentoffset<1480 && currentoffset >1450) return 2150;
    // if(currentoffset<2220 && currentoffset >2170) return 3010;
    // else return 4000;
  };

  var lastScrollTop = 0;
  const handleScroll = (e) => {
    e.preventDefault();
    console.log("e =", e.target.scrollingElement.scrollTop);
    const currentScrollTop = e.target.scrollingElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
      console.log("Going DOWN");
      if (currentScrollTop >= 90 && !navBarWhite) {
        setnavBarWhite(true);
      }
      if (allowScrollEvent) {
        if (
          currentScrollTop < FIRST_SECTION_OFFSET &&
          currentScrollTop > FIRST_SECTION_OFFSET - 600
        )
          window.scrollTo({
            top: FIRST_SECTION_OFFSET,
            // behavior: "smooth",
          });
        else if (
          currentScrollTop < SECOND_SECTION_OFFSET &&
          currentScrollTop > SECOND_SECTION_OFFSET - 400
        )
          window.scrollTo({
            top: SECOND_SECTION_OFFSET,
            // behavior: "smooth",
          });
        else if (
          currentScrollTop < THIRD_SECTION_OFFSET &&
          currentScrollTop > THIRD_SECTION_OFFSET - 500
        )
          window.scrollTo({
            top: THIRD_SECTION_OFFSET,
            // behavior: "smooth",
          });
        else if (
          currentScrollTop < FOURTH_SECTION_OFFSET &&
          currentScrollTop > FOURTH_SECTION_OFFSET - 400
        )
          window.scrollTo({
            top: FOURTH_SECTION_OFFSET,
            // behavior: "smooth",
          });
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
      var offset = type === consts.PREV  ? -1 : 1 ;
      offset= parseInt(offset)
      const handleClick = () => {
        console.log("offset = ", offset)
        console.log("index = = ", indexSlideshow+offset)
       
        if(indexSlideshow+offset===4) {
          Refcarousel2.current.goTo(0)
          setindexSlideshow(1)
        }else{
          if(indexSlideshow+offset>0) setindexSlideshow(indexSlideshow+offset)
          onClick()
        }
      }
    return <span onClick={handleClick}>{arrow}</span>;
  };

  const moveLeft = () => {
    Refcarousel.current.slidePrev();
  };
  const moveRight = () => {
    Refcarousel.current.slideNext();
  };
  const moveLeft2 = () => {
    Refcarousel2.current.slidePrev();
  };
  const moveRight2 = () => {
    console.log("mmmm",indexSlideshow+1)
    if(indexSlideshow+1===4) {
      Refcarousel2.current.goTo(0)
      setindexSlideshow(1)
    }else{
      Refcarousel2.current.slideNext();
      setindexSlideshow(indexSlideshow+1)
    }
    
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
      <Content>
        <div className="landing-page-container">
          <section className="section1">
          <div className="img-top-right"></div>

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
                  Tethyr All Your Content Together
                </h1>
                <h3>
                  <b>Everything you love to do in one dynamic container.</b>{" "}
                </h3>
                <p>
                  <img src={check} alt="" />
                  Watch videos, listen to music, and work in docs without
                  changing screens.
                </p>
                <p>
                  <img src={check} alt="" />
                  No more link clicking or [time-sucking/sinking] multi-window
                  madness.
                </p>
                <p>
                  <img src={check} alt="" />
                  Tethyr's interface transforms your screen into a media command
                  center.
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
                className="video-frame"
                src="https://www.youtube.com/embed/2I5OdBLbyyM?autoplay=0"
              ></iframe>
              {
                //   <iframe
                //   className="youtube-iframe"
                //   src="https://www.youtube.com/embed/2I5OdBLbyyM?autoplay=0"
                // ></iframe>
              }
            </div>
          </section>

          <section ref={Ref2} className="section3 center">
            <h1 className="big-title center sm-title2">product slideshow</h1>
            <p className="title-description">
              Sign up to use these features now.
            </p>
            <Carousel
              data-aos="fade-down"
              ref={Refcarousel2}
              className={`slide-show-caroussel`}
              breakPoints={[{ itemsToShow: 1, itemsToScroll: 1 }]}
              showArrows={!isMobile}
              pagination={false}
              renderArrow={customArrow}
              transitionMs={300}
            >
              <item>
                {" "}
                <img src="/landing-page/slideShow1-sm.jpg" alt="" />{" "}
              </item>
              <item>
                {" "}
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="/landing-page/slideShow2-sm.jpg"
                  alt=""
                />{" "}
              </item>
              <item>
                {" "}
                <img src="/landing-page/slideShow3-sm.jpg" alt="" />{" "}
              </item>
            </Carousel>
            <Row type="flex" justify="center" className="bottom-navigation">
              <Col xs={4} sm={4} md={0} lg={0} xl={0}>
                <div
                  className="slideshow-btn no-margin left"
                  onClick={moveLeft2}
                >
                  <Icon name="shevrone_navigation_left_dark" extention="svg" />
                </div>
              </Col>
              <Col xs={4} sm={4} md={0} lg={0} xl={0}>
                <div
                  style={{ marginLeft: "13px !important" }}
                  className="slideshow-btn no-margin"
                  onClick={moveRight2}
                >
                  <Icon name="shevrone_navigation_right_dark" extention="svg" />
                </div>
              </Col>
            </Row>
          </section>

          <section ref={Ref3} className="section4">
            <Carousel
              ref={Refcarousel}
              className={`features-caroussel`}
              breakPoints={[{ itemsToShow: 1, itemsToScroll: 1 }]}
              showArrows={false}
              pagination={false}
              renderArrow={customArrow}
            >
              <item>
                <h1 className="big-title center sm-title2 no-padding">
                  The Future of Video is Unfolding.
                </h1>
                <p className="title-description">Tethyr Is The Platform</p>
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
                      Create, edit, share and watch playlists featuring content
                      from different platforms including streaming video sites,
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
                      single-view display.
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
                      Toggle the audio in the Multi-Viewer and monitor any of
                      the sources in your display— including podcasts.
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
                      Collaborate on shared playlists with a team, or broadcast
                      a playlist to subscribers. Share with Tethyr and
                      non-Tethyr users instantly and effortlessly.
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
                      Different layouts are provided to get the most use out of
                      your display— from mobile to desktop 4K.
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
              {
                //   <item>
                //   <h1 className="big-title center sm-title2 no-padding">
                //     Value prop for users
                //   </h1>
                //   <p className="title-description">Subtitle here</p>
                //   <Row className="item-row" type="flex" justify="space-between">
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-1"></div>
                //       <div>
                //         <b>Multi-Source Playlists</b>
                //       </div>
                //       <p>
                //         Create, Edit, share and watch playlists featuring items
                //         from different platforms including streaming video sites,
                //         podcasts and web pages.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-2"></div>
                //       <div>
                //         <b>Display Manager</b>
                //       </div>
                //       <p>
                //         Toggle the video of up to eight video sources at once with
                //         the Multi-Viewer, or navigate the playlists in a simple,
                //         single-view displays.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-3"></div>
                //       <div>
                //         <b>Audio</b>
                //       </div>
                //       <p>
                //         Toggle the audio in the Multi-Viewer and monitor any of
                //         the sources in your display - including podcasts.
                //       </p>
                //     </Col>
                //   </Row>
                //   <Row className="item-row" type="flex" justify="space-between">
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-4"></div>
                //       <div>
                //         <b>Collaborate</b>
                //       </div>
                //       <p>
                //         Collaborate on shared playlists with a team, or podcast a
                //         playlist to subscribers. Share with Tethyr and non-Tethyr
                //         users instantly and effortlessly.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-5"></div>
                //       <div>
                //         <b>Layouts</b>
                //       </div>
                //       <p>
                //         Different layouts are provided to get the most use of your
                //         display - from mobile to desktop 4K.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-6"></div>
                //       <div>
                //         <b>Mobile</b>
                //       </div>
                //       <p>
                //         Extend the TYR experience to your smartphone or tablet
                //         without expensive hardware.
                //       </p>
                //     </Col>
                //   </Row>
                // </item>
              }
              {
                //   <item>
                //   <h1 className="big-title center sm-title2 no-padding">
                //     Value proposed for streamers
                //   </h1>
                //   <p className="title-description">Subtitle here</p>
                //   <Row className="item-row" type="flex" justify="space-between">
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-1"></div>
                //       <div>
                //         <b>Multi-Source Playlists</b>
                //       </div>
                //       <p>
                //         Create, Edit, share and watch playlists featuring items
                //         from different platforms including streaming video sites,
                //         podcasts and web pages.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-2"></div>
                //       <div>
                //         <b>Display Manager</b>
                //       </div>
                //       <p>
                //         Toggle the video of up to eight video sources at once with
                //         the Multi-Viewer, or navigate the playlists in a simple,
                //         single-view displays.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-3"></div>
                //       <div>
                //         <b>Audio</b>
                //       </div>
                //       <p>
                //         Toggle the audio in the Multi-Viewer and monitor any of
                //         the sources in your display - including podcasts.
                //       </p>
                //     </Col>
                //   </Row>
                //   <Row className="item-row" type="flex" justify="space-between">
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-4"></div>
                //       <div>
                //         <b>Collaborate</b>
                //       </div>
                //       <p>
                //         Collaborate on shared playlists with a team, or podcast a
                //         playlist to subscribers. Share with Tethyr and non-Tethyr
                //         users instantly and effortlessly.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-5"></div>
                //       <div>
                //         <b>Layouts</b>
                //       </div>
                //       <p>
                //         Different layouts are provided to get the most use of your
                //         display - from mobile to desktop 4K.
                //       </p>
                //     </Col>
                //     <Col
                //       xs={24}
                //       sm={24}
                //       md={24}
                //       lg={8}
                //       xl={6}
                //       className="center item-col"
                //     >
                //       <div className="feature-icon bg-6"></div>
                //       <div>
                //         <b>Mobile</b>
                //       </div>
                //       <p>
                //         Extend the TYR experience to your smartphone or tablet
                //         without expensive hardware.
                //       </p>
                //     </Col>
                //   </Row>
                // </item>
              }
            </Carousel>

            {
              //   <Row type="flex" justify="center" className="bottom-navigation">
              //   <Col xs={4} sm={4} md={0} lg={0} xl={0}>
              //     <div
              //       className="slideshow-btn no-margin left"
              //       onClick={moveLeft}
              //     >
              //       <Icon name="shevrone_navigation_left_dark" extention="svg" />
              //     </div>
              //   </Col>
              //   <Col xs={4} sm={4} md={0} lg={0} xl={0}>
              //     <div className="slideshow-btn no-margin" onClick={moveRight}>
              //       <Icon name="shevrone_navigation_right_dark" extention="svg" />
              //     </div>
              //   </Col>
              // </Row>
            }
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
                  // style={{ float: "right" }}
                  data-aos="fade-up-left"
                >
                  <h1 className="title">Verified</h1>
                  <b className="price">$1 / month</b>
                  <div className="description">
                    <p>
                      <b>
                        Prove you are are a real person and unlock features.
                      </b>
                    </p>
                  </div>
                  <div className="features">
                    <ul>
                      <li>Import Content</li>
                      <li>Link your external accounts</li>
                      <li>Buy and redeem ad credits</li>
                    </ul>
                  </div>
                  <div className="price-footer">
                    <button className="yellow-btn disabled">
                      Coming soon !
                    </button>
                  </div>
                </div>
              </Col>
              <Col className="card-col" sm={24} md={7} lg={7} xl={7}>
                <div className="card-price middle" data-aos="fade-up">
                  <h1 className="title">Free</h1>
                  <b className="price">$0 / month</b>
                  <div className="description">
                    <p>
                      <b>
                        Tethyr is currently in Beta mode. All features and
                        memberships are currently free.
                      </b>
                    </p>
                    <p>
                      <b>
                        Join the Beta now to clam your username and use Tethyr
                        now.
                      </b>
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
                    <b>
                      Designed for streamers and media professionals and Brands.{" "}
                    </b>
                  </p>
                  <div className="features">
                  <ul>
                  <li>Advanced interface & control options</li>
                  <li>Brand Management tools</li>
                  </ul>
                    
                  </div>
                  <div className="price-footer">
                    <button className="yellow-btn disabled">
                      Coming soon !
                    </button>
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
      </Content>
    </div>
  );
}
