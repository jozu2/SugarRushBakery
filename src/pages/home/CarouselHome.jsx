import { useState } from "react";
import { images } from "./CarouselData";
import "./CarouselHome.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            backgroundImage: `url(${images[imageIndex].img})`,
            color: `${images[imageIndex].color}`,
          }}
        >
          <div className="carousel-content">
            <h1>{images[imageIndex].mainText}</h1>
            <p>{images[imageIndex].description}</p>
            <div className="carousel-buttons">
              <IoIosArrowBack
                onClick={() => {
                  imageIndex > 0 && setImageIndex(imageIndex - 1);
                }}
                className="arrow"
              />
              <button>{images[imageIndex].btnText}</button>
              <IoIosArrowForward
                onClick={() => {
                  imageIndex < images.length - 1 &&
                    setImageIndex(imageIndex + 1);
                }}
                className="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
