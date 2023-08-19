import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import categories from "../data/products-data";
import "../css/products.css";
import { useInView } from "react-intersection-observer";

const categoryStyles = {
  "Textile Machines": {
    backgroundColor: "#F6F4EB", // Cool blue-gray
    textColor: "#000000", // White text
  },
  "Fabrics": {
    backgroundColor: "#91C8E4", // Cool teal
    textColor: "#1E293B", // Dark blue text
  },
  "Weaving Yarn": {
    backgroundColor: "#749BC2", // Deep blue
    textColor: "#000000", // Light gray text
  },
  "Thread": {
    backgroundColor: "#4682A9", // Pale cyan
    textColor: "#001C30", // Dark gray text
  },
  // Add more categories and colors as needed
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#333", // Adjust primary color as needed
    },
    background: {
      default: "#FAFAFA", // Adjust default background color as needed
    },
  },
  typography: {
    fontFamily: "Georgia, serif",
    h5: {
      fontSize: "1.25rem",
    },
    body2: {
      fontFamily: "Arial, sans-serif",
      fontSize: "1rem",
    },
  },
});

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const productsWithCategory = categories.reduce((acc, category) => {
      return [
        ...acc,
        ...category.products.map((product) => ({
          ...product,
          category: category.name,
        })),
      ];
    }, []);
    setAllProducts(productsWithCategory);
  }, []);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.005 });

  return (
    <div id="products" style={{ marginTop: "5rem", marginBottom: "5rem" }}>
      <Divider variant="middle" />
      <Container style={{ margin: "2rem" }}>
        <Paper elevation={0}>
          <Container style={{ margin: "1rem" }}>
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
          </Container>
          <Container style={{ margin: "2rem" }}>
            <Paper
              elevation={0}
              style={{ width: "100%", padding: "1rem" }}
              ref={ref}
            >
              <Grid
                container
                spacing={3.5}
                className={`card ${inView ? "animate" : ""}`}
              >
                {allProducts.map((product, idx) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <ThemeProvider theme={theme}>
                      <Card
                        className="product"
                        raised={true}
                        style={{
                          backgroundColor: categoryStyles[product.category].backgroundColor,
                        }}
                      >
                        <CardActionArea>
                          {product.category !== "Textile Machines" && (
                            <CardMedia
                              component="img"
                              height="200"
                              image={product.image}
                              alt={product.name}
                              style={{
                                objectFit: "contain",
                                padding: "0.5rem",
                              }}
                            />
                          )}
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              style={{
                                color: categoryStyles[product.category].textColor
                              }}
                            >
                              {product.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              style={{
                                color: categoryStyles[product.category].textColor
                              }}
                            >
                              {product.category}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </ThemeProvider>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}
