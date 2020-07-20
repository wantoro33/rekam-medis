import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import listMenu from "./components/ListMenu";
import Header from "./components/Header";
import Home from "./pages/Home";
import Penyakit from "./pages/master/Penyakit";
import Tindakan from "./pages/master/Tindakan";
import KelLayanLab from "./pages/master/KelLayanLab";
import LayananLab from "./pages/master/LayananLab";
import Obat from "./pages/master/Obat";
import Departemen from "./pages/master/Departemen";
import Employee from "./pages/master/Employee";
import KeluargaKaryawan from "./pages/master/KeluargaKaryawan";
import RmPasien from "./pages/data/RmPasien";
import InputHasilLab from "./pages/data/InputHasilLab";
import StockAwal from "./pages/stock/StockAwal";
import PakaiObatNonResep from "./pages/stock/PakaiObatNonResep";
import TambahObat from "./pages/stock/TambahObat";
import ReturObat from "./pages/stock/ReturObat";
import ObatRusak from "./pages/stock/ObatRusak";
import RiwayatRmPasien from "./pages/laporan/RiwayatRmPasien";
import KunjunganPoli from "./pages/laporan/KunjunganPoli";
import PenyakitTerbesar from "./pages/laporan/PenyakitTerbesar";
import StockObat from "./pages/laporan/StockObat";

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Router>
          <Grid item md={12}>
            <Header className="header-container" />
          </Grid>
          <Grid item md={2}>
            <SideBar menu={listMenu} className="item-sidebar" />
          </Grid>
          <Grid item md={10}>
            <Switch>
              <Router exact path="/">
                <Home />
              </Router>
              <Router exact path="/penyakit">
                <Penyakit className="container-page" />
              </Router>
              <Router exact path="/tindakan">
                <Tindakan className="container-page" />
              </Router>
              <Router exact path="/kellayanlab">
                <KelLayanLab className="container-page" />
              </Router>
              <Router exact path="/layananlab">
                <LayananLab className="container-page" />
              </Router>
              <Router exact path="/obat">
                <Obat className="container-page" />
              </Router>
              <Router exact path="/departemen">
                <Departemen className="container-page" />
              </Router>
              <Router exact path="/employee">
                <Employee className="container-page" />
              </Router>
              <Router exact path="/keluargakaryawan">
                <KeluargaKaryawan className="container-page" />
              </Router>
              <Router exact path="/rmpasien">
                <RmPasien className="container-page" />
              </Router>
              <Router exact path="/inputhasillab">
                <InputHasilLab className="container-page" />
              </Router>
              <Router exact path="/stockawal">
                <StockAwal className="container-page" />
              </Router>
              <Router exact path="/pakaiobatnonresep">
                <PakaiObatNonResep className="container-page" />
              </Router>
              <Router exact path="/tambahobat">
                <TambahObat className="container-page" />
              </Router>
              <Router exact path="/returobat">
                <ReturObat className="container-page" />
              </Router>
              <Router exact path="/obatrusak">
                <ObatRusak className="container-page" />
              </Router>
              <Router exact path="/riwayatrmpasien">
                <RiwayatRmPasien className="container-page" />
              </Router>
              <Router exact path="/kunjunganpoli">
                <KunjunganPoli className="container-page" />
              </Router>
              <Router exact path="/penyakitterbesar">
                <PenyakitTerbesar className="container-page" />
              </Router>
              <Router exact path="/stockobat">
                <StockObat className="container-page" />
              </Router>
            </Switch>
          </Grid>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
