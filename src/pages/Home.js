import React from "react";
import CounterCards from "../components/CounterCards";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <div>
      <div style={{ textAlign: "left", paddingTop: "10px" }}>
        <Typography variant="h4">Dashboard</Typography>
      </div>
      <CounterCards label="Kunjungan bulan ini" hitung="23" />
      <CounterCards label="Stock Obat" hitung="100" />
    </div>
  );
}

export default Home;
