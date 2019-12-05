import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  Row,
  Col
} from 'reactstrap';
import amsterdam from '../imagenes/ciudades/amsterdam.jpg';
import barcelona from '../imagenes/ciudades/barcelona.jpg';
import newyork from '../imagenes/ciudades/ny.jpg';
import paris from '../imagenes/ciudades/paris.jpg';
import amsterdam1 from '../imagenes/ciudades/amsterdam1.jpg';
import barcelona1 from '../imagenes/ciudades/barcelona1.jpg';
import newyork1 from '../imagenes/ciudades/ny1.jpg';
import paris1 from '../imagenes/ciudades/paris1.jpg';
import amsterdam2 from '../imagenes/ciudades/amsterdam2.jpg';
import barcelona2 from '../imagenes/ciudades/barcelona2.jpg';
import newyork2 from '../imagenes/ciudades/ny2.jpg';
import paris2 from '../imagenes/ciudades/paris2.jpg';

const items = [
  [
    { src: paris, altText: "Slide 1", caption: "Slide 1" },
    { src: barcelona, altText: "Slide 2", caption: "Slide 2" },
    { src: newyork, altText: "Slide 3", caption: "Slide 3" },
    { src: amsterdam, altText: "Slide 4", caption: "Slide 4" }
  ],
  [
    { src: paris1, altText: "Slide 5", caption: "Slide 5" },
    { src: barcelona1, altText: "Slide 6", caption: "Slide 6" },
    { src: newyork1, altText: "Slide 7", caption: "Slide 7" },
    { src: amsterdam1, altText: "Slide 8", caption: "Slide 8" }
  ],
  [
    { src: paris2, altText: "Slide 9", caption: "Slide 9" },
    { src: barcelona2, altText: "Slide 10", caption: "Slide 10" },
    { src: newyork2, altText: "Slide 11", caption: "Slide 11" },
    { src: amsterdam2, altText: "Slide 12", caption: "Slide 12" }
  ]
];


const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);


  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <Container>
          <Row>
            {item.map((image, i) => {
              return (
                <Col
                  xs={{ size: 6 }}
                  key={i}
                  style={{ maxHeight: '10rem' }}
                  className='p-1'
                >
                  <img
                    src={image.src}
                    alt={image.altText}
                    className='img-fluid w-100 rounded'
                    style={{ height: '9rem' }}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default ImageCarousel;