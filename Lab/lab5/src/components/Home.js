import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Home.css"; // Import CSS

function Home() {
  return (
    <div>
      {/* Banner với hiệu ứng slide */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/images/slide1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/images/slide2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 banner-img" src="/images/slide3.jpg" alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* Section hình ảnh */}
      <Container className="text-center mt-4">
        <h2>This is Home Page</h2>
        <div className="d-flex justify-content-center">
          <img src="/images/menu-01.jpg" alt="Food 1" className="food-icon" />
          <img src="/images/menu-02.jpg" alt="Food 2" className="food-icon" />
          <img src="/images/menu-03.jpg" alt="Food 3" className="food-icon" />
          <img src="/images/menu-04.jpg" alt="Food 4" className="food-icon" />
          <img src="/images/menu-05.jpg" alt="Food 4" className="food-icon" />
          <img src="/images/menu-06.jpg" alt="Food 4" className="food-icon" />
        </div>
      </Container>
    </div>
  );
}

export default Home;
