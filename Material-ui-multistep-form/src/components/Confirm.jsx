import {
  AppBar,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const Confirm = (props) => {
  console.log("CONFIRM NAME ", props.userData.name);
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
        <Typography variant="h6">Confirm Details</Typography>
      </AppBar>
      <Container
        maxWidth="sm"
        style={{ marginTop: "130px", display: "flex", flexDirection: "column" }}
      >
        <List>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="Full Name" secondary={props.userData.name}/>
          </ListItem>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="Email" secondary={props.userData.email}/>
          </ListItem>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="Gender" secondary={props.userData.gender}/>
          </ListItem>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="Occupation" secondary={props.userData.occupation}/>
          </ListItem>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="City" secondary={props.userData.city}/>
          </ListItem>
          <ListItem style={{backgroundColor:'#FEFEFA',border:'1px solid blue',borderRadius:'8px',margin:'5px'}}>
            <ListItemText primary="Bio" secondary={props.userData.bio}/>
          </ListItem>
        </List>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            style={{ width: "40%", marginRight: "5px" }}
            onClick={props.prevStep}
            type="submit"
            variant="contained"
            color="success"
          >
            Back
          </Button>
          <Button
            style={{ width: "40%" }}
            onClick={props.nextStep}
            type="submit"
            variant="contained"
            color="primary"
          >
            Confirm & Continue
          </Button>
        </div>
      </Container>
    </div>
  );
};
