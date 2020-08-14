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

function Tindakan() {
  const url = `/tindakan`;
  let tindakan = useAxiosGet(url);
  let tindakanContent = null;
  const { isShowing, toggle } = useModal();

  if (tindakan.error) {
    tindakanContent = <h1>Terjadi kesalahan dalam memuat data</h1>;
    console.log(tindakan.error);
  }

  if (tindakan.loading) {
    tindakanContent = <Loader />;
  }

  if (tindakan.data) {
    tindakanContent = (
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="left">Nama Tindakan</StyledTableCell>
              <StyledTableCell align="right">Hapus</StyledTableCell>
              <StyledTableCell align="center">Aksi</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {tindakan.data.map((tindakan, key) => (
              <TableRow hover>
                <StyledTableCell align="left">
                  {tindakan.NAMATINDAKAN}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {tindakan.HAPUS}
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

  let formTindakanContent = (
    <Grid container spacing={3}>
      <Grid item md={12} style={{ textAlign: "left" }}>
        <FormSearch />
      </Grid>
      <Grid item md={12}>
        {tindakanContent}
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
        <JudulForm label="Data Tindakan" />
      </Grid>
      <Grid item md={12}>
        <FormCard formContent={formTindakanContent} />
      </Grid>
    </Grid>
  );
}

export default Tindakan;
