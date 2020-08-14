import React, { useState, useEffect } from "react";
import ObatDataService from "../../services/ObatService";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function ComObat(props) {
  const initialObatState = {
    ID_OBAT: null,
    NAMAOBAT: "",
    STOK: "",
    HAPUS: "",
    ID_SATUAN: "",
    CODE_OBAT: "",
    HARGA: "",
  };
  const [currentObat, setCurrentObat] = useState(initialObatState);
  const [message, setMessage] = useState("");

  const getObat = (ID_OBAT) => {
    ObatDataService.get(ID_OBAT)
      .then((response) => {
        setCurrentObat(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getObat(props.match.params.ID_OBAT);
  }, [props.match.params.ID_OBAT]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentObat({ ...currentObat, [name]: value });
  };

  const updateObat = () => {
    ObatDataService.update(currentObat.ID_OBAT, currentObat)
      .then((response) => {
        console.log(response.data);
        setMessage("The data obat was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteObat = () => {
    ObatDataService.remove(currentObat.ID_OBAT)
      .then((response) => {
        console.log(response.data);
        props.history.push("/obat");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentObat ? (
        <div className="edit-form">
          <h4>Ubah Data</h4>
          <form>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="NAMAOBAT"
                name="NAMAOBAT"
                value={currentObat.NAMAOBAT}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="STOK"
                name="STOK"
                value={currentObat.STOK}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="HAPUS"
                name="HAPUS"
                value={currentObat.HAPUS}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="ID_SATUAN"
                name="ID_SATUAN"
                value={currentObat.ID_SATUAN}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="CODE_OBAT"
                name="CODE_OBAT"
                value={currentObat.CODE_OBAT}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="HARGA"
                name="HARGA"
                value={currentObat.HARGA}
                onChange={handleInputChange}
                variant="outlined"
                margin="dense"
                label="Nama Obat"
              />
            </div>
          </form>
          <Button variant="contained" color="secondary" onClick={deleteObat}>
            Delete
          </Button>
          <Button variant="contained" color="primary" onClick={updateObat}>
            Update
          </Button>
          <Button
            component={Link}
            to={"/obat"}
            variant="contained"
            color="primary"
          >
            Batal
          </Button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
}

export default ComObat;
