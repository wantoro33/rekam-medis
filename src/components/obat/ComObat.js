import React, { useState, useEffect } from "react";
import ObatDataService from "../../services/ObatService";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SatuanDataService from "../../services/SatuanService";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ComObat(props) {
  //begin load data satuan
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
  //end load data satuan

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
    <div style={{ display: "flex" }}>
      {currentObat ? (
        <div className="edit-form">
          <h4>Ubah Data</h4>

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
            style={{ paddingLeft: "5px", width: "300px" }}
          />

          <TextField
            type="text"
            className="form-control"
            id="STOK"
            name="STOK"
            value={currentObat.STOK}
            onChange={handleInputChange}
            variant="outlined"
            margin="dense"
            label="Stok"
            style={{ paddingLeft: "5px", width: "100px" }}
          />

          <TextField
            type="text"
            className="form-control"
            id="HAPUS"
            name="HAPUS"
            value={currentObat.HAPUS}
            onChange={handleInputChange}
            variant="outlined"
            margin="dense"
            label="Hapus"
            style={{ paddingLeft: "5px", width: "100px" }}
          />

          <TextField
            type="text"
            className="form-control"
            id="ID_SATUAN"
            name="ID_SATUAN"
            value={currentObat.ID_SATUAN}
            onChange={handleInputChange}
            variant="outlined"
            margin="dense"
            label="ID Satuan"
          />

          <TextField
            type="text"
            className="form-control"
            id="CODE_OBAT"
            name="CODE_OBAT"
            value={currentObat.CODE_OBAT}
            onChange={handleInputChange}
            variant="outlined"
            margin="dense"
            label="Kode Obat"
            style={{ paddingLeft: "5px", width: "100px" }}
          />

          <TextField
            type="text"
            className="form-control"
            id="HARGA"
            name="HARGA"
            value={currentObat.HARGA}
            onChange={handleInputChange}
            variant="outlined"
            margin="dense"
            label="Harga"
            style={{ paddingLeft: "5px", width: "100px" }}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" margin="dense">
              Satuan
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={(currentObat.ID_SATUAN = idSatuan)}
              onChange={handleChange}
              label="Satuan"
              margin="dense"
              required
            >
              {satuan &&
                satuan.map((satuan, index) => (
                  <MenuItem value={satuan.ID_SATUAN}>{satuan.SATUAN}</MenuItem>
                ))}
            </Select>
          </FormControl>

          <div style={{ display: "flex" }}>
            <div style={{ paddingLeft: "5px" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={deleteObat}
              >
                Delete
              </Button>
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <Button variant="contained" color="primary" onClick={updateObat}>
                Update
              </Button>
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <Button
                component={Link}
                to={"/obat"}
                variant="contained"
                color="primary"
              >
                Batal
              </Button>
            </div>
          </div>
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
