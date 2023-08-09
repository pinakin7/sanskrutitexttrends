import { Container } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import Carpet from "../img/carpet-01.jpeg";
import Stitch from "../img/img6.jpg";
import Weaving from "../img/img-4.webp";
import Fabrics from "../img/img3.jpeg";
import Jacquard from "../img/img5.jpg";

export default function Home() {
  var items = [
    {
      img: Carpet,
      alt: "Carpet Yarns",
      heading: "Carpet Yarns",
    },
    {
      img: Stitch,
      alt: "Stitch Thread",
      heading: "Stitch Thread",
    },
    {
      img: Weaving,
      alt: "Weaving Yarns",
      heading: "Weaving Yarns",
    },
    {
      img: Fabrics,
      alt: "Fabrics",
      heading: "Fabrics",
    },
    {
      img: Jacquard,
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
