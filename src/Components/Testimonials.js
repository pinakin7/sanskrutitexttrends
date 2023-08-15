import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  CssBaseline,
  Container,
  Paper,
} from "@mui/material";
import "../css/testimonials.css";

const testimonials = [
  { id: 1, text: "Great experience working with this company." },
  { id: 2, text: "The product exceeded my expectations." },
  // Add more testimonials here
];

const Testimonials = () => {
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
      <CssBaseline />
      <Paper elevation={3} className="testimonial-paper">
        <Container maxWidth="md">
          <Typography variant="h2" align="center" my={4} fontFamily="Pacifico">
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
                  <Avatar alt="Anonymous" src="/path/to/avatar.png" style={{margin:"1rem"}} />
                  <Typography variant="body1" paragraph style={{margin:"1rem", textAlign:"justify", padding:"0.5rem"}} className="testimonial-text">
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
    </>
  );
};

export default Testimonials;
