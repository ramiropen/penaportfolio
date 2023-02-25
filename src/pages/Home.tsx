import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../assets/CSS/style.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      {/* Home background image */}
      <div className="homeBG">
        <img src="src\images\home-BG.jpg" alt="" className="" />
      </div>

      {/* I still need to figure out how to import images in carousel. */}
      {/* Carousel */}
      <div className='homeCarousel'>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="src\images\caru-1.jpg"
              alt="first slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="src\images\caru-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="src\images\caru-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Header */}
      <div className="homeHeader">
        <h1 className="homeName">Ramiro Peña</h1>
      </div>

      {/* Portrait */}
      <div className='portrait'>
        <img src='' alt='' />
      </div>

      {/* Break line */}
      <hr className='homeHR'></hr>

    </div>
  );
}
