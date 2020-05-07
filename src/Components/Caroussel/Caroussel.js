import React, { useEffect, useState, createRef } from "react";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";
import ArrowNavigation from "./ArrowNavigation";
import Card from "./Card";

import "./caroussel.min.css";

const liste_news = [
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: false,
    viemeo: true,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: false,
    viemeo: true,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: true,
    viemeo: false,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: false,
    viemeo: true,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: false,
    viemeo: true,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: true,
    viemeo: false,
    duration: "05:20",
  },
  {
    image: "image 8.png",
    link: "",
    title: "new",
    youtube: true,
    viemeo: false,
    duration: "05:20",
  },
];
export default function Caroussel({ list, isDarkMode= true }) {
  const [isMobile, setisMobile] = useState(false);
  const [cardsByPage, setcardsByPage] = useState(4);
  const [currentLeftIndex, setcurrentLeftIndex] = useState(0);
  const [existeNext, setexisteNext] = useState(true);
  const [existePrev, setexistePrev] = useState(false);
  const [dark, setdark] = useState(isDarkMode)
  const Refcarousel = createRef();

  useEffect(() => {
    window.addEventListener("resize", updateDimensions.bind(this));
    return () => {
      window.removeEventListener("resize", updateDimensions.bind(this));
    };
  });
  useEffect(()=>{
    setdark(isDarkMode)
  }, [isDarkMode])

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
    console.log("next =", currentItem);
    setcurrentLeftIndex(currentItem.index);
    if (currentItem.index + 4 === list.length) setexisteNext(false);
    setexistePrev(true);
  };
  const onPrev = (currentItem) => {
    console.log("prev =", currentItem);
    setcurrentLeftIndex(currentItem.index);
    setexisteNext(true);
    if (currentItem.index === 0) setexistePrev(false);
  };

  // const beforeNext = (currentItem, nextItem) => {
  //   console.log("before next");
  //   console.log(currentItem, nextItem);
  // }
  // const beforePrev = (currentItem, nextItem) => {
  //   console.log("before prev");
  //   console.log(currentItem, nextItem);
  // }

  return (
    <div className="caroussel-container">
      <div className="caroussel-navigation">
        <span onClick={moveLeft} className="btn-default">
          <ArrowNavigation dark={!dark} direction="left" active={existePrev} />
        </span>
        <span onClick={moveRight} className="btn-default">
          <ArrowNavigation dark={!dark} active={existeNext} />
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
        onNextEnd={onNext}
        onPrevEnd={onPrev}
      >
      {list.map(item=><Card {...item} />)}
      </Carousel>
    </div>
  );
}
Caroussel.propTypes = {
  list: PropTypes.array,
};

Caroussel.defaultProps = {
  list: liste_news,
};
