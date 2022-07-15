import { Grid, TextField, InputProps } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const CreateArea = () => {
  const styles = {
    flex: {
      display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      flexDirection: "column",
      width: "25rem",
      height: "8rem",
      background: "white",
    },
    width: {
      width: "100%",
    },
  };

  return (
    <Grid container display="flex" justifyContent="center">
      <Grid container item sx={styles.flex}>
        <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          fullWidth
          placeholder="Title"
        ></TextField>
        <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          fullWidth
          placeholder="Your note here..."
        ></TextField>
      </Grid>
    </Grid>
  );
};

export default CreateArea;
