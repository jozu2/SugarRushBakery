import { useState } from "react";
import { images } from "./CarouselData";
import "./CarouselHome.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import coCake from "./images/customOrder.png";

const Carousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel"
          style={{
            backgroundImage: `url(${images[imageIndex].img})`,
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

      <div className="custom-order-container">
        <div className="bg-co">
          <div className="div-co-img">
            <img src={images[imageIndex].customImage}></img>
          </div>

          <div className="co-description-container">
            <div className="co-description">
              <h1>Design your Own Cake</h1>
              We believe that every cake should be as unique as the person it's
              made for. That's why we offer a wide variety of options for you to
              create your own personalized cake.
            </div>
            <button>Create Now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
