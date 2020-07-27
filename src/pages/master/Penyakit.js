import React from "react";
import JudulForm from "../../components/JudulForm";
import Grid from "@material-ui/core/Grid";
import FormCard from "../../components/FormCard";
import FormSearch from "../../components/FormSearch";
import FormTable from "../../components/FormTable";

const dataPenyakit = [
  { kodePenyakit: "P001", namaPenyakit: "Nama P001", aktif: 1 },
  { kodePenyakit: "P002", namaPenyakit: "Nama P002", aktif: 1 },
  { kodePenyakit: "P003", namaPenyakit: "Nama P003", aktif: 1 },
  { kodePenyakit: "P004", namaPenyakit: "Nama P004", aktif: 1 },
  { kodePenyakit: "P005", namaPenyakit: "Nama P005", aktif: 1 },
];

function Penyakit() {
  let penyakitContent = (
    <Grid container spacing={3}>
      <Grid item md={12} style={{ textAlign: "left" }}>
        <FormSearch />
      </Grid>
      <Grid item md={12}>
        <FormTable data={dataPenyakit} />
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
        <FormCard formContent={penyakitContent} />
      </Grid>
    </Grid>
  );
}

export default Penyakit;
