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

const testimonials = [
  {
    id: 1,
    text: `" I'm so grateful to Sanskruti Text Trends for providing the best stitching threads for my fashion boutique. The threads are incredibly strong and reliable, making my designs stand the test of time. With their diverse range of threads, I always find the perfect match for my creations. Thank you for your exceptional products and excellent service! "`,
    avatar: "https://bootdey.com/img/Content/avatar/avatar1.png",
  },
  {
    id: 2,
    text: `" I just had to share how much I love Sanskruti Text Trends' embroidery threads. The colors are so vibrant, and the threads work like a dream for my embroidery projects. I truly appreciate the high quality and reliability of your threads. You've won me over as a customer for life! "`,
    avatar: "https://bootdey.com/img/Content/avatar/avatar2.png",
  },
  {
    id: 3,
    text: `" Sanskruti Text Trends has transformed our textile production with their top-notch machinery. The TFO machines and weaving machines have boosted our efficiency, and the results are fantastic. Your team's support and dedication are commendable. Thank you for making our work easier and more enjoyable! "`,
    avatar: "https://bootdey.com/img/Content/avatar/avatar3.png",
  },
  {
    id: 4,
    text: `" Big shoutout to Sanskruti Text Trends for their exceptional industrial threads and carpet threads. These threads are super sturdy and have been a game-changer for our rug manufacturing business. Your attentive customer service is the icing on the cake. We're so glad we found you! "`,
    avatar: "https://bootdey.com/img/Content/avatar/avatar4.png",
  },
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
    <div id="testimonials">
      <Divider variant="middle" />
      <CssBaseline />
      <Paper elevation={3} className="testimonial-paper">
        <Container maxWidth="auto">
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
  );
};

export default Testimonials;
