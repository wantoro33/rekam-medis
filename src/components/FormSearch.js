import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ModalForm from "./ModalForm";

function FormSearch() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <TextField
          id="outlined-search"
          label="Cari data"
          type="search"
          variant="outlined"
          margin="dense"
        />
      </div>
      <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
        <Button variant="contained" color="primary">
          Cari
        </Button>
      </div>
      <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
        <Button variant="contained" color="primary">
          Tambah
        </Button>
      </div>
    </div>
  );
}

export default FormSearch;
