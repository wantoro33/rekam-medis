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
import Alert from "@material-ui/lab/Alert";
import { Collapse } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [idSatuan, setIdSatuan] = React.useState("");
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
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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

  const handelClickIcon = (event) => {
    setMessage("");
    setOpenAlert(false);
  };

  const updateObat = () => {
    setOpenAlert(true);
    ObatDataService.update(currentObat.ID_OBAT, currentObat)
      .then((response) => {
        console.log(response.data);
        setMessage(
          <Alert
            action={
              <Button
                color="inherit"
                size="small"
                component={Link}
                to={"/obat"}
              >
                Kembali
              </Button>
            }
          >
            Data obat berhasil diubah, klik tombol Kembali di samping.
          </Alert>
        );
      })
      .catch((e) => {
        console.log(e);
        setMessage(
          <Collapse in={!openAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handelClickIcon}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="error"
            >
              Gagal update.
            </Alert>
          </Collapse>
        );
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

  const dialogDelete = (
    <div>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hapus data?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Data tersebut akan dihapus jika klik Hapus.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteObat} color="Secondary">
            Hapus
          </Button>
          <Button onClick={handleCloseDelete} color="primary" autoFocus>
            Batal
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      {console.log(`test ${openAlert}`)}
      {currentObat ? (
        <div className="edit-form">
          <div style={{ display: "flex", paddingLeft: "5px" }}>
            <h4>Ubah Data</h4>
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
              style={{ width: "300px" }}
            />
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
              style={{ width: "100px" }}
            />
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
              style={{ width: "100px" }}
            />
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
              style={{ width: "100px" }}
            />
          </div>
          <div style={{ paddingLeft: "5px", display: "inline" }}>
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
              style={{ width: "100px" }}
            />
          </div>
          {console.log(`idSatuan ${idSatuan} titk`)}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label" margin="dense">
              Satuan
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={idSatuan}
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
                onClick={handleClickOpenDelete}
                disabled={openAlert}
              >
                Delete
              </Button>
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={updateObat}
                disabled={openAlert}
              >
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
          {dialogDelete}
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
