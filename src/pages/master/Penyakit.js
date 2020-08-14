import React from "react";
import JudulForm from "../../components/JudulForm";
import Grid from "@material-ui/core/Grid";
import FormCard from "../../components/FormCard";
import FormSearch from "../../components/FormSearch";
import { useAxiosGet } from "../../hooks/HttpsRequest";
import Loader from "../../components/Loader";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FormModal from "../../components/FormModal";
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

function Penyakit() {
  const url = `/penyakit`;
  let penyakit = useAxiosGet(url);
  let penyakitContent = null;
  const { isShowing, toggle } = useModal();

  if (penyakit.error) {
    penyakitContent = <h1>Terjadi kesalahan dalam memuat data</h1>;
    console.log(penyakit.error);
  }

  if (penyakit.loading) {
    penyakitContent = <Loader />;
  }

  if (penyakit.data) {
    penyakitContent = (
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Kode Penyakit</StyledTableCell>
              <StyledTableCell align="left">Nama Penyakit</StyledTableCell>
              <StyledTableCell align="right">Aktif</StyledTableCell>
              <StyledTableCell align="center">Aksi</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {penyakit.data.map((penyakit, key) => (
              <TableRow hover>
                <StyledTableCell align="left">
                  {penyakit.KODEPENYAKIT}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {penyakit.NAMAPENYAKIT}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {penyakit.AKTIF}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <EditIcon onClick={toggle} style={{ cursor: "pointer" }} />
                  <FormModal isShowing={isShowing} hide={toggle} opac={0.15} />
                  <DeleteIcon style={{ cursor: "pointer" }} />
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  let formPenyakitContent = (
    <Grid container spacing={3}>
      <Grid item md={12} style={{ textAlign: "left" }}>
        <FormSearch />
      </Grid>
      <Grid item md={12}>
        {penyakitContent}
      </Grid>
    </Grid>
  );

  return (
    <Grid container spacing={0}>
      <Grid
        item
        md={12}
        style={{ textAlign: "left", padding: "10px", width: "100%" }}
      >
        <JudulForm label="Data Penyakit" />
      </Grid>
      <Grid item md={12}>
        <FormCard formContent={formPenyakitContent} />
      </Grid>
    </Grid>
  );
}

export default Penyakit;
