import {
  AppBar,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const FormPersonalDetails = (props) => {
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
        <Typography variant="h6">User Personal Details</Typography>
      </AppBar>
      <Container
        maxWidth="sm"
        style={{ marginTop: "130px", display: "flex", flexDirection: "column" }}
      >
       <TextField
          label="Occupation"
          name="occupation"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.occupation}
          onChange={(e) => {
            props.handleChange("occupation", e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="Bio"
          name="bio"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.bio}
          onChange={(e) => {
            props.handleChange("bio", e.target.value);
          }}
          fullWidth
          required
        />
        <TextField
          label="City"
          name="city"
          multiline
          style={{paddingBottom:'20px'}}
          value={props.userData.city}
          onChange={(e) => {
            props.handleChange("city", e.target.value);
          }}
          fullWidth
          required
        />
        <div style={{display:"flex",justifyContent:'center',marginTop:'20px'}}>
          <Button
            style={{width:'40%',marginRight:'5px'}}
            onClick={props.prevStep}
            type="submit"
            variant="contained"
            color="success"
          >
            Back
          </Button>
          <Button
            style={{width:'40%'}}
            onClick={props.nextStep}
            type="submit"
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
        </div>
      </Container>
    </div>
  );
};
