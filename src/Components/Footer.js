import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(4, 0),
  },
  socialIcons: {
    "& > *": {
      margin: theme.spacing(1),
      color: theme.palette.common.white,
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div id="footer" style={{ margin: "5rem" }}>
      <Divider variant="middle" />

      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Connect With Us</Typography>
              <div className={classes.socialIcons}>
                <IconButton aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
                <IconButton aria-label="Instagram">
                  <Instagram />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body2">
                Email: contact@example.com
                <br />
                Phone: +1 (123) 456-7890
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" className={classes.copyright}>
            © 2023 Your Company. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
