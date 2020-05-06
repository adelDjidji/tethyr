import React, { useEffect, useState, createRef } from "react";
import Carousel from "react-elastic-carousel";
import ArrowNavigation from "./ArrowNavigation";
import Card from "./Card";

import "./caroussel.min.css";

export default function Caroussel({ list = [] }) {
  const [isMobile, setisMobile] = useState(false);
  const [cardsByPage, setcardsByPage] = useState(4);
  const [currentLeftIndex, setcurrentLeftIndex] = useState(0);
  const [existeNext, setexisteNext] = useState(true)
  const [existePrev, setexistePrev] = useState(false)
  const [rest, setRest] = useState(list.length-cardsByPage)
  const Refcarousel = createRef();

  useEffect(() => {

    window.addEventListener("resize", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  });

  // useEffect(() => {
  //   if(list.length>cardsByPage){
  //     setexisteNext(true)
  //   }

  // }, [list])

  const updateDimensions = () => {
    if (window.innerWidth < 700) {
      setisMobile(true);
      setcardsByPage(2);
    } else {
      setcardsByPage(4);
      setisMobile(false);
    }
    console.log("setcardsByPage = ", cardsByPage);
  };

  const moveLeft = () => {
    Refcarousel.current.slidePrev();
  };
  const moveRight = () => {
    Refcarousel.current.slideNext();
  };

  const getItemPadding = () => {
    if (isMobile) return [0, 0, 0, 21];
    else return [];
  };

  const onNext = (currentItem) => {
    console.log("next =",currentItem)
    setcurrentLeftIndex(currentItem.index)
  }
  const onPrev = (currentItem) => {
    console.log("prev =",currentItem)
    setcurrentLeftIndex(currentItem.index)
  }
  const beforeNext = (currentItem, nextItem) => {
    console.log("before next");
    console.log(currentItem, nextItem);
  }
  const beforePrev = (currentItem, nextItem) => {
    console.log("before prev");
    console.log(currentItem, nextItem);
  }
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
      <Carousel
        className={`caroussel-list-cards ${isMobile && "mini"}`}
        ref={Refcarousel}
        breakPoints={[{ itemsToShow: cardsByPage, itemsToScroll: 1 }]}
        showArrows={false}
        pagination={false}
        itemPadding={getItemPadding()}
        onNextStart={beforeNext}
        // onNextEnd={onNext}
        onPrevStart={beforePrev}
        // onPrevEnd={onPrev}
      >
        <Card duration="09:22" />
        <Card duration="09:22" />
        <Card youtube duration="09:22" />
        <Card youtube duration="09:22" />
        <Card youtube duration="09:22" />
        <Card duration="09:22" />
        <Card duration="09:22" />
      </Carousel>
    </div>
  );
}
