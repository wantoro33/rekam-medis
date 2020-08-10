import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormModal from "./FormModal";
import useModal from "./useModal";

function FormSearch() {
  const { isShowing, toggle } = useModal();
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
        <Button variant="contained" color="primary" onClick={toggle}>
          Tambah
        </Button>
        <FormModal isShowing={isShowing} hide={toggle} />
      </div>
      <div>
        <FormModal />
      </div>
    </div>
  );
}

export default FormSearch;
