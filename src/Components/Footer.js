import {
  Facebook,
  LinkedIn,
  Mail,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import Logo from "../img/logo.png";

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
  margin-top: 4rem;
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
                <IconButton
                  aria-label="Facebook"
                  href="https://www.facebook.com/sanskrutitexttrends/"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/vimal-kumar-viradiya-3b1b78177"
                >
                  <LinkedIn />
                </IconButton>
              </SocialIcons>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" textAlign="right">
                Contact Information
              </Typography>
              <ContactInfo>
                <Typography variant="body2">
                  <IconButton
                    aria-label="Email"
                    href="mailto:vimalmviradiya@sanskrutitexttrends.co?subject = Enquiry&body = Need to do Buisness with you"
                  >
                    <Mail />
                  </IconButton>
                  vimalmviradiya@sanskrutitexttrends.co
                </Typography>
              </ContactInfo>
            </Grid>
          </Grid>
          <Copyright variant="body2" component="p">
            <Card style={{alignContent:"center", marginTop:"2rem"}} >
              <CardMedia
              component="img"
                height="100"
                image={Logo}
                style={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  © 2023 Sanskruti Text Trends. All rights reserved.
                </Typography>
              </CardContent>
            </Card>
          </Copyright>
        </Container>
      </FooterContainer>
    </div>
  );
}
