import React from "react";
import CounterCards from "../components/CounterCards";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Grafik from '../components/Grafik'

function Home() {
  return (
    <Grid container spacing={0}>
      <Grid item md={12} style={{ textAlign: "left", padding: "10px" }}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item md={12}>
        <Grid container spacing={0}>
          <Grid item md={6} style={{padding: '10px'}}>
            <CounterCards label="Kunjungan bulan ini" hitung="23" />
          </Grid>
          <Grid item md={6} style={{padding: '10px'}}>
            <CounterCards label="Stock Obat" hitung="100" />  
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} style={{padding: '10px'}}>
        <Grafik />
      </Grid>
    </Grid>
  );
}

export default Home;
