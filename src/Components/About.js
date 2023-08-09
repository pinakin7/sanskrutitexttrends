import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import "../css/about.css";
import { FormatQuote } from "@mui/icons-material";
import "@fontsource/oswald/600.css";
import "@fontsource/lato/400-italic.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fadeIn: {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 1s, transform 1s",
    willChange: "opacity, transform",

    "&.fade-entered": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  // Add other styles if needed
}));

export default function About() {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about" style={{ margin: "5rem" }}>
      <Container
        className={`${classes.fadeIn} ${isVisible ? "fade-entered" : ""}`}
      >
        <Divider variant="middle" />
        <Paper elevation={3}>
          <Card style={{ padding: "0.4rem" }}>
            <CardHeader
              title="About Us"
              subheader="Sanskruti Text Trends"
              style={{ textAlign: "center" }}
              titleTypographyProps={{ fontSize: "35px", fontFamily: "Oswald" }}
              className="cardTitle"
              subheaderTypographyProps={{
                fontFamily: "Lato",
                fontSize: "20px",
              }}
            />
            <CardMedia
              component="img"
              alt="Sanskruti Text Trends"
              height="200"
              image={logo}
              style={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="quote"
              >
                <FormatQuote
                  style={{
                    transform:
                      "translateX(-50%) translateY(-50%) rotate(-180deg)",
                  }}
                />
                Sanskruti Text Trends: Unraveling Excellence in Stitching and
                Embroidery Solutions from India! &ensp;
                <FormatQuote
                  style={{ transform: "translateX(-50%) translateY(-50%)" }}
                />
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                Welcome to Sanskruti Text Trends, your premier destination for
                high-quality stitching and embroidery solutions. As a leading
                manufacturer based in India, we take immense pride in offering a
                diverse range of products and machinery to meet your textile
                needs.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                At Sanskruti Text Trends, we specialize in producing top-notch
                stitching threads crafted from high tenacity nylon and
                polyester. Our extensive product line includes garment stitch
                threads, industrial threads, zip cord stitch threads, jeans
                stitch threads, carpet threads, and embroidery threads. We
                understand the importance of reliable and durable stitching
                materials in various industries, and that's why we are committed
                to delivering excellence in every thread we produce.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                Our expertise expands to multiple areas within the textile
                industry. We provide a wide array of products ranging from zip,
                garment, jeans, and shoe stitch threads to carpet cable yarn and
                embroidery threads. Whether you need high tenacity shoe and
                industrial stitch threads or rugs cable yarn, we have you
                covered.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                In addition to being a prominent thread manufacturer, we also
                engage in the trade of Make in India textile machinery. From TFO
                (Two-for-One) machines, cablers, and weaving machines to dye
                package winders, spun TFOs, and thread plants, we offer
                cutting-edge textile machinery to enhance your production
                processes.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                Since our inception in 2016, we have upheld a commitment to
                quality, reliability, and customer satisfaction. Our extensive
                experience and dedication have allowed us to become a trusted
                name in the industry. We value our clients and strive to cater
                to their unique requirements with a vast array of products and
                services.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                Our state-of-the-art manufacturing facility, based in Surat,
                Gujarat, India, is equipped with modern technology and skilled
                professionals who ensure the highest standards are met at every
                stage of production. The meticulous attention to detail and
                stringent quality control measures we adhere to have earned us
                accolades and recognition from our esteemed clientele.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                At Sanskruti Text Trends, we believe in fostering lasting
                relationships with our customers, based on trust, integrity, and
                excellence. Whether you are a garment manufacturer, an
                embroidery artist, or involved in any other textile-related
                industry, we are here to be your reliable partner, offering
                top-grade products and machinery to fuel your success.
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.primary"
                textAlign="justify"
                paragraph
                padding="1rem"
              >
                Thank you for choosing Sanskruti Text Trends as your go-to
                destination for all your stitching, embroidery, and textile
                machinery needs. We look forward to serving you with the best in
                the industry and being a part of your continued success story.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </div>
  );
}
