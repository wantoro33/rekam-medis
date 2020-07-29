import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Aksi from "./Aksi";

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

function FormTable(props) {
  return (
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
          {props.data.map((row) => (
            <StyledTableRow key={row.kodePenyakit}>
              <StyledTableCell align="left">{row.kodePenyakit}</StyledTableCell>
              <StyledTableCell align="left">{row.namaPenyakit}</StyledTableCell>
              <StyledTableCell align="right">{row.aktif}</StyledTableCell>
              <StyledTableCell align="center">
                <Aksi />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FormTable;
