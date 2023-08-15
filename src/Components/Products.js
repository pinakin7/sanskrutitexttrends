import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
  Fade,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useInView } from "react-intersection-observer";
import "../css/products.css";
import categories from "../data/products-data";

const useStyles = makeStyles((theme) => ({
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
    threshold: 0.5, // Adjust the threshold as needed
  });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setFadeIn(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={12} md={3} key={category.name}>
                <div className="category">{category.name}</div>
                {category.products.map((product, index) => (
                  <Fade in={fadeIn} key={product.name + index}>
                    <Card className="productCard">
                      <CardContent className="productCardContent">
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={product.name}
                          className="productImage"
                        />
                        <Typography variant="h6">{product.name}</Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                ))}
              </Grid>
            ))}
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default Products;
