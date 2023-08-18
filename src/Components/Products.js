import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CssBaseline,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useInView } from "react-intersection-observer";
import "../css/products.css";
import categories from "../data/products-data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(() => ({
  slideInOut: {
    opacity: 0,
    transform: "translateY(100px)",
    transition: "opacity 0.6s, transform 0.6s",
    willChange: "opacity, transform",

    "&.slide-in": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "&.slide-out": {
      opacity: 0,
      transform: "translateY(100px)",
    },
  },
  iframeContainer: {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio (adjust as needed)
    height: 0,
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
}));

const Products = () => {
  const classes = useStyles();

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.4, // Adjust the threshold as needed
  });

  return (
    <>
      <Divider variant="middle" />
      <div
        id="products"
        style={{ margin: "2rem", padding: "1rem" }}
        ref={ref}
        className={`${classes.slideInOut} ${inView ? "slide-in" : "slide-out"}`}
      >
        <Typography
          variant="h2"
          align="center"
          my={4}
          fontFamily="Montserrat, sans-serif"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#1976D2",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Our Products
        </Typography>
        <CssBaseline />
        <Paper elevation={3} style={{ padding: "2rem", margin: "2rem" }}>
          <div className="product-display">
            {categories.map((category, categoryIndex) => (
              <Paper
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                  padding:"1rem"
                }}
                key={categoryIndex}
                elevation={3}
              >
                <div className="slider-item">
                  <div className="category">{category.name}</div>
                  <Carousel
                    showThumbs={false}
                    centerMode={true}
                    showStatus={false}
                    infiniteLoop={true}
                    itemsToShow={3}
                    autoFocus={true}
                    autoPlay={true}
                    emulateTouch={true}
                    useKeyboardArrows={true}
                    swipeable={true}
                  >
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="carousel-item">
                        <Card className="product-card" elevation={4}>
                          <CardActionArea>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="product-image"
                            />
                            <CardContent>
                              <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                className="product-name"
                              >
                                {product.name}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="body2"
                                color="text.secondary"
                                className="product-description"
                              >
                                {/* Lizards are a widespread group of squamate
                                reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica */}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Products;
