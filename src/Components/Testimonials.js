import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  CssBaseline,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import "../css/testimonials.css";
import testimonials from "../data/testimonial-data";
import { makeStyles } from "@mui/styles";
import { useInView } from "react-intersection-observer";

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

const Testimonials = () => {
  const classes = useStyles();

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.5, // Adjust the threshold as needed
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Apply the fade-out animation to the current testimonial
      const activeTestimonial = document.querySelector(".testimonial.active");
      if (activeTestimonial) {
        activeTestimonial.classList.add("fade-out");
        setTimeout(() => {
          activeTestimonial.classList.remove("fade-out");
        }, 1500); // Time of the fade-out animation
      }

      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Divider variant="middle" />
      <div
        id="testimonials"
        ref={ref}
        className={`${classes.slideInOut} ${inView ? "slide-in" : "slide-out"}`}
      >
        <CssBaseline />
        <Paper elevation={3} className="testimonial-paper">
          <Container maxWidth="auto">
            <Typography
              variant="h2"
              align="center"
              my={4}
              fontFamily="Pacifico"
            >
              What our Clients say
            </Typography>
            <Box id="testimonials-section" textAlign="center" py={8}>
              <div className="testimonial-container">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    <Avatar
                      alt="Anonymous"
                      src={testimonial.avatar}
                      style={{ margin: "1rem" }}
                    />
                    <Typography
                      variant="body1"
                      paragraph
                      style={{
                        margin: "1rem",
                        textAlign: "justify",
                        padding: "0.5rem",
                      }}
                      className="testimonial-text"
                    >
                      {testimonial.text}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      - Anonymous
                    </Typography>
                  </div>
                ))}
              </div>
            </Box>
          </Container>
        </Paper>
      </div>
    </>
  );
};

export default Testimonials;
