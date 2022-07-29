import React from "react";
import TextCard from "../TextCard/TextCard";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

function TextList() {
  const data = useSelector((state) => state.text.data);

  return (
    <Grid container direction="column" justifyContent="center">
      {data?.map((item) => (
        <Grid container justifyContent="center">
          <TextCard key={item} text={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TextList;
