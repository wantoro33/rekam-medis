import React, { useState } from "react";
import ObatDataService from "../../services/ObatService";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function AddObat() {
  const initialObatState = {
    ID_OBAT: null,
    NAMAOBAT: "",
    STOK: "",
    HAPUS: "",
    ID_SATUAN: "",
    CODE_OBAT: "",
    HARGA: "",
  };
  const [obat, setObat] = useState(initialObatState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObat({ ...obat, [name]: value });
  };

  const saveObat = () => {
    var data = {
      NAMAOBAT: obat.NAMAOBAT,
      STOK: obat.STOK,
      HAPUS: obat.HAPUS,
      ID_SATUAN: obat.ID_SATUAN,
      CODE_OBAT: obat.CODE_OBAT,
      HARGA: obat.HARGA,
    };

    ObatDataService.create(data)
      .then((response) => {
        setObat({
          ID_OBAT: response.data.ID_OBAT,
          NAMAOBAT: response.data.NAMAOBAT,
          STOK: response.data.STOK,
          HAPUS: response.data.HAPUS,
          ID_SATUAN: response.data.ID_SATUAN,
          CODE_OBAT: response.data.CODE_OBAT,
          HARGA: response.data.HARGA,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newObat = () => {
    setObat(initialObatState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Simpan data obat berhasil!</h4>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={"/obat"}
          >
            Kembali
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div>
            <div className="form-group">
              <h4>Tambah Data</h4>
              <TextField
                type="text"
                className="form-control"
                id="NAMAOBAT"
                required
                value={obat.NAMAOBAT}
                onChange={handleInputChange}
                name="NAMAOBAT"
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
                required
                value={obat.STOK}
                onChange={handleInputChange}
                name="STOK"
                variant="outlined"
                margin="dense"
                label="Stok"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="HAPUS"
                required
                value={obat.HAPUS}
                onChange={handleInputChange}
                name="HAPUS"
                variant="outlined"
                margin="dense"
                label="Hapus"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="ID_SATUAN"
                required
                value={obat.ID_SATUAN}
                onChange={handleInputChange}
                name="ID_SATUAN"
                variant="outlined"
                margin="dense"
                label="ID Satuan"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="CODE_OBAT"
                required
                value={obat.CODE_OBAT}
                onChange={handleInputChange}
                name="CODE_OBAT"
                variant="outlined"
                margin="dense"
                label="Kode Obat"
              />
            </div>
            <div className="form-group">
              <TextField
                type="text"
                className="form-control"
                id="HARGA"
                required
                value={obat.HARGA}
                onChange={handleInputChange}
                name="HARGA"
                variant="outlined"
                margin="dense"
                label="Harga"
              />
            </div>

            <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
              <Button onClick={saveObat} variant="contained" color="primary">
                Simpan
              </Button>
            </div>
            <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={"/obat"}
              >
                Batal
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddObat;
