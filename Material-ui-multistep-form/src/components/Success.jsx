import {
  AppBar,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

export const Success = () => {
  return (
    <Container>
      <AppBar
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Successfully Completed</Typography>
      </AppBar>
      <Card style={{marginTop:'200px',backgroundColor:'green',height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <CardContent style={{color:'white'}}>
          <Typography variant="h6" color="textwhite">
            Success!
          </Typography>
          <Typography variant="body1" color="textwhite">
            Your submission was successful.
          </Typography>
        </CardContent>
      </Card>{" "}
    </Container>
  );
};
