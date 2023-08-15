import { Container } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

import items from "../data/home-carousel-data";

export default function Home() {

  return (
    <div id="home" style={{ margin: "5rem" }}>
      <Container>
        <Carousel
          swipe={true}
          fullHeightHover={true}
          navButtonsAlwaysInvisible
          autoPlay
          animation="slide"
          height={500}
        >
          {items.map((item, i) => (
            <CarouselItem key={i} item={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
