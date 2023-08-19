import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Alert,
  AlertTitle,
} from "@mui/material";
import { CheckCircleOutline, Mail } from "@mui/icons-material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [position, setPosition] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");

  const clearStates = () => {
    setName("");
    setEmail("");
    setOrg("");
    setPosition("");
    setSubject("");
    setMsg("");
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_stt",
        "template_stt",
        {
          to_email: "vimalmviradiya@sanskrutitexttrends.co",
          // to_email: "pinakin548@gmail.com",
          reply_to: email,
          subject: subject,
          from_name: name,
          from_org: org,
          from_position: position,
          to_name: "Vimalkumar Viradiya",
          message: msg,
        },
        "opCKvEbcN8HIJGeW5"
      )
      .then((response) => {
        setAlertMsg(
          `Submitted your ${subject}. We will get back to you within 5-6 buisness days. Thank you for reaching us!!!!`
        );
        setAlertType("success");
        setSubmitted(true);
      })
      .catch((error) => {
        setAlertMsg(
          `Unable to submit your ${subject}. Please try again later. Thank you for reaching us!!!!`
        );
        setAlertType("error");
      });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    sendEmail();
    clearStates();
  };

  return (
    <>
      {submitted && (
        <Paper elevation={3} style={{ margin: "2rem" }}>
          <Alert
            severity={alertType}
            iconMapping={{
              success: <CheckCircleOutline fontSize="inherit" />,
            }}
            onClose={() => {
              setSubmitted(false);
            }}
          >
            <AlertTitle>
              {alertType.charAt(0).toUpperCase() + alertType.slice(1)}
            </AlertTitle>
            {alertMsg}
          </Alert>
        </Paper>
      )}
      {!submitted && (
        <Paper elevation={3} style={{ margin: "2rem" }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Grid
              container
              columnGap={3}
              columnSpacing={3}
              direction="column"
              alignContent="center"
              alignItems="center"
              style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
            >
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  margin="0.5rem"
                >
                  Contact Us
                </Typography>
              </Grid>
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <TextField
                  label="Organisation"
                  variant="outlined"
                  required
                  fullWidth
                  value={org}
                  onChange={(e) => {
                    setOrg(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <FormControl fullWidth>
                  <InputLabel id="positionLabel">Position *</InputLabel>
                  <Select
                    labelId="positionLabel"
                    id="position"
                    label="Position"
                    fullWidth
                    required
                    value={position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Owner"}>Owner</MenuItem>
                    <MenuItem value={"Supervisior"}>Supervisor</MenuItem>
                    <MenuItem value={"Marketing Team"}>Marketing Team</MenuItem>
                    <MenuItem value={"Sales Team"}>Sales Team</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <FormControl fullWidth>
                  <InputLabel id="subjectLabel">Subject *</InputLabel>
                  <Select
                    labelId="subjectLabel"
                    id="subject"
                    label="Subject"
                    fullWidth
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"General Enquiry"}>
                      General Enquiry
                    </MenuItem>
                    <MenuItem value={"Sales Enquiry"}>Sales Enquiry</MenuItem>
                    <MenuItem value={"Job Enquiry"}>Job Enquiry</MenuItem>
                    <MenuItem value={"Product Enquiry"}>
                      Product Enquiry
                    </MenuItem>
                    <MenuItem value={"Services Enquiry"}>
                      Services Enquiry
                    </MenuItem>
                    <MenuItem value={"Price Enquiry"}>Price Enquiry</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  fullWidth
                  value={msg}
                  onChange={(e) => {
                    setMsg(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                style={{ margin: "0.5rem", textAlign: "center" }}
                width={400}
                item
                xs={12}
              >
                <Button
                  variant="contained"
                  color="success"
                  size="large"
                  type="button"
                  endIcon={<Mail />}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      )}
    </>
  );
};

export default ContactForm;
