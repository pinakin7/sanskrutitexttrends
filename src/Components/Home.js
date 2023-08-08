import { Container } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

export default function Home() {
  var items = [
    {
      img: "./img/carpet-01.jpeg",
      alt: "Carpet Yarns",
      heading: "Carpet Yarns",
    },
    {
      img: "./img/img6.jpg",
      alt: "Stitch Thread",
      heading: "Stitch Thread",
    },
    {
      img: "./img/img-4.webp",
      alt: "Weaving Yarns",
      heading: "Weaving Yarns",
    },
    {
      img: "./img/img3.jpeg",
      alt: "Fabrics",
      heading: "Fabrics",
    },
    {
      img: "./img/img5.jpg",
      alt: "Jacquard Fabric",
      heading: "Jacquard Fabric",
    },
  ];
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
