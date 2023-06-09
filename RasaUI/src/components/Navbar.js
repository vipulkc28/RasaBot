import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";

export default function Navbar({ botTyping }) {
  return (
    <Box className="top-navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div className="topnav-div">
            <div>
              <h5>MITRABot</h5>
            </div>
            <div>{botTyping ? <p>Bot Typing....</p> : null}</div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
