import React, { useEffect, useState, createRef } from "react";
import Carousel from "react-elastic-carousel";
import ArrowNavigation from "../ArrowNavigation/ArrowNavigation";
import "./caroussel.min.css";

const Card = ({
  image,
  link,
  title = "new",
  youtube,
  viemeo,
  duration = "00:00",
}) => {
  let img = require("../../Assets/images/image 8.png");
  return (
    <div className="slider-card">
      <img src={img} alt={title} />
      <p>{duration}</p>
    </div>
  );
};

const Y_STEP = 141;

export default function Caroussel({ list = [] }) {
  const [isMobile, setisMobile] = useState(false);
  const [theNewElement, settheNewElement] = useState(null);
  const [cardsByPage, setcardsByPage] = useState(4);
  const [currentLeftIndex, setcurrentLeftIndex] = useState(0);
  const refDiv = createRef();
  const Refcarousel = createRef();

  useEffect(() => {
    updateDimensions();
    if (isMobile && cardsByPage !== 2) {
      setcardsByPage(2);
    } else {
      setcardsByPage(4);
    }
    window.addEventListener("resize", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  });

  const updateDimensions = () => {
    if (window.innerWidth < 700) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };

  const onscroll = () => {
    console.log("scrolling", refDiv);
  };
  const moveLeft = () => {
    Refcarousel.current.slidePrev();

    // console.log("scrolling left ",currentLeftIndex);
    // if(currentLeftIndex>0){
    //     refDiv.current.scrollLeft=currentLeftIndex-Y_STEP;
    //     setcurrentLeftIndex(currentLeftIndex-Y_STEP)
    // }
  };
  const moveRight = () => {
    Refcarousel.current.slideNext();
    // console.log("scrolling right ",currentLeftIndex);
    // refDiv.current.scrollLeft=currentLeftIndex+Y_STEP;
    // setcurrentLeftIndex(currentLeftIndex+Y_STEP)
  };

  return (
    <div className="caroussel-container">
      <div className="caroussel-navigation">
        <span onClick={moveLeft} className="btn-default">
          <ArrowNavigation direction="left" active={false} />
        </span>
        <span onClick={moveRight} className="btn-default">
          <ArrowNavigation />
        </span>
      </div>
      <hr className="hr" />
      <Carousel ref={Refcarousel} itemsToShow={3} showArrows={false} pagination={false}>
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
      </Carousel>
      {
        //     isMobile ? (
        //     <div className="caroussel-list-cards mini">
        //     <Card duration="18:40" />
        //     <Card duration="10:11" />
        //   </div>
        // ) : (
        //     <div ref={refDiv} onScroll={onscroll} className="caroussel-list-cards">
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //     <Card duration="09:22" />
        //   </div>
        // )
      }
    </div>
  );
}
