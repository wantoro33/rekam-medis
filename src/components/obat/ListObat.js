import React, { useState, useEffect } from "react";
import ObatDataService from "../../services/ObatService";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import useModal from "../../components/useModal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function ListObat() {
  const [obat, setObat] = useState([]);
  const [currentObat, setCurrentObat] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveObat();
  }, []);

  currentObat;

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveObat = () => {
    ObatDataService.getAll()
      .then((response) => {
        setObat(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveObat();
  //   setCurrentObat(null);
  //   setCurrentIndex(-1);
  // };

  const setActiveObat = (obat, index) => {
    setCurrentObat(obat);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    ObatDataService.findByTitle(searchTitle)
      .then((response) => {
        setObat(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div style={{ alignContent: "right" }}>
        <div style={{ display: "flex" }}>
          <div>
            <TextField
              id="outlined-search"
              label="Cari data"
              type="search"
              variant="outlined"
              margin="dense"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
          </div>
          <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
            <Button variant="contained" color="primary" onClick={findByTitle}>
              Cari
            </Button>
          </div>
          <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={"/add"}
            >
              Tambah
            </Button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Nama Obat</StyledTableCell>
                <StyledTableCell align="right">Stok</StyledTableCell>
                <StyledTableCell align="left">Hapus</StyledTableCell>
                <StyledTableCell align="left">Satuan</StyledTableCell>
                <StyledTableCell align="left">Kode Obat</StyledTableCell>
                <StyledTableCell align="right">Harga</StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {obat &&
                obat.map((obat, index) => (
                  <TableRow hover>
                    <StyledTableCell align="left">
                      {obat.NAMAOBAT}
                    </StyledTableCell>
                    <StyledTableCell align="right">{obat.STOK}</StyledTableCell>
                    <StyledTableCell align="left">{obat.HAPUS}</StyledTableCell>
                    <StyledTableCell align="left">
                      {obat.satuan.SATUAN}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {obat.CODE_OBAT}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {obat.HARGA}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {/* <Link to={"/obat/" + obat.ID_OBAT}>
                        <EditIcon
                          onClick={toggle}
                          style={{ cursor: "pointer" }}
                          className={
                            "list-group-item " +
                            (index === currentIndex ? "active" : "")
                          }
                          onMouseEnter={() => setActiveObat(obat, index)}
                          key={index}
                          // component={Link}
                          // to={"/obat/" + obat.ID_OBAT}
                        />
                      </Link> */}
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ cursor: "pointer" }}
                        className={
                          "list-group-item " +
                          (index === currentIndex ? "active" : "")
                        }
                        onMouseEnter={() => setActiveObat(obat, index)}
                        key={index}
                        component={Link}
                        to={"/obat/" + obat.ID_OBAT}
                      >
                        Ubah
                      </Button>
                    </StyledTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ListObat;
