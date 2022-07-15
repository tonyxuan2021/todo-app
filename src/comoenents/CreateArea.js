import { Grid, TextField, InputProps, Button } from "@mui/material";
import { width } from "@mui/system";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateArea = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const submitNote = () => {
    addNote(note);
  };

  const styles = {
    flex: {
      display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      flexDirection: "column",
      width: "25rem",
      height: "8rem",
      background: "white",
      p: 1,
      borderRadius: 3,
      position: "relative",
    },
    width: {
      width: "100%",
    },
    iconColor: {
      color: "#ffb703",
      position: "absolute",
      bottom: 5,
      right: 5,
    },
  };

  return (
    <Grid container display="flex" justifyContent="center" sx={{ mb: 1 }}>
      <Grid container item sx={styles.flex}>
        {/* <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          fullWidth
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></TextField> */}
        <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          fullWidth
          placeholder="Your note here..."
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></TextField>
        <AddCircleIcon
          sx={styles.iconColor}
          onClick={submitNote}
          fontSize="large"
        />
      </Grid>
    </Grid>
  );
};

export default CreateArea;
