import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Grid } from "@mui/material";

const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    p: 1,
    borderRadius: 3,
    width: "25rem",
  },
};

const Note = ({ content, onDelete, key }) => {
  const handleDelete = () => {
    onDelete(key);
  };

  return (
    <Grid container display="flex" justifyContent="center" sx={{ mb: 1 }}>
      <Grid container item sx={styles.flex}>
        {content}
        <DeleteIcon sx={{ color: "#d90429" }} onClick={handleDelete} />
      </Grid>
    </Grid>
  );
};

export default Note;
