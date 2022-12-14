import React from "react";
import { BannerRolex } from "../images";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          width: "100%",
          height: "67.5em",
          marginTop: "-2.9em",
        }}
      >
        <img
          src={BannerRolex}
          alt="this is Rolex"
          style={{ height: 964, marginLeft: "55em", marginTop: "7em" }}
        />
      </div>
      <Typography
        variant="h1"
        mt={-80}
        ml={12}
        fontFamily={"Josefin Sans"}
        color={"#0b1c39"}
      >
        Select Your New
        <br /> Perfect Style
      </Typography>
      <Typography mt={4} ml={12}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea
        <br /> commodo consequat is aute irure.
      </Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#4a4a4b",
          marginTop: "4em",
          marginLeft: "7em",
          border: "1px solid",
          borderRadius: "none",
          height: "3.5em",
          width: "11em",
        }}
      >
        <Typography style={{ fontFamily: "Josefin Sans" }}>SHOP NOW</Typography>
      </Button>
    </>
  );
};

export default Banner;
