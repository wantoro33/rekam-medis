import React, { useState, useEffect } from "react";
import ObatDataService from "../../services/ObatService";
import SatuanDataService from "../../services/SatuanService";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AddObat() {
  const classes = useStyles();
  const [idSatuan, setIdSatuan] = React.useState(0);
  const [satuan, setSatuan] = useState([]);

  useEffect(() => {
    retrieveSatuan();
  }, []);

  const handleChange = (event) => {
    setIdSatuan(event.target.value);
  };

  const retrieveSatuan = () => {
    SatuanDataService.getAll()
      .then((response) => {
        setSatuan(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
              style={{ paddingLeft: "5px", width: "300px" }}
              // fullWidth="true"
            />

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
              style={{ paddingLeft: "5px", width: "100px" }}
              // fullWidth="true"
            />

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
              style={{ paddingLeft: "5px", width: "100px" }}
              // fullWidth="true"
            />

            {/* <TextField
              type="text"
              className="form-control"
              id="ID_SATUAN"
              required
              value={(obat.ID_SATUAN = idSatuan)}
              onChange={handleInputChange}
              name="ID_SATUAN"
              variant="outlined"
              margin="dense"
              label="ID Satuan"
              style={{ paddingLeft: "5px", width: "100px" }}
              // fullWidth="true"
            /> */}

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
              style={{ paddingLeft: "5px", width: "100px" }}
              // fullWidth="true"
            />

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
              style={{ paddingLeft: "5px", width: "100px" }}
              // fullWidth="true"
            />

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label" margin="dense">
                Satuan
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={(obat.ID_SATUAN = idSatuan)}
                onChange={handleChange}
                label="Satuan"
                margin="dense"
                required
              >
                {satuan &&
                  satuan.map((satuan, index) => (
                    <MenuItem value={satuan.ID_SATUAN}>
                      {satuan.SATUAN}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>

            <div style={{ display: "flex" }}>
              <div style={{ paddingLeft: "5px" }}>
                <Button onClick={saveObat} variant="contained" color="primary">
                  Simpan
                </Button>
              </div>
              <div style={{ paddingLeft: "5px" }}>
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
        </div>
      )}
    </div>
  );
}

export default AddObat;
