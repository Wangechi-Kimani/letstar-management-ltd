import Carousel from "react-bootstrap/Carousel";
import styles from "./styles.module.css";

const CarouselComponent = () => {
  return (
    <div className={styles.container}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Carousel_Images/Asset7.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Quarry and Mining Services</h4>
            <p>We provide quarry and mining services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Carousel_Images/Asset8.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Roads Construction</h4>
            <p>We provide road construction services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Carousel_Images/Asset9.png"
            alt="First slide"
          />
           <Carousel.Caption>
            <h3>Civil Engineering structures</h3>
            <p>We provide civil engineering services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Carousel_Images/Asset10.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Earthworks</h4>
            <p>Earthworks and construction services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Carousel_Images/Asset11.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Transport Services</h4>
            <p>We also transport services to our esteemed customers.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
