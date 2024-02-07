import React from "react";
import {
  AppBar,
  TextField,
  Button,
  Container,
  Typography,
} from "@mui/material";
export const FormUserDetails = (props) => {
  return (
    <div>
      <AppBar
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">User Form Detail</Typography>
      </AppBar>
      <Container
        maxWidth="sm"
        style={{ marginTop: "130px", display: "flex", flexDirection: "column" }}
      >
        <TextField
          label="Full Name"
          name="Full Name"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.name}
          onChange={(e) => {
            props.handleChange("name", e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="Email"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.email}
          onChange={(e) => {
            props.handleChange("email", e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Gender"
          name="Gender"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.gender}
          onChange={(e) => {
            props.handleChange("gender", e.target.value);
          }}
          fullWidth
          required
        />
        <Button
          onClick={props.nextStep}
          type="submit"
          variant="contained"
          color="primary"
        >
          Continue
        </Button>{" "}
      </Container>
    </div>
  );
};
