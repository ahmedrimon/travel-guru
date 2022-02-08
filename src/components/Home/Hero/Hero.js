import React from 'react';
import './Hero.css';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

import sajek from '../../../images/sajek.png';
import sreemongol from '../../../images/sreemongol.png';
import sundorbon from '../../../images/sundorbon.png';

const Hero = () => {
  return (
    <section className="hero-container text-white">
      <Container>
        <Row>
          <Col sm={0} md={6} lg={6} xl={6} xxl={6}>
            <article className="hero-text-container">
              <h1 className="hero-first-text">COX'S BAZAR</h1>
              <p className="hero-first-para">
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it...
              </p>
              <Button className="mt-3" variant="warning">
                BOOKING
              </Button>
            </article>
          </Col>
          {/* second column */}
          <Col sm={0} md={6} lg={6} xl={6} xxl={6}>
            <Carousel className="carousel-container">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={sajek}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>Sajek</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={sundorbon}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h2>Sundorbon</h2>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className=" w-100 carousel-img"
                  src={sreemongol}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h2>Sreemongol</h2>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
