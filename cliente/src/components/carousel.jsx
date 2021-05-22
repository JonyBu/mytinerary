import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  // CarouselIndicators,
  Container,
  Row,
  Col,
} from "reactstrap";
import amsterdam from "../imagenes/ciudades/amsterdam.jpg";
import barcelona from "../imagenes/ciudades/barcelona.jpg";
import newyork from "../imagenes/ciudades/ny.jpg";
import paris from "../imagenes/ciudades/paris.jpg";
import amsterdam1 from "../imagenes/ciudades/amsterdam1.jpg";
import barcelona1 from "../imagenes/ciudades/barcelona1.jpg";
import newyork1 from "../imagenes/ciudades/ny1.jpg";
import paris1 from "../imagenes/ciudades/paris1.jpg";
import amsterdam2 from "../imagenes/ciudades/amsterdam2.jpg";
import barcelona2 from "../imagenes/ciudades/barcelona2.jpg";
import newyork2 from "../imagenes/ciudades/ny2.jpg";
import paris2 from "../imagenes/ciudades/paris2.jpg";

const items = [
  [
    { src: paris, altText: "Paris", caption: "Slide 1", key: "1", clave: "20" },
    { src: barcelona, altText: "Barcelona", caption: "Slide 2", key: "2" },
    { src: newyork, altText: "New York", caption: "Slide 3", key: "3" },
    { src: amsterdam, altText: "Amsterdam", caption: "Slide 4", key: "4" },
  ],
  [
    { src: paris1, altText: "Paris 2", caption: "Slide 5", key: "5" },
    {
      src: barcelona1,
      altText: "Barcelona 2",
      caption: "Slide 6",
      key: "6",
      clave: "21",
    },
    { src: newyork1, altText: "New York 2", caption: "Slide 7", key: "7" },
    { src: amsterdam1, altText: "Amsterdam 2", caption: "Slide 8", key: "8" },
  ],
  [
    { src: paris2, altText: "Paris 3", caption: "Slide 9", key: "9" },
    { src: barcelona2, altText: "Barcelona 3", caption: "Slide 10", key: "10" },
    {
      src: newyork2,
      altText: "New York 3",
      caption: "Slide 11",
      key: "11",
      clave: "22",
    },
    { src: amsterdam2, altText: "Amsterdam 3", caption: "Slide 12", key: "12" },
  ],
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // }

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item[i].clave}
      >
        <Container>
          <Row>
            {item.map((image) => {
              return (
                <Col
                  xs={{ size: 6 }}
                  key={image.key}
                  style={{ maxHeight: "10rem" }}
                  className="p-1"
                >
                  <img
                    src={image.src}
                    alt={image.altText}
                    className="img-fluid w-100 rounded"
                    style={{ height: "9rem" }}
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
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default ImageCarousel;
