import "./style.scss";

import Carousel from "./CarouselHome";

const index = () => {
  return (
    <div className="home-container">
      <Carousel />
      <h1 className="ourCakes">Our Cakes</h1>
      <div className="ourProducts-container">
        <div className="product-one-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/640px-Pound_layer_cake.jpg"
            alt="cake-one"
          />
          <div className="productName">Cakes</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dolore consectetur at dolores? Maxime quae
          </div>
          <button>Explore</button>
        </div>

        <div className="product-two-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/640px-Pound_layer_cake.jpg"
            alt="cake-one"
          />
          <div className="productName">Cakes</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dolore consectetur at dolores? Maxime quae
          </div>
          <button>Explore</button>
        </div>

        <div className="product-three-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/640px-Pound_layer_cake.jpg"
            alt="cake-one"
          />
          <div className="productName">Cakes</div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            dolore consectetur at dolores? Maxime quae
          </div>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default index;
