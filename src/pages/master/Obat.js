import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddObat from "../../components/obat/AddObat";
import ComObat from "../../components/obat/ComObat";
import ListObat from "../../components/obat/ListObat";
import Grid from "@material-ui/core/Grid";
import FormCard from "../../components/FormCard";
import JudulForm from "../../components/JudulForm";

function Obat() {
  let formObatContent = (
    <Grid container spacing={0}>
      <Grid item md={12}>
        <Switch>
          <Route exact path="/add" component={AddObat} />
          <Route path="/obat/:ID_OBAT" component={ComObat} />
        </Switch>
      </Grid>
      <Grid item md={12}>
        <Switch>
          <Route exact path={["/", "/obat"]} component={ListObat} />
        </Switch>
      </Grid>
    </Grid>
  );

  return (
    <Router>
      <Grid container spacing={0}>
        <Grid
          item
          md={12}
          style={{ textAlign: "left", padding: "10px", width: "100%" }}
        >
          <JudulForm label="Data Obat" />
        </Grid>
        <Grid item md={12}>
          <FormCard formContent={formObatContent} />
        </Grid>
      </Grid>
    </Router>
  );
}

export default Obat;
