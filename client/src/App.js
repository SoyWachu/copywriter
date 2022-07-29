import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import TextList from "./Components/TextList/TextList";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "60%",
            height: "50%",
            paddingBottom: "25px",
          }}
        >
          <Typography variant="h4" style={{ padding: "25px 0px 0px 25px" }}>
            Results:
          </Typography>
          <TextList />
        </Box>
      </div>
    </Provider>
  );
}

export default App;
