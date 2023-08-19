import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import categories from "../data/products-data";
import "../css/products.css";
import { useInView } from "react-intersection-observer";

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
                    <Card className="product" raised={true}>
                      <CardActionArea>
                       {product.category!=="Textile Machines" && <CardMedia
                          component="img"
                          height="200"
                          image={product.image}
                          alt={product.name}
                          style={{ objectFit: "contain" }}
                        />}
                      </CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "1.25rem",
                          }}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "1rem",
                          }}
                        >
                          {product.category}
                        </Typography>
                      </CardContent>
                    </Card>
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
