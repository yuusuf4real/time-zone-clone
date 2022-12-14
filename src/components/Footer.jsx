import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            backgroundColor: "#fff",
            color: "black",
            height: "5em",
            marginTop: "5em",
          }}
          position="static"
        >
          <Typography
            display="flex"
            justifyContent="center"
            marginTop="1.7em"
            fontFamily={"Josefin Sans"}
            color="#969292"
          >
            Copyright ©2022 All rights reserved | This template is made with
            <span
              style={{ color: "#ff2020" }}
              class="material-symbols-outlined"
            >
              favorite
            </span>
            by
            <Typography color="#ff2020" marginLeft="0.3em">
              KynBiz
            </Typography>
          </Typography>
        </AppBar>
      </Box>
    </div>
  );
};

export default Footer;
