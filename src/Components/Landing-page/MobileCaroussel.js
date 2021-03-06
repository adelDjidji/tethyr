import React, { useState, createRef } from "react";
import { Row, Col } from "antd";
import Icon from "../Icon/Icon";

const animation="fadeIn"
const animation_exit="zoomOut"
const animation_center="zoomIn"

export default function MobileCaroussel() {
  const [currentIndex, setcurrentIndex] = useState(2);
  const [direction, setdirection] = useState("")
  

  const moveNext = () => {
    currentIndex < 3 && setcurrentIndex(currentIndex + 1);
    setdirection("Right")
    
  };
  const movePrev = () => {
    currentIndex > 1 && setcurrentIndex(currentIndex - 1);
    setdirection("Left")
  };
  return (
    <>
      <Row type="flex" justify="center" className="mobile-caroussel index-2">
        <Col xs={0} sm={0} md={0} lg={3} xl={4}>
          <div onClick={movePrev} className="slideshow-btn slideshow-btn-lg">
            <Icon name="shevrone_navigation_left_dark" extention="svg" />
          </div>
        </Col>
        <Col
          xs={7}
          sm={7}
          md={7}
          lg={4}
          xl={4}
          className={`slideshow-col-left -post-${currentIndex - 1}`}
        >
        
          {currentIndex === 1 && (
            <img className={"animate__animated animate__"+animation_exit} src="/landing-page/slideShow3.png" alt="" />
          )}
          {currentIndex === 2 && (
            <img className={"animate__animated animate__"+animation+direction} src="/landing-page/slideShow1.png" alt="" />
          )}
          {currentIndex === 3  && (
            <img className={"animate__animated animate__"+animation+direction}  src="/landing-page/slideShow2.png" alt="" />
          )}
        </Col>
        <Col
          xs={9}
          sm={9}
          md={9}
          lg={6}
          xl={6}
          className="slideshow-col-center animate__animated"
        >
          {currentIndex === 1 && (<img className={`animate__animated animate__${animation_center} mobile-view-screen -post-${currentIndex}`} src="/landing-page/slideShow1.png" alt=""/>)}
          {currentIndex === 2 && (<img className={`animate__animated animate__${animation_center} mobile-view-screen -post-${currentIndex}`} src="/landing-page/slideShow2.png" alt=""/>)}
          {currentIndex === 3 && (<img className={`animate__animated animate__${animation_center} mobile-view-screen -post-${currentIndex}`} src="/landing-page/slideShow3.png" alt=""/>)}
          
          
          <img
            className={`mobile-view-`}
            src="/landing-page/phone-slider.png"
            alt=""
          />
          {
            // <div className="mobile-view-screen"></div>
          }
        </Col>
        <Col
          xs={7}
          sm={7}
          md={7}
          lg={4}
          xl={4}
          className={`slideshow-col-right -post-${currentIndex + 1}`}
        >
          { currentIndex === 1 && <img className={"animate__animated animate__"+animation+direction}  src="/landing-page/slideShow2.png" alt="" />}
          { currentIndex === 2 && <img className={"animate__animated animate__"+animation+direction}  src="/landing-page/slideShow3.png" alt="" />}
          { currentIndex === 3 && <img className={"animate__animated animate__"+animation_exit}  src="/landing-page/slideShow1.png" alt="" />}
        </Col>
        <Col xs={0} sm={0} md={0} lg={3} xl={4}>
          <div onClick={moveNext} className="slideshow-btn slideshow-btn-lg">
            <Icon name="shevrone_navigation_right_dark" extention="svg" />
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center" style={{ marginTop: '3em'}}>
        <Col xs={5} sm={5} md={12} lg={0} xl={0}>
          <div onClick={movePrev} className="slideshow-btn">
            <Icon name="shevrone_navigation_left_dark" extention="svg" />
          </div>
        </Col>
        <Col xs={5} sm={5} md={12} lg={0} xl={0}>
          <div onClick={moveNext} className="slideshow-btn">
            <Icon name="shevrone_navigation_right_dark" extention="svg" />
          </div>
        </Col>
      </Row>
    </>
  );
}
