import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sendText } from "../../redux/Text/actions";

function Nav() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    dispatch(sendText(text));
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: "red",
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "25px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Insert text"
        variant="filled"
        size="small"
        style={{ width: "30%", backgroundColor: "white", borderRadius: "5px" }}
      />
      <Button
        onClick={handleSearch}
        style={{
          marginLeft: "25px",
          padding: "15px 25px 10px 25px",
        }}
        variant="contained"
      >
        Send
      </Button>
    </Box>
  );
}

export default Nav;
