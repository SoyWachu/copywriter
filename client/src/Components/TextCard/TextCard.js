import { Grid } from "@mui/material";
import React from "react";

function TextCard(props) {
  return (
    <Grid
      item
      xs={6}
      style={{
        border: "1px solid black",
        padding: "15px 0px 15px 10px",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      {props.text}
    </Grid>
  );
}

export default TextCard;
