import React from "react";
import { Logo } from "../images";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "#fff", color: "black", height: "6em" }}
          position="fixed"
        >
          <Toolbar>
            <img src={Logo} alt="Time Zone" style={{ marginTop: "1.6em" }} />
            <span
              style={{
                marginTop: "1.6em",
                marginLeft: "43.7em",
              }}
              class="material-symbols-outlined"
            >
              search
            </span>

            <span
              style={{ marginLeft: "1em", marginTop: "1.6em" }}
              class="material-symbols-outlined"
            >
              person
            </span>

            <span
              style={{
                marginLeft: "1em",
                marginTop: "1.6em",
              }}
              class="material-symbols-outlined"
            >
              shopping_cart
            </span>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
