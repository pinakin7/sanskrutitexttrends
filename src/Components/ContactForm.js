import React from "react";
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
} from "@mui/material";
import { Mail } from "@mui/icons-material";

const ContactForm = () => {
  return (
    <Paper elevation={3} style={{ margin: "2rem" }}>
      <Grid
        container
        columnGap={3}
        columnSpacing={3}
        direction="column"
        alignContent="center"
        alignItems="center"
        style={{ paddingBottom: "0.5rem", paddingTop: "0.5rem" }}
      >
        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <Typography variant="h5" align="center" gutterBottom margin="0.5rem">
            Contact Us
          </Typography>
        </Grid>
        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <TextField label="Name" variant="outlined" required fullWidth />
        </Grid>
        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            fullWidth
          />
        </Grid>
        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <TextField label="Organisation" variant="outlined" required fullWidth />
        </Grid>

        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <FormControl fullWidth>
            <InputLabel id="positionLabel">Position *</InputLabel>
            <Select
              labelId="positionLabel"
              id="position"
              label="Position"
              fullWidth
              required
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

        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
            fullWidth
          />
        </Grid>
        <Grid style={{ margin: "0.5rem", textAlign: "center" }} width={400}>
          <Button
            variant="contained"
            color="success"
            size="large"
            type="submit"
            endIcon={<Mail />}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactForm;
