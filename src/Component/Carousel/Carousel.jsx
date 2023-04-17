import { useState, useRef, useEffect } from "react";
import pics1 from "../../Assets/Img/pics1.jpg";
import pics2 from "../../Assets/Img/pics2.jpg";
import pics3 from "../../Assets/Img/pics3.jpg";
import pics4 from "../../Assets/Img/pics4.jpg";
import pics5 from "../../Assets/Img/pics5.jpg";

// Data

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  // const isDisabled = (direction) => {
  //   if (direction === "prev") {
  //     return currentIndex <= 0;
  //   }

  //   if (direction === "next" && carousel.current !== null) {
  //     return (
  //       carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
  //     );
  //   }

  //   return false;
  // };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-8 mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className=" text-white w-10 h-full text-center opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 ml-2 bg-primary rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className=" text-white w-10 h-full text-center opacity-100 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-200"
            //  disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8  bg-primary  rounded-full -ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className=" carousel-container relative flex gap-5 overflow-hidden  snap-x snap-mandatory touch-pan-x z-0 flex-nowrap overflow-x-scroll scroll-smooth no-scrollbar"
        >
          <div className="carousel-item text-center relative w-full h-64  flex space-x-8">
            <img src={pics1} alt="jjjdj" className="" />
            <img src={pics2} alt="jjjdj" className="" />
            <img src={pics3} alt="jjjdj" className="" />
            <img src={pics4} alt="jjjdj" className="" />
            <img src={pics5} alt="jjjdj" className="" />
            <img src={pics2} alt="jjjdj" className="" />
            <img src={pics3} alt="jjjdj" className="" />
            <img src={pics4} alt="jjjdj" className="" />
          </div>
          );
        </div>
      </div>
    </div>
  );
};

export default Carousel;
