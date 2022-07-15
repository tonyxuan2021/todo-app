import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import { Grid, Paper, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid sx={{ background: "#ffb703", mb: "3rem" }} display="flex" alignItems="center">
      <HighlightIcon sx={{ color: "white" }} />
      <Typography variant="h4" color="white">
        ToDoList
      </Typography>
    </Grid>
  );
};

export default Header;
