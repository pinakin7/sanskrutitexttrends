import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "styled-components";

const FooterContainer = styled.footer`
  background-color: white;
  color: black;
  padding: 40px 0;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin: 0 10px;
    font-size: 24px;
    color: #ffffff;
    transition: color 0.3s;

    &:hover {
      color: #f50057;
    }
  }
`;

const ContactInfo = styled.div`
  text-align: right;

  @media (max-width: 600px) {
    text-align: right;
    margin-top: 20px;
  }
`;

const Copyright = styled(Typography)`
  text-align: center;
  margin-top: 20px;
`;

export default function Footer() {
  return (
    <div id="footer" style={{ margin: "5rem" }}>
      <Divider variant="middle" />

      <FooterContainer>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5">Connect With Us</Typography>
              <SocialIcons>
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
              </SocialIcons>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" textAlign="right">Contact Information</Typography>
              <ContactInfo>
                <Typography variant="body2">
                  Email: contact@example.com
                </Typography>
              </ContactInfo>
            </Grid>
          </Grid>
          <Copyright variant="body2" component="p">
            © 2023 Sanskruti Text Trends. All rights reserved.
          </Copyright>
        </Container>
      </FooterContainer>
    </div>
  );
}
