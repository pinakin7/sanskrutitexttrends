import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactForm from "./ContactForm";

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

export default function Contact() {
  const classes = useStyles();

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <div id="contact">
      <Container
        ref={ref}
        className={`${classes.slideInOut} ${inView ? "slide-in" : "slide-out"}`}
      >
        <Divider variant="middle" />
        <Paper elevation={0}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Grid container spacing={2} direction="column">
                <Grid>
                    <ContactForm />
                </Grid>
                <Grid></Grid>
              </Grid>
            </Grid>
            <Grid xs={4} height={800} style={{marginTop:"1rem"}}>
              <Card>
                <CardContent>
                  <div className={classes.iframeContainer}>
                    <iframe
                      title="Sanskruti Text Trends Location"
                      className={classes.iframe}
                      frameBorder="0"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.7340130550806!2d72.85551110979125!3d21.083283185824648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be050dc2342b037%3A0x4378c19dfad8ed2a!2sSANSKRUTI%20TEXT%20TRENDS!5e0!3m2!1sen!2sin!4v1690119915570!5m2!1sen!2sin"
                      width="auto"
                      height="auto"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}
